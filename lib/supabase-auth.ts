import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Configuración para el dashboard de administrador
export const ADMIN_AUTH_CONFIG = {
  // Roles permitidos para acceder al dashboard
  ALLOWED_ROLES: ['admin', 'super_admin'],
  
  // Configuración de sesión
  SESSION_CONFIG: {
    // Tiempo de expiración de la sesión (en segundos)
    SESSION_EXPIRY: 3600, // 1 hora
    
    // Tiempo de expiración del refresh token (en segundos)
    REFRESH_TOKEN_EXPIRY: 2592000, // 30 días
  },
  
  // Configuración de contraseñas
  PASSWORD_CONFIG: {
    MIN_LENGTH: 6,
    REQUIRE_SPECIAL_CHARS: false,
    REQUIRE_NUMBERS: false,
    REQUIRE_UPPERCASE: false,
  },
  
  // URLs de redirección
  REDIRECT_URLS: {
    AFTER_LOGIN: '/admin',
    AFTER_LOGOUT: '/admin',
    AFTER_REGISTER: '/admin',
    AFTER_PASSWORD_RESET: '/admin/reset-password',
  }
}

// Función para verificar si un usuario tiene permisos de administrador
export const isAdminUser = (user: any) => {
  if (!user) return false
  
  // Verificar si el usuario tiene el rol de administrador
  // Esto dependerá de cómo configures los roles en Supabase
  const userRole = user.user_metadata?.role || user.app_metadata?.role
  
  return ADMIN_AUTH_CONFIG.ALLOWED_ROLES.includes(userRole)
}

// Función para obtener el rol del usuario
export const getUserRole = (user: any) => {
  if (!user) return null
  
  return user.user_metadata?.role || user.app_metadata?.role || 'user'
}
