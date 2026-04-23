import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  // Using placeholders for gallery since we don't have images
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section id="galeria" className={`section ${styles.gallerySection}`}>
      <div className="container">
        <h2 className="section-title">Conoce Nuestro Campus</h2>
        <p className="section-subtitle">
          Instalaciones modernas y equipadas para brindarte la mejor experiencia de aprendizaje.
        </p>

        <div className={styles.grid}>
          {images.map((img) => (
            <div key={img} className={styles.imageWrapper}>
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
