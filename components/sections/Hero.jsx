import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent} animate-fade-up`}>
        <h1 className={styles.title}>
          Construye tu futuro profesional en <span className="text-gradient">ICAPS Sede Madero</span>
        </h1>
        <p className={styles.subtitle}>
          Educación de excelencia con programas diseñados para impulsar tu carrera. Únete a nuestra comunidad académica y alcanza tus metas.
        </p>
        <div className={styles.actions}>
          <a href="#contacto" className="btn btn-primary">
            Solicitar información
          </a>
          <a href="#programas" className="btn btn-outline">
            Ver programas
          </a>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
