# Configuración de Autenticación - Dashboard de Administrador

## 🚀 Configuración Inicial en Supabase

### 1. Habilitar Autenticación por Email

1. Ve a tu proyecto de Supabase
2. Navega a **Authentication** > **Providers**
3. Asegúrate de que **Email** esté habilitado
4. Opcionalmente, puedes deshabilitar otros proveedores si solo quieres usar email

### 2. Configurar URLs de Redirección

1. Ve a **Authentication** > **URL Configuration**
2. Configura las siguientes URLs:

```bash
# Para desarrollo local
Site URL: http://localhost:3000

# URLs de redirección
Redirect URLs:
- http://localhost:3000/admin
- http://localhost:3000/admin/reset-password
- http://localhost:3000/admin/register
```

3. Para producción, reemplaza `localhost:3000` con tu dominio real

### 3. Configurar Plantillas de Email

1. Ve a **Authentication** > **Email Templates**
2. Personaliza las siguientes plantillas:

#### Confirmación de Email
- **Subject**: `Confirma tu cuenta de administrador`
- **Content**: Incluye un enlace de confirmación

#### Reset de Contraseña
- **Subject**: `Reset de contraseña - Dashboard de Administrador`
- **Content**: Incluye un enlace seguro para resetear la contraseña

#### Invitación de Usuario
- **Subject**: `Invitación al Dashboard de Administrador`
- **Content**: Incluye enlaces de registro y confirmación

### 4. Configurar Políticas de Contraseña

1. Ve a **Authentication** > **Settings**
2. Configura las políticas de contraseña:
   - **Minimum length**: 6 caracteres
   - **Require numbers**: Opcional
   - **Require special characters**: Opcional
   - **Require uppercase**: Opcional

## 🔐 Crear el Primer Usuario Administrador

### Opción 1: Registro a través de la UI

1. Navega a `/admin/register` en tu aplicación
2. Completa el formulario de registro
3. Confirma tu email
4. Inicia sesión en `/admin`

### Opción 2: Crear usuario directamente en Supabase

1. Ve a **Authentication** > **Users**
2. Haz clic en **Add User**
3. Completa la información:
   - **Email**: tu-email@ejemplo.com
   - **Password**: contraseña-segura
   - **Email confirm**: true
4. El usuario podrá iniciar sesión inmediatamente

## 🛡️ Configuración de Seguridad

### 1. Políticas de RLS (Row Level Security)

Si quieres agregar una capa extra de seguridad, puedes crear políticas RLS en tus tablas:

```sql
-- Ejemplo para la tabla contacts
CREATE POLICY "Solo administradores pueden ver contactos" ON contacts
FOR ALL USING (
  auth.role() = 'authenticated'
);

-- Ejemplo para la tabla beta_payments
CREATE POLICY "Solo administradores pueden ver pagos" ON beta_payments
FOR ALL USING (
  auth.role() = 'authenticated'
);
```

### 2. Configurar Roles de Usuario

Para implementar un sistema de roles más avanzado:

1. Crea una tabla de perfiles de usuario:

```sql
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  role TEXT DEFAULT 'admin',
  permissions JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Política para que los usuarios solo vean su propio perfil
CREATE POLICY "Usuarios pueden ver su propio perfil" ON user_profiles
FOR ALL USING (auth.uid() = id);
```

2. Crear un trigger para crear perfiles automáticamente:

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, role)
  VALUES (NEW.id, 'admin');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

## 📧 Configuración de Email

### 1. Configurar SMTP (Opcional)

Si quieres usar tu propio servidor SMTP en lugar del de Supabase:

1. Ve a **Authentication** > **Settings**
2. En **SMTP Settings**, configura:
   - **Host**: tu-servidor-smtp.com
   - **Port**: 587 (TLS) o 465 (SSL)
   - **Username**: tu-usuario
   - **Password**: tu-contraseña
   - **Sender name**: Nombre de tu aplicación

### 2. Personalizar Emails

1. Ve a **Authentication** > **Email Templates**
2. Personaliza cada plantilla con tu marca
3. Incluye variables como:
   - `{{ .SiteURL }}`
   - `{{ .Token }}`
   - `{{ .Email }}`

## 🔄 Flujo de Autenticación

### 1. Login
```
Usuario → /admin → LoginForm → Supabase Auth → Dashboard
```

### 2. Registro
```
Usuario → /admin/register → RegisterForm → Supabase Auth → Confirmación por Email → Dashboard
```

### 3. Reset de Contraseña
```
Usuario → Solicita reset → Email con enlace → /admin/reset-password → Nueva contraseña → Dashboard
```

### 4. Logout
```
Usuario → Botón Logout → Supabase Auth → /admin (LoginForm)
```

## 🚨 Solución de Problemas

### Error: "Invalid login credentials"
- Verifica que el usuario existe en Supabase
- Confirma que el email está verificado
- Revisa la consola del navegador para más detalles

### Error: "Email not confirmed"
- El usuario debe confirmar su email antes de poder iniciar sesión
- Verifica que la plantilla de email esté configurada correctamente

### Error: "Redirect URL not allowed"
- Verifica que las URLs de redirección estén configuradas en Supabase
- Asegúrate de que coincidan exactamente con las URLs de tu aplicación

### Error: "Rate limit exceeded"
- Supabase tiene límites de rate limiting para autenticación
- Espera unos minutos antes de intentar nuevamente

## 📱 Pruebas de Autenticación

### 1. Probar Login
1. Ve a `/admin`
2. Ingresa credenciales válidas
3. Verifica que seas redirigido al dashboard

### 2. Probar Registro
1. Ve a `/admin/register`
2. Completa el formulario
3. Verifica que recibas el email de confirmación

### 3. Probar Reset de Contraseña
1. En el login, solicita reset de contraseña
2. Verifica que recibas el email
3. Completa el proceso de reset

### 4. Probar Logout
1. Inicia sesión en el dashboard
2. Haz clic en "Cerrar Sesión"
3. Verifica que seas redirigido al login

## 🔒 Consideraciones de Seguridad

### 1. Contraseñas
- Implementa políticas de contraseñas fuertes
- Considera usar autenticación de dos factores (2FA)
- Implementa bloqueo de cuentas después de intentos fallidos

### 2. Sesiones
- Configura tiempos de expiración apropiados
- Implementa logout automático por inactividad
- Considera usar refresh tokens

### 3. Auditoría
- Mantén logs de autenticación
- Monitorea intentos de login fallidos
- Implementa alertas para actividades sospechosas

---

**Nota**: Esta configuración proporciona un nivel básico de seguridad. Para aplicaciones en producción, considera implementar medidas adicionales como 2FA, rate limiting más estricto, y monitoreo de seguridad.
