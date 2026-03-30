import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey || !audienceId) {
      console.error('Resend env vars missing')
      return NextResponse.json(
        { success: false, message: 'Tente novamente.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    await resend.contacts.create({
      email,
      firstName: '',
      audienceId,
    })

    return NextResponse.json({ success: true, message: 'Você está na lista!' })
  } catch (err: unknown) {
    // Treat "already exists" as success — don't expose this info
    const message =
      err instanceof Error ? err.message.toLowerCase() : ''

    if (message.includes('already') || message.includes('exists')) {
      return NextResponse.json({ success: true, message: 'Você está na lista!' })
    }

    console.error('Waitlist error:', err)
    return NextResponse.json(
      { success: false, message: 'Tente novamente.' },
      { status: 500 }
    )
  }
}
