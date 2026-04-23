'use client';
import React from 'react';
import styles from './Stats.module.css';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

const AnimatedStat = ({ stat }) => {
  const valueNumber = parseInt(stat.value.replace(/\D/g, ''), 10);
  const prefix = stat.value.startsWith('+') ? '+' : '';
  const suffix = stat.value.endsWith('+') ? '+' : (stat.value.endsWith(' años') ? ' años' : '');
  
  const [count, ref] = useAnimatedCounter(valueNumber, 1800);
  
  const displayValue = `${prefix}${count.toLocaleString('es-MX')}${suffix}`;
  
  return (
    <div ref={ref} className={styles.statItem}>
      <h3 className={styles.statValue}>{displayValue}</h3>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { label: 'Egresados Exitosos', value: '+5000' },
    { label: 'Años de Experiencia', value: '25' },
    { label: 'Programas Educativos', value: '5' },
    { label: 'Profesores Calificados', value: '50+' },
  ];

  return (
    <section className={`section ${styles.statsSection}`}>
      <div className={`container ${styles.statsContainer}`}>
        {stats.map((stat, index) => (
          <AnimatedStat key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
}
