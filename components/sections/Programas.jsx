import React from 'react';
import styles from './Programas.module.css';

export default function Programas() {
  const programas = [
    {
      title: 'Preparatoria',
      description: 'Termina tu preparatoria con opciones flexibles. Contamos con modalidad escolarizada y semi-escolarizada adaptada a tus necesidades.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      )
    },
    {
      title: 'Lic. en Administración de Empresas',
      description: 'Adquiere las habilidades gerenciales y de liderazgo necesarias para dirigir organizaciones exitosas en un entorno global.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      title: 'Lic. en Derecho',
      description: 'Fórmate como un profesional del derecho capaz de analizar, interpretar y aplicar las normas jurídicas con ética y responsabilidad.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      )
    }
  ];

  return (
    <section id="programas" className={`section ${styles.programasSection}`}>
      <div className="container">
        <h2 className="section-title">Nuestros Programas</h2>
        <p className="section-subtitle">
          Elige el camino que mejor se adapte a tus metas. Contamos con opciones de preparatoria y nivel superior.
        </p>

        <div className={styles.grid}>
          {programas.map((programa, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {programa.icon}
              </div>
              <h3 className={styles.cardTitle}>{programa.title}</h3>
              <p className={styles.cardDescription}>{programa.description}</p>
              <a href="#contacto" className={styles.cardLink}>
                Pedir información
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
