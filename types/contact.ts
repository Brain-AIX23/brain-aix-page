// Tipos para la tabla contacts (lista de espera)
export interface Contact {
  id?: string
  name: string
  email: string
  company?: string
  use_case: string
  timeline: string
  message?: string
  created_at?: string
}

// Tipos para la tabla beta_payments (pagos de Stripe)
export interface BetaPayment {
  id?: string
  name: string
  email: string
  company?: string
  use_case: string
  timeline: string
  message?: string
  payment_status: 'success' | 'failed' | 'pending'
  stripe_session_id?: string
  stripe_payment_intent_id?: string
  amount_paid?: number
  currency?: string
  beta_access: boolean
  created_at?: string
  updated_at?: string
}

// Tipo para el formulario de registro
export interface RegistrationForm {
  name: string
  email: string
  company: string
  useCase: string
  timeline: string
  message: string
}

// Tipo para la respuesta de la API de pago
export interface PaymentResponse {
  sessionId: string
  url: string
}

// Tipo para la respuesta de la API de contacto
export interface ContactResponse {
  success: boolean
  message: string
} 