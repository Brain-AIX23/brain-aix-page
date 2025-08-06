"use client"
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import TrustSection from '../components/TrustSection'
import WhatIsSection from '../components/WhatIsSection'
import AccessSection from '../components/AccessSection'
import Footer from '../components/Footer'
import UseCasesSection from '../components/UseCasesSection'
import TechnologySection from '../components/TechnologySection'

import UnifiedRegistrationForm from '../components/UnifiedRegistrationForm'
import FinalCTASection from '../components/FinalCTASection'
import { useState, useEffect } from 'react'
import { HeroWhatIsSection, HeroUseCasesSection, HeroTechnologySection, HeroAccessSection } from '../components/HeroSection'

export default function Home() {
  const [sectionActive, setSectionActive] = useState('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [sectionActive])

  return (
    <main className="min-h-screen">
      <Navigation sectionActive={sectionActive} onSectionChange={setSectionActive} />
      {sectionActive === 'home' && <><HeroSection /><WhatIsSection /><UseCasesSection /><UnifiedRegistrationForm /><FinalCTASection /></>}
      {sectionActive === 'what-is' && <><HeroWhatIsSection /><WhatIsSection /></>}
      {sectionActive === 'use-cases' && <><HeroUseCasesSection /><UseCasesSection /></>}
      {sectionActive === 'technology' && <><HeroTechnologySection /><TechnologySection /></>}
      {sectionActive === 'access' && <><HeroAccessSection /><AccessSection /></>}
      <Footer />
    </main>
  )
} 