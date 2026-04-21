'use client'

import { useEffect } from 'react'

/**
 * Hook que inicializa dos comportamientos globales de JS del sitio:
 *
 * 1. ScrollReveal — usa IntersectionObserver para añadir .is-visible
 *    a los elementos con clase .reveal cuando entran al viewport.
 *
 * 2. SmoothScroll — intercepta los clics en enlaces ancla (#)
 *    y hace scroll suave compensando la altura del header sticky.
 *
 * Se usa como componente de cliente en el layout raíz.
 */
export function useGlobalScripts() {
  useEffect(() => {
    // ── 1. Scroll Reveal ──────────────────────────────────────
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')

    if (prefersReducedMotion) {
      // Si el usuario prefiere sin animaciones, mostrar todo de inmediato
      revealEls.forEach(el => el.classList.add('is-visible'))
    } else if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      revealEls.forEach(el => revealObserver.observe(el))
      return () => revealObserver.disconnect()
    } else {
      // Fallback para navegadores sin IntersectionObserver
      revealEls.forEach(el => el.classList.add('is-visible'))
    }
  }, [])

  useEffect(() => {
    // ── 2. Smooth Scroll con offset del header ────────────────
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const targetEl = document.querySelector(href)
      if (!targetEl) return

      e.preventDefault()
      const header = document.getElementById('header')
      const headerH = header?.offsetHeight ?? 72
      const top = targetEl.getBoundingClientRect().top + window.scrollY - headerH - 16

      window.scrollTo({ top, behavior: 'smooth' })
      if (history.pushState) history.pushState(null, '', href)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
}

/**
 * Componente vacío que solo ejecuta los scripts globales.
 * Se monta en el layout raíz para que esté disponible en todas las páginas.
 */
export function GlobalScripts() {
  useGlobalScripts()
  return null
}
