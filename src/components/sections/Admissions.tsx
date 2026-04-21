// Sección Costos y Requisitos — Server Component

export function Admissions() {
  return (
    <section className="section" id="admisiones" aria-labelledby="admisiones-title">
      <div className="container">
        <header className="section__header">
          <p className="section__pretitle">Inversión y proceso de inscripción</p>
          <h2 className="section__title" id="admisiones-title">Costos y Requisitos</h2>
          <p className="section__subtitle">
            Educación accesible sin comprometer la calidad. Conoce tu inversión educativa en ICAPS Veracruz.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

          {/* Tarjeta de costos */}
          <div className="reveal relative bg-white rounded-2xl p-8 shadow-md overflow-hidden">
            {/* Línea decorativa superior */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
              aria-hidden="true"
            />
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--color-primary)' }}>
              <span aria-hidden="true">💰</span> Costos
            </h3>

            {/* Fila: Inscripción */}
            <div className="flex justify-between items-center py-4 border-b border-[rgba(212,219,237,.5)] text-base">
              <span>Inscripción</span>
              <span className="font-bold">$1,000 MXN</span>
            </div>

            {/* Fila: Mensualidad */}
            <div className="flex justify-between items-center py-4 border-b border-[rgba(212,219,237,.5)] text-base">
              <span>Mensualidad</span>
              <span className="font-bold">$1,100 MXN</span>
            </div>

            {/* Fila destacada: Pago único */}
            <div
              className="flex justify-between items-center py-4 border-t-2 border-dashed mt-2"
              style={{ borderColor: 'var(--color-accent-light)' }}
            >
              <span className="text-base">Pago Único Total</span>
              <span
                className="text-xl font-extrabold"
                style={{ color: 'var(--color-accent)' }}
              >
                $4,500 MXN
              </span>
            </div>
          </div>

          {/* Tarjeta de requisitos */}
          <div className="reveal reveal--delay-1 relative bg-white rounded-2xl p-8 shadow-md overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
              aria-hidden="true"
            />
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--color-primary)' }}>
              <span aria-hidden="true">📋</span> Requisitos
            </h3>

            {/* Lista de documentos con checkmarks institucionales */}
            <ul className="flex flex-col gap-0">
              {[
                'Acta de Nacimiento',
                'CURP',
                'Certificado de bachillerato',
                'Comprobante de domicilio',
                'Copia de INE',
              ].map((req) => (
                <li
                  key={req}
                  className="relative py-3 pl-8 text-base border-b border-[rgba(212,219,237,.5)] last:border-b-0"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {/* Checkmark circular con colores institucionales */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black"
                    style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
