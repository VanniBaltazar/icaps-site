import React, { useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import { createTimeline, stagger } from '../../lib/anime';

export default function Gallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

  // Using placeholders for gallery since we don't have images
  const images = [1, 2, 3, 4, 5, 6];

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
            .add(`.${styles.imageWrapper}`, {
              opacity: [0, 1],
              scale: [0.8, 1],
              delay: stagger(100, { grid: [3, 2], from: 'center' }),
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
    <section 
      ref={sectionRef}
      id="galeria" 
      aria-label="Instalaciones de nuestra preparatoria y universidad en Veracruz" 
      className={`section ${styles.gallerySection}`}
    >
      <div className="container">
        <h2 ref={titleRef} className="section-title" style={{ opacity: 0 }}>Conoce Nuestro Campus</h2>
        <p ref={subtitleRef} className="section-subtitle" style={{ opacity: 0 }}>
          Instalaciones modernas y equipadas para brindarte la mejor experiencia de aprendizaje.
        </p>

        <div ref={gridRef} className={styles.grid}>
          {images.map((img) => (
            <div key={img} className={styles.imageWrapper} style={{ opacity: 0 }}>
              {/* This is a placeholder. Replace with actual img tag when assets are available */}
              <div className={styles.placeholder}>
                <span>Imagen {img}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
