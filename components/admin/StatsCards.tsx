import { DashboardStats } from '../../types/admin'

interface StatsCardsProps {
  stats: DashboardStats
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount)
  }

  const cards = [
    {
      title: 'Total Registros',
      value: stats.totalContacts,
      color: 'bg-blue-500',
      icon: '👥'
    },
    {
      title: 'Pagos Exitosos',
      value: stats.successfulPayments,
      color: 'bg-green-500',
      icon: '✅'
    },
    {
      title: 'Pagos Fallidos',
      value: stats.failedPayments,
      color: 'bg-red-500',
      icon: '❌'
    },
    {
      title: 'Ingresos Totales',
      value: formatCurrency(stats.totalRevenue),
      color: 'bg-emerald-500',
      icon: '💰'
    },
    {
      title: 'Tasa de Conversión',
      value: `${stats.conversionRate}%`,
      color: 'bg-purple-500',
      icon: '📊'
    },
    {
      title: 'Total Pagos',
      value: stats.totalPayments,
      color: 'bg-orange-500',
      icon: '💳'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} rounded-lg p-6 text-white shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">{card.title}</p>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
            <div className="text-4xl opacity-80">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
