// Sección de Programas Académicos — Server Component

// Datos de las 5 licenciaturas
const LICENCIATURAS = [
  {
    badge: 'Sábados',
    badgeVariant: 'sabado',
    icon: '🧠',
    id: 'prog-psico',
    title: 'Lic. en Psicopedagogía',
    level: 'Modalidad Sabatina',
    desc: 'Desarrolla habilidades para orientar el proceso de enseñanza y aprendizaje, diseñando estrategias educativas modernas e inclusivas. Ideal para quienes quieren impactar en la educación de Veracruz.',
    featured: true,
    delay: '',
  },
  {
    badge: 'Sábados',
    badgeVariant: 'sabado',
    icon: '⚖️',
    id: 'prog-derecho',
    title: 'Lic. en Derecho',
    level: 'Modalidad Sabatina',
    desc: 'Prepárate como abogado íntegro, analítico y comprometido con la justicia. Formación práctica en las ramas jurídicas más demandadas en la zona de Veracruz.',
    featured: true,
    delay: 'reveal--delay-1',
  },
  {
    badge: 'Domingos',
    badgeVariant: 'domingo',
    icon: '🌍',
    id: 'prog-comercio',
    title: 'Lic. en Comercio Exterior',
    level: 'Modalidad Dominical',
    desc: 'Capacítate para gestionar operaciones aduaneras y logísticas. Aprovecha la ubicación estratégica del Puerto de Veracruz para impulsar negocios internacionales.',
    featured: false,
    delay: 'reveal--delay-2',
  },
  {
    badge: 'Domingos',
    badgeVariant: 'domingo',
    icon: '💼',
    id: 'prog-admin',
    title: 'Lic. Administración de Empresas',
    level: 'Modalidad Dominical',
    desc: 'Conviértete en un líder capaz de dirigir organizaciones con visión estratégica. Domina los recursos empresariales con enfoque práctico.',
    featured: false,
    delay: 'reveal--delay-3',
  },
  {
    badge: 'Domingos',
    badgeVariant: 'domingo',
    icon: '📊',
    id: 'prog-conta',
    title: 'Lic. en Contaduría Pública',
    level: 'Modalidad Dominical',
    desc: 'Domina el análisis financiero, auditoría y control de recursos económicos. Profesión con alta demanda en empresas de todo Veracruz.',
    featured: false,
    delay: 'reveal--delay-4',
  },
]

// Datos de las 5 modalidades de preparatoria
const PREPARATORIA = [
  {
    badge: 'Lunes a Viernes',
    badgeVariant: 'sabado',
    icon: '🏫',
    id: 'prepa-esc',
    title: 'Escolarizado',
    level: 'Lunes a Viernes',
    desc: 'Modalidad presencial tradicional para quienes buscan un ritmo constante y acompañamiento diario de sus docentes.',
    featured: false,
    delay: '',
    ctaLabel: 'Más información →',
  },
  {
    badge: 'Lunes a Jueves',
    badgeVariant: 'sabado',
    icon: '🏢',
    id: 'prepa-semi',
    title: 'Semi-escolarizado',
    level: 'Lunes a Jueves',
    desc: 'Equilibrio perfecto entre clases presenciales y estudio independiente, ideal para quienes trabajan jornadas parciales.',
    featured: false,
    delay: 'reveal--delay-1',
    ctaLabel: 'Más información →',
  },
  {
    badge: 'Viernes',
    badgeVariant: 'domingo',
    icon: '📅',
    id: 'prepa-viernes',
    title: 'Solo Viernes',
    level: 'Intensivo',
    desc: 'Asiste un solo día a la semana. Diseñado para maximizar tu tiempo y permitirte trabajar el resto de la semana.',
    featured: false,
    delay: 'reveal--delay-2',
    ctaLabel: 'Más información →',
  },
  {
    badge: 'Sábados',
    badgeVariant: 'domingo',
    icon: '☀️',
    id: 'prepa-sabado',
    title: 'Solo Sábados',
    level: 'Sabatino',
    desc: 'La opción preferida por quienes trabajan tiempo completo de lunes a viernes. Educación de calidad en fin de semana.',
    featured: false,
    delay: 'reveal--delay-3',
    ctaLabel: 'Más información →',
  },
  {
    badge: 'Examen Único',
    badgeVariant: 'featured',
    icon: '📝',
    id: 'prepa-unico',
    title: 'Curso Examen Único',
    level: 'Certificación Rápida',
    desc: 'Te preparamos para presentar y aprobar el examen único de bachillerato. La vía más rápida para obtener tu certificado.',
    featured: true,
    delay: 'reveal--delay-4',
    ctaLabel: 'Solicitar fechas →',
  },
]

// Estilos del badge según su variante
const BADGE_STYLES: Record<string, string> = {
  sabado:   'background: linear-gradient(135deg, var(--color-accent), #D4B35A); color: var(--color-primary-dark);',
  domingo:  'background: linear-gradient(135deg, var(--color-primary), var(--color-primary-mid)); color: white;',
  featured: 'background: linear-gradient(135deg, #FFD700, var(--color-accent)); color: var(--color-primary-dark);',
}

// Componente reutilizable para una tarjeta de programa
function ProgramCard({ card }: {
  card: typeof LICENCIATURAS[0] & { ctaLabel?: string }
}) {
  return (
    <article
      className={`reveal ${card.delay} relative flex flex-col gap-4 rounded-2xl p-8 border transition-all duration-300 overflow-hidden
        hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]
        ${card.featured
          ? 'border-[rgba(201,168,76,.3)] border-2'
          : 'border-[var(--color-border)] bg-white'
        }`}
      style={card.featured ? {
        background: 'linear-gradient(170deg, white 60%, var(--color-accent-light) 100%)',
      } : undefined}
      aria-labelledby={card.id}
    >
      {/* Línea superior — siempre visible en featured, en hover para los demás */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${card.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
        aria-hidden="true"
      />

      {/* Badge de día/modalidad */}
      <div
        className="absolute top-0 right-6 text-xs font-bold px-3 py-1 rounded-b-md uppercase tracking-wide"
        style={{ ...Object.fromEntries(BADGE_STYLES[card.badgeVariant].split(';').filter(Boolean).map(s => { const [k, v] = s.split(':'); return [k.trim(), v.trim()] })) }}
        aria-label={`Modalidad: ${card.badge}`}
      >
        {card.badge}
      </div>

      <span className="text-4xl leading-none mt-2" aria-hidden="true">{card.icon}</span>

      <h3 className="text-xl font-bold" id={card.id} style={{ color: 'var(--color-primary)' }}>
        {card.title}
      </h3>

      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
        {card.level}
      </p>

      <p className="text-base flex-1" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
        {card.desc}
      </p>

      <a
        href="#contacto"
        className="inline-flex items-center gap-2 text-sm font-bold mt-auto transition-all duration-150 no-underline hover:no-underline hover:gap-3"
        style={{ color: 'var(--color-accent)' }}
      >
        {card.ctaLabel ?? 'Solicitar información →'}
      </a>
    </article>
  )
}

export function Programs() {
  return (
    <>
      {/* ── Licenciaturas ── */}
      <section className="programs section section--alt" id="programas" aria-labelledby="programs-title">
        <div className="container">
          <header className="section__header">
            <p className="section__pretitle">Oferta educativa en Veracruz</p>
            <h2 className="section__title" id="programs-title">Licenciaturas Disponibles</h2>
            <p className="section__subtitle">
              5 carreras profesionales con clases los fines de semana, pensadas para quienes
              trabajan entre semana y quieren obtener su título.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LICENCIATURAS.map(c => <ProgramCard key={c.id} card={c} />)}
          </div>
        </div>
      </section>

      {/* ── Preparatoria ── */}
      <section className="programs section" id="preparatoria" aria-labelledby="prepa-title">
        <div className="container">
          <header className="section__header">
            <p className="section__pretitle">Bachillerato ICAPS</p>
            <h2 className="section__title" id="prepa-title">Modalidades de Preparatoria</h2>
            <p className="section__subtitle">
              Termina tu bachillerato con nosotros. Ofrecemos horarios que se adaptan a tus necesidades laborales y personales.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREPARATORIA.map(c => <ProgramCard key={c.id} card={c} />)}
          </div>
        </div>
      </section>
    </>
  )
}
