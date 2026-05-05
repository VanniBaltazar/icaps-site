import React, { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import { createTimeline, stagger } from '../../lib/anime';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

  const testimonials = [
    {
      text: "Estudiar en ICAPS me dio las herramientas prácticas y teóricas para insertarme rápidamente en el mercado laboral. Los profesores son excelentes.",
      name: "María Fernanda López",
      generation: "Generación 2019-2023",
      program: "Lic. en Administración"
    },
    {
      text: "La flexibilidad de horarios en la modalidad de fin de semana me permitió trabajar y estudiar al mismo tiempo sin descuidar mi rendimiento académico.",
      name: "Carlos Rodríguez",
      generation: "Generación 2018-2022",
      program: "Lic. en Derecho"
    },
    {
      text: "El ambiente escolar es increíble y el nivel académico supera las expectativas. Lo recomiendo ampliamente para quienes buscan calidad a un costo accesible.",
      name: "Ana Sofía Martínez",
      generation: "Generación 2020-2024",
      program: "Lic. en Psicopedagogía"
    }
  ];

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
            .add(subtitleRef.current, {
              opacity: [0, 1],
              translateY: [20, 0],
            }, '-=800')
            .add(`.${styles.card}`, {
              opacity: [0, 1],
              scale: [0.9, 1],
              translateY: [30, 0],
              delay: stagger(200),
            }, '-=600');

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
    <section ref={sectionRef} aria-label="Testimonios de alumnos de nuestra escuela en Veracruz" className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <h2 ref={titleRef} className="section-title" style={{ opacity: 0 }}>Testimonios de Egresados</h2>
        <p ref={subtitleRef} className="section-subtitle" style={{ opacity: 0 }}>
          Nuestra mejor carta de presentación son los casos de éxito de nuestros estudiantes y egresados.
        </p>

        <div ref={gridRef} className={styles.grid}>
          {testimonials.map((testimonio, index) => (
            <div key={index} className={styles.card} style={{ opacity: 0 }}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.text}>{testimonio.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonio.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{testimonio.name}</h4>
                  <p className={styles.meta}>{testimonio.program} | {testimonio.generation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
