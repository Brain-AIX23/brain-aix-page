'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Crown, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  User, 
  MessageSquare,
  Calendar,
  Zap
} from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function AccessSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    timeline: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useTranslation()
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const benefits = [
    {
      icon: Crown,
      title: "Acceso exclusivo",
      description: "Sé uno de los primeros 250 usuarios"
    },
    {
      icon: Users,
      title: "Comunidad privada",
      description: "Acceso a grupo exclusivo de early adopters"
    },
    {
      icon: Clock,
      title: "Soporte prioritario",
      description: "Atención directa del equipo fundador"
    },
    {
      icon: Zap,
      title: "Precios especiales",
      description: "Tarifas preferenciales de lanzamiento"
    }
  ]

  const useCases = [
    "Reuniones virtuales",
    "Contenido para redes sociales",
    "Atención de mensajes",
    "Soporte emocional",
    "Legado digital",
    "Otro (especificar)"
  ]

  const timelines = [
    "Inmediato (esta semana)",
    "Próximo mes",
    "En 2-3 meses",
    "Más adelante"
  ]

  if (isSubmitted) {
    return (
      <section id="access" className="py-20 bg-gradient-to-br from-brain-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Solicitud enviada con éxito!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Gracias por tu interés en Brain AIX. Nuestro equipo revisará tu solicitud 
              y te contactaremos en las próximas 24 horas.
            </p>
            <div className="bg-gradient-to-r from-brain-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Próximos pasos:
              </h3>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brain-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-gray-700">Revisión de tu caso de uso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brain-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-gray-700">Contacto personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brain-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-gray-700">Acceso a la plataforma beta</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="access" className="py-20 bg-gradient-to-br from-brain-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brain-50 to-purple-50 text-brain-700 rounded-full px-6 py-3 mb-8 border border-brain-200">
            <div className="w-2 h-2 bg-brain-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Beta Exclusiva</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Únete a la revolución
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sé uno de los primeros 250 usuarios en experimentar el futuro 
            de la clonación digital. Sin precios públicos, solo acceso privado.
          </p>
        </motion.div>

        {/* Gallery Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Galería de clones generados
            </h3>
            <p className="text-gray-600">
              Mira algunos ejemplos de clones digitales creados con Brain AIX
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            ].map((src, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={src}
                    alt={`Clon ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Beneficios exclusivos
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brain-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Estado actual
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brain-600">250</div>
                  <div className="text-sm text-gray-600">Plazas totales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">187</div>
                  <div className="text-sm text-gray-600">Ocupadas</div>
                </div>
              </div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-brain-500 to-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                63 plazas disponibles
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brain-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email profesional *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brain-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa / Organización
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brain-500 focus:border-transparent transition-all duration-200"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                  Caso de uso principal *
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  required
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brain-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona tu caso de uso</option>
                  {useCases.map((useCase, index) => (
                    <option key={index} value={useCase}>
                      {useCase}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuándo planeas implementar? *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brain-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona el timeline</option>
                  {timelines.map((timeline, index) => (
                    <option key={index} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos más sobre tu proyecto
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brain-500 focus:border-transparent transition-all duration-200"
                    placeholder="Describe brevemente cómo planeas usar tu clon digital..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl"
              >
                <span>Comenzar ahora</span>
                <ArrowRight className="h-6 w-6" />
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                Te contactaremos en las próximas 24 horas para coordinar tu acceso.
              </p>
            </form>
          </motion.div>
        </div>

                 {/* Bottom CTA */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="text-center mt-16"
         >
           <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white overflow-hidden">
             {/* Background Image */}
             <div className="absolute inset-0 opacity-20">
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-black/80" />
             
             {/* Content */}
             <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-bold mb-4">
                 ¿Serás tú el siguiente?
               </h3>
               <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                 Únete a la revolución de la clonación digital. 
                 El futuro ya está aquí, solo necesitas dar el primer paso.
               </p>
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl"
               >
                 Comenzar ahora
               </motion.button>
             </div>
           </div>
         </motion.div>
      </div>
    </section>
  )
} 