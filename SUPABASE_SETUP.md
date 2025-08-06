# Configuración de Supabase

## 1. Crear las tablas en Supabase

Ve a tu dashboard de Supabase y ejecuta el siguiente SQL en el editor SQL:

```sql
-- Tabla para registros de marketing (lista de espera)
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

-- Tabla para pagos de Stripe (acceso a beta)
CREATE TABLE beta_payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  use_case VARCHAR(255) NOT NULL,
  timeline VARCHAR(255) NOT NULL,
  message TEXT,
  payment_status VARCHAR(50) NOT NULL, -- 'success', 'failed', 'pending'
  stripe_session_id VARCHAR(255),
  stripe_payment_intent_id VARCHAR(255),
  amount_paid INTEGER, -- en centavos
  currency VARCHAR(3) DEFAULT 'usd',
  beta_access BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
CREATE INDEX idx_beta_payments_email ON beta_payments(email);
CREATE INDEX idx_beta_payments_payment_status ON beta_payments(payment_status);
CREATE INDEX idx_beta_payments_beta_access ON beta_payments(beta_access);
CREATE INDEX idx_beta_payments_created_at ON beta_payments(created_at);

-- Configurar RLS (Row Level Security) si es necesario
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE beta_payments ENABLE ROW LEVEL SECURITY;

-- Políticas para contacts (lista de espera)
CREATE POLICY "Allow inserts from authenticated users" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow reads for authenticated users" ON contacts
  FOR SELECT USING (true);

-- Políticas para beta_payments
CREATE POLICY "Allow inserts from authenticated users" ON beta_payments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow reads for authenticated users" ON beta_payments
  FOR SELECT USING (true);

-- Trigger para actualizar updated_at en beta_payments
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_beta_payments_updated_at 
    BEFORE UPDATE ON beta_payments 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
```

## 2. Variables de entorno

Asegúrate de que tu archivo `.env.local` contenga:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

## 3. Configurar webhook de Stripe

1. Ve a tu dashboard de Stripe
2. Navega a Developers > Webhooks
3. Crea un nuevo webhook con la URL: `https://tu-dominio.com/api/webhook/stripe`
4. Selecciona los eventos:
   - `checkout.session.completed`
   - `checkout.session.expired`
   - `payment_intent.payment_failed`
5. Copia el webhook secret y agrégalo a tu `.env.local`

## 4. Probar la API

Puedes probar la API con curl:

```bash
# Probar registro en lista de espera (tabla contacts)
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

# Probar pago directo (tabla beta_payments)
curl -X POST http://localhost:3000/api/payment \
  -H "Content-Type: application/json" \
  -d '{
    "name": "María García",
    "email": "maria@ejemplo.com",
    "company": "TechCorp",
    "useCase": "Ventas y marketing",
    "timeline": "Inmediatamente",
    "message": "Quiero acceso inmediato"
  }'
```

## 5. Estructura de archivos creada

- `lib/supabase.ts` - Configuración del cliente de Supabase
- `app/api/contact/route.ts` - API endpoint para lista de espera (tabla contacts)
- `app/api/payment/route.ts` - API endpoint para pagos con Stripe (tabla beta_payments)
- `app/api/webhook/stripe/route.ts` - Webhook para procesar pagos
- `types/contact.ts` - Tipos TypeScript para el formulario
- `.env.local` - Variables de entorno
- `components/RegistrationSection.tsx` - Componente actualizado con la API

## 6. Funcionalidades implementadas

- ✅ Validación de campos requeridos
- ✅ Validación de formato de email
- ✅ Manejo de errores
- ✅ Estado de carga durante el envío
- ✅ Feedback visual al usuario
- ✅ Integración con Stripe para pagos
- ✅ Webhooks para procesar pagos exitosos/fallidos
- ✅ Registro separado: marketing en `contacts`, pagos en `beta_payments`
- ✅ Control de acceso a beta según estado de pago
- ✅ Tipos TypeScript para mejor desarrollo
- ✅ Configuración segura con variables de entorno 