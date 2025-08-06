import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, useCase, timeline, message } = body

    // Validar campos requeridos
    if (!name || !email || !useCase || !timeline) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Crear el checkout session de Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Brain AIX Beta Access',
              description: 'Exclusive access to Brain AIX beta program',
            },
            unit_amount: 2000, // $20.00 en centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/payment/cancel`,
      customer_email: email,
      metadata: {
        name,
        email,
        company: company || '',
        useCase,
        timeline,
        message: message || '',
        type: 'beta_access'
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Error creating Stripe session:', error)
    return NextResponse.json(
      { error: 'Error creating payment session' },
      { status: 500 }
    )
  }
} 