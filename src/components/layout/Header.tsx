'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Elementos del menú de navegación principal
const NAV_LINKS = [
  { href: '#inicio',     label: 'Inicio'      },
  { href: '#nosotros',   label: 'Nosotros'    },
  { href: '#programas',  label: 'Licenciaturas' },
  { href: '#preparatoria', label: 'Preparatoria' },
  { href: '#admisiones', label: 'Costos'      },
  { href: '#faq',        label: 'Preguntas'   },
]

export function Header() {
  // Estado del menú móvil
  const [menuAbierto, setMenuAbierto] = useState(false)
  // Estado del scroll para aplicar sombra al header
  const [scrolled, setScrolled]       = useState(false)

  // Detectar scroll y agregar clase is-scrolled al header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // comprobar posición inicial
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquear scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAbierto])

  // Cerrar menú con la tecla ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuAbierto) {
        setMenuAbierto(false)
        // Devolver foco al botón hamburguesa
        document.getElementById('nav-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuAbierto])

  // Cerrar menú al redimensionar a escritorio
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuAbierto(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Smooth scroll con offset del header al hacer clic en los enlaces
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuAbierto(false)
    const target = document.querySelector(href)
    if (!target) return
    const header = document.getElementById('header')
    const headerH = header?.offsetHeight ?? 72
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16
    window.scrollTo({ top, behavior: 'smooth' })
    if (history.pushState) history.pushState(null, '', href)
  }, [])

  return (
    <header
      id="header"
      className={cn(
        'sticky top-0 z-[100] transition-all duration-300',
        'bg-white/92 backdrop-blur-md border-b border-transparent',
        scrolled && 'shadow-md bg-white/97'
      )}
      role="banner"
    >
      <nav className="container flex items-center justify-between h-[72px]" aria-label="Navegación principal">

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 font-heading text-xl font-bold text-[var(--color-primary)] no-underline hover:no-underline hover:text-[var(--color-primary-dark)] transition-colors"
          aria-label="Ir al inicio de ICAPS"
          onClick={(e) => handleNavClick(e, '#inicio')}
        >
          <Image
            src="/logo.png"
            alt="Logo ICAPS"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            ICAPS
            <span className="font-body text-xs font-normal text-[var(--color-text-muted)] tracking-wide">
              Sede Madero
            </span>
          </span>
        </a>

        {/* Navegación desktop */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar" aria-label="Navegación principal">
          {NAV_LINKS.map(link => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'relative block px-3 py-2 rounded-md text-sm font-semibold',
                  'text-[var(--color-text)] hover:text-[var(--color-primary)]',
                  'transition-colors duration-150 no-underline hover:no-underline',
                  // Línea decorativa en hover (pseudo-elemento vía after)
                  'after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0',
                  'after:bg-[var(--color-accent)] after:transition-all after:duration-300',
                  'hover:after:w-[60%] hover:after:-translate-x-1/2'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Botón CTA "Inscríbete" */}
          <li role="none">
            <a
              href="#contacto"
              role="menuitem"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="ml-2 px-5 py-2 bg-[var(--color-accent)] text-[var(--color-primary-dark)] text-sm font-bold rounded-md hover:bg-[#D4B35A] transition-colors no-underline hover:no-underline"
            >
              Inscríbete
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          id="nav-toggle"
          className={cn(
            'lg:hidden flex flex-col justify-center gap-[5px] w-[42px] h-[42px] p-2',
            'bg-transparent border border-[var(--color-border)] rounded-md',
            'cursor-pointer transition-colors duration-150',
            'hover:bg-[var(--color-bg)] hover:border-[var(--color-text-muted)]'
          )}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-expanded={menuAbierto}
          aria-controls="nav-menu"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú de navegación'}
        >
          {/* Tres barras que se convierten en X cuando el menú está abierto */}
          <span className={cn(
            'block w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-transform duration-300 origin-center',
            menuAbierto && 'translate-y-[7px] rotate-45'
          )} />
          <span className={cn(
            'block w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-150',
            menuAbierto && 'opacity-0 scale-x-0'
          )} />
          <span className={cn(
            'block w-full h-0.5 bg-[var(--color-primary)] rounded-full transition-transform duration-300 origin-center',
            menuAbierto && '-translate-y-[7px] -rotate-45'
          )} />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <nav
          id="nav-menu"
          className="lg:hidden bg-white border-t border-[var(--color-border)] px-5 py-6 flex flex-col gap-0 shadow-xl z-[200]"
          aria-label="Menú móvil"
        >
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-4 text-base font-semibold text-[var(--color-text)] border-b border-[var(--color-border)] hover:text-[var(--color-accent)] transition-colors no-underline hover:no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="mt-4 px-5 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[#D4B35A] text-[var(--color-primary-dark)] font-bold rounded-md text-center no-underline hover:no-underline transition-opacity hover:opacity-90"
          >
            Inscríbete
          </a>
        </nav>
      )}
    </header>
  )
}
