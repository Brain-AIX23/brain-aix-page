'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function DemoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-700 rounded-full px-6 py-3 mb-8 border border-accent-200">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{t('demo.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('demo.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Placeholder for video */}
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-xl"
              >
                <Play className="h-10 w-10 text-white ml-1" />
              </motion.button>
            </div>
          </div>
          
          {/* Video description */}
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-700 font-medium">
              {t('demo.description')}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {t('demo.duration')}
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
                      <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-primary-600 to-accent-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 flex items-center space-x-3 mx-auto shadow-2xl"
            >
              <span>{t('demo.cta')}</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 