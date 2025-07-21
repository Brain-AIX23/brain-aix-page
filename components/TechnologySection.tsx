'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  Dna, 
  Brain, 
  Mic, 
  Bot, 
  Shield, 
  Zap, 
  Cpu,
  Database,
  Lock,
  Globe,
  Sparkles
} from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function TechnologySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  const technologies = [
    {
      icon: Target,
      title: "Clonación realista",
      description: "Con solo 3 min de datos",
      color: "from-red-500 to-pink-500",
      detail: "Nuestra IA puede crear un clon hiperrealista con apenas 3 minutos de audio y video."
    },
    {
      icon: Dna,
      title: "RAG + Fine-tuning",
      description: "Automático al subir documentos",
      color: "from-blue-500 to-cyan-500",
      detail: "Sistema de recuperación aumentada y ajuste fino que aprende automáticamente de tus documentos."
    },
    {
      icon: Brain,
      title: "Personalidad entrenada",
      description: "Tus palabras, tono y estilo",
      color: "from-purple-500 to-pink-500",
      detail: "Captura la esencia de tu personalidad, incluyendo expresiones, gestos y patrones de habla."
    },
    {
      icon: Mic,
      title: "Voz clonada",
      description: "ElevenLabs / XTTS / OpenVoice",
      color: "from-green-500 to-emerald-500",
      detail: "Integración con las mejores tecnologías de clonación de voz del mercado."
    },
    {
      icon: Bot,
      title: "Avatares 3D",
      description: "SadTalker, EMO y MotionLLaMA",
      color: "from-yellow-500 to-orange-500",
      detail: "Avatares tridimensionales que se mueven y expresan de manera natural y realista."
    },
    {
      icon: Shield,
      title: "Encriptación biométrica",
      description: "+ control ético anti-deepfake",
      color: "from-indigo-500 to-purple-500",
      detail: "Protección avanzada contra uso malicioso y verificación de identidad biométrica."
    }
  ]

  const techStack = [
    { name: "ElevenLabs", category: "Voz" },
    { name: "XTTS", category: "Voz" },
    { name: "OpenVoice", category: "Voz" },
    { name: "SadTalker", category: "Video" },
    { name: "EMO", category: "Video" },
    { name: "MotionLLaMA", category: "Video" },
    { name: "GPT-4", category: "IA" },
    { name: "Claude", category: "IA" },
    { name: "RAG", category: "Procesamiento" },
    { name: "Fine-tuning", category: "Procesamiento" }
  ]

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('tech.differentiators.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tech.differentiators.subtitle')}
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-brain-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.title}
                </h3>
                
                <p className="text-brain-600 font-semibold mb-4">
                  {tech.description}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {tech.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

                 {/* Tech Stack */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="bg-gradient-to-r from-brain-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-brain-100"
         >
           <div className="text-center mb-12">
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
               Stack tecnológico
             </h3>
             <p className="text-gray-600 max-w-2xl mx-auto">
               Integramos las mejores tecnologías de IA del mercado para crear 
               la experiencia de clonación digital más avanzada.
             </p>
           </div>

           {/* Generated Examples */}
           <div className="mb-12">
             <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
               Resultados generados con nuestra tecnología
             </h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Example 1 */}
               <div className="group relative">
                 <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                   <img
                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                     alt="Clon Profesional"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                   <div className="absolute bottom-2 left-2 text-white">
                     <div className="text-xs font-medium">Clon Profesional</div>
                   </div>
                 </div>
               </div>

               {/* Example 2 */}
               <div className="group relative">
                 <div className="aspect-square bg-gradient-to-br from-pink-500 to-red-500 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                   <img
                     src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                     alt="Clon Creativo"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                   <div className="absolute bottom-2 left-2 text-white">
                     <div className="text-xs font-medium">Clon Creativo</div>
                   </div>
                 </div>
               </div>

               {/* Example 3 */}
               <div className="group relative">
                 <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-500 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                   <img
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                     alt="Clon Tecnológico"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                   <div className="absolute bottom-2 left-2 text-white">
                     <div className="text-xs font-medium">Clon Tecnológico</div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="text-center mt-4">
               <p className="text-sm text-gray-500">
                 Ejemplos generados con nuestra tecnología de IA avanzada
               </p>
             </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {techStack.map((tech, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={inView ? { opacity: 1, scale: 1 } : {}}
                 transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                 className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300"
               >
                 <div className="text-sm font-medium text-gray-500 mb-1">
                   {tech.category}
                 </div>
                 <div className="font-semibold text-gray-900">
                   {tech.name}
                 </div>
               </motion.div>
             ))}
           </div>
         </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">Precisión en clonación</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">&lt;100ms</div>
            <div className="text-gray-600 text-sm">Latencia de respuesta</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">PB</div>
            <div className="text-gray-600 text-sm">Capacidad de procesamiento</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-gray-600 text-sm">Países soportados</div>
          </div>
        </motion.div>

        {/* Security & Ethics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Seguridad y ética primero
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-green-400" />
                  <span>Encriptación de nivel bancario</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span>Verificación biométrica obligatoria</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-green-400" />
                  <span>Control total sobre tu clon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-green-400" />
                  <span>Detección anti-deepfake integrada</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <p className="text-gray-300">
                Tu privacidad y seguridad son nuestra máxima prioridad. 
                Cada clon está protegido con las mejores medidas de seguridad.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 