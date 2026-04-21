// Sección Redes Sociales — Server Component

const REDES = [
  {
    nombre: 'Facebook',
    accion: 'Seguir →',
    href: 'https://www.facebook.com/profile.php?id=100090727521514',
    colorClass: 'social-facebook',
    bgColor: '#1877F2',
    hoverBorder: '#1877F2',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
      </svg>
    ),
  },
  {
    nombre: 'TikTok',
    accion: 'Próximamente',
    href: '#',
    bgColor: '#000000',
    hoverBorder: '#000000',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.06-1.4-.13-.08-.24-.17-.36-.26v7.24c.01 2.33-.82 4.63-2.32 6.42-1.51 1.88-3.72 3.16-6.1 3.53-2.39.37-4.87-.14-6.95-1.39-2.1-1.27-3.64-3.32-4.18-5.69-.54-2.37-.15-4.9 1.12-7 1.27-2.1 3.32-3.64 5.69-4.18 2.37-.54 4.9-.15 7 1.12.13.08.25.16.38.25V.02z"/>
      </svg>
    ),
  },
  {
    nombre: 'YouTube',
    accion: 'Próximamente',
    href: '#',
    bgColor: '#FF0000',
    hoverBorder: '#FF0000',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export function SocialSection() {
  return (
    <section className="section section--alt" id="redes" aria-labelledby="social-title">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Columna de texto */}
        <div className="reveal reveal--left">
          <p className="section__pretitle">Conéctate con nosotros</p>
          <h2 className="section__title" id="social-title">Síguenos en nuestras redes</h2>
          <p className="text-lg mt-4" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Mantente al día con las últimas noticias, eventos y convocatorias de ICAPS Sede Madero.
            Únete a nuestra comunidad digital.
          </p>
        </div>

        {/* Tarjetas de redes sociales */}
        <div className="reveal reveal--right grid grid-cols-1 sm:grid-cols-3 gap-4">
          {REDES.map((red) => (
            <a
              key={red.nombre}
              href={red.href}
              target={red.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={`${red.nombre} de ICAPS${red.accion === 'Próximamente' ? ' (Próximamente)' : ''}`}
              className="group flex lg:flex-row sm:flex-col items-center gap-4 p-5 bg-white rounded-xl no-underline hover:no-underline transition-all duration-300 hover:translate-x-2 hover:shadow-md"
              style={{ border: '1px solid var(--color-border)' }}
            >
              {/* Icono con color de marca */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-md text-white flex-shrink-0 transition-transform duration-[600ms] group-hover:scale-110"
                style={{ backgroundColor: red.bgColor }}
              >
                {red.icon}
              </div>
              <div className="flex flex-col sm:text-center lg:text-left">
                <span className="font-heading text-lg font-bold" style={{ color: 'var(--color-text)' }}>
                  {red.nombre}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  {red.accion}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
