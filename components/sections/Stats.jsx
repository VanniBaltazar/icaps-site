import React from 'react';
import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { label: 'Egresados Exitosos', value: '+5,000' },
    { label: 'Años de Experiencia', value: '25' },
    { label: 'Programas Educativos', value: '5' },
    { label: 'Profesores Calificados', value: '50+' },
  ];

  return (
    <section className={`section ${styles.statsSection}`}>
      <div className={`container ${styles.statsContainer}`}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <h3 className={styles.statValue}>{stat.value}</h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
