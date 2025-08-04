export interface ContactFormData {
  name: string
  email: string
  company?: string
  useCase: string
  timeline: string
  message?: string
}

export interface ContactResponse {
  success: boolean
  message: string
  data?: any
  error?: string
} 