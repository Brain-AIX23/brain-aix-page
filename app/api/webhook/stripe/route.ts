import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        // Verificar que el pago fue exitoso
        if (session.payment_status === 'paid') {
          const metadata = session.metadata!
          
          // Insertar en la base de datos como pago exitoso
          const { error } = await supabase
            .from('beta_payments')
            .insert({
              name: metadata.name,
              email: metadata.email,
              company: metadata.company,
              use_case: metadata.useCase,
              timeline: metadata.timeline,
              message: metadata.message,
              payment_status: 'success',
              stripe_session_id: session.id,
              stripe_payment_intent_id: session.payment_intent as string,
              amount_paid: session.amount_total,
              beta_access: true
            })

          if (error) {
            console.error('Error inserting successful payment:', error)
          }
        }
        break
      }

      case 'checkout.session.expired':
      case 'payment_intent.payment_failed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        // Insertar en la base de datos como pago fallido
        const metadata = session.metadata!
        
        const { error } = await supabase
          .from('beta_payments')
          .insert({
            name: metadata.name,
            email: metadata.email,
            company: metadata.company,
            use_case: metadata.useCase,
            timeline: metadata.timeline,
            message: metadata.message,
            payment_status: 'failed',
            stripe_session_id: session.id,
            beta_access: false
          })

        if (error) {
          console.error('Error inserting failed payment:', error)
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
} 