import { Contact, BetaPayment } from './contact'

export interface DashboardStats {
  totalContacts: number
  totalPayments: number
  successfulPayments: number
  failedPayments: number
  pendingPayments: number
  totalRevenue: number
  conversionRate: string
}

export interface DashboardData {
  contacts: Contact[]
  payments: BetaPayment[]
  stats: DashboardStats
}

export interface DashboardResponse {
  success: boolean
  data: DashboardData
  error?: string
}

export interface ExportOptions {
  type: 'contacts' | 'payments' | 'all'
}
