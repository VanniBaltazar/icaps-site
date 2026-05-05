import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { createTimeline, stagger } from '../../lib/anime';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

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

            tl.add(contentRef.current.children, {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: stagger(150),
            })
            .add(bottomRef.current, {
              opacity: [0, 1],
            }, '-=800');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={contentRef} className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo} style={{ opacity: 0 }}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo.png" 
              alt="ICAPS Sede Madero Logo" 
              width={120} 
              height={60} 
              loading="lazy"
              style={{ objectFit: 'contain' }}
              className={styles.logo} 
            />
          </div>
          <p className={styles.description}>
            Institución comprometida con la excelencia educativa, formando profesionales líderes en Veracruz.
          </p>
        </div>

        <nav className={styles.linksBlock} aria-label="Enlaces de navegación pie de página" style={{ opacity: 0 }}>
          <h4>Navegación</h4>
          <ul>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#galeria">Campus</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div className={styles.linksBlock} style={{ opacity: 0 }}>
          <h4>Contacto Rápido</h4>
          <ul>
            <li><a href="tel:2299314411">Tel: 229 931 4411</a></li>
            <li><a href="https://wa.me/522295311945" target="_blank" rel="noopener noreferrer">WhatsApp: 229 531 1945</a></li>
            <li><a href="mailto:subdireccion@icaps-edu.com">subdireccion@icaps-edu.com</a></li>
          </ul>
        </div>
      </div>
      
      <div ref={bottomRef} className={styles.bottom} style={{ opacity: 0 }}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {currentYear} ICAPS Sede Madero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
