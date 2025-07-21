import Navigation from '../../components/Navigation'
import TechnologySection from '../../components/TechnologySection'
import Footer from '../../components/Footer'

export default function TecnologiaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      {/* Hero Section for Technology Page */}
      <section className="relative py-20 overflow-hidden">
        {/* Fondo negro sólido */}
        <div className="absolute inset-0 z-0 bg-black" />
        {/* Gradiente decorativo encima */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-black to-purple-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tecnología de Vanguardia
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Descubre el stack tecnológico más avanzado que hace posible 
            la clonación digital del futuro.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
              IA Avanzada
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
              Machine Learning
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
              Biometría
            </div>
          </div>
        </div>
      </section>
      <TechnologySection />
      <Footer />
    </main>
  )
} 