'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Mail, Twitter, Linkedin, Github, Heart } from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const footerLinks = {
    producto: [
      { name: t('footer.features'), href: '#features' },
      { name: t('footer.use-cases'), href: '#use-cases' },
      { name: t('footer.technology'), href: '#technology' },
      { name: t('footer.pricing'), href: '#pricing' }
    ],
    empresa: [
      { name: t('footer.about'), href: '/about' },
      { name: t('footer.blog'), href: '/blog' },
      { name: t('footer.careers'), href: '/careers' },
      { name: t('footer.contact'), href: '/contact' }
    ],
    recursos: [
      { name: t('footer.docs'), href: '/docs' },
      { name: t('footer.api'), href: '/api' },
      { name: t('footer.support'), href: '/support' },
      { name: t('footer.community'), href: '/community' }
    ],
    legal: [
      { name: t('footer.privacy'), href: '/privacy' },
      { name: t('footer.terms'), href: '/terms' },
      { name: t('footer.ethics'), href: '/ethics' },
      { name: t('footer.cookies'), href: '/cookies' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/brainaix', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/brainaix', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@brainaix.com', label: 'Email' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-black/80" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-2 mb-6"
                >
                  <div className="relative">
                    <Brain className="h-8 w-8 text-primary-400" />
                    <div className="absolute -top-1 -right-1">
                      <Zap className="h-4 w-4 text-yellow-500" />
                    </div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                    Brain AIX
                  </span>
                </motion.div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t('footer.tagline')}
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-700/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-800 to-accent-800 rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              {t('footer.newsletter.title')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('footer.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                {t('footer.newsletter.button')}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>{t('footer.copyright')}</span>
              <span>•</span>
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>en el futuro</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Estado del sistema: <span className="text-green-400">Operativo</span></span>
              <span>•</span>
              <span>v1.0.0-beta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ethics Notice */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              <strong>Compromiso ético:</strong> Brain AIX se compromete a usar la tecnología 
              de clonación digital de manera responsable y ética.
            </p>
            <p>
              Todos los usuarios deben cumplir con nuestras políticas de uso ético y 
              respetar los derechos de privacidad y consentimiento.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 