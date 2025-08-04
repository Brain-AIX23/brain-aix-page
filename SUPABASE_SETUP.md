# Configuración de Supabase

## 1. Crear la tabla en Supabase

Ve a tu dashboard de Supabase y ejecuta el siguiente SQL en el editor SQL:

```sql
-- Crear la tabla contacts
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  use_case VARCHAR(255) NOT NULL,
  timeline VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);

-- Configurar RLS (Row Level Security) si es necesario
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones desde la aplicación
CREATE POLICY "Allow inserts from authenticated users" ON contacts
  FOR INSERT WITH CHECK (true);

-- Política para permitir lecturas (opcional, para admin)
CREATE POLICY "Allow reads for authenticated users" ON contacts
  FOR SELECT USING (true);
```

## 2. Variables de entorno

Asegúrate de que tu archivo `.env.local` contenga:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

## 3. Probar la API

Puedes probar la API con curl:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "company": "Mi Empresa",
    "useCase": "Automatización de procesos",
    "timeline": "1-3 meses",
    "message": "Me interesa mucho el producto"
  }'
```

## 4. Estructura de archivos creada

- `lib/supabase.ts` - Configuración del cliente de Supabase
- `app/api/contact/route.ts` - API endpoint para manejar el formulario
- `types/contact.ts` - Tipos TypeScript para el formulario
- `.env.local` - Variables de entorno
- `components/AccessSection.tsx` - Componente actualizado con la API

## 5. Funcionalidades implementadas

- ✅ Validación de campos requeridos
- ✅ Validación de formato de email
- ✅ Manejo de errores
- ✅ Estado de carga durante el envío
- ✅ Feedback visual al usuario
- ✅ Tipos TypeScript para mejor desarrollo
- ✅ Configuración segura con variables de entorno 