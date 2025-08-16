import { AdminDashboard } from '../../components/admin/AdminDashboard'
import { ProtectedRoute } from '../../components/admin/ProtectedRoute'

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  )
}
