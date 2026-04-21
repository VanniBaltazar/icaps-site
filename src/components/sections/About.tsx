import Image from 'next/image'

// Valores institucionales que se muestran en la columna derecha
const VALORES = [
  {
    icon: '📍',
    title: 'Ubicación Céntrica en Veracruz',
    text: 'Mariano Arista No. 966 Esq. Av. Francisco I. Madero, Col. Centro. Fácil acceso en transporte público desde cualquier punto de la ciudad.',
  },
  {
    icon: '🗓️',
    title: 'Clases Solo Fines de Semana',
    text: 'Sábados o Domingos. Tu crecimiento profesional sin sacrificar tu empleo ni tu vida familiar.',
  },
  {
    icon: '✅',
    title: 'Validez Oficial (RVOE SEP)',
    text: 'Todas nuestras licenciaturas cuentan con Reconocimiento de Validez Oficial de Estudios.',
  },
]

export function About() {
  return (
    <section className="about section" id="nosotros" aria-labelledby="about-title">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Imagen del campus — optimizada con next/image */}
        <div className="reveal reveal--left rounded-2xl overflow-hidden relative shadow-xl">
          <Image
            src="/images/about/campus.jpg"
            alt="Instalaciones de ICAPS Sede Madero en el centro de Veracruz, Veracruz"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Borde decorativo dorado */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: '2px solid rgba(201,168,76,.2)' }}
            aria-hidden="true"
          />
        </div>

        {/* Contenido textual */}
        <div className="reveal reveal--right">
          <p className="section__pretitle">Quiénes somos</p>
          <h2 className="section__title" id="about-title">ICAPS Sede Madero, Veracruz</h2>

          <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: 1.9 }}>
            En <strong>ICAPS</strong> Sede Madero estamos dedicados a brindarte una educación
            de excelencia en el corazón de <strong>Veracruz, Veracruz</strong>.
            Entendemos que tu tiempo es valioso — por eso nuestras licenciaturas están diseñadas en{' '}
            <strong>horarios de fin de semana</strong>, para que puedas trabajar, atender a tu familia
            y construir tu futuro profesional al mismo tiempo.
          </p>

          {/* Lista de valores con icono y descripción */}
          <div className="flex flex-col gap-6">
            {VALORES.map((valor) => (
              <article
                key={valor.title}
                className="flex gap-4 items-start p-4 rounded-xl transition-colors duration-300 hover:bg-[var(--color-primary-light)]"
              >
                {/* Icono en caja con fondo dorado claro */}
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 text-2xl"
                  style={{ background: 'linear-gradient(135deg, var(--color-accent-light), rgba(201,168,76,.2))' }}
                  aria-hidden="true"
                >
                  {valor.icon}
                </span>
                <div>
                  <h3
                    className="font-heading text-base font-bold mb-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {valor.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {valor.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
