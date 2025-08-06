import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brain AIX - Pago',
  description: 'Procesando tu pago para acceso a Brain AIX',
}

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 