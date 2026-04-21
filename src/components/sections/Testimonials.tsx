// Sección Testimonios — Server Component

const TESTIMONIOS = [
  {
    iniciales: 'MG',
    nombre: 'María G.',
    rol: 'Estudiante de Derecho · Veracruz',
    texto: 'Tenía miedo de no poder con el trabajo y la universidad al mismo tiempo, pero en ICAPS solo voy los sábados. Ya estoy en 5° cuatrimestre de Derecho y no he faltado un solo día.',
    delay: '',
  },
  {
    iniciales: 'RL',
    nombre: 'Roberto L.',
    rol: 'Estudiante de Administración · Boca del Río',
    texto: 'La ubicación en el centro de Veracruz me queda perfecta. Vengo de Boca del Río los domingos, estudio Administración y para las 6 ya estoy de regreso en casa.',
    delay: 'reveal--delay-1',
  },
  {
    iniciales: 'AP',
    nombre: 'Ana P.',
    rol: 'Estudiante de Psicopedagogía · Veracruz',
    texto: 'La mensualidad es muy accesible comparada con otras universidades de Veracruz. Estoy estudiando Psicopedagogía y la calidad de los maestros es excelente.',
    delay: 'reveal--delay-2',
  },
]

export function Testimonials() {
  return (
    <section className="section section--alt" id="testimonios" aria-labelledby="testimonios-title">
      <div className="container">
        <header className="section__header">
          <p className="section__pretitle">Lo que dicen nuestros alumnos</p>
          <h2 className="section__title" id="testimonios-title">Historias de Éxito</h2>
          <p className="section__subtitle">
            Personas como tú que decidieron dar el paso y transformar su vida profesional en ICAPS.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIOS.map((t) => (
            <blockquote
              key={t.nombre}
              className={`reveal ${t.delay} relative bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              style={{ borderLeft: '4px solid var(--color-accent)' }}
              aria-label={`Testimonio de ${t.nombre}`}
            >
              {/* Comilla decorativa — accesible con aria-hidden */}
              <span
                className="absolute top-4 right-6 font-heading text-8xl leading-none pointer-events-none select-none"
                style={{ color: 'var(--color-accent-light)' }}
                aria-hidden="true"
              >
                &#8220;
              </span>

              {/* Estrellas */}
              <div className="flex gap-0.5 mb-3" aria-label="5 estrellas" style={{ color: 'var(--color-accent)' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-base italic mb-6" style={{ color: 'var(--color-text)', lineHeight: 1.8 }}>
                &ldquo;{t.texto}&rdquo;
              </p>

              {/* Autor */}
              <footer className="flex items-center gap-4">
                {/* Avatar con iniciales */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full font-heading font-bold text-base flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-mid))',
                    color: 'var(--color-accent)',
                  }}
                  aria-hidden="true"
                >
                  {t.iniciales}
                </div>
                <div>
                  <cite className="block font-heading font-bold text-base not-italic" style={{ color: 'var(--color-text)' }}>
                    {t.nombre}
                  </cite>
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {t.rol}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
