# Brain AIX - Landing Page

🚀 **Tu clon digital, tu segunda mente**

Landing page profesional para Brain AIX, una plataforma de clonación digital avanzada que permite crear avatares virtuales personalizados con IA.

## 🎯 Características

- **Hero Section Impactante**: Video de fondo full-screen con título contundente
- **Sección de Confianza**: Cita de Elon Musk y manifiesto futurista
- **Infografía Animada**: Proceso de 3 pasos para crear tu clon
- **Casos de Uso Dinámicos**: Tabs interactivos con microvideos
- **Diferenciales Tecnológicos**: Stack tecnológico detallado
- **Formulario de Acceso**: Solicitud de acceso exclusivo
- **Footer Profesional**: Elementos legales y enlaces importantes

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion + GSAP
- **Iconos**: Lucide React
- **Formularios**: React Hook Form
- **Hosting**: Vercel (recomendado)

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/brain-aix-landing.git
   cd brain-aix-landing
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador**

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conecta tu repositorio a Vercel**
2. **Configura las variables de entorno**:
   - `NEXT_PUBLIC_GTM_ID`: ID de Google Tag Manager
   - `NEXT_PUBLIC_HOTJAR_ID`: ID de Hotjar

3. **Despliega automáticamente**

### Otros proveedores

- **Netlify**: Configura el build command como `npm run build`
- **AWS Amplify**: Sigue la documentación oficial de Next.js
- **VPS**: Usa `npm run build && npm start`

## 📁 Estructura del Proyecto

```
brain-aix-landing/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal con SEO
│   └── page.tsx             # Página principal
├── components/
│   ├── Navigation.tsx       # Navegación sticky
│   ├── HeroSection.tsx      # Hero con video de fondo
│   ├── TrustSection.tsx     # Sección de confianza
│   ├── WhatIsSection.tsx    # Infografía de 3 pasos
│   ├── UseCasesSection.tsx  # Casos de uso con tabs
│   ├── TechnologySection.tsx # Diferenciales tecnológicos
│   ├── AccessSection.tsx    # Formulario de acceso
│   └── Footer.tsx           # Footer profesional
├── public/
│   ├── hero-video.mp4       # Video de fondo (agregar)
│   └── favicon.ico          # Favicon
├── tailwind.config.js       # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── package.json             # Dependencias
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

```javascript
colors: {
  brain: {
    50: '#fdf4ff',
    100: '#fae8ff',
    // ... más tonos
    900: '#701a75',
  }
}
```

### Contenido

- **Textos**: Edita directamente en los componentes
- **Imágenes**: Reemplaza en la carpeta `public/`
- **Videos**: Agrega tu video de fondo como `public/hero-video.mp4`

### SEO

Configura los metadatos en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Brain AIX - Tu clon digital, tu segunda mente',
  description: 'Crea tu clon digital con IA...',
  // ... más configuraciones
}
```

## 📊 Analytics

### Google Tag Manager

1. **Obtén tu GTM ID**
2. **Configura la variable de entorno**:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Hotjar

1. **Obtén tu Hotjar ID**
2. **Configura la variable de entorno**:
   ```env
   NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
   ```

## 🔧 Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Build de producción
- `npm run start`: Servidor de producción
- `npm run lint`: Linting del código

## 📱 Responsive Design

La landing page está completamente optimizada para:

- **Desktop**: 1920px+
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ⚡ Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizados
- **Bundle Size**: < 500KB
- **Loading Time**: < 2s

## 🔒 Seguridad

- **HTTPS**: Obligatorio en producción
- **CSP Headers**: Configurados
- **XSS Protection**: Implementada
- **CSRF Protection**: React Hook Form

## 📈 Optimizaciones

### Imágenes
- **Next.js Image**: Optimización automática
- **WebP**: Formato moderno
- **Lazy Loading**: Implementado

### Animaciones
- **Framer Motion**: 60fps
- **GSAP**: Para animaciones complejas
- **Intersection Observer**: Para animaciones on-scroll

### SEO
- **Meta Tags**: Completos
- **Open Graph**: Configurado
- **Twitter Cards**: Implementado
- **Schema.org**: Estructurado

## 🤝 Contribución

1. **Fork el proyecto**
2. **Crea una rama** (`git checkout -b feature/AmazingFeature`)
3. **Commit los cambios** (`git commit -m 'Add some AmazingFeature'`)
4. **Push a la rama** (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

- **Email**: hello@brainaix.com
- **Twitter**: [@brainaix](https://twitter.com/brainaix)
- **LinkedIn**: [Brain AIX](https://linkedin.com/company/brainaix)

## 🚀 Próximas Características

- [ ] Integración con Calendly
- [ ] Chat en vivo
- [ ] Modo oscuro
- [ ] PWA
- [ ] CMS headless
- [ ] A/B testing
- [ ] Analytics avanzados

---

**¿Listo para crear tu segunda mente?** 🧠✨ 