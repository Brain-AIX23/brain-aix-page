// Configuración del dashboard de administrador
export const ADMIN_CONFIG = {
  // Configuración de la API
  API_ENDPOINTS: {
    DASHBOARD: '/api/admin/dashboard',
    EXPORT: '/api/admin/export',
  },
  
  // Configuración de la interfaz
  UI: {
    REFRESH_INTERVAL: 30000, // 30 segundos
    ITEMS_PER_PAGE: 50,
    MAX_RECENT_ITEMS: 5,
  },
  
  // Configuración de exportación
  EXPORT: {
    SUPPORTED_FORMATS: ['csv'],
    DEFAULT_FORMAT: 'csv',
  },
  
  // Configuración de filtros
  FILTERS: {
    PAYMENT_STATUSES: [
      { value: 'all', label: 'Todos los estados' },
      { value: 'success', label: 'Exitosos' },
      { value: 'failed', label: 'Fallidos' },
      { value: 'pending', label: 'Pendientes' },
    ],
  },
  
  // Configuración de ordenamiento
  SORTING: {
    DEFAULT_FIELD: 'created_at',
    DEFAULT_DIRECTION: 'desc',
  },
}
