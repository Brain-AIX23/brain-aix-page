'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Brain, Zap } from 'lucide-react'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from '@/services/translation.service'

type NavigationProps = {
  sectionActive: string;
  onSectionChange: (section: string) => void;
};

export default function Navigation({ sectionActive, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), section: 'home' },
    { name: t('nav.what-is'), section: 'what-is' },
    { name: t('nav.use-cases'), section: 'use-cases' },
    { name: t('nav.technology'), section: 'technology' },
    { name: t('nav.access'), section: 'access' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
            : 'bg-black/20 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <Brain className={`h-6 w-6 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
                <div className="absolute -top-1 -right-1">
                  <Zap className="h-3 w-3 text-yellow-500" />
                </div>
              </div>
              <span className={`text-lg font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent ${
                isScrolled ? '' : 'text-white'
              }`}>
                {t('brand.name')}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => onSectionChange(item.section)}
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? `text-gray-700 hover:text-primary-600 ${sectionActive === item.section ? 'underline underline-offset-4 text-primary-600' : ''}`
                      : `text-white/90 hover:text-white ${sectionActive === item.section ? 'underline underline-offset-4 text-white' : ''}`
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <LanguageSelector isScrolled={isScrolled} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isScrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                }`}
              >
                {t('nav.request-access')}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      onSectionChange(item.section)
                      setIsOpen(false)
                    }}
                    className={`block w-full text-left py-2 px-3 rounded-lg font-medium transition-colors duration-200 ${
                      sectionActive === item.section
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <LanguageSelector isScrolled={true} />
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-3 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  {t('nav.request-access')}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
} 