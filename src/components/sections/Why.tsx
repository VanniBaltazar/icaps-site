// Sección "¿Por qué ICAPS?" — Server Component

const BENEFICIOS = [
  {
    icon: '⏰',
    title: 'Horarios que se Adaptan',
    text: 'Clases un solo día a la semana. Trabaja de lunes a viernes, estudia Sábado o Domingo.',
    delay: '',
  },
  {
    icon: '💸',
    title: 'Inversión Accesible',
    text: 'Inscripción de $1,000 y mensualidades de $1,100. Sin pagos sorpresa, sin letras pequeñas.',
    delay: 'reveal--delay-1',
  },
  {
    icon: '🏛️',
    title: 'En el Centro de Veracruz',
    text: 'A pasos del Zócalo. Llega fácil en transporte público desde cualquier colonia de Veracruz y Boca del Río.',
    delay: 'reveal--delay-2',
  },
  {
    icon: '📜',
    title: 'Título con Validez Oficial',
    text: 'Reconocimiento ante la SEP. Tu título como licenciado tiene valor en todo México.',
    delay: 'reveal--delay-3',
  },
]

export function Why() {
  return (
    <section className="section section--warm" id="por-que" aria-labelledby="why-title">
      <div className="container">
        <header className="section__header">
          <p className="section__pretitle">Ventajas de estudiar aquí</p>
          <h2 className="section__title" id="why-title">¿Por qué elegir ICAPS Sede Madero?</h2>
          <p className="section__subtitle">
            Diseñamos cada aspecto de tu experiencia educativa pensando en ti — un profesional que quiere seguir creciendo.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFICIOS.map((b) => (
            <article
              key={b.title}
              className={`reveal ${b.delay} text-center p-8 px-6 rounded-2xl bg-white border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
            >
              {/* Icono con micro-animación en hover */}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 text-3xl transition-transform duration-[600ms] group-hover:scale-110 group-hover:-rotate-3"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-bg))' }}
                aria-hidden="true"
              >
                {b.icon}
              </div>
              <h3 className="font-heading text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                {b.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
