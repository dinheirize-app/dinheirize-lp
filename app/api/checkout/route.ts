import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email obrigatório' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      phone_number_collection: {
        enabled: true,
      },
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      discounts: [
        {
          coupon: process.env.STRIPE_COUPON_LAUNCH990!,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?email=${encodeURIComponent(email)}`,
      metadata: { email },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Erro ao criar sessão Stripe:', error)
    return NextResponse.json(
      { error: 'Erro ao processar checkout' },
      { status: 500 }
    )
  }
}
