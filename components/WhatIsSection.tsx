'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Upload, Brain, Rocket, Mic, Video, MessageSquare, Zap, Play } from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function WhatIsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  const steps = [
    {
      icon: Upload,
      title: t("whatis.step1.title"),
      description: t("whatis.step1.description"),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: t("whatis.step2.title"),
      description: t("whatis.step2.description"),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: t("whatis.step3.title"),
      description: t("whatis.step3.description"),
      color: "from-green-500 to-emerald-500"
    }
  ]

  const features = [
    { icon: Mic, text: t("whatis.feature1") },
    { icon: Video, text: t("whatis.feature2") },
    { icon: MessageSquare, text: t("whatis.feature3") },
    { icon: Zap, text: t("whatis.feature4") }
  ]

  return (
    <section id="what-is" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-brain-50 text-brain-700 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-brain-500 rounded-full"></div>
            <span className="text-sm font-medium">{t('whatis.badge')}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            {t('whatis.title')}
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('whatis.subtitle')}
          </p>
        </motion.div>

        {/* 3 Steps Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-brain-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brain-500 to-purple-500 transform -translate-y-1/2 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brain-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <p className="text-gray-700 font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

                 {/* Demo Preview */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="bg-gradient-to-r from-brain-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-brain-100"
         >
           <div className="text-center mb-8">
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
               {t('whatis.demo.title')}
             </h3>
             <p className="text-gray-600 max-w-2xl mx-auto">
               {t('whatis.demo.subtitle')}
             </p>
           </div>

           {/* Demo Video */}
           <div className="relative max-w-4xl mx-auto">
             <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
               <img
                 src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                 alt="AI Clone Demo"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               
               {/* Play Button Overlay */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
                   <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1 group-hover:scale-110 transition-transform duration-300"></div>
                 </div>
               </div>
             </div>
             
             {/* Floating elements */}
             <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
               {t('whatis.demo.live')}
             </div>
             <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
               {t('whatis.demo.hd')}
             </div>
             <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
               {t('whatis.demo.clone')}
             </div>
           </div>

           {/* Video Stats */}
           <div className="grid grid-cols-3 gap-6 mt-8">
             <div className="text-center">
               <div className="text-2xl font-bold text-gray-900">10K+</div>
               <div className="text-sm text-gray-600">{t('hero.stats.clones')}</div>
             </div>
             <div className="text-center">
               <div className="text-2xl font-bold text-gray-900">99.9%</div>
               <div className="text-sm text-gray-600">{t('hero.stats.precision')}</div>
             </div>
             <div className="text-center">
               <div className="text-2xl font-bold text-gray-900">3 min</div>
               <div className="text-sm text-gray-600">{t('hero.stats.availability')}</div>
             </div>
           </div>
         </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('whatis.cta.title')}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('whatis.cta.subtitle')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-brain-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            {t('whatis.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 