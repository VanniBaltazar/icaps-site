'use client'

import { useState, useRef } from 'react'

// Tipo para el estado de validación de cada campo
type EstadoCampo = 'idle' | 'error' | 'valid'

// Reglas de validación por campo — centralizadas para fácil mantenimiento
const REGLAS = {
  nombre: (val: string) => {
    if (!val.trim())           return 'El nombre es obligatorio.'
    if (val.trim().length < 3) return 'Mínimo 3 caracteres.'
    return null
  },
  telefono: (val: string) => {
    if (!val.trim()) return 'El teléfono es obligatorio.'
    const digits = val.replace(/\D/g, '')
    if (digits.length < 7) return 'Debe tener al menos 7 dígitos.'
    return null
  },
  programa: (val: string) => {
    if (!val) return 'Selecciona un programa de interés.'
    return null
  },
}

export function Contact() {
  // Estado del formulario completo
  const [valores, setValores]     = useState({ nombre: '', telefono: '', programa: '', privacidad: false })
  const [errores, setErrores]     = useState<Record<string, string | null>>({})
  const [estados, setEstados]     = useState<Record<string, EstadoCampo>>({})
  const [enviando, setEnviando]   = useState(false)
  const [feedback, setFeedback]   = useState<{ tipo: 'success' | 'error'; msg: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Valida un campo individual y actualiza su estado visual
  function validarCampo(nombre: string, valor: string): boolean {
    const regla = REGLAS[nombre as keyof typeof REGLAS]
    if (!regla) return true
    const error = regla(valor)
    setErrores(prev => ({ ...prev, [nombre]: error }))
    setEstados(prev => ({ ...prev, [nombre]: error ? 'error' : 'valid' }))
    return error === null
  }

  // Valida el checkbox de privacidad por separado
  function validarPrivacidad(checked: boolean): boolean {
    const error = !checked ? 'Debes aceptar para continuar.' : null
    setErrores(prev => ({ ...prev, privacidad: error }))
    return error === null
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setValores(prev => ({ ...prev, [name]: type === 'checkbox' ? checked! : value }))
    // Revalida en tiempo real si ya hay un error visible
    if (errores[name]) {
      validarCampo(name, type === 'checkbox' ? String(checked) : value)
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    validarCampo(e.target.name, e.target.value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Valida todos los campos antes de enviar
    const camposValidos = Object.keys(REGLAS).every(campo =>
      validarCampo(campo, valores[campo as keyof typeof valores] as string)
    )
    const privacidadValida = validarPrivacidad(valores.privacidad)

    if (!camposValidos || !privacidadValida) {
      // Mover foco al primer campo con error — accesibilidad
      const primerError = formRef.current?.querySelector('[aria-invalid="true"]') as HTMLElement
      primerError?.focus()
      return
    }

    setEnviando(true)

    // TODO Fase 4: reemplazar este timeout con fetch() a tu backend real
    await new Promise(res => setTimeout(res, 1200))
    setEnviando(false)
    setFeedback({ tipo: 'success', msg: '¡Gracias! Tu solicitud fue enviada. Te contactaremos pronto por WhatsApp.' })

    // Limpiar formulario tras envío exitoso
    setValores({ nombre: '', telefono: '', programa: '', privacidad: false })
    setErrores({})
    setEstados({})
    setTimeout(() => setFeedback(null), 6000)
  }

  // Clases CSS para el estado visual de cada input
  function inputClass(campo: string) {
    const base = 'w-full px-4 py-[0.875rem] border-[1.5px] rounded-md font-body text-base transition-all duration-150 bg-[var(--color-bg)] text-[var(--color-text)] outline-none appearance-none'
    if (estados[campo] === 'error') return `${base} border-[var(--color-error)] focus:shadow-[0_0_0_3px_rgba(198,40,40,.12)]`
    if (estados[campo] === 'valid') return `${base} border-[var(--color-success)]`
    return `${base} border-[var(--color-border)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(201,168,76,.12)]`
  }

  return (
    <section className="contact section section--alt" id="contacto" aria-labelledby="contact-title">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

        {/* ── Columna izquierda: información de contacto ── */}
        <div className="reveal reveal--left">
          <p className="section__pretitle">¿Listo para empezar?</p>
          <h2 className="section__title" id="contact-title">Contáctanos en Veracruz</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Nuestro equipo de admisiones está listo para orientarte. Escríbenos por WhatsApp o
            déjanos un mensaje y te contactaremos en menos de 24 horas.
          </p>

          <ul className="flex flex-col gap-6" aria-label="Datos de contacto">
            {[
              { icon: '📍', titulo: 'Dirección',          contenido: 'Mariano Arista No. 966 Esq. Av. Francisco I. Madero,\nCol. Centro, Veracruz, Ver. CP 91700' },
              { icon: '📞', titulo: 'Teléfono',           contenido: '229 931 4411', href: 'tel:+522299314411' },
              { icon: '💬', titulo: 'WhatsApp',           contenido: '229 397 8728', href: 'https://wa.me/522293978728' },
              { icon: '🕐', titulo: 'Horario de atención', contenido: 'Sábados y Domingos: 8:00 AM – 6:00 PM' },
            ].map((dato) => (
              <li key={dato.titulo} className="flex gap-4 items-start">
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-md text-xl flex-shrink-0"
                  style={{ background: 'var(--color-primary-light)' }}
                  aria-hidden="true"
                >
                  {dato.icon}
                </span>
                <div>
                  <strong className="block font-heading text-sm font-bold mb-1" style={{ color: 'var(--color-text)' }}>
                    {dato.titulo}
                  </strong>
                  {dato.href ? (
                    <a href={dato.href} target={dato.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-sm font-semibold no-underline hover:underline" style={{ color: 'var(--color-accent)' }}>
                      {dato.contenido}
                    </a>
                  ) : (
                    <p className="text-sm whitespace-pre-line" style={{ color: 'var(--color-text-muted)' }}>{dato.contenido}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <div className="reveal reveal--right">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Formulario de contacto e inscripción"
            className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] flex flex-col gap-5"
          >
            {/* Campo: Nombre */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="nombre" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                Nombre completo <span style={{ color: 'var(--color-accent)' }} aria-label="requerido">*</span>
              </label>
              <input
                className={inputClass('nombre')}
                type="text" id="nombre" name="nombre"
                placeholder="Tu nombre completo"
                value={valores.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                required aria-required="true"
                aria-invalid={estados.nombre === 'error'}
                aria-describedby="nombre-error"
              />
              {errores.nombre && (
                <span id="nombre-error" role="alert" className="text-xs font-semibold" style={{ color: 'var(--color-error)' }}>
                  {errores.nombre}
                </span>
              )}
            </div>

            {/* Campo: Teléfono */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="telefono" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                Teléfono / Celular <span style={{ color: 'var(--color-accent)' }} aria-label="requerido">*</span>
              </label>
              <input
                className={inputClass('telefono')}
                type="tel" id="telefono" name="telefono"
                placeholder="229 ..."
                value={valores.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                required aria-required="true"
                aria-invalid={estados.telefono === 'error'}
                aria-describedby="telefono-error"
              />
              {errores.telefono && (
                <span id="telefono-error" role="alert" className="text-xs font-semibold" style={{ color: 'var(--color-error)' }}>
                  {errores.telefono}
                </span>
              )}
            </div>

            {/* Campo: Programa */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold" htmlFor="programa" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                Licenciatura de interés <span style={{ color: 'var(--color-accent)' }} aria-label="requerido">*</span>
              </label>
              <select
                className={inputClass('programa') + ' cursor-pointer pr-10'}
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235A6478' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                id="programa" name="programa"
                value={valores.programa}
                onChange={handleChange}
                onBlur={handleBlur}
                required aria-required="true"
                aria-invalid={estados.programa === 'error'}
                aria-describedby="programa-error"
              >
                <option value="" disabled>Selecciona una opción</option>
                <optgroup label="Licenciaturas">
                  <option value="psicopedagogia">Psicopedagogía (Sábados)</option>
                  <option value="derecho">Derecho (Sábados)</option>
                  <option value="comercio">Comercio Exterior (Domingos)</option>
                  <option value="admin">Administración de Empresas (Domingos)</option>
                  <option value="contaduria">Contaduría Pública (Domingos)</option>
                </optgroup>
                <optgroup label="Preparatoria">
                  <option value="prepa-escolarizada">Bachillerato Escolarizado</option>
                  <option value="prepa-semi">Bachillerato Semi-escolarizado</option>
                  <option value="prepa-viernes">Bachillerato Solo Viernes</option>
                  <option value="prepa-sabado">Bachillerato Solo Sábados</option>
                  <option value="prepa-unico">Curso Examen Único</option>
                </optgroup>
              </select>
              {errores.programa && (
                <span id="programa-error" role="alert" className="text-xs font-semibold" style={{ color: 'var(--color-error)' }}>
                  {errores.programa}
                </span>
              )}
            </div>

            {/* Checkbox de privacidad */}
            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-3 cursor-pointer text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                <input
                  type="checkbox" name="privacidad" id="privacidad"
                  className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 cursor-pointer accent-[var(--color-accent)]"
                  checked={valores.privacidad}
                  onChange={handleChange}
                  required aria-required="true"
                />
                <span>Acepto que me contacten vía WhatsApp para recibir información.</span>
              </label>
              {errores.privacidad && (
                <span role="alert" className="text-xs font-semibold" style={{ color: 'var(--color-error)' }}>
                  {errores.privacidad}
                </span>
              )}
            </div>

            {/* Mensaje de feedback tras el envío */}
            {feedback && (
              <div
                role="status"
                aria-live="polite"
                className="p-4 rounded-md text-sm font-semibold text-center"
                style={feedback.tipo === 'success'
                  ? { background: '#E8F5E9', color: 'var(--color-success)', border: '1px solid #A5D6A7' }
                  : { background: '#FFEBEE', color: 'var(--color-error)',   border: '1px solid #EF9A9A' }}
              >
                {feedback.msg}
              </div>
            )}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={enviando}
              className="btn btn--primary btn--full disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {enviando ? 'Enviando…' : 'Enviar Mi Solicitud'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
