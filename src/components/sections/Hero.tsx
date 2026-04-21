// Hero — Server Component (no tiene estado ni efectos del cliente)

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden text-center"
      id="inicio"
      aria-label="Sección principal"
      style={{
        background: 'linear-gradient(160deg, #061A33 0%, #0A2647 40%, #144272 100%)',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Overlay con la imagen hero al 8% de opacidad */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')", opacity: 0.08 }}
        aria-hidden="true"
      />

      {/* Patrón geométrico decorativo — aporta profundidad sin pesar visualmente */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 85%, rgba(201,168,76,.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 15%, rgba(201,168,76,.05) 0%, transparent 40%),
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)
          `,
          backgroundSize: 'auto, auto, 60px 60px, 60px 60px',
        }}
      />

      {/* Contenido principal */}
      <div className="container relative z-10 max-w-[820px]">

        {/* Badge de inscripciones abiertas */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-sm"
          style={{
            background: 'rgba(201,168,76,.15)',
            border: '1px solid rgba(201,168,76,.3)',
            color: 'var(--color-accent-light)',
          }}>
          {/* Punto animado — accesible con aria-hidden */}
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden="true" />
          Inscripciones Abiertas Ciclo 2026 — Veracruz
        </div>

        {/* Título principal H1 — jerarquía semántica correcta */}
        <h1 className="reveal reveal--delay-1 flex flex-col items-center justify-center mb-8" style={{ lineHeight: 1.1 }}>
          <span className="font-body text-sm font-semibold text-white uppercase tracking-[0.25em] opacity-90">
            Construye tu futuro profesional en
          </span>
          {/* Nombre de la marca con tipografía Playfair Display */}
          <span
            className="font-heading font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
              color: '#FFEA00',
              textShadow: '0 0 30px rgba(255,234,0,.15)',
              lineHeight: 1,
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            ICAPS
          </span>
          <span className="font-body text-sm font-semibold text-white uppercase tracking-[0.25em] opacity-90">
            Sede Madero
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="reveal reveal--delay-2 text-lg max-w-[580px] mx-auto mb-10" style={{ color: 'rgba(255,255,255,.75)', lineHeight: 1.8 }}>
          Ofrecemos programas académicos diseñados para adaptarse a tu ritmo de vida.
          Elige tu camino y obtén el respaldo institucional que necesitas.
        </p>

        {/* Cards duales CTA — Licenciaturas y Preparatoria */}
        <div className="reveal reveal--delay-3 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-[900px] mx-auto items-stretch">

          {/* Card Licenciaturas */}
          <article
            className="flex flex-col justify-between p-8 text-left transition-all duration-300 rounded-2xl hover:-translate-y-1 hover:shadow-2xl group"
            style={{
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.1)',
              borderLeft: '5px solid var(--color-accent)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div>
              <h3 className="mb-3 text-2xl text-white font-heading">Licenciaturas</h3>
              <p className="mb-8 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,.75)' }}>
                Clases Sabatinas o Dominicales. Termina tu carrera sin dejar de trabajar con validez oficial.
              </p>
            </div>
            <a href="#programas" className="btn btn--primary self-start shadow-gold">Ver Carreras</a>
          </article>

          {/* Card Preparatoria */}
          <article
            className="flex flex-col justify-between p-8 text-left transition-all duration-300 rounded-2xl hover:-translate-y-1 hover:shadow-2xl group"
            style={{
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.1)',
              borderLeft: '5px solid var(--color-accent-light)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div>
              <h3 className="mb-3 text-2xl text-white font-heading">Preparatoria</h3>
              <p className="mb-8 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,.75)' }}>
                Diferentes modalidades y horarios (escolarizado, sabatino, examen único). Tu bachillerato ahora.
              </p>
            </div>
            <a href="#preparatoria" className="btn btn--outline self-start">Ver Modalidades</a>
          </article>
        </div>

        {/* Sellos de confianza */}
        <div className="reveal reveal--delay-4 mt-8 flex items-center justify-center gap-4 text-sm" style={{ color: 'rgba(255,255,255,.5)' }}>
          <span>📋 RVOE SEP</span>
          <span aria-hidden="true">·</span>
          <span>📍 Centro de Veracruz</span>
          <span aria-hidden="true">·</span>
          <span>🗓️ Fines de semana</span>
        </div>
      </div>

      {/* Indicador de scroll hacia abajo */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full animate-bounce no-underline"
        style={{ border: '1.5px solid rgba(255,255,255,.2)' }}
        aria-label="Desplazarse hacia abajo"
      >
        <span
          className="block w-2.5 h-2.5 border-r border-b -translate-y-0.5 rotate-45"
          style={{ borderColor: 'rgba(255,255,255,.5)' }}
          aria-hidden="true"
        />
      </a>
    </section>
  )
}
