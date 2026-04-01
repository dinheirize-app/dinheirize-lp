import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_email
    const phone = session.customer_details?.phone || null

    console.log('🎯 Webhook: checkout.session.completed')
    console.log('📧 Email:', email)
    console.log('📱 Telefone:', phone || 'Não fornecido')
    console.log('💳 Customer ID:', session.customer)
    console.log('🔄 Subscription ID:', session.subscription)

    if (!email) {
      console.error('No email in checkout session')
      return NextResponse.json({ received: true })
    }

    // Salvar usuário no Supabase (com telefone)
    const { data, error: dbError } = await supabase
      .from('users')
      .insert([
        {
          email,
          phone,
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          plan: 'whatsapp',
          status: 'active',
        },
      ])
      .select()
      .single()

    if (dbError) {
      console.error('❌ Erro ao salvar usuário no Supabase:', dbError)
    } else {
      console.log('✅ Usuário salvo com sucesso:', data)
    }

    // Email de onboarding (#2 - Pagamento confirmado)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dinheirize.com'
    await resend.emails.send({
      from: 'Dinheirize <oi@dinheirize.com>',
      to: email,
      subject: '✅ Pagamento confirmado! Conecte seu WhatsApp',
      html: onboardingEmailHtml(email, phone, appUrl),
    })
  }

  return NextResponse.json({ received: true })
}

function onboardingEmailHtml(email: string, phone: string | null, appUrl: string) {
  const setupUrl = `${appUrl}/setup?email=${encodeURIComponent(email)}`
  const phoneBlock = phone
    ? `<div style="background: #dcfce7; border: 1px solid #4ade80; padding: 16px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; font-weight: 600; color: #15803d;">📱 Telefone cadastrado:</p>
        <p style="margin: 4px 0 0 0; font-size: 18px; color: #166534;">${phone}</p>
      </div>`
    : ''

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #2d3d30; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { background: #0a0f0d; padding: 32px; text-align: center; border-radius: 12px 12px 0 0; }
    .logo { color: #4ade80; font-size: 32px; font-weight: 700; }
    .content { background: #fff; padding: 32px; border: 1px solid #d4e4d5; border-top: none; border-radius: 0 0 12px 12px; }
    .success-box { background: #f0fdf4; border: 2px solid #4ade80; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; }
    .cta-button { display: inline-block; background: #16a34a; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; }
    .step { background: #f0fdf4; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .footer { text-align: center; color: #6b7a6e; font-size: 12px; margin-top: 32px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Dinheirize</div>
    </div>
    <div class="content">
      <h1 style="color: #0a0f0d; margin-bottom: 16px;">Pagamento Confirmado! 🎉</h1>

      <div class="success-box">
        <h2 style="color: #15803d; margin: 0 0 8px 0;">✓ Plano WhatsApp Ativo</h2>
        <p style="margin: 0; color: #166534;">R$ 9,90/mês por 3 meses</p>
      </div>

      <p>Olá! Seu pagamento foi processado com sucesso.</p>

      ${phoneBlock}

      <p><strong>Próximo passo:</strong> Conecte seu WhatsApp ao Dinheirize.</p>

      <div class="step">
        <p style="margin: 0;"><strong>Passo 1:</strong> Salve nosso número nos contatos</p>
      </div>
      <div class="step">
        <p style="margin: 0;"><strong>Passo 2:</strong> Envie "Oi" no WhatsApp</p>
      </div>
      <div class="step">
        <p style="margin: 0;"><strong>Passo 3:</strong> Siga as instruções do bot</p>
      </div>

      <div style="text-align: center; margin: 24px 0;">
        <a href="${setupUrl}" class="cta-button">Configurar WhatsApp agora →</a>
      </div>

      <p style="font-size: 14px; color: #6b7a6e;">É rápido! Você vai salvar nosso número e mandar um "Oi". O bot te guia no resto.</p>
      <p style="font-size: 14px; color: #6b7a6e;">Dúvidas? Responda este email que a gente te ajuda.</p>
    </div>
    <div class="footer">
      <p>Dinheirize — O copiloto financeiro que fala com você no WhatsApp</p>
    </div>
  </div>
</body>
</html>`
}
