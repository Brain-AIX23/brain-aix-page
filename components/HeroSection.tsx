'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Calendar, Zap } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/services/translation.service'
import SpotCounter from './SpotCounter'

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con nueva paleta elegante */}
      <div className="absolute inset-0 z-0">
        {/* Overlay gradient con paleta mejorada */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-3 py-1.5"
          >
            <Zap className="h-3 w-3 text-red-400" />
            <span className="text-white/90 text-xs font-medium">{t('hero.urgency-badge')}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            <span className="block">{t('hero.title.line1')}</span>
            <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-primary-500 bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Spot Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8"
          >
            <SpotCounter total={250} remaining={187} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center space-x-3 shadow-2xl"
            >
              <span>{t('hero.cta.reserve')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-3"
            >
              <span>{t('hero.cta.more-info')}</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">10,000+</div>
              <div className="text-sm text-white/70">Usuarios activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/70">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">$2M+</div>
              <div className="text-sm text-white/70">Generados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Floating elements con nueva paleta */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-primary-500/20 rounded-full blur-xl"
        />
      </div>
    </section>
  )
}

export function HeroWhatIsSection() {
  const { t } = useTranslation()
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('hero-what.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            {t('hero-what.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-what.tag1')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-what.tag2')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-what.tag3')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroUseCasesSection() {
  const { t } = useTranslation()
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('hero-usecases.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            {t('hero-usecases.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-usecases.tag1')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-usecases.tag2')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-usecases.tag3')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroTechnologySection() {
  const { t } = useTranslation()
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('hero-tech.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            {t('hero-tech.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-tech.tag1')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-tech.tag2')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-tech.tag3')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroAccessSection() {
  const { t } = useTranslation()
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('hero-access.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            {t('hero-access.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-access.tag1')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-access.tag2')}</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">{t('hero-access.tag3')}</div>
          </div>
        </div>
      </div>
    </section>
  )
} 