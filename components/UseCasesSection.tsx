'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Video, 
  MessageSquare, 
  Smartphone, 
  Heart, 
  BookOpen, 
  CheckCircle
} from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function UseCasesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  const useCases = [
    {
      id: 0,
      title: t("usecases.meetings.title"),
      description: t("usecases.meetings.description"),
      icon: Video,
      color: "from-primary-400 to-primary-500",
      features: [
        t("usecases.meetings.feature1"),
        t("usecases.meetings.feature2"),
        t("usecases.meetings.feature3"),
        t("usecases.meetings.feature4")
      ]
    },
    {
      id: 1,
      title: t("usecases.content.title"),
      description: t("usecases.content.description"),
      icon: Smartphone,
      color: "from-accent-400 to-accent-500",
      features: [
        t("usecases.content.feature1"),
        t("usecases.content.feature2"),
        t("usecases.content.feature3"),
        t("usecases.content.feature4")
      ]
    },
    {
      id: 2,
      title: t("usecases.support.title"),
      description: t("usecases.support.description"),
      icon: MessageSquare,
      color: "from-primary-500 to-accent-500",
      features: [
        t("usecases.support.feature1"),
        t("usecases.support.feature2"),
        t("usecases.support.feature3"),
        t("usecases.support.feature4")
      ]
    },
    {
      id: 3,
      title: t("usecases.legacy.title"),
      description: t("usecases.legacy.description"),
      icon: Heart,
      color: "from-accent-500 to-primary-400",
      features: [
        t("usecases.legacy.feature1"),
        t("usecases.legacy.feature2"),
        t("usecases.legacy.feature3"),
        t("usecases.legacy.feature4")
      ]
    },
    {
      id: 4,
      title: t("usecases.education.title"),
      description: t("usecases.education.description"),
      icon: BookOpen,
      color: "from-primary-400 to-accent-400",
      features: [
        t("usecases.education.feature1"),
        t("usecases.education.feature2"),
        t("usecases.education.feature3"),
        t("usecases.education.feature4")
      ]
    }
  ]

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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('usecases.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('usecases.subtitle')}
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                <useCase.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {useCase.description}
              </p>

              {/* Example Image */}
              <div className="mb-6">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    ][index] || "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                    alt={`Ejemplo: ${useCase.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500 text-center">
                  {t('usecases.example')}
                </div>
              </div>

              <div className="space-y-3">
                {useCase.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
              >
                {t('usecases.try')}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
            <div className="text-gray-600 text-sm">{t('usecases.stats.main')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">{t('usecases.stats.availability')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600 text-sm">{t('usecases.stats.customized')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
            <div className="text-gray-600 text-sm">{t('usecases.stats.possibilities')}</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('usecases.cta.title')}
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('usecases.cta.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-300"
            >
              {t('usecases.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 