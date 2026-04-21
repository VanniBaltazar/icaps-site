import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.textContent}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Nosotros</h2>
          <p className={styles.description}>
            En ICAPS Sede Madero estamos comprometidos con la formación integral de nuestros estudiantes, brindando herramientas y conocimientos que les permitan destacar en el ámbito profesional y contribuir positivamente a la sociedad.
          </p>
          
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* SVG Icon for Mission */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Nuestra Misión</h3>
              <p>Formar profesionales altamente capacitados, éticos y comprometidos con el desarrollo social y económico de su entorno, mediante programas académicos de excelencia.</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* SVG Icon for Vision */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h3>Nuestra Visión</h3>
              <p>Ser reconocidos como la institución educativa líder en Veracruz por la calidad de nuestros egresados y nuestro modelo educativo innovador y accesible.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          {/* Using a placeholder gradient/abstract since we don't have campus photos yet.
              When real photos are added, replace this div with an img tag. */}
          <div className={styles.imagePlaceholder}>
            <span className={styles.imageText}>Campus ICAPS Sede Madero</span>
          </div>
        </div>
      </div>
    </section>
  );
}
