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
    'hero.urgency-badge': {
      es: 'Solo 250 plazas beta — Reserva la tuya por $20',
      en: 'Only 250 beta spots — Reserve yours for $20'
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
    'hero.cta.reserve': {
      es: 'Reservar mi cupo ahora',
      en: 'Reserve my spot now'
    },
    'hero.cta.more-info': {
      es: 'Quiero más información',
      en: 'I want more information'
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
    'counter.remaining': {
      es: 'Quedan {remaining} de {total}',
      en: '{remaining} of {total} remaining'
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
    'trust.supported.title': { es: 'Respaldado por líderes en tecnología', en: 'Backed by technology leaders' },
    'trust.supported.partner': { es: 'Partners en stealth mode', en: 'Stealth mode partners' },
    'trust.supported.advisors': { es: 'Advisors expertos', en: 'Expert advisors' },
    'trust.supported.investors': { es: 'Inversores estratégicos', en: 'Strategic investors' },
    'trust.indicator.advanced-ai': { es: 'IA Avanzada', en: 'Advanced AI' },
    'trust.indicator.tech': { es: 'Tecnología de vanguardia', en: 'Cutting-edge technology' },
    'trust.indicator.speed': { es: 'Velocidad', en: 'Speed' },
    'trust.indicator.cloning': { es: 'Clonación en minutos', en: 'Cloning in minutes' },
    'trust.indicator.global': { es: 'Global', en: 'Global' },
    'trust.indicator.available': { es: 'Disponible en todo el mundo', en: 'Available worldwide' },
    'trust.indicator.community': { es: 'Comunidad', en: 'Community' },
    'trust.indicator.early': { es: '+250 early adopters', en: '+250 early adopters' },
    'trust.why.title': { es: 'Por qué el mundo va hacia esto', en: 'Why the world is moving this way' },

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
    'whatis.cta.title': { es: '¿Listo para crear tu segunda mente?', en: 'Ready to create your second mind?' },
    'whatis.cta.subtitle': { es: 'Únete a los primeros 250 usuarios que ya están experimentando el poder de la clonación digital.', en: 'Join the first 250 users already experiencing the power of digital cloning.' },
    'whatis.cta.button': { es: 'Solicitar acceso exclusivo', en: 'Request exclusive access' },

    // Use Cases Section
    'usecases.title': {
      es: 'Casos de uso',
      en: 'Use Cases'
    },
    'usecases.subtitle': {
      es: 'Descubre cómo tu clon digital puede transformar tu productividad y presencia en múltiples ámbitos de tu vida.',
      en: 'Discover how your digital clone can transform your productivity and presence in multiple areas of your life.'
    },
    'usecases.microtext': {
      es: 'Tu clon digital se adapta a tu voz, expresiones y personalidad, y lo puedes usar para...',
      en: 'Your digital clone adapts to your voice, expressions and personality, and you can use it for...'
    },
    'usecases.badge': {
      es: 'Casos de Uso Reales',
      en: 'Real Use Cases'
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
    'usecases.sales.title': {
      es: 'Ventas y Marketing',
      en: 'Sales and Marketing'
    },
    'usecases.sales.description': {
      es: 'Tu clon vendiendo y generando leads 24/7',
      en: 'Your clone selling and generating leads 24/7'
    },
    'usecases.sales.feature1': {
      es: 'Presentaciones automáticas',
      en: 'Automatic presentations'
    },
    'usecases.sales.feature2': {
      es: 'Generación de leads cualificados',
      en: 'Qualified lead generation'
    },
    'usecases.sales.feature3': {
      es: 'Seguimiento de prospectos',
      en: 'Prospect follow-up'
    },
    'usecases.sales.feature4': {
      es: 'Cierre de ventas asistido',
      en: 'Assisted sales closing'
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

    // Demo Section
    'demo.title': {
      es: 'Demostración',
      en: 'Demonstration'
    },
    'demo.subtitle': {
      es: 'Ve tu clon digital en acción con ejemplos reales',
      en: 'See your digital clone in action with real examples'
    },
    'demo.description': {
      es: 'Voz, cara y personalidad en cualquier contexto',
      en: 'Voice, face and personality in any context'
    },
    'demo.duration': {
      es: 'Video de 20-30s mostrando ejemplos reales',
      en: '20-30s video showing real examples'
    },
    'demo.cta': {
      es: 'Reserva y crea tu clon',
      en: 'Reserve and create your clone'
    },
    'demo.badge': {
      es: 'Demostración en Vivo',
      en: 'Live Demonstration'
    },

    // Registration Section
    'registration.title': {
      es: 'Registro o Pago',
      en: 'Registration or Payment'
    },
    'registration.subtitle': {
      es: 'Elige cómo quieres unirte a la revolución de la clonación digital',
      en: 'Choose how you want to join the digital cloning revolution'
    },
    'registration.price.info': {
      es: 'Beta exclusiva - Solo $20',
      en: 'Exclusive beta - Only $20'
    },
    'registration.badge': {
      es: 'Elige tu Opción',
      en: 'Choose Your Option'
    },
    'registration.waitlist.title': {
      es: 'Lista de Espera',
      en: 'Waitlist'
    },
    'registration.waitlist.subtitle': {
      es: 'Regístrate para ser notificado cuando esté disponible',
      en: 'Register to be notified when available'
    },
    'registration.waitlist.button': {
      es: 'Unirme a la lista de espera',
      en: 'Join the waitlist'
    },
    'registration.payment.title': {
      es: 'Pago Directo',
      en: 'Direct Payment'
    },
    'registration.payment.subtitle': {
      es: 'Asegura tu cupo ahora mismo',
      en: 'Secure your spot right now'
    },
    'registration.payment.beta': {
      es: 'Precio beta',
      en: 'Beta price'
    },
    'registration.payment.benefit1': {
      es: 'Acceso inmediato a la plataforma',
      en: 'Immediate access to the platform'
    },
    'registration.payment.benefit2': {
      es: 'Soporte prioritario incluido',
      en: 'Priority support included'
    },
    'registration.payment.benefit3': {
      es: 'Precio especial de lanzamiento',
      en: 'Special launch price'
    },
    'registration.payment.button': {
      es: 'Acceder a la beta por $20',
      en: 'Access beta for $20'
    },
    'registration.form.name': {
      es: 'Nombre completo',
      en: 'Full name'
    },
    'registration.form.email': {
      es: 'Correo electrónico',
      en: 'Email'
    },
    'registration.form.company': {
      es: 'Empresa',
      en: 'Company'
    },
    'registration.form.usecase': {
      es: '¿Cómo planeas usar tu clon?',
      en: 'How do you plan to use your clone?'
    },
    'registration.form.timeline': {
      es: '¿Cuándo planeas implementar?',
      en: 'When do you plan to implement?'
    },
    'registration.form.message': {
      es: 'Cuéntanos más sobre tu proyecto',
      en: 'Tell us more about your project'
    },
    'registration.form.message.placeholder': {
      es: 'Describe brevemente cómo planeas usar tu clon digital...',
      en: 'Briefly describe how you plan to use your digital clone...'
    },
    'registration.usecase1': {
      es: 'Reuniones virtuales y presentaciones',
      en: 'Virtual meetings and presentations'
    },
    'registration.usecase2': {
      es: 'Contenido para redes sociales',
      en: 'Social media content'
    },
    'registration.usecase3': {
      es: 'Atención al cliente y soporte',
      en: 'Customer service and support'
    },
    'registration.usecase4': {
      es: 'Educación y entrenamiento',
      en: 'Education and training'
    },
    'registration.usecase5': {
      es: 'Ventas y marketing',
      en: 'Sales and marketing'
    },
    'registration.usecase6': {
      es: 'Legado digital y preservación',
      en: 'Digital legacy and preservation'
    },
    'registration.timeline1': {
      es: 'Inmediatamente (1-2 semanas)',
      en: 'Immediately (1-2 weeks)'
    },
    'registration.timeline2': {
      es: 'Próximo mes (2-4 semanas)',
      en: 'Next month (2-4 weeks)'
    },
    'registration.timeline3': {
      es: 'En 3 meses',
      en: 'In 3 months'
    },
    'registration.timeline4': {
      es: 'Más de 3 meses',
      en: 'More than 3 months'
    },
    'registration.form.loading': {
      es: 'Enviando...',
      en: 'Sending...'
    },
    'registration.payment.processing': {
      es: 'Procesando pago...',
      en: 'Processing payment...'
    },
    'registration.form.error': {
      es: 'Error al enviar el formulario',
      en: 'Error sending form'
    },
    'registration.success.title': {
      es: '¡Registro exitoso!',
      en: 'Successful registration!'
    },
    'registration.success.subtitle': {
      es: 'Te hemos agregado a nuestra lista de espera. Te notificaremos cuando esté disponible.',
      en: 'We have added you to our waitlist. We will notify you when available.'
    },
    'registration.success.next': {
      es: 'Próximos pasos:',
      en: 'Next steps:'
    },
    'registration.success.step1': {
      es: 'Revisión de tu solicitud',
      en: 'Review of your request'
    },
    'registration.success.step2': {
      es: 'Notificación de disponibilidad',
      en: 'Availability notification'
    },
    'registration.success.step3': {
      es: 'Acceso a la plataforma',
      en: 'Platform access'
    },
    'registration.success.send-another': {
      es: 'Enviar otro formulario',
      en: 'Send another form'
    },
    'registration.success.step1.sales': {
      es: 'Mostrarte el proyecto en vivo',
      en: 'Show you the project live'
    },
    'registration.success.step2.sales': {
      es: 'Personalizar la solución a tus necesidades',
      en: 'Customize the solution to your needs'
    },
    'registration.success.step3.sales': {
      es: 'Obtener acceso prioritario al beta',
      en: 'Get priority access to beta'
    },
    'registration.success.bonus': {
      es: '💡 Bonus: Por ser de los primeros 250, tendrás acceso exclusivo a la beta',
      en: '💡 Bonus: For being among the first 250, you\'ll get exclusive beta access'
    },

    // Final CTA Section
    'final-cta.title.line1': {
      es: 'No te quedes fuera',
      en: 'Don\'t miss out'
    },
    'final-cta.title.line2': {
      es: 'Reserva tu cupo ahora y crea tu segunda mente',
      en: 'Reserve your spot now and create your second mind'
    },
    'final-cta.subtitle': {
      es: 'Solo quedan 187 plazas de las 250 disponibles. El futuro de la clonación digital está aquí y tú puedes ser parte de él.',
      en: 'Only 187 spots remain out of 250 available. The future of digital cloning is here and you can be part of it.'
    },
    'final-cta.button': {
      es: 'Reservar mi cupo ahora',
      en: 'Reserve my spot now'
    },
    'final-cta.urgency': {
      es: '¡Solo quedan 187 plazas!',
      en: 'Only 187 spots left!'
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
    // Technology Section (custom keys)
    'tech.tech1.title': { es: 'Clonación realista', en: 'Realistic cloning' },
    'tech.tech1.desc': { es: 'Con solo 3 min de datos', en: 'With just 3 min of data' },
    'tech.tech1.detail': { es: 'Nuestra IA puede crear un clon hiperrealista con apenas 3 minutos de audio y video.', en: 'Our AI can create a hyper-realistic clone with just 3 minutes of audio and video.' },
    'tech.tech2.title': { es: 'RAG + Fine-tuning', en: 'RAG + Fine-tuning' },
    'tech.tech2.desc': { es: 'Automático al subir documentos', en: 'Automatic when uploading documents' },
    'tech.tech2.detail': { es: 'Sistema de recuperación aumentada y ajuste fino que aprende automáticamente de tus documentos.', en: 'Augmented retrieval and fine-tuning system that automatically learns from your documents.' },
    'tech.tech3.title': { es: 'Personalidad entrenada', en: 'Trained personality' },
    'tech.tech3.desc': { es: 'Tus palabras, tono y estilo', en: 'Your words, tone and style' },
    'tech.tech3.detail': { es: 'Captura la esencia de tu personalidad, incluyendo expresiones, gestos y patrones de habla.', en: 'Captures the essence of your personality, including expressions, gestures and speech patterns.' },
    'tech.tech4.title': { es: 'Voz clonada', en: 'Cloned voice' },
    'tech.tech4.desc': { es: 'ElevenLabs / XTTS / OpenVoice', en: 'ElevenLabs / XTTS / OpenVoice' },
    'tech.tech4.detail': { es: 'Integración con las mejores tecnologías de clonación de voz del mercado.', en: 'Integration with the best voice cloning technologies on the market.' },
    'tech.tech5.title': { es: 'Avatares 3D', en: '3D Avatars' },
    'tech.tech5.desc': { es: 'SadTalker, EMO y MotionLLaMA', en: 'SadTalker, EMO and MotionLLaMA' },
    'tech.tech5.detail': { es: 'Avatares tridimensionales que se mueven y expresan de manera natural y realista.', en: 'Three-dimensional avatars that move and express themselves naturally and realistically.' },
    'tech.tech6.title': { es: 'Encriptación biométrica', en: 'Biometric encryption' },
    'tech.tech6.desc': { es: '+ control ético anti-deepfake', en: '+ ethical anti-deepfake control' },
    'tech.tech6.detail': { es: 'Protección avanzada contra uso malicioso y verificación de identidad biométrica.', en: 'Advanced protection against malicious use and biometric identity verification.' },
    'tech.stack.title': { es: 'Stack tecnológico', en: 'Technology stack' },
    'tech.stack.subtitle': { es: 'Integramos las mejores tecnologías de IA del mercado para crear la experiencia de clonación digital más avanzada.', en: 'We integrate the best AI technologies in the market to create the most advanced digital cloning experience.' },
    'tech.stack.voice': { es: 'Voz', en: 'Voice' },
    'tech.stack.video': { es: 'Video', en: 'Video' },
    'tech.stack.ai': { es: 'IA', en: 'AI' },
    'tech.stack.proc': { es: 'Procesamiento', en: 'Processing' },
    'tech.examples.title': { es: 'Resultados generados con nuestra tecnología', en: 'Results generated with our technology' },
    'tech.examples.subtitle': { es: 'Ejemplos generados con nuestra tecnología de IA avanzada', en: 'Examples generated with our advanced AI technology' },
    'tech.stats.precision': { es: 'Precisión en clonación', en: 'Cloning precision' },
    'tech.stats.latency': { es: 'Latencia de respuesta', en: 'Response latency' },
    'tech.stats.capacity': { es: 'Capacidad de procesamiento', en: 'Processing capacity' },
    'tech.stats.countries': { es: 'Países soportados', en: 'Supported countries' },
    'tech.security.title': { es: 'Seguridad y ética primero', en: 'Security and ethics first' },
    'tech.security.banking': { es: 'Encriptación de nivel bancario', en: 'Bank-level encryption' },
    'tech.security.biometric': { es: 'Verificación biométrica obligatoria', en: 'Mandatory biometric verification' },
    'tech.security.control': { es: 'Control total sobre tu clon', en: 'Full control over your clone' },
    'tech.security.deepfake': { es: 'Detección anti-deepfake integrada', en: 'Integrated anti-deepfake detection' },
    'tech.security.desc': { es: 'Tu privacidad y seguridad son nuestra máxima prioridad. Cada clon está protegido con las mejores medidas de seguridad.', en: 'Your privacy and security are our top priority. Each clone is protected with the best security measures.' },

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
    es: '{count} plazas disponibles', 
    en: '{count} spots available'
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
    'access.success.title': { es: '¡Solicitud enviada con éxito!', en: 'Request sent successfully!' },
    'access.success.subtitle': { es: 'Gracias por tu interés en Brain AIX. Nuestro equipo revisará tu solicitud y te contactaremos en las próximas 24 horas.', en: 'Thank you for your interest in Brain AIX. Our team will review your request and contact you within 24 hours.' },
    'access.success.steps': { es: 'Próximos pasos:', en: 'Next steps:' },
    'access.success.step1': { es: 'Revisión de tu caso de uso', en: 'Review of your use case' },
    'access.success.step2': { es: 'Contacto personalizado', en: 'Personalized contact' },
    'access.success.step3': { es: 'Acceso a la plataforma beta', en: 'Access to beta platform' },
    'access.success.send-another': { es: 'Enviar otro formulario', en: 'Send another form' },
    'access.success.already-sent': { es: 'Ya has enviado un formulario', en: 'You have already sent a form' },
    'access.success.reset-message': { es: '¿Quieres enviar otro formulario?', en: 'Do you want to send another form?' },
    'access.form.loading': { es: 'Enviando...', en: 'Sending...' },
    'access.form.error.general': { es: 'Error al enviar el formulario', en: 'Error sending form' },
    'access.form.error.required': { es: 'Faltan campos requeridos', en: 'Missing required fields' },
    'access.form.error.email': { es: 'Email inválido', en: 'Invalid email' },
    // Use Cases
    'access.usecase1': { es: 'Reuniones virtuales y presentaciones', en: 'Virtual meetings and presentations' },
    'access.usecase2': { es: 'Contenido para redes sociales', en: 'Social media content' },
    'access.usecase3': { es: 'Atención al cliente y soporte', en: 'Customer service and support' },
    'access.usecase4': { es: 'Educación y entrenamiento', en: 'Education and training' },
    'access.usecase5': { es: 'Ventas y marketing', en: 'Sales and marketing' },
    'access.usecase6': { es: 'Legado digital y preservación', en: 'Digital legacy and preservation' },
    // Timelines
    'access.timeline1': { es: 'Inmediatamente (1-2 semanas)', en: 'Immediately (1-2 weeks)' },
    'access.timeline2': { es: 'Próximo mes (2-4 semanas)', en: 'Next month (2-4 weeks)' },
    'access.timeline3': { es: 'En 3 meses', en: 'In 3 months' },
    'access.timeline4': { es: 'Más de 3 meses', en: 'More than 3 months' },
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
    },
    // Hero What Is Section
    'hero-what.title': { es: '¿Qué es Brain AIX?', en: 'What is Brain AIX?' },
    'hero-what.subtitle': { es: 'La nueva era de los clones digitales impulsados por IA.', en: 'The new era of AI-powered digital clones.' },
    'hero-what.tag1': { es: 'IA', en: 'AI' },
    'hero-what.tag2': { es: 'Clon Digital', en: 'Digital Clone' },
    'hero-what.tag3': { es: 'Automatización', en: 'Automation' },
    // Hero Use Cases Section
    'hero-usecases.title': { es: 'Casos de Uso Reales', en: 'Real Use Cases' },
    'hero-usecases.subtitle': { es: 'Descubre cómo tu clon digital puede transformar tu productividad y presencia en múltiples ámbitos de tu vida.', en: 'Discover how your digital clone can transform your productivity and presence in multiple areas of your life.' },
    'hero-usecases.tag1': { es: 'Reuniones', en: 'Meetings' },
    'hero-usecases.tag2': { es: 'Contenido', en: 'Content' },
    'hero-usecases.tag3': { es: 'Mensajes', en: 'Messages' },
    // Hero Technology Section
    'hero-tech.title': { es: 'Tecnología de Vanguardia', en: 'Cutting-edge Technology' },
    'hero-tech.subtitle': { es: 'Descubre el stack tecnológico más avanzado que hace posible la clonación digital del futuro.', en: 'Discover the most advanced technology stack that makes future digital cloning possible.' },
    'hero-tech.tag1': { es: 'IA Avanzada', en: 'Advanced AI' },
    'hero-tech.tag2': { es: 'Machine Learning', en: 'Machine Learning' },
    'hero-tech.tag3': { es: 'Biometría', en: 'Biometrics' },
    // Hero Access Section
    'hero-access.title': { es: 'Acceso Exclusivo', en: 'Exclusive Access' },
    'hero-access.subtitle': { es: 'Solicita acceso anticipado y sé parte de la revolución de los clones digitales.', en: 'Request early access and be part of the digital clone revolution.' },
    'hero-access.tag1': { es: 'Beta', en: 'Beta' },
    'hero-access.tag2': { es: 'Exclusivo', en: 'Exclusive' },
    'hero-access.tag3': { es: 'Prioridad', en: 'Priority' },
    'brand.name': { es: 'Brain AIX', en: 'Brain AIX' }
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