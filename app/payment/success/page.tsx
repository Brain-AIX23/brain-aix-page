'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Clock, Shield, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de verificación
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-screen p-4">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-semibold text-base">Brain AIX</span>
          </div>
        </div>
        
        <div className="w-full max-w-lg mx-auto px-4 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20 relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5" />
            
            <div className="relative z-10 text-center">
            {isLoading ? (
              <div className="space-y-6">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto"></div>
                <h2 className="text-2xl font-bold text-gray-900">Verificando tu pago...</h2>
                <p className="text-gray-600">Estamos confirmando tu acceso a Brain AIX</p>
              </div>
            ) : (
              <div className="space-y-8">
                                {/* Success Badge */}
                <div className="inline-flex items-center space-x-2 bg-green-100 backdrop-blur-sm border border-green-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-800 text-xs sm:text-sm font-medium">Pago Confirmado</span>
                </div>

                {/* Success Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg mb-3 sm:mb-4">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>

                {/* Success Message */}
                <div className="mb-4 sm:mb-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                    ¡Pago Exitoso!
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                    Tu acceso a Brain AIX ha sido confirmado
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-2 sm:p-3 border border-green-200">
                    <p className="text-green-800 font-medium text-xs sm:text-sm">
                      ID: {sessionId?.slice(0, 20)}...
                    </p>
                    <p className="text-green-700 text-xs mt-1">
                      ✅ Pago verificado y procesado con éxito
                    </p>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Próximos Pasos
                  </h3>
                  
                  <div className="grid gap-2 sm:gap-3">
                    <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5" />
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Email de Confirmación</h4>
                        <p className="text-xs text-gray-600">
                          Recibirás un email con tus credenciales en los próximos 5 minutos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mt-0.5" />
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Acceso Inmediato</h4>
                        <p className="text-xs text-gray-600">
                          Tu cuenta estará activa en las próximas 24 horas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-50 rounded-xl border border-green-200">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Soporte Prioritario</h4>
                        <p className="text-xs text-gray-600">
                          Tendrás acceso directo a nuestro equipo de soporte
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 sm:p-4 border border-purple-200">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                    Beneficios Incluidos
                  </h4>
                  <div className="grid gap-1.5 sm:gap-2 text-left">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                      <span className="text-xs text-gray-700">Acceso exclusivo a la beta</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                      <span className="text-xs text-gray-700">Soporte prioritario 24/7</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                      <span className="text-xs text-gray-700">Precio especial de lanzamiento</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                      <span className="text-xs text-gray-700">Comunidad privada</span>
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-blue-50 rounded-xl p-2 sm:p-3 border border-blue-200">
                  <div className="flex items-center space-x-1.5 sm:space-x-2 mb-1.5 sm:mb-2">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-800">Información de Seguridad</span>
                  </div>
                  <div className="text-xs text-blue-700 space-y-0.5 sm:space-y-1">
                    <p>• Pago procesado de forma segura por Stripe</p>
                    <p>• No almacenamos información de tarjetas</p>
                    <p>• Recibo enviado por email automáticamente</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3 -mb-4 sm:-mb-6">
                  <Link href="/">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 group"
                    >
                      <span className="text-sm sm:text-base">Volver al Inicio</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </Link>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      ¿Preguntas?{' '}
                      <a href="mailto:soporte@brainaix.com" className="text-blue-600 hover:underline">
                        soporte@brainaix.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  )
} 