import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, useCase, timeline, message } = body

    // Validación básica
    if (!name || !email || !useCase || !timeline) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          company: company || null,
          use_case: useCase,
          timeline,
          message: message || null,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Error al insertar en Supabase:', error)
      return NextResponse.json(
        { error: 'Error al guardar los datos' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Datos guardados correctamente',
        data 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error en la API:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
} 