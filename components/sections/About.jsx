import React from 'react';
import styles from './About.module.css';
import CallToAction from '../CallToAction';

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Nuestra Misión</h3>
              <p>Brindar servicios educativos y de capacitación con calidad, contribuyendo e impulsando a sus estudiantes de nivel medio superior y superior a ser autónomos, responsables y autodidactas, que se caractericen por ser líderes dentro del entorno social.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* SVG Icon for Vision */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h3>Nuestra Visión</h3>
              <p>Ser una institución educativa líder en formación de estudiantes. Reconocida por su calidad y excelencia académica en el sistema abierto de educación media superior y superior de la zona conurbada Veracruz - Boca del Río.</p>
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          {/* Using a placeholder gradient/abstract since we don't have campus photos yet.
              When real photos are added, replace this div with an img tag. */}
          <div className={styles.imagePlaceholder}>
            <img src="/logo.png" alt="ICAPS Logo" className={styles.aboutLogo} />
            <span className={styles.imageText}>Campus ICAPS Sede Madero</span>
          </div>
        </div>
      </div>

      <div className="container">
        <CallToAction
          text="¿Quieres formar parte de nuestra comunidad académica?"
          primaryBtn={{ href: '#contacto', text: 'Solicitar información' }}
          secondaryBtn={{ href: '#programas', text: 'Ver programas' }}
        />
      </div>
    </section>
  );
}
