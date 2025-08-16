import { BetaPayment } from '../../types/contact'
import { useState } from 'react'

interface PaymentsTableProps {
  payments: BetaPayment[]
}

export const PaymentsTable = ({ payments }: PaymentsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [sortField, setSortField] = useState<keyof BetaPayment>('created_at')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.company?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || payment.payment_status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const sortedPayments = [...filteredPayments].sort((a, b) => {
    const aValue = a[sortField]
    const bValue = b[sortField]
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const handleSort = (field: keyof BetaPayment) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount / 100) // Stripe usa centavos
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      success: { bg: 'bg-green-100', text: 'text-green-800', label: 'Exitoso' },
      failed: { bg: 'bg-red-100', text: 'text-red-800', label: 'Fallido' },
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pendiente' }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  const getBetaAccessBadge = (hasAccess: boolean) => {
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
        hasAccess ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {hasAccess ? 'Sí' : 'No'}
      </span>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Historial de Pagos</h2>
        <div className="flex space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todos los estados</option>
            <option value="success">Exitosos</option>
            <option value="failed">Fallidos</option>
            <option value="pending">Pendientes</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nombre, email o empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { key: 'name', label: 'Nombre' },
                { key: 'email', label: 'Email' },
                { key: 'company', label: 'Empresa' },
                { key: 'payment_status', label: 'Estado' },
                { key: 'amount_paid', label: 'Monto' },
                { key: 'beta_access', label: 'Acceso Beta' },
                { key: 'created_at', label: 'Fecha' }
              ].map(({ key, label }) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(key as keyof BetaPayment)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{label}</span>
                    {sortField === key && (
                      <span className="text-blue-500">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedPayments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {payment.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{payment.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {payment.company || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(payment.payment_status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {payment.amount_paid ? formatCurrency(payment.amount_paid) : '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getBetaAccessBadge(payment.beta_access)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(payment.created_at || '')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedPayments.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          {searchTerm || statusFilter !== 'all' 
            ? 'No se encontraron pagos que coincidan con los filtros' 
            : 'No hay pagos registrados'}
        </div>
      )}
    </div>
  )
}
