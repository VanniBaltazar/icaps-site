// Footer — Server Component (no necesita interactividad del cliente)

// Columnas del footer con sus enlaces internos
const FOOTER_LICENCIATURAS = [
  { label: 'Psicopedagogía',    href: '#programas' },
  { label: 'Derecho',           href: '#programas' },
  { label: 'Comercio Exterior', href: '#programas' },
  { label: 'Administración',    href: '#programas' },
  { label: 'Contaduría',        href: '#programas' },
]

const FOOTER_PREPARATORIA = [
  { label: 'Escolarizado',     href: '#preparatoria' },
  { label: 'Semi-escolarizado', href: '#preparatoria' },
  { label: 'Fines de Semana',  href: '#preparatoria' },
  { label: 'Examen Único',     href: '#preparatoria' },
]

const FOOTER_INSTITUCION = [
  { label: 'Nosotros',          href: '#nosotros'   },
  { label: 'Costos y Requisitos', href: '#admisiones' },
  { label: 'Preguntas Frecuentes', href: '#faq'      },
  { label: 'Contacto',          href: '#contacto'   },
]

export function Footer() {
  // Año calculado en el servidor — no se necesita useEffect
  const anioActual = new Date().getFullYear()

  return (
    <footer className="bg-[#061A2E] text-white/70 pt-16 relative" role="contentinfo">

      {/* Línea decorativa superior con gradiente institucional */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary))' }}
        aria-hidden="true"
      />

      {/* Grid de columnas */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 pb-12 border-b border-white/10">

        {/* Columna de marca */}
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3 font-heading text-xl font-bold text-white mb-4 no-underline hover:text-[var(--color-accent)] transition-colors hover:no-underline" aria-label="Ir al inicio">
            ICAPS Sede Madero
          </a>
          <p className="text-sm leading-relaxed mb-6 max-w-[280px]">
            Formando profesionales con excelencia, ética y compromiso social en Veracruz desde nuestras aulas.
          </p>

          {/* Iconos de redes sociales */}
          <div className="flex gap-3" aria-label="Redes sociales">
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=100090727521514" className="flex items-center justify-center w-10 h-10 rounded-md bg-white/6 text-white/60 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] transition-colors no-underline" aria-label="Facebook de ICAPS" rel="noopener noreferrer" target="_blank">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-md bg-white/6 text-white/60 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] transition-colors no-underline" aria-label="TikTok de ICAPS" rel="noopener noreferrer" target="_blank">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.06-1.4-.13-.08-.24-.17-.36-.26v7.24c.01 2.33-.82 4.63-2.32 6.42-1.51 1.88-3.72 3.16-6.1 3.53-2.39.37-4.87-.14-6.95-1.39-2.1-1.27-3.64-3.32-4.18-5.69-.54-2.37-.15-4.9 1.12-7 1.27-2.1 3.32-3.64 5.69-4.18 2.37-.54 4.9-.15 7 1.12.13.08.25.16.38.25V.02z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-md bg-white/6 text-white/60 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] transition-colors no-underline" aria-label="YouTube de ICAPS" rel="noopener noreferrer" target="_blank">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/522293978728" className="flex items-center justify-center w-10 h-10 rounded-md bg-white/6 text-white/60 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] transition-colors no-underline" aria-label="WhatsApp de ICAPS" rel="noopener noreferrer" target="_blank">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

        {/* Columna Licenciaturas */}
        <nav aria-label="Programas académicos">
          <h3 className="font-body text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.15em] mb-5">
            Licenciaturas
          </h3>
          <ul className="flex flex-col gap-3">
            {FOOTER_LICENCIATURAS.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-white/55 hover:text-white hover:pl-2 transition-all no-underline hover:no-underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna Preparatoria */}
        <nav aria-label="Bachillerato">
          <h3 className="font-body text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.15em] mb-5">
            Preparatoria
          </h3>
          <ul className="flex flex-col gap-3">
            {FOOTER_PREPARATORIA.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-white/55 hover:text-white hover:pl-2 transition-all no-underline hover:no-underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna Institución + Contacto */}
        <div>
          <nav aria-label="Información institucional" className="mb-8">
            <h3 className="font-body text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.15em] mb-5">
              Institución
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_INSTITUCION.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/55 hover:text-white hover:pl-2 transition-all no-underline hover:no-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <h3 className="font-body text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.15em] mb-4">
            Contacto directo
          </h3>
          <address className="not-italic flex flex-col gap-4">
            <p className="text-sm leading-relaxed">📍 Mariano Arista No. 966 Esq. Av. Francisco I. Madero, Centro, Veracruz, Ver. CP 91700</p>
            <p className="text-sm">📞 <a href="tel:+522299314411" className="text-white/55 hover:text-[var(--color-accent)] transition-colors no-underline hover:no-underline">229 931 4411</a></p>
            <p className="text-sm">💬 <a href="https://wa.me/522293978728" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-[var(--color-accent)] transition-colors no-underline hover:no-underline">WhatsApp: 229 397 8728</a></p>
          </address>
        </div>
      </div>

      {/* Barra de copyright */}
      <div className="bg-black/25 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <p>© {anioActual} ICAPS Sede Madero. Todos los derechos reservados.</p>
            <p className="text-[8px] opacity-40 uppercase tracking-[0.2em]">Build: v1.1.0-release</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>Licenciaturas con RVOE ante la SEP · Veracruz, México</p>
            <p className="flex items-center gap-1 opacity-70">
              Desarrollo por <span className="text-[var(--color-accent)] font-semibold tracking-wider">Giomath</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
