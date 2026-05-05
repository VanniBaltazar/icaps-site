'use client';
import React, { useEffect, useRef } from 'react';
import { createTimeline, stagger } from '../../lib/anime';
import styles from './About.module.css';
import CallToAction from '../CallToAction';

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = createTimeline({
              defaults: {
                ease: 'outExpo',
                duration: 1000,
              }
            });

            tl.add(titleRef.current, {
              opacity: [0, 1],
              translateY: [30, 0],
              delay: 100,
            })
            .add(descRef.current, {
              opacity: [0, 1],
              translateY: [20, 0],
            }, '-=800')
            .add(cardsRef.current.children, {
              opacity: [0, 1],
              translateX: [-30, 0],
              delay: stagger(200),
            }, '-=600')
            .add(imageRef.current, {
              opacity: [0, 1],
              scale: [0.95, 1],
              translateX: [40, 0],
              duration: 1200,
            }, '-=1000')
            .add(ctaRef.current, {
              opacity: [0, 1],
              translateY: [20, 0],
            }, '-=800');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      aria-label="Acerca de nuestra institución educativa en Veracruz" 
      className={`section ${styles.aboutSection}`}
    >
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.textContent}>
          <h2 ref={titleRef} className="section-title reveal" style={{ textAlign: 'left', opacity: 0 }}>
            Nosotros
          </h2>
          <p ref={descRef} className={`${styles.description} reveal`} style={{ opacity: 0 }}>
            En ICAPS estamos comprometidos con la formación integral de nuestros estudiantes, brindando herramientas y conocimientos que les permitan destacar en el ámbito profesional y contribuir positivamente a la sociedad.
          </p>

          <div ref={cardsRef} className={styles.cards}>
            <div className={`${styles.card} reveal`} style={{ opacity: 0 }}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Nuestra Misión</h3>
              <p>Brindar servicios educativos y de capacitación con calidad, contribuyendo e impulsando a sus estudiantes de nivel medio superior y superior a ser autónomos, responsables y autodidactas, que se caractericen por ser líderes dentro del entorno social.</p>
            </div>

            <div className={`${styles.card} reveal`} style={{ opacity: 0 }}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h3>Nuestra Visión</h3>
              <p>Ser una institución educativa líder en formación de estudiantes. Reconocida por su calidad y excelencia académica en el sistema abierto de educación media superior y superior de la zona conurbada Veracruz - Boca del Río.</p>
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div ref={imageRef} className={`${styles.imageWrapper} reveal`} style={{ opacity: 0 }}>
            <img 
              src="/images/campus-madero.png" 
              alt="Campus ICAPS Madero" 
              className={styles.campusImage}
              onError={(e) => {
                e.target.src = '/logo.png';
                e.target.classList.add(styles.fallbackLogo);
              }}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageBadge}>Campus Sede Madero</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={ctaRef} className="container reveal" style={{ opacity: 0 }}>
        <CallToAction
          text="¿Quieres formar parte de nuestra comunidad académica?"
          primaryBtn={{ href: '#contacto', text: 'Solicitar información' }}
          secondaryBtn={{ href: '#programas', text: 'Ver programas' }}
        />
      </div>
    </section>
  );
}
