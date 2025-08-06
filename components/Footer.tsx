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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-xl p-4 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-black/80" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-2 mb-4"
                >
                  <div className="relative">
                    <Brain className="h-6 w-6 text-primary-400" />
                    <div className="absolute -top-1 -right-1">
                      <Zap className="h-3 w-3 text-yellow-500" />
                    </div>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                    Brain AIX
                  </span>
                </motion.div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {t('footer.tagline')}
                </p>
                
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300"
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">{t('footer.product')}</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>© {currentYear} Brain AIX. {t('footer.rights')}</span>
              <Heart className="h-3 w-3 text-red-400 animate-pulse" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4 text-sm text-gray-400"
            >
              <span>{t('footer.made-with')}</span>
              <div className="flex items-center space-x-1">
                <Brain className="h-3 w-3 text-primary-400" />
                <span className="text-primary-400 font-medium">Brain AIX</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 