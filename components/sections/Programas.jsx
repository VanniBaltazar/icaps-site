import React, { useEffect, useRef } from 'react';
import styles from './Programas.module.css';
import ProgramsGrid from '../ProgramsGrid';
import CallToAction from '../CallToAction';
import { createTimeline, stagger } from '../../lib/anime';

export default function Programas() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
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
            .add(subtitleRef.current, {
              opacity: [0, 1],
              translateY: [20, 0],
            }, '-=800')
            .add('.programa-card', {
              opacity: [0, 1],
              translateY: [40, 0],
              delay: stagger(100),
            }, '-=600')
            .add(ctaRef.current, {
              opacity: [0, 1],
              scale: [0.95, 1],
            }, '-=400');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
      id="programas" 
      aria-label="Programas educativos, preparatoria y universidad en Veracruz" 
      className={`section ${styles.programasSection}`}
    >
      <div className="container">
        <h2 ref={titleRef} className="section-title" style={{ opacity: 0 }}>Nuestros Programas</h2>
        <p ref={subtitleRef} className="section-subtitle" style={{ opacity: 0 }}>
          Elige el camino que mejor se adapte a tus metas. Contamos con opciones de preparatoria y nivel superior.
        </p>

        <div ref={gridRef}>
          <ProgramsGrid />
        </div>

        <div ref={ctaRef} style={{ opacity: 0 }}>
          <CallToAction 
            text="¿No encuentras lo que buscas? Nuestros asesores te orientan sin compromiso."
            variant="centered"
            primaryBtn={{ href: '#contacto', text: 'Hablar con un asesor' }}
            onWhatsapp={{ href: 'https://wa.me/522295311945?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20de%20ICAPS', text: 'WhatsApp directo' }}
          />
        </div>
      </div>
    </section>
  );
}
