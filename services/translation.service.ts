export type Language = 'es' | 'en'

export interface Translations {
  [key: string]: {
    es: string
    en: string
  }
}

class TranslationService {
  private currentLanguage: Language = 'es'
  private translations: Translations = {
    // Navigation
    'nav.home': {
      es: 'Inicio',
      en: 'Home'
    },
    'nav.what-is': {
      es: '¿Qué es?',
      en: 'What is it?'
    },
    'nav.use-cases': {
      es: 'Casos de uso',
      en: 'Use Cases'
    },
    'nav.technology': {
      es: 'Tecnología',
      en: 'Technology'
    },
    'nav.access': {
      es: 'Acceso',
      en: 'Access'
    },
    'nav.request-access': {
      es: 'Solicitar acceso',
      en: 'Request Access'
    },

    // Hero Section
    'hero.beta-badge': {
      es: 'Beta Exclusiva - Solo 250 usuarios',
      en: 'Exclusive Beta - Only 250 users'
    },
    'hero.title.line1': {
      es: 'Crea tu clon',
      en: 'Create your'
    },
    'hero.title.line2': {
      es: 'digital',
      en: 'digital clone'
    },
    'hero.subtitle': {
      es: 'La forma más simple de crear y compartir tu presencia digital con el mundo, potenciada por IA de vanguardia.',
      en: 'The simplest way to create and share your digital presence with the world, powered by cutting-edge AI.'
    },
    'hero.cta.primary': {
      es: 'Comenzar ahora',
      en: 'Start Now'
    },
    'hero.cta.secondary': {
      es: 'Ver demo',
      en: 'Watch Demo'
    },
    'hero.stats.clones': {
      es: 'Clones creados',
      en: 'Clones created'
    },
    'hero.stats.availability': {
      es: 'Disponibilidad',
      en: 'Availability'
    },
    'hero.stats.precision': {
      es: 'Precisión',
      en: 'Precision'
    },

    // Trust Section
    'trust.quote.text': {
      es: 'La IA no reemplazará a los humanos, pero los humanos que usen IA reemplazarán a los que no la usen.',
      en: 'AI won\'t replace humans, but humans who use AI will replace those who don\'t.'
    },
    'trust.quote.author': {
      es: 'Elon Musk',
      en: 'Elon Musk'
    },
    'trust.quote.role': {
      es: 'CEO de Tesla y SpaceX',
      en: 'CEO of Tesla and SpaceX'
    },
    'trust.testimonials.title': {
      es: 'Lo que dicen nuestros usuarios',
      en: 'What our users say'
    },
    'trust.testimonials.subtitle': {
      es: 'Descubre cómo Brain AIX está transformando la forma en que las personas crean y gestionan su presencia digital.',
      en: 'Discover how Brain AIX is transforming the way people create and manage their digital presence.'
    },
    'trust.testimonial1.name': {
      es: 'Carlos Rodríguez',
      en: 'Carlos Rodriguez'
    },
    'trust.testimonial1.role': {
      es: 'CEO, TechStart',
      en: 'CEO, TechStart'
    },
    'trust.testimonial1.quote': {
      es: 'Mi clon maneja reuniones mientras yo me enfoco en la estrategia. Es increíble.',
      en: 'My clone handles meetings while I focus on strategy. It\'s incredible.'
    },
    'trust.testimonial2.name': {
      es: 'Ana García',
      en: 'Ana Garcia'
    },
    'trust.testimonial2.role': {
      es: 'Influencer',
      en: 'Influencer'
    },
    'trust.testimonial2.quote': {
      es: 'Mi contenido se genera automáticamente y mantiene mi estilo personal.',
      en: 'My content is generated automatically and maintains my personal style.'
    },
    'trust.testimonial3.name': {
      es: 'David Chen',
      en: 'David Chen'
    },
    'trust.testimonial3.role': {
      es: 'Desarrollador Senior',
      en: 'Senior Developer'
    },
    'trust.testimonial3.quote': {
      es: 'La precisión de la clonación es asombrosa. Es como tener un gemelo digital.',
      en: 'The accuracy of cloning is amazing. It\'s like having a digital twin.'
    },
    'trust.manifesto.title': {
      es: 'El Manifiesto de la Clonación Digital',
      en: 'The Digital Cloning Manifesto'
    },
    'trust.manifesto.paragraph1': {
      es: 'Estamos en el umbral de una revolución que transformará fundamentalmente cómo interactuamos con la tecnología y entre nosotros.',
      en: 'We are on the threshold of a revolution that will fundamentally transform how we interact with technology and with each other.'
    },
    'trust.manifesto.paragraph2': {
      es: 'La clonación digital no es solo una herramienta, es la evolución natural de la comunicación humana en la era de la inteligencia artificial.',
      en: 'Digital cloning is not just a tool, it is the natural evolution of human communication in the age of artificial intelligence.'
    },
    'trust.manifesto.paragraph3': {
      es: 'Imagina un mundo donde tu presencia digital es tan auténtica como tu presencia física, donde puedes estar en múltiples lugares simultáneamente.',
      en: 'Imagine a world where your digital presence is as authentic as your physical presence, where you can be in multiple places simultaneously.'
    },
    'trust.manifesto.paragraph4': {
      es: 'Los avatares inteligentes no reemplazan la humanidad, la amplifican. Liberan tu tiempo para lo que realmente importa.',
      en: 'Intelligent avatars don\'t replace humanity, they amplify it. They free your time for what really matters.'
    },
    'trust.manifesto.paragraph5': {
      es: 'Desde reuniones de trabajo hasta conexiones personales, tu clon digital mantiene la esencia de quién eres mientras multiplica tu impacto.',
      en: 'From work meetings to personal connections, your digital clone maintains the essence of who you are while multiplying your impact.'
    },
    'trust.manifesto.paragraph6': {
      es: 'El futuro ya está aquí. La pregunta no es si la clonación digital llegará, sino si serás parte de esta revolución.',
      en: 'The future is already here. The question is not whether digital cloning will arrive, but whether you will be part of this revolution.'
    },

    // What Is Section
    'whatis.badge': {
      es: 'Tecnología de Vanguardia',
      en: 'Cutting-edge Technology'
    },
    'whatis.title': {
      es: '¿Qué es Brain AIX?',
      en: 'What is Brain AIX?'
    },
    'whatis.subtitle': {
      es: 'Tu segunda mente digital, creada con tecnología de vanguardia que captura la esencia de quién eres y la amplifica infinitamente.',
      en: 'Your second digital mind, created with cutting-edge technology that captures the essence of who you are and amplifies it infinitely.'
    },
    'whatis.step1.title': {
      es: 'Cargas tu contenido',
      en: 'Upload your content'
    },
    'whatis.step1.description': {
      es: 'Sube tu voz, videos y texto. Solo necesitamos 3 minutos de datos para crear tu clon.',
      en: 'Upload your voice, videos and text. We only need 3 minutes of data to create your clone.'
    },
    'whatis.step2.title': {
      es: 'Entrenamos tu clon',
      en: 'We train your clone'
    },
    'whatis.step2.description': {
      es: 'Nuestra IA multimodal aprende tu voz, cara, estilo de conversación y personalidad.',
      en: 'Our multimodal AI learns your voice, face, conversation style and personality.'
    },
    'whatis.step3.title': {
      es: 'Lo liberas al mundo',
      en: 'Release it to the world'
    },
    'whatis.step3.description': {
      es: 'Tu clon está listo para actuar en redes, Zoom, correos o donde lo necesites.',
      en: 'Your clone is ready to act on social media, Zoom, emails or wherever you need it.'
    },
    'whatis.feature1': {
      es: 'Voz clonada',
      en: 'Cloned voice'
    },
    'whatis.feature2': {
      es: 'Video realista',
      en: 'Realistic video'
    },
    'whatis.feature3': {
      es: 'Personalidad entrenada',
      en: 'Trained personality'
    },
    'whatis.feature4': {
      es: 'Activación multi-plataforma',
      en: 'Multi-platform activation'
    },
    'whatis.demo.title': {
      es: 'Ve tu clon en acción',
      en: 'See your clone in action'
    },
    'whatis.demo.subtitle': {
      es: 'Observa cómo tu clon digital puede manejar reuniones, crear contenido y comunicarse de manera autónoma mientras mantiene tu esencia.',
      en: 'Watch how your digital clone can handle meetings, create content and communicate autonomously while maintaining your essence.'
    },
    'whatis.demo.live': {
      es: 'En vivo',
      en: 'Live'
    },
    'whatis.demo.hd': {
      es: 'HD',
      en: 'HD'
    },
    'whatis.demo.clone': {
      es: 'Clon Digital',
      en: 'Digital Clone'
    },

    // Use Cases Section
    'usecases.title': {
      es: 'Casos de uso',
      en: 'Use Cases'
    },
    'usecases.subtitle': {
      es: 'Descubre cómo tu clon digital puede transformar tu productividad y presencia en múltiples ámbitos de tu vida.',
      en: 'Discover how your digital clone can transform your productivity and presence in multiple areas of your life.'
    },
    'usecases.meetings.title': {
      es: 'Reuniones virtuales',
      en: 'Virtual Meetings'
    },
    'usecases.meetings.description': {
      es: 'Tu clon hablando por ti en Google Meet, Zoom y Teams',
      en: 'Your clone speaking for you in Google Meet, Zoom and Teams'
    },
    'usecases.meetings.feature1': {
      es: 'Asiste a reuniones automáticamente',
      en: 'Attends meetings automatically'
    },
    'usecases.meetings.feature2': {
      es: 'Responde preguntas en tiempo real',
      en: 'Answers questions in real time'
    },
    'usecases.meetings.feature3': {
      es: 'Mantiene tu agenda y disponibilidad',
      en: 'Maintains your schedule and availability'
    },
    'usecases.meetings.feature4': {
      es: 'Integración con calendarios',
      en: 'Calendar integration'
    },
    'usecases.content.title': {
      es: 'Contenido para redes',
      en: 'Social Media Content'
    },
    'usecases.content.description': {
      es: 'Reels y posts generados automáticamente con tu estilo',
      en: 'Reels and posts generated automatically with your style'
    },
    'usecases.content.feature1': {
      es: 'Genera contenido diario automáticamente',
      en: 'Generates daily content automatically'
    },
    'usecases.content.feature2': {
      es: 'Mantiene tu voz y estilo personal',
      en: 'Maintains your voice and personal style'
    },
    'usecases.content.feature3': {
      es: 'Optimiza horarios de publicación',
      en: 'Optimizes posting schedules'
    },
    'usecases.content.feature4': {
      es: 'Analiza tendencias y engagement',
      en: 'Analyzes trends and engagement'
    },
    'usecases.support.title': {
      es: 'Atención al cliente',
      en: 'Customer Support'
    },
    'usecases.support.description': {
      es: 'Tu clon respondiendo consultas y brindando soporte 24/7',
      en: 'Your clone answering queries and providing 24/7 support'
    },
    'usecases.support.feature1': {
      es: 'Responde consultas automáticamente',
      en: 'Automatically answers queries'
    },
    'usecases.support.feature2': {
      es: 'Mantiene tu tono y conocimiento',
      en: 'Maintains your tone and knowledge'
    },
    'usecases.support.feature3': {
      es: 'Escala sin límites',
      en: 'Scales without limits'
    },
    'usecases.support.feature4': {
      es: 'Integración con CRM y tickets',
      en: 'CRM and ticket integration'
    },
    'usecases.legacy.title': {
      es: 'Legado digital',
      en: 'Digital Legacy'
    },
    'usecases.legacy.description': {
      es: 'Preserva tu conocimiento y presencia para futuras generaciones',
      en: 'Preserve your knowledge and presence for future generations'
    },
    'usecases.legacy.feature1': {
      es: 'Captura tu sabiduría',
      en: 'Captures your wisdom'
    },
    'usecases.legacy.feature2': {
      es: 'Interactúa con descendientes',
      en: 'Interacts with descendants'
    },
    'usecases.legacy.feature3': {
      es: 'Mantiene historias familiares',
      en: 'Maintains family stories'
    },
    'usecases.legacy.feature4': {
      es: 'Transmite valores y experiencias',
      en: 'Transmits values and experiences'
    },
    'usecases.education.title': {
      es: 'Educación personalizada',
      en: 'Personalized Education'
    },
    'usecases.education.description': {
      es: 'Tu clon enseñando con tu estilo y metodología única',
      en: 'Your clone teaching with your unique style and methodology'
    },
    'usecases.education.feature1': {
      es: 'Adapta contenido al estudiante',
      en: 'Adapts content to student'
    },
    'usecases.education.feature2': {
      es: 'Mantiene tu pedagogía',
      en: 'Maintains your pedagogy'
    },
    'usecases.education.feature3': {
      es: 'Disponible 24/7 para dudas',
      en: 'Available 24/7 for questions'
    },
    'usecases.education.feature4': {
      es: 'Seguimiento personalizado',
      en: 'Personalized follow-up'
    },
    'usecases.try': {
      es: 'Probar este caso de uso',
      en: 'Try this use case'
    },
    'usecases.example': {
      es: 'Ejemplo generado por Brain AIX',
      en: 'Example generated by Brain AIX'
    },
    'usecases.stats.main': {
      es: 'Casos de uso principales',
      en: 'Main use cases'
    },
    'usecases.stats.availability': {
      es: 'Disponibilidad',
      en: 'Availability'
    },
    'usecases.stats.customized': {
      es: 'Personalizado',
      en: 'Customized'
    },
    'usecases.stats.possibilities': {
      es: 'Posibilidades',
      en: 'Possibilities'
    },
    'usecases.cta.title': {
      es: '¿Listo para implementar tu clon digital?',
      en: 'Ready to implement your digital clone?'
    },
    'usecases.cta.subtitle': {
      es: 'Elige el caso de uso que mejor se adapte a tus necesidades y comienza a multiplicar tu productividad hoy mismo.',
      en: 'Choose the use case that best fits your needs and start multiplying your productivity today.'
    },
    'usecases.cta.button': {
      es: 'Solicitar acceso exclusivo',
      en: 'Request exclusive access'
    },

    // Technology Section
    'tech.title': {
      es: 'Tecnología de vanguardia',
      en: 'Cutting-edge technology'
    },
    'tech.subtitle': {
      es: 'Descubre el stack tecnológico más avanzado que hace posible la clonación digital del futuro.',
      en: 'Discover the most advanced technology stack that makes future digital cloning possible.'
    },
    'tech.badge.ai': {
      es: 'IA Avanzada',
      en: 'Advanced AI'
    },
    'tech.badge.ml': {
      es: 'Machine Learning',
      en: 'Machine Learning'
    },
    'tech.badge.biometrics': {
      es: 'Biometría',
      en: 'Biometrics'
    },
    'tech.differentiators.title': {
      es: 'Diferenciales tecnológicos',
      en: 'Technological differentiators'
    },
    'tech.differentiators.subtitle': {
      es: 'Lo que nos hace únicos en el mercado de la clonación digital.',
      en: 'What makes us unique in the digital cloning market.'
    },
    'tech.ai.title': {
      es: 'IA multimodal avanzada',
      en: 'Advanced multimodal AI'
    },
    'tech.ai.description': {
      es: 'Procesamiento simultáneo de voz, video y texto con precisión humana.',
      en: 'Simultaneous processing of voice, video and text with human precision.'
    },
    'tech.biometrics.title': {
      es: 'Biometría de vanguardia',
      en: 'Cutting-edge biometrics'
    },
    'tech.biometrics.description': {
      es: 'Captura y replicación perfecta de características únicas.',
      en: 'Perfect capture and replication of unique characteristics.'
    },
    'tech.security.title': {
      es: 'Seguridad de nivel bancario',
      en: 'Bank-level security'
    },
    'tech.security.description': {
      es: 'Encriptación end-to-end y protección de datos personales.',
      en: 'End-to-end encryption and personal data protection.'
    },
    'tech.realtime.title': {
      es: 'Procesamiento en tiempo real',
      en: 'Real-time processing'
    },
    'tech.realtime.description': {
      es: 'Respuestas instantáneas con latencia mínima.',
      en: 'Instant responses with minimal latency.'
    },
    'tech.ethics.title': {
      es: 'Ética y transparencia',
      en: 'Ethics and transparency'
    },
    'tech.ethics.description': {
      es: 'Controles anti-deepfake y uso responsable de IA.',
      en: 'Anti-deepfake controls and responsible AI use.'
    },
    'tech.stack.title': {
      es: 'Stack tecnológico',
      en: 'Technology stack'
    },
    'tech.stack.subtitle': {
      es: 'Integramos las mejores tecnologías de IA del mercado para crear la experiencia de clonación digital más avanzada.',
      en: 'We integrate the best AI technologies in the market to create the most advanced digital cloning experience.'
    },
    'tech.examples.title': {
      es: 'Resultados generados con nuestra tecnología',
      en: 'Results generated with our technology'
    },
    'tech.examples.subtitle': {
      es: 'Ejemplos generados con nuestra tecnología de IA avanzada',
      en: 'Examples generated with our advanced AI technology'
    },
    'tech.clone.professional': {
      es: 'Clon Profesional',
      en: 'Professional Clone'
    },
    'tech.clone.creative': {
      es: 'Clon Creativo',
      en: 'Creative Clone'
    },
    'tech.clone.tech': {
      es: 'Clon Tecnológico',
      en: 'Tech Clone'
    },

    // Access Section
    'access.badge': {
      es: 'Beta Exclusiva',
      en: 'Exclusive Beta'
    },
    'access.title': {
      es: 'Únete a la revolución',
      en: 'Join the revolution'
    },
    'access.subtitle': {
      es: 'Sé uno de los primeros 250 usuarios en experimentar el futuro de la clonación digital. Sin precios públicos, solo acceso privado.',
      en: 'Be one of the first 250 users to experience the future of digital cloning. No public pricing, private access only.'
    },
    'access.gallery.title': {
      es: 'Galería de clones generados',
      en: 'Gallery of generated clones'
    },
    'access.gallery.subtitle': {
      es: 'Mira algunos ejemplos de clones digitales creados con Brain AIX',
      en: 'See some examples of digital clones created with Brain AIX'
    },
    'access.benefits.title': {
      es: 'Beneficios exclusivos',
      en: 'Exclusive benefits'
    },
    'access.benefit1.title': {
      es: 'Acceso exclusivo',
      en: 'Exclusive access'
    },
    'access.benefit1.description': {
      es: 'Sé uno de los primeros 250 usuarios',
      en: 'Be one of the first 250 users'
    },
    'access.benefit2.title': {
      es: 'Comunidad privada',
      en: 'Private community'
    },
    'access.benefit2.description': {
      es: 'Acceso a grupo exclusivo de early adopters',
      en: 'Access to exclusive early adopters group'
    },
    'access.benefit3.title': {
      es: 'Soporte prioritario',
      en: 'Priority support'
    },
    'access.benefit3.description': {
      es: 'Atención directa del equipo fundador',
      en: 'Direct attention from the founding team'
    },
    'access.benefit4.title': {
      es: 'Precios especiales',
      en: 'Special pricing'
    },
    'access.benefit4.description': {
      es: 'Tarifas preferenciales de lanzamiento',
      en: 'Launch preferential rates'
    },
    'access.stats.title': {
      es: 'Estado actual',
      en: 'Current status'
    },
    'access.stats.total': {
      es: 'Plazas totales',
      en: 'Total spots'
    },
    'access.stats.occupied': {
      es: 'Ocupadas',
      en: 'Occupied'
    },
    'access.stats.available': {
      es: 'plazas disponibles',
      en: 'spots available'
    },
    'access.form.name': {
      es: 'Nombre completo *',
      en: 'Full name *'
    },
    'access.form.email': {
      es: 'Correo electrónico *',
      en: 'Email *'
    },
    'access.form.company': {
      es: 'Empresa',
      en: 'Company'
    },
    'access.form.usecase': {
      es: '¿Cómo planeas usar tu clon? *',
      en: 'How do you plan to use your clone? *'
    },
    'access.form.timeline': {
      es: '¿Cuándo planeas implementar? *',
      en: 'When do you plan to implement? *'
    },
    'access.form.message': {
      es: 'Cuéntanos más sobre tu proyecto',
      en: 'Tell us more about your project'
    },
    'access.form.message.placeholder': {
      es: 'Describe brevemente cómo planeas usar tu clon digital...',
      en: 'Briefly describe how you plan to use your digital clone...'
    },
    'access.form.submit': {
      es: 'Comenzar ahora',
      en: 'Start Now'
    },
    'access.form.contact': {
      es: 'Te contactaremos en las próximas 24 horas para coordinar tu acceso.',
      en: 'We will contact you within the next 24 hours to coordinate your access.'
    },
    'access.success.title': {
      es: '¡Solicitud enviada con éxito!',
      en: 'Request sent successfully!'
    },
    'access.success.subtitle': {
      es: 'Gracias por tu interés en Brain AIX. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.',
      en: 'Thank you for your interest in Brain AIX. Our team will contact you within the next 24 hours.'
    },
    'access.success.step1': {
      es: 'Revisión de tu solicitud',
      en: 'Review of your request'
    },
    'access.success.step2': {
      es: 'Programación de demo personalizada',
      en: 'Scheduling personalized demo'
    },
    'access.success.step3': {
      es: 'Acceso a la plataforma beta',
      en: 'Access to beta platform'
    },
    'access.cta.title': {
      es: '¿Serás tú el siguiente?',
      en: 'Will you be next?'
    },
    'access.cta.subtitle': {
      es: 'Únete a la revolución de la clonación digital. El futuro ya está aquí, solo necesitas dar el primer paso.',
      en: 'Join the digital cloning revolution. The future is already here, you just need to take the first step.'
    },
    'access.cta.button': {
      es: 'Comenzar ahora',
      en: 'Start Now'
    },

    // Footer
    'footer.tagline': {
      es: 'Tu clon digital, tu segunda mente. La revolución de la clonación digital está aquí. Únete a los primeros 250 usuarios.',
      en: 'Your digital clone, your second mind. The digital cloning revolution is here. Join the first 250 users.'
    },
    'footer.product': {
      es: 'Producto',
      en: 'Product'
    },
    'footer.features': {
      es: 'Características',
      en: 'Features'
    },
    'footer.use-cases': {
      es: 'Casos de uso',
      en: 'Use Cases'
    },
    'footer.technology': {
      es: 'Tecnología',
      en: 'Technology'
    },
    'footer.pricing': {
      es: 'Precios',
      en: 'Pricing'
    },
    'footer.company': {
      es: 'Empresa',
      en: 'Company'
    },
    'footer.about': {
      es: 'Acerca de',
      en: 'About'
    },
    'footer.blog': {
      es: 'Blog',
      en: 'Blog'
    },
    'footer.careers': {
      es: 'Carreras',
      en: 'Careers'
    },
    'footer.contact': {
      es: 'Contacto',
      en: 'Contact'
    },
    'footer.resources': {
      es: 'Recursos',
      en: 'Resources'
    },
    'footer.docs': {
      es: 'Documentación',
      en: 'Documentation'
    },
    'footer.api': {
      es: 'API',
      en: 'API'
    },
    'footer.support': {
      es: 'Soporte',
      en: 'Support'
    },
    'footer.community': {
      es: 'Comunidad',
      en: 'Community'
    },
    'footer.legal': {
      es: 'Legal',
      en: 'Legal'
    },
    'footer.privacy': {
      es: 'Privacidad',
      en: 'Privacy'
    },
    'footer.terms': {
      es: 'Términos',
      en: 'Terms'
    },
    'footer.ethics': {
      es: 'Ética en IA',
      en: 'AI Ethics'
    },
    'footer.cookies': {
      es: 'Cookies',
      en: 'Cookies'
    },
    'footer.copyright': {
      es: '© 2024 Brain AIX. Todos los derechos reservados.',
      en: '© 2024 Brain AIX. All rights reserved.'
    },
    'footer.newsletter.title': {
      es: 'Mantente actualizado',
      en: 'Stay updated'
    },
    'footer.newsletter.subtitle': {
      es: 'Recibe las últimas noticias sobre Brain AIX',
      en: 'Get the latest news about Brain AIX'
    },
    'footer.newsletter.placeholder': {
      es: 'Tu correo electrónico',
      en: 'Your email'
    },
    'footer.newsletter.button': {
      es: 'Suscribirse',
      en: 'Subscribe'
    }
  }

  setLanguage(language: Language) {
    this.currentLanguage = language
    // Guardar en localStorage para persistencia
    if (typeof window !== 'undefined') {
      localStorage.setItem('brain-aix-language', language)
    }
  }

  getLanguage(): Language {
    // Recuperar de localStorage si está disponible
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('brain-aix-language') as Language
      if (saved && (saved === 'es' || saved === 'en')) {
        this.currentLanguage = saved
      }
    }
    return this.currentLanguage
  }

  t(key: string): string {
    const translation = this.translations[key]
    if (!translation) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translation[this.currentLanguage] || translation['en'] || key
  }

  // Método para obtener todas las traducciones de una clave
  getAll(key: string): { es: string; en: string } {
    return this.translations[key] || { es: key, en: key }
  }

  // Método para cambiar idioma y disparar evento
  changeLanguage(language: Language) {
    this.setLanguage(language)
    // Disparar evento personalizado para notificar cambios
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }))
    }
  }
}

// Instancia singleton
export const translationService = new TranslationService()

// Re-exportar el hook desde el archivo dedicado
export { useTranslation } from '@/hooks/useTranslation' 