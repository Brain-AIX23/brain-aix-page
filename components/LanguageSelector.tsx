'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { translationService, Language } from '@/services/translation.service'

type LanguageSelectorProps = {
  isScrolled?: boolean;
};

const LanguageSelector = ({ isScrolled = false }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es')

  useEffect(() => {
    // Establecer idioma inicial
    setCurrentLanguage(translationService.getLanguage())

    // Escuchar cambios de idioma
    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setCurrentLanguage(event.detail)
    }

    window.addEventListener('languageChanged', handleLanguageChange as EventListener)
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener)
    }
  }, [])

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ] as const

  const handleLanguageChange = (language: Language) => {
    translationService.changeLanguage(language)
    setIsOpen(false)
  }

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200
          ${isScrolled ? 'bg-white border-gray-200 text-gray-900' : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLang?.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-900 border border-gray-200 rounded-xl shadow-lg overflow-hidden z-[9999]"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code as Language)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors duration-200 ${
                  currentLanguage === language.code ? 'bg-gray-100' : ''
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium text-gray-900">
                  {language.name}
                </span>
                {currentLanguage === language.code && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-2 h-2 bg-blue-500 rounded-full ml-auto"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSelector 