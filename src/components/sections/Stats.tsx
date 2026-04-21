'use client'

import { useEffect, useRef } from 'react'

// Datos de los contadores institucionales
const STATS = [
  { icon: '📚', target: 5,    prefix: '',  label: 'Licenciaturas' },
  { icon: '🗓️', target: 2,    prefix: '',  label: 'Días de clase (fines de semana)' },
  { icon: '💰', target: 1100, prefix: '$', label: 'Mensualidad accesible' },
  { icon: '📍', target: 1,    prefix: '',  label: 'Sede en el Centro de Veracruz' },
]

const DURATION = 1800 // milisegundos de la animación

export function Stats() {
  // Referencia al contenedor para el IntersectionObserver
  const containerRef = useRef<HTMLElement>(null)
  // Referencia a los elementos numéricos para manipularlos directamente
  const numRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const nums = numRefs.current

    /**
     * Anima un contador desde 0 hasta su valor objetivo.
     * Usa easing easeOutQuart para una desaceleración natural.
     */
    function animarContador(el: HTMLSpanElement, target: number, prefix: string) {
      let startTime: number | null = null

      function step(timestamp: number) {
        if (!startTime) startTime = timestamp
        const elapsed  = timestamp - startTime
        const progress = Math.min(elapsed / DURATION, 1)
        // Easing: easeOutQuart
        const ease    = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(ease * target)
        el.textContent = prefix + current.toLocaleString('es-MX')
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = prefix + target.toLocaleString('es-MX')
      }

      requestAnimationFrame(step)
    }

    // Respetar preferencia del usuario de reducir movimiento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar todos los contadores cuando la sección es visible
            nums.forEach((el, i) => {
              if (el) animarContador(el, STATS[i].target, STATS[i].prefix)
            })
            observer.disconnect() // animar solo una vez
          }
        })
      }, { threshold: 0.4 })

      if (containerRef.current) observer.observe(containerRef.current)
      return () => observer.disconnect()
    } else {
      // Fallback: mostrar el valor final de inmediato
      nums.forEach((el, i) => {
        if (el) el.textContent = STATS[i].prefix + STATS[i].target.toLocaleString('es-MX')
      })
    }
  }, [])

  return (
    <section
      id="stats"
      ref={containerRef}
      className="relative py-12"
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-mid) 100%)' }}
      aria-label="Estadísticas de ICAPS"
    >
      {/* Líneas verticales decorativas de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 80px)',
        }}
      />

      <div className="container relative grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <article key={stat.label} className="text-center p-4">
            <span className="text-2xl mb-2 block opacity-70" aria-hidden="true">{stat.icon}</span>
            {/* El ref captura el elemento para la animación del contador */}
            <span
              ref={(el) => { numRefs.current[i] = el }}
              className="block font-heading text-4xl font-bold leading-none"
              style={{ color: 'var(--color-accent)' }}
              aria-label={`${stat.prefix}${stat.target} ${stat.label}`}
            >
              0
            </span>
            <span className="block text-sm font-medium mt-2" style={{ color: 'rgba(255,255,255,.7)' }}>
              {stat.label}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
