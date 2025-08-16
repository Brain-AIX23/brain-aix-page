import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET(request: NextRequest) {
  try {
    // Obtener todos los contactos (lista de espera)
    const { data: contacts, error: contactsError } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (contactsError) throw contactsError

    // Obtener todos los pagos
    const { data: payments, error: paymentsError } = await supabase
      .from('beta_payments')
      .select('*')
      .order('created_at', { ascending: false })

    if (paymentsError) throw paymentsError

    // Calcular estadísticas
    const totalContacts = contacts?.length || 0
    const totalPayments = payments?.length || 0
    const successfulPayments = payments?.filter(p => p.payment_status === 'success').length || 0
    const failedPayments = payments?.filter(p => p.payment_status === 'failed').length || 0
    const pendingPayments = payments?.filter(p => p.payment_status === 'pending').length || 0
    
    const totalRevenue = payments
      ?.filter(p => p.payment_status === 'success' && p.amount_paid)
      .reduce((sum, p) => sum + (p.amount_paid || 0), 0) || 0

    const stats = {
      totalContacts,
      totalPayments,
      successfulPayments,
      failedPayments,
      pendingPayments,
      totalRevenue: totalRevenue / 100, // Stripe usa centavos
      conversionRate: totalContacts > 0 ? (successfulPayments / totalContacts * 100).toFixed(2) : 0
    }

    return NextResponse.json({
      success: true,
      data: {
        contacts,
        payments,
        stats
      }
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json(
      { success: false, error: 'Error al obtener datos del dashboard' },
      { status: 500 }
    )
  }
}
