'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  User, 
  CreditCard, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Building,
  MessageSquare,
  Clock,
  Shield,
  Star
} from 'lucide-react'
import { useTranslation } from '@/services/translation.service'
import Toast from './Toast'

export default function UnifiedRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    timeline: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
    isVisible: boolean
  }>({
    message: '',
    type: 'success',
    isVisible: false
  })
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({
      message,
      type,
      isVisible: true
    })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast('Por favor ingresa tu nombre', 'error')
      return false
    }
    if (!formData.email.trim()) {
      showToast('Por favor ingresa tu email', 'error')
      return false
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      showToast('Por favor ingresa un email válido', 'error')
      return false
    }
    
    if (!formData.useCase) {
      showToast('Por favor selecciona cómo planeas usar tu clon', 'error')
      return false
    }
    if (!formData.timeline) {
      showToast('Por favor selecciona cuándo planeas implementar', 'error')
      return false
    }
    return true
  }

  const handleWaitlistSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          useCase: formData.useCase,
          timeline: formData.timeline,
          message: formData.message || 'Registro en lista de espera beta'
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || t('registration.form.error'))
      }

      showToast('¡Registro exitoso! Te contactaremos en las próximas 24 horas.', 'success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        useCase: '',
        timeline: '',
        message: ''
      })
    } catch (err) {
      showToast(err instanceof Error ? err.message : t('registration.form.error'), 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDirectPayment = async () => {
    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          useCase: formData.useCase,
          timeline: formData.timeline,
          message: formData.message
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error creating payment session')
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Error creating payment session', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">{t('registration.badge')}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('registration.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            {t('registration.subtitle')}
          </p>
          
          {/* Price Info */}
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Zap className="h-4 w-4 text-primary-400" />
            <span className="text-white/90 font-semibold text-sm">{t('registration.price.info')}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden"
        >
          {/* Form Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              ¿Listo para crear tu clon digital?
            </h3>
            
            <div className="space-y-3">
              {/* Nombre */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 border-0 border-b-2 rounded-none focus:ring-0 focus:border-blue-500 transition-all duration-300 text-base ${
                    formData.name.trim() ? 'border-green-400' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 border-0 border-b-2 rounded-none focus:ring-0 focus:border-blue-500 transition-all duration-300 text-base ${
                    formData.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) 
                      ? 'border-green-400' 
                      : formData.email.trim() 
                      ? 'border-red-400' 
                      : 'border-gray-300'
                  }`}
                  placeholder="Tu email"
                />
              </div>

              {/* Uso del clon */}
              <div className="relative">
                <select
                  id="useCase"
                  name="useCase"
                  required
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 border-0 border-b-2 rounded-none focus:ring-0 focus:border-blue-500 transition-all duration-300 text-base appearance-none ${
                    formData.useCase ? 'border-green-400' : 'border-gray-300'
                  }`}
                >
                  <option value="">¿Cómo usarás tu clon?</option>
                  <option value={t('registration.usecase1')}>{t('registration.usecase1')}</option>
                  <option value={t('registration.usecase2')}>{t('registration.usecase2')}</option>
                  <option value={t('registration.usecase3')}>{t('registration.usecase3')}</option>
                  <option value={t('registration.usecase4')}>{t('registration.usecase4')}</option>
                  <option value={t('registration.usecase5')}>{t('registration.usecase5')}</option>
                  <option value={t('registration.usecase6')}>{t('registration.usecase6')}</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 border-0 border-b-2 rounded-none focus:ring-0 focus:border-blue-500 transition-all duration-300 text-base appearance-none ${
                    formData.timeline ? 'border-green-400' : 'border-gray-300'
                  }`}
                >
                  <option value="">¿Cuándo lo implementarás?</option>
                  <option value={t('registration.timeline1')}>{t('registration.timeline1')}</option>
                  <option value={t('registration.timeline2')}>{t('registration.timeline2')}</option>
                  <option value={t('registration.timeline3')}>{t('registration.timeline3')}</option>
                  <option value={t('registration.timeline4')}>{t('registration.timeline4')}</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-3 border-0 border-b-2 rounded-none focus:ring-0 focus:border-blue-500 transition-all duration-300 text-base resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto (opcional)"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="space-y-4 mt-6">
            <div className="text-center mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Elige tu acceso
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {/* Waitlist Option */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  if (formData.name.trim() && formData.email.trim() && formData.useCase && formData.timeline && !isLoading) {
                    handleWaitlistSubmit()
                  }
                }}
              >
                <div className={`bg-white rounded-lg p-4 border-2 transition-all duration-300 ${
                  formData.name.trim() && formData.email.trim() && formData.useCase && formData.timeline && !isLoading
                    ? 'border-blue-400 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300'
                }`}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-1">
                      Lista de Espera
                    </h5>
                    <p className="text-xl font-bold text-blue-600 mb-1">Gratis</p>
                    <p className="text-xs text-orange-600 mb-3">Serás contactado en las próximas 24 horas</p>
                    <div className={`w-full py-2 rounded-lg font-semibold text-base transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed text-white' 
                        : !formData.name.trim() || !formData.email.trim() || !formData.useCase || !formData.timeline
                        ? 'bg-gray-200 cursor-not-allowed text-gray-400'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      {isLoading ? 'Procesando...' : 'Unirme gratis'}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Direct Payment Option */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  if (formData.name.trim() && formData.email.trim() && formData.useCase && formData.timeline && !isLoading) {
                    handleDirectPayment()
                  }
                }}
              >
                <div className={`bg-white rounded-lg p-4 border-2 transition-all duration-300 ${
                  formData.name.trim() && formData.email.trim() && formData.useCase && formData.timeline && !isLoading
                    ? 'border-green-400 shadow-lg'
                    : 'border-gray-200 hover:border-green-300'
                }`}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-1">
                      Acceso Inmediato
                    </h5>
                    <p className="text-xl font-bold text-green-600 mb-1">$20 USD</p>
                    <p className="text-xs text-orange-600 mb-3">🔥 Solo 250 cupos</p>
                    <div className={`w-full py-2 rounded-lg font-semibold text-base transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed text-white' 
                        : !formData.name.trim() || !formData.email.trim() || !formData.useCase || !formData.timeline
                        ? 'bg-gray-200 cursor-not-allowed text-gray-400'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}>
                      {isLoading ? 'Procesando...' : 'Acceder ahora'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Completa todos los campos para continuar
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Toast Component */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </section>
  )
} 