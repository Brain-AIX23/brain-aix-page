'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Brain, Zap, Globe, Users } from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function TrustSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('trust.why.title')}
          </h2>
          
          {/* Elon Musk Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary-400 opacity-20" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
                "{t('trust.quote.text')}"
              </blockquote>
              <div className="mt-4 text-lg text-gray-600">
                — {t('trust.quote.author')}, {t('trust.quote.role')}
              </div>
            </div>
          </motion.div>
        </motion.div>

                 {/* Testimonials with Images */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="mb-16"
         >
           <div className="text-center mb-12">
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
               {t('trust.testimonials.title')}
             </h3>
             <p className="text-gray-600 max-w-2xl mx-auto">
               {t('trust.testimonials.subtitle')}
             </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                 name: t('trust.testimonial1.name'),
                 role: t('trust.testimonial1.role'),
                 quote: t('trust.testimonial1.quote')
               },
               {
                 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                 name: t('trust.testimonial2.name'),
                 role: t('trust.testimonial2.role'),
                 quote: t('trust.testimonial2.quote')
               },
               {
                 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                 name: t('trust.testimonial3.name'),
                 role: t('trust.testimonial3.role'),
                 quote: t('trust.testimonial3.quote')
               }
             ].map((testimonial, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                 className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
               >
                 <div className="flex items-center mb-4">
                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                     <img
                       src={testimonial.image}
                       alt={testimonial.name}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div>
                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
                     <div className="text-sm text-gray-600">{testimonial.role}</div>
                   </div>
                 </div>
                 <p className="text-gray-700 italic">"{testimonial.quote}"</p>
               </motion.div>
             ))}
           </div>
         </motion.div>

         {/* Manifesto */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="max-w-6xl mx-auto"
         >
           <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-gray-200 overflow-hidden">
             {/* Background Image */}
             <div className="absolute inset-0 opacity-10">
             </div>
             
             <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                 {t('trust.manifesto.title')}
               </h3>
               
               <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700 leading-relaxed">
                 <div className="space-y-4">
                   <p>
                     {t('trust.manifesto.paragraph1')}
                   </p>
                   <p>
                     {t('trust.manifesto.paragraph2')}
                   </p>
                   <p>
                     {t('trust.manifesto.paragraph3')}
                   </p>
                 </div>
                 
                 <div className="space-y-4">
                   <p>
                     {t('trust.manifesto.paragraph4')}
                   </p>
                   <p>
                     {t('trust.manifesto.paragraph5')}
                   </p>
                   <p>
                     {t('trust.manifesto.paragraph6')}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-brain-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('trust.indicator.advanced-ai')}</h4>
            <p className="text-gray-600 text-sm">{t('trust.indicator.tech')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-brain-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('trust.indicator.speed')}</h4>
            <p className="text-gray-600 text-sm">{t('trust.indicator.cloning')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-brain-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('trust.indicator.global')}</h4>
            <p className="text-gray-600 text-sm">{t('trust.indicator.available')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-brain-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('trust.indicator.community')}</h4>
            <p className="text-gray-600 text-sm">{t('trust.indicator.early')}</p>
          </div>
        </motion.div>

        {/* Partners/Advisors (placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-700 mb-6">
            {t('trust.supported.title')}
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 text-sm font-medium">{t('trust.supported.partner')}</div>
            <div className="text-gray-400 text-sm font-medium">•</div>
            <div className="text-gray-400 text-sm font-medium">{t('trust.supported.advisors')}</div>
            <div className="text-gray-400 text-sm font-medium">•</div>
            <div className="text-gray-400 text-sm font-medium">{t('trust.supported.investors')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 