import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'contacts', 'payments', or 'all'

    let contacts: any[] = []
    let payments: any[] = []

    if (type === 'contacts' || type === 'all') {
      const { data: contactsData, error: contactsError } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

      if (contactsError) throw contactsError
      contacts = contactsData || []
    }

    if (type === 'payments' || type === 'all') {
      const { data: paymentsData, error: paymentsError } = await supabase
        .from('beta_payments')
        .select('*')
        .order('created_at', { ascending: false })

      if (paymentsError) throw paymentsError
      payments = paymentsData || []
    }

    let csvContent = ''

    if (type === 'contacts' || type === 'all') {
      csvContent += 'LISTA DE ESPERA\n'
      csvContent += 'Nombre,Email,Empresa,Caso de Uso,Timeline,Mensaje,Fecha de Registro\n'
      
      contacts.forEach(contact => {
        csvContent += `"${contact.name}","${contact.email}","${contact.company || ''}","${contact.use_case}","${contact.timeline}","${contact.message || ''}","${contact.created_at}"\n`
      })
      
      if (type === 'all') csvContent += '\n\n'
    }

    if (type === 'payments' || type === 'all') {
      csvContent += 'PAGOS\n'
      csvContent += 'Nombre,Email,Empresa,Caso de Uso,Timeline,Mensaje,Estado del Pago,ID de Sesión,ID de Pago,Monto Pagado,Acceso Beta,Fecha\n'
      
      payments.forEach(payment => {
        csvContent += `"${payment.name}","${payment.email}","${payment.company || ''}","${payment.use_case}","${payment.timeline}","${payment.message || ''}","${payment.payment_status}","${payment.stripe_session_id || ''}","${payment.stripe_payment_intent_id || ''}","${payment.amount_paid || 0}","${payment.beta_access}","${payment.created_at}"\n`
      })
    }

    const filename = `dashboard_export_${type}_${new Date().toISOString().split('T')[0]}.csv`

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Error exporting data:', error)
    return NextResponse.json(
      { success: false, error: 'Error al exportar datos' },
      { status: 500 }
    )
  }
}
