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
        className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-lg border transition-all duration-200
          ${isScrolled 
            ? 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50' 
            : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
          }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className={`w-3 h-3 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
        <span className="text-sm">{currentLang?.flag}</span>
        <span className={`text-xs font-medium hidden sm:block ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          {currentLang?.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className={`w-3 h-3 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-lg overflow-hidden z-[9999]"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code as Language)}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-primary-50 transition-colors duration-200 ${
                  currentLanguage === language.code ? 'bg-primary-50' : ''
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm">{language.flag}</span>
                <span className="text-xs font-medium text-gray-900">
                  {language.name}
                </span>
                {currentLanguage === language.code && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1.5 h-1.5 bg-primary-500 rounded-full ml-auto"
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