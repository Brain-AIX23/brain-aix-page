'use client'

import { motion } from 'framer-motion'
import { XCircle, ArrowLeft, RefreshCw, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

export default function PaymentCancelPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5" />
            
            <div className="relative z-10 text-center">
            <div className="space-y-8">
              {/* Cancel Badge */}
              <div className="inline-flex items-center space-x-2 bg-orange-100 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-800 text-sm font-medium">Pago Cancelado</span>
              </div>

              {/* Cancel Icon */}
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg mb-6">
                <XCircle className="h-12 w-12 text-white" />
              </div>

              {/* Cancel Message */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Pago Cancelado
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  No te preocupes, tu acceso no se ha procesado
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-orange-800 font-medium">
                    No se ha realizado ningún cargo a tu cuenta
                  </p>
                </div>
              </div>

              {/* Why Cancel */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  ¿Por qué cancelaste?
                </h3>
                
                <div className="grid gap-4">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">¿Tienes preguntas?</h4>
                      <p className="text-sm text-gray-600">
                        Nuestro equipo está aquí para ayudarte con cualquier duda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <Clock className="h-6 w-6 text-purple-600 mt-1" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">¿Necesitas más tiempo?</h4>
                      <p className="text-sm text-gray-600">
                        Puedes volver cuando estés listo, el precio beta se mantiene
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Options */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Otras Opciones Disponibles
                </h4>
                <div className="grid gap-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Unirte a la lista de espera (gratis)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Contactar a nuestro equipo de ventas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Solicitar una demo personalizada</span>
                  </div>
                </div>
              </div>

                              {/* Action Buttons */}
                <div className="space-y-4 -mb-4 sm:-mb-6">
                  <div className="grid gap-4">
                    <Link href="/">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 group"
                      >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                        <span>Volver al Inicio</span>
                      </motion.button>
                    </Link>
                    
                    <Link href="/#registration">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 group"
                      >
                        <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-200" />
                        <span>Intentar de Nuevo</span>
                      </motion.button>
                    </Link>
                  </div>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">
                    ¿Necesitas ayuda? Contacta a{' '}
                    <a href="mailto:soporte@brainaix.com" className="text-blue-600 hover:underline">
                      soporte@brainaix.com
                    </a>
                  </p>
                  <p className="text-xs text-gray-400">
                    O llama al +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  )
} 