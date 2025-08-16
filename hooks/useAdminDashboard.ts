import { useState, useEffect } from 'react'
import { DashboardData, DashboardResponse } from '../types/admin'

export const useAdminDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/admin/dashboard')
      const result: DashboardResponse = await response.json()
      
      if (result.success) {
        setData(result.data)
      } else {
        setError(result.error || 'Error al cargar datos')
      }
    } catch (err) {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  const exportData = async (type: 'contacts' | 'payments' | 'all') => {
    try {
      const response = await fetch(`/api/admin/export?type=${type}`)
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `dashboard_export_${type}_${new Date().toISOString().split('T')[0]}.csv`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (err) {
      console.error('Error exporting data:', err)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return {
    data,
    loading,
    error,
    refetch: fetchDashboardData,
    exportData
  }
}
