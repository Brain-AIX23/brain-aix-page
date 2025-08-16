import { useState } from 'react'
import { useAdminDashboard } from '../../hooks/useAdminDashboard'
import { useAuth } from '../../contexts/AuthContext'
import { StatsCards } from './StatsCards'
import { ContactsTable } from './ContactsTable'
import { PaymentsTable } from './PaymentsTable'

export const AdminDashboard = () => {
  const { data, loading, error, refetch, exportData } = useAdminDashboard()
  const { signOut, user } = useAuth()
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'payments'>('overview')

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error al cargar datos</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={refetch}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No hay datos disponibles</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: '📊' },
    { id: 'contacts', label: 'Lista de Espera', icon: '👥' },
    { id: 'payments', label: 'Pagos', icon: '💳' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard de Administrador</h1>
              <p className="text-gray-600 mt-1">Gestiona registros y pagos de tu aplicación</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => exportData('contacts')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Exportar Contactos
              </button>
              <button
                onClick={() => exportData('payments')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Exportar Pagos
              </button>
              <button
                onClick={() => exportData('all')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Exportar Todo
              </button>
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300">
                <span className="text-sm text-gray-600">
                  {user?.email}
                </span>
                <button
                  onClick={signOut}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div>
            <StatsCards stats={data.stats} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Registros Recientes</h3>
                <div className="space-y-3">
                  {data.contacts.slice(0, 5).map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(contact.created_at || '').toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pagos Recientes</h3>
                <div className="space-y-3">
                  {data.payments.slice(0, 5).map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{payment.name}</p>
                        <p className="text-sm text-gray-600">{payment.email}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          payment.payment_status === 'success' ? 'bg-green-100 text-green-800' :
                          payment.payment_status === 'failed' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {payment.payment_status === 'success' ? 'Exitoso' :
                           payment.payment_status === 'failed' ? 'Fallido' : 'Pendiente'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <ContactsTable contacts={data.contacts} />
        )}

        {activeTab === 'payments' && (
          <PaymentsTable payments={data.payments} />
        )}
      </div>
    </div>
  )
}
