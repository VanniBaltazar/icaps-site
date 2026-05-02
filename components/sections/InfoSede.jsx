import React, { useState } from 'react';
import styles from './InfoSede.module.css';

const infoData = {
  bachillerato: {
    title: 'Bachillerato',
    horarios: [
      { label: 'Escolarizado', items: ['Lun - Vie (9:00am a 1:40pm)'] },
      { label: 'Semi-escolarizado', items: ['Lun - Jue (12:00pm a 2:30pm)', 'Viernes (9:00am a 2:40pm)', 'Sábados (2:00pm a 7:30pm)'] }
    ],
    inversion: [
      { label: 'Inscripción (Trimestral)', value: '$1,000' },
      { label: 'Mensualidad', value: '$950' },
      { label: 'Pago Trimestral (Promo)', value: '$2,000*', isFeatured: true }
    ],
    requisitos: [
      'Acta de nacimiento',
      'CURP',
      'Certificado de Secundaria',
      'Comprobante de domicilio',
      'Copia de INE (Padre o Tutor)'
    ],
    nota: '*El pago trimestral aplica para modalidades semi-escolarizadas.'
  },
  licenciaturas: {
    title: 'Licenciaturas',
    horarios: [
      { label: 'Sábados', items: ['Psicopedagogía', 'Derecho'] },
      { label: 'Domingos', items: ['Comercio Exterior', 'Administración de Empresas', 'Contaduría Pública'] }
    ],
    inversion: [
      { label: 'Inscripción', value: '$1,000' },
      { label: 'Mensualidad', value: '$1,100' },
      { label: 'Pago Único (Cuatrimestre)', value: '$4,500', isFeatured: true }
    ],
    requisitos: [
      'Acta de nacimiento',
      'CURP',
      'Certificado de Bachillerato',
      'Comprobante de domicilio',
      'Copia de INE'
    ]
  },
  maestria: {
    title: 'Maestría',
    horarios: [
      { label: 'Viernes', items: ['16:00 a 20:00 horas'] }
    ],
    inversion: [
      { label: 'Inscripción', value: '$2,000' },
      { label: 'Mensualidad', value: '$1,650' },
      { label: 'Beca Anticipada', value: '50% Insc.*', isFeatured: true }
    ],
    requisitos: [
      'Acta de nacimiento actualizada',
      'CURP',
      'Certificado de Licenciatura',
      'Cédula Profesional (Copia)',
      'Comprobante de domicilio'
    ],
    nota: '*Descuento en inscripción pagando con un mes de anticipación.'
  }
};

export default function InfoSede() {
  const [selectedProgram, setSelectedProgram] = useState('licenciaturas');
  const data = infoData[selectedProgram];

  return (
    <section aria-label="Ubicación y costos de nuestra escuela en Veracruz" className={`section ${styles.infoSection}`}>
      <div className="container">
        <h2 className="section-title">Información Sede Madero</h2>
        <p className="section-subtitle">
          Conoce nuestra excelente ubicación en el centro de Veracruz, nuestra oferta educativa específica, horarios, costos y requisitos de inscripción.
        </p>

        <div className={styles.selectorWrapper}>
          <div className={styles.selector}>
            {Object.keys(infoData).map((key) => (
              <button
                key={key}
                className={`${styles.selectorBtn} ${selectedProgram === key ? styles.active : ''}`}
                onClick={() => setSelectedProgram(key)}
              >
                {infoData[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {/* Horarios/Programas */}
          <article key={`horarios-${selectedProgram}`} className={`${styles.infoCard} ${styles.fadeAnim}`}>
            <div className={styles.cardHeader}>
              <h3>{selectedProgram === 'maestria' ? 'Horario de Clase' : (selectedProgram === 'bachillerato' ? 'Modalidades y Horarios' : 'Programas Disponibles')}</h3>
            </div>
            <div className={styles.cardContent}>
              {data.horarios.map((block, i) => (
                <div key={i} className={styles.block}>
                  <h4>{block.label}:</h4>
                  <ul>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          {/* Costes */}
          <article key={`costos-${selectedProgram}`} className={`${styles.infoCard} ${styles.highlightCard} ${styles.fadeAnim}`}>
            <div className={styles.cardHeader}>
              <h3>Costos de Inversión</h3>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.costList}>
                {data.inversion.map((cost, i) => (
                  <li key={i} className={cost.isFeatured ? styles.featuredCost : ''}>
                    <span>{cost.label}</span>
                    <strong>{cost.value}</strong>
                  </li>
                ))}
              </ul>
              {data.nota && <p className={styles.costNote}>{data.nota}</p>}
            </div>
          </article>

          {/* Requisitos */}
          <article key={`requisitos-${selectedProgram}`} className={`${styles.infoCard} ${styles.fadeAnim}`}>
            <div className={styles.cardHeader}>
              <h3>Requisitos de Ingreso</h3>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.reqList}>
                {data.requisitos.map((req, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Ubicación (Fixed) */}
          <article className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Ubicación y Contacto</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.block}>
                <h4>Dirección:</h4>
                <p className={styles.addressText}>Arista #966, Esquina Madero, Colonia Centro, Veracruz, Ver.</p>
              </div>
              <div className={styles.block}>
                <h4>Atención:</h4>
                <p className={styles.addressText}>Lunes a Sábado: 9:00am - 5:30pm</p>
              </div>
              <div className={styles.contactButtons}>
                <a href="https://wa.me/522295311945" target="_blank" rel="noopener noreferrer" className={styles.waLink}>
                  WhatsApp Directo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

