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
      title: t('tech.tech1.title'),
      description: t('tech.tech1.desc'),
      color: "from-primary-400 to-primary-500",
      detail: t('tech.tech1.detail')
    },
    {
      icon: Dna,
      title: t('tech.tech2.title'),
      description: t('tech.tech2.desc'),
      color: "from-accent-400 to-accent-500",
      detail: t('tech.tech2.detail')
    },
    {
      icon: Brain,
      title: t('tech.tech3.title'),
      description: t('tech.tech3.desc'),
      color: "from-primary-500 to-accent-500",
      detail: t('tech.tech3.detail')
    },
    {
      icon: Mic,
      title: t('tech.tech4.title'),
      description: t('tech.tech4.desc'),
      color: "from-accent-500 to-primary-400",
      detail: t('tech.tech4.detail')
    },
    {
      icon: Bot,
      title: t('tech.tech5.title'),
      description: t('tech.tech5.desc'),
      color: "from-primary-400 to-accent-400",
      detail: t('tech.tech5.detail')
    },
    {
      icon: Shield,
      title: t('tech.tech6.title'),
      description: t('tech.tech6.desc'),
      color: "from-accent-400 to-primary-500",
      detail: t('tech.tech6.detail')
    }
  ]

  const techStack = [
    { name: "ElevenLabs", category: t('tech.stack.voice') },
    { name: "XTTS", category: t('tech.stack.voice') },
    { name: "OpenVoice", category: t('tech.stack.voice') },
    { name: "SadTalker", category: t('tech.stack.video') },
    { name: "EMO", category: t('tech.stack.video') },
    { name: "MotionLLaMA", category: t('tech.stack.video') },
    { name: "GPT-4", category: t('tech.stack.ai') },
    { name: "Claude", category: t('tech.stack.ai') },
    { name: "RAG", category: t('tech.stack.proc') },
    { name: "Fine-tuning", category: t('tech.stack.proc') }
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
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-primary-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.title}
                </h3>
                
                <p className="text-primary-600 font-semibold mb-4">
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
           className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-gray-200"
         >
           <div className="text-center mb-12">
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
               {t('tech.stack.title')}
             </h3>
             <p className="text-gray-600 max-w-2xl mx-auto">
               {t('tech.stack.subtitle')}
             </p>
           </div>

           {/* Generated Examples */}
           <div className="mb-12">
             <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
               {t('tech.examples.title')}
             </h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Example 1 */}
               <div className="group relative">
                 <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                 <div className="aspect-square bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                 <div className="aspect-square bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
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
                 {t('tech.examples.subtitle')}
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
                 className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
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
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">{t('tech.stats.precision')}</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">&lt;100ms</div>
            <div className="text-gray-600 text-sm">{t('tech.stats.latency')}</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">PB</div>
            <div className="text-gray-600 text-sm">{t('tech.stats.capacity')}</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-gray-600 text-sm">{t('tech.stats.countries')}</div>
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
                {t('tech.security.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-green-400" />
                  <span>{t('tech.security.banking')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span>{t('tech.security.biometric')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-green-400" />
                  <span>{t('tech.security.control')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-green-400" />
                  <span>{t('tech.security.deepfake')}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <p className="text-gray-300">
                {t('tech.security.desc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 