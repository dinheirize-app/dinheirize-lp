import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { addContactToWaitlist } from '@/lib/resend-segments'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const resend = new Resend(process.env.RESEND_API_KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body as { email?: string }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido.' },
        { status: 400 }
      )
    }

    // 1. Verificar se já é cliente ativo
    const { data: existingUser } = await supabase
      .from('users')
      .select('status')
      .eq('email', email)
      .single()

    if (existingUser?.status === 'active') {
      return NextResponse.json({
        success: true,
        alreadyPaid: true,
        message: 'Você já é cliente! Redirecionando para configuração...',
        redirectTo: '/setup',
      })
    }

    // 2. Verificar se já está na waitlist
    const { data: existingWaitlist } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (existingWaitlist) {
      return NextResponse.json({
        success: true,
        alreadyInWaitlist: true,
        message: 'Você já está cadastrado! Redirecionando...',
        redirectTo: '/checkout',
      })
    }

    // 3. Novo cadastro — inserir + enviar email
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email, source: 'landing' }])
      .select()
      .single()

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      throw dbError
    }

    // Adicionar contato no Resend + segment "Lista de Espera"
    try {
      await addContactToWaitlist(email, '')
      console.log(`Contato adicionado ao Resend: ${email}`)
    } catch (err) {
      console.error('Resend contact error:', err)
    }

    // Enviar email de boas-vindas (#1)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinheirize.com'
    const ctaUrl = `${appUrl}/checkout?email=${encodeURIComponent(email)}`
    await resend.emails.send({
      from: 'Dinheirize <oi@dinheirize.com>',
      to: email,
      subject: '🎉 Bem-vindo ao Dinheirize! Sua oferta exclusiva está aqui',
      html: welcomeEmailHtml(ctaUrl, 'Começar agora por R$ 9,90/mês →', appUrl),
    })

    return NextResponse.json({
      success: true,
      isNew: true,
      message: 'Email cadastrado! Redirecionando...',
      redirectTo: '/checkout',
    })
  } catch (err: unknown) {
    console.error('Waitlist error:', err)
    return NextResponse.json(
      { success: false, message: 'Tente novamente.' },
      { status: 500 }
    )
  }
}

function welcomeEmailHtml(ctaUrl: string, ctaText: string, appUrl: string) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2d3d30; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { background: #0a0f0d; padding: 32px; text-align: center; border-radius: 12px 12px 0 0; }
    .logo { color: #4ade80; font-size: 32px; font-weight: 700; }
    .content { background: #fff; padding: 32px; border: 1px solid #d4e4d5; border-top: none; border-radius: 0 0 12px 12px; }
    .promo-box { background: linear-gradient(135deg, #c9a84c 0%, #d97706 100%); color: #0a0f0d; padding: 24px; border-radius: 10px; margin: 24px 0; text-align: center; }
    .cta-button { display: inline-block; background: #16a34a; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; margin: 20px 0; }
    .bonus-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 8px; margin: 20px 0; }
    .footer { text-align: center; color: #6b7a6e; font-size: 12px; margin-top: 32px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Dinheirize</div>
    </div>
    <div class="content">
      <h1 style="color: #0a0f0d; margin-bottom: 16px;">Você está dentro! 🎉</h1>
      <p>Oi! Muito obrigado por se cadastrar no Dinheirize.</p>
      <p>Você é uma das primeiras <strong>200 pessoas</strong> a ter acesso ao nosso copiloto financeiro que funciona no WhatsApp.</p>

      <div class="promo-box">
        <h2 style="margin: 0 0 12px 0; font-size: 24px;">🔥 Oferta Exclusiva</h2>
        <p style="font-size: 18px; margin: 0;"><strong>R$ 9,90/mês</strong> nos primeiros 3 meses</p>
        <p style="font-size: 14px; margin: 8px 0 0 0; opacity: 0.8;">(depois R$ 14,90/mês)</p>
        <p style="margin: 16px 0 0 0; font-size: 13px;">Use o cupom: <strong>LAUNCH990</strong></p>
      </div>

      <div class="bonus-box">
        <p style="margin: 0;"><strong>🎁 BÔNUS:</strong> Quando lançarmos o dashboard web em Maio 2026, você ganha <strong>3 meses grátis</strong> do plano Essencial (R$ 89,70 de economia!).</p>
      </div>

      <div style="text-align: center;">
        <a href="${ctaUrl}" class="cta-button">${ctaText}</a>
      </div>

      <p style="margin-top: 32px; font-size: 14px; color: #6b7a6e;">O bot WhatsApp já está funcionando. Você pode começar hoje mesmo!</p>
    </div>
    <div class="footer">
      <p>Dinheirize — O copiloto financeiro que fala com você no WhatsApp</p>
      <p><a href="${appUrl}" style="color: #16a34a;">dinheirize.com</a></p>
    </div>
  </div>
</body>
</html>`
}
