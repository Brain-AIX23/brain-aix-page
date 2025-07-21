'use client'

import { useState, useEffect, useCallback } from 'react'
import { translationService, Language } from '@/services/translation.service'

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es')
  const [, forceUpdate] = useState({})

  useEffect(() => {
    // Establecer idioma inicial
    setCurrentLanguage(translationService.getLanguage())

    // Escuchar cambios de idioma
    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setCurrentLanguage(event.detail)
      // Forzar re-render de todos los componentes que usan el hook
      forceUpdate({})
    }

    window.addEventListener('languageChanged', handleLanguageChange as EventListener)
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener)
    }
  }, [])

  const t = useCallback((key: string) => {
    return translationService.t(key)
  }, [currentLanguage]) // Dependencia del idioma actual

  return {
    t,
    language: currentLanguage,
    changeLanguage: (lang: Language) => translationService.changeLanguage(lang),
    getAll: (key: string) => translationService.getAll(key)
  }
} 