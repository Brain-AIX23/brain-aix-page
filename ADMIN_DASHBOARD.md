# Dashboard de Administrador - Brain

## Descripción

El Dashboard de Administrador es una herramienta completa para gestionar y monitorear todos los registros y pagos de la aplicación Brain. Proporciona una vista general de las métricas clave, listas detalladas de usuarios y transacciones, y funcionalidades de exportación de datos.

## Características Principales

### 📊 Resumen General
- **Tarjetas de Estadísticas**: Muestra métricas clave como total de registros, pagos exitosos, ingresos totales y tasa de conversión
- **Vista de Actividad Reciente**: Lista de los últimos 5 registros y pagos para monitoreo en tiempo real
- **Métricas de Rendimiento**: Conversión de leads a clientes pagantes

### 👥 Gestión de Contactos
- **Lista Completa de Espera**: Todos los usuarios registrados en la lista de espera
- **Búsqueda y Filtrado**: Buscar por nombre, email o empresa
- **Ordenamiento**: Ordenar por cualquier campo (nombre, fecha, etc.)
- **Información Detallada**: Caso de uso, timeline y mensaje personal

### 💳 Gestión de Pagos
- **Historial Completo**: Todos los intentos de pago (exitosos, fallidos, pendientes)
- **Filtros por Estado**: Filtrar pagos por su estado actual
- **Información de Stripe**: IDs de sesión y transacción para seguimiento
- **Estado de Acceso Beta**: Control de quién tiene acceso a la beta

### 📤 Exportación de Datos
- **Exportar Contactos**: Lista de espera en formato CSV
- **Exportar Pagos**: Historial de transacciones en formato CSV
- **Exportar Todo**: Datos completos en un solo archivo
- **Formato CSV**: Compatible con Excel, Google Sheets y herramientas de análisis

## Estructura del Proyecto

```
app/
├── api/
│   └── admin/
│       ├── dashboard/route.ts    # API para obtener datos del dashboard
│       └── export/route.ts       # API para exportar datos
├── admin/
│   ├── page.tsx                  # Página principal del dashboard
│   ├── layout.tsx                # Layout específico para admin
│   ├── config.ts                 # Configuración del dashboard
│   ├── register/page.tsx         # Página de registro de administradores
│   └── reset-password/page.tsx   # Página de reset de contraseña
contexts/
└── AuthContext.tsx               # Contexto de autenticación global
components/
└── admin/
    ├── AdminDashboard.tsx        # Componente principal del dashboard
    ├── StatsCards.tsx            # Tarjetas de estadísticas
    ├── ContactsTable.tsx         # Tabla de contactos
    ├── PaymentsTable.tsx         # Tabla de pagos
    ├── LoginForm.tsx             # Formulario de login
    └── ProtectedRoute.tsx        # Componente de protección de rutas
hooks/
└── useAdminDashboard.ts          # Hook personalizado para datos
types/
└── admin.ts                      # Tipos específicos del dashboard
lib/
├── supabase.ts                   # Cliente básico de Supabase
└── supabase-auth.ts              # Cliente de Supabase con configuración de auth
```

## Instalación y Uso

### 1. Acceso al Dashboard
Navega a `/admin` en tu aplicación para acceder al dashboard.

**Nota**: Necesitarás autenticarte primero. Si no tienes una cuenta, puedes registrarte en `/admin/register`.

### 2. Configuración de Base de Datos
Asegúrate de que las siguientes tablas existan en Supabase:
- `contacts`: Lista de espera
- `beta_payments`: Historial de pagos

### 3. Variables de Entorno
Verifica que tengas configuradas las variables de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
```

### 4. Configuración de Autenticación en Supabase
Para que la autenticación funcione correctamente:

1. **Habilitar Email Auth** en tu proyecto de Supabase
2. **Configurar URLs de redirección** en Authentication > URL Configuration:
   - Site URL: `http://localhost:3000` (desarrollo)
   - Redirect URLs: 
     - `http://localhost:3000/admin`
     - `http://localhost:3000/admin/reset-password`
3. **Configurar plantillas de email** en Authentication > Email Templates
4. **Crear el primer usuario administrador** a través de `/admin/register`

## Funcionalidades Técnicas

### APIs Implementadas
- **GET /api/admin/dashboard**: Obtiene todos los datos del dashboard
- **GET /api/admin/export**: Exporta datos en formato CSV

### Hooks Personalizados
- **useAdminDashboard**: Maneja el estado y las operaciones del dashboard

### Componentes Reutilizables
- **StatsCards**: Tarjetas de métricas con diseño responsivo
- **ContactsTable**: Tabla de contactos con búsqueda y ordenamiento
- **PaymentsTable**: Tabla de pagos con filtros avanzados

## Personalización

### Colores y Estilos
El dashboard utiliza Tailwind CSS y puede personalizarse fácilmente modificando las clases en los componentes.

### Configuración
Edita `app/admin/config.ts` para modificar:
- Intervalos de actualización
- Número de elementos por página
- Estados de pago soportados
- Configuración de ordenamiento

### Nuevas Funcionalidades
Para agregar nuevas características:
1. Crea el componente en `components/admin/`
2. Actualiza los tipos en `types/admin.ts`
3. Modifica el hook `useAdminDashboard.ts` si es necesario
4. Integra en `AdminDashboard.tsx`

## Seguridad

### 🔐 Autenticación Implementada
El dashboard incluye un sistema completo de autenticación con Supabase Auth:

- **Login de Administrador**: Formulario seguro de inicio de sesión
- **Registro de Usuarios**: Creación de nuevas cuentas de administrador
- **Reset de Contraseña**: Recuperación segura de contraseñas
- **Protección de Rutas**: Acceso restringido solo a usuarios autenticados
- **Gestión de Sesiones**: Manejo automático de tokens y refresh
- **Logout Seguro**: Cierre de sesión con limpieza de tokens

### 🛡️ Características de Seguridad
- **Protección de Rutas**: Todas las páginas del dashboard están protegidas
- **Validación de Usuarios**: Solo usuarios autenticados pueden acceder
- **Manejo de Tokens**: Gestión automática de JWT y refresh tokens
- **Redirecciones Seguras**: Flujo de autenticación con redirecciones apropiadas
- **Validación de Contraseñas**: Requisitos mínimos de seguridad

### Validación de Datos
- Todas las APIs validan los datos de entrada
- Manejo de errores robusto en todas las operaciones
- Logging de errores para debugging

## Mantenimiento

### Actualizaciones Automáticas
El dashboard se actualiza automáticamente cada 30 segundos.

### Logs y Monitoreo
- Errores de API se registran en la consola
- Estados de carga y error se muestran al usuario
- Funcionalidad de reintento en caso de fallos

### Rendimiento
- Lazy loading de componentes
- Optimización de consultas a la base de datos
- Paginación para grandes volúmenes de datos

## Soporte

Para problemas o mejoras:
1. Revisa los logs de la consola del navegador
2. Verifica la conectividad con Supabase
3. Comprueba que las tablas de base de datos existan
4. Valida las variables de entorno

---

**Desarrollado para Brain - Dashboard de Administración**
