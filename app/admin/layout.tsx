import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard de Administrador - Brain',
  description: 'Panel de administración para gestionar registros y pagos',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
