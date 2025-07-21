import Navigation from '../../components/Navigation'
import UseCasesSection from '../../components/UseCasesSection'
import Footer from '../../components/Footer'
import { HeroUseCasesSection } from '../../components/HeroSection'

export default function CasosDeUsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroUseCasesSection />
      <UseCasesSection />
      <Footer />
    </main>
  )
} 