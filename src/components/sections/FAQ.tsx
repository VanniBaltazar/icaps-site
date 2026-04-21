'use client'

import { useState } from 'react'

// Preguntas frecuentes — datos extraídos del HTML original
const FAQS = [
  {
    id: 'faq-1',
    pregunta: '¿Puedo estudiar una licenciatura solo los fines de semana en Veracruz?',
    respuesta: 'Sí. En ICAPS Sede Madero ofrecemos 5 licenciaturas con clases exclusivamente los <strong>Sábados o Domingos</strong>, pensadas para personas que trabajan entre semana. Puedes elegir entre Psicopedagogía y Derecho (sábados) o Comercio Exterior, Administración y Contaduría (domingos).',
  },
  {
    id: 'faq-2',
    pregunta: '¿Qué licenciaturas ofrece ICAPS en Veracruz?',
    respuesta: 'Ofrecemos: <strong>Psicopedagogía</strong> (Sábados), <strong>Derecho</strong> (Sábados), <strong>Comercio Exterior</strong> (Domingos), <strong>Administración de Empresas</strong> (Domingos) y <strong>Contaduría Pública</strong> (Domingos). Todas con Reconocimiento de Validez Oficial (RVOE).',
  },
  {
    id: 'faq-3',
    pregunta: '¿Cuánto cuesta estudiar en ICAPS Veracruz?',
    respuesta: 'La <strong>inscripción es de $1,000 MXN</strong> y la <strong>mensualidad de $1,100 MXN</strong>. También existe la opción de <strong>pago único total de $4,500 MXN</strong>. Sin pagos sorpresa ni cuotas ocultas.',
  },
  {
    id: 'faq-4',
    pregunta: '¿Dónde se ubica ICAPS Sede Madero en Veracruz?',
    respuesta: 'Nos encontramos en <strong>Mariano Arista No. 966 Esq. Av. Francisco I. Madero, Col. Centro, Veracruz, Ver. CP 91700</strong>. Estamos en pleno centro de Veracruz, con fácil acceso en transporte público desde cualquier punto de la ciudad y Boca del Río.',
  },
  {
    id: 'faq-5',
    pregunta: '¿Qué documentos necesito para inscribirme?',
    respuesta: 'Necesitas: <strong>Acta de Nacimiento</strong>, <strong>CURP</strong>, <strong>Certificado de bachillerato</strong>, <strong>Comprobante de domicilio</strong> y <strong>Copia de INE</strong>. Una vez que tengas tus documentos, puedes inscribirte en un solo día.',
  },
  {
    id: 'faq-6',
    pregunta: '¿Las licenciaturas de ICAPS tienen validez oficial?',
    respuesta: 'Sí, todas nuestras licenciaturas cuentan con <strong>Reconocimiento de Validez Oficial de Estudios (RVOE) ante la SEP</strong>. Tu título profesional tiene valor y reconocimiento en todo México.',
  },
  {
    id: 'faq-7',
    pregunta: '¿Qué modalidades de preparatoria ofrecen?',
    respuesta: 'Contamos con 5 opciones: <strong>Escolarizada</strong> (Lunes-Viernes), <strong>Semi-escolarizada</strong> (Lunes-Jueves), <strong>Solo Viernes</strong>, <strong>Solo Sábados</strong> y el <strong>Curso para Examen Único</strong>. Todas diseñadas para que termines tu bachillerato con validez oficial.',
  },
]

export function FAQ() {
  // Solo un ítem abierto a la vez — null significa todos cerrados
  const [abierto, setAbierto] = useState<string | null>(null)

  function toggleItem(id: string) {
    setAbierto(prev => prev === id ? null : id)
  }

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <header className="section__header">
          <p className="section__pretitle">Resolvemos tus dudas</p>
          <h2 className="section__title" id="faq-title">Preguntas Frecuentes</h2>
          <p className="section__subtitle">
            Todo lo que necesitas saber antes de inscribirte en ICAPS Sede Madero, Veracruz.
          </p>
        </header>

        {/* Lista de acordeón */}
        <div
          className="max-w-[800px] mx-auto flex flex-col gap-3"
          role="list"
        >
          {FAQS.map((faq) => {
            const estaAbierto = abierto === faq.id
            return (
              <div
                key={faq.id}
                role="listitem"
                className="bg-white rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  border: estaAbierto
                    ? '1px solid var(--color-accent)'
                    : '1px solid var(--color-border)',
                  boxShadow: estaAbierto ? 'var(--shadow-md)' : 'none',
                }}
              >
                {/* Botón de pregunta */}
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-transparent border-none cursor-pointer text-left font-body text-base font-bold transition-colors duration-150 hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--color-text)' }}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={estaAbierto}
                  aria-controls={`${faq.id}-answer`}
                  id={`${faq.id}-btn`}
                >
                  <span>{faq.pregunta}</span>

                  {/* Ícono de flecha que rota al abrirse */}
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 transition-all duration-300"
                    style={{
                      background: estaAbierto ? 'var(--color-accent)' : 'var(--color-primary-light)',
                      color: estaAbierto ? 'var(--color-primary-dark)' : 'var(--color-primary)',
                      transform: estaAbierto ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Respuesta — visible solo cuando está abierto */}
                <div
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-btn`}
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: estaAbierto ? '300px' : '0' }}
                >
                  <p
                    className="px-6 pb-6 text-base"
                    style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}
                    dangerouslySetInnerHTML={{ __html: faq.respuesta }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
