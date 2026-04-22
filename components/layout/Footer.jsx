import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo}>
          <Image 
            src="/logo.png" 
            alt="ICAPS Sede Madero Logo" 
            width={150} 
            height={75} 
            loading="lazy"
            style={{ objectFit: 'contain' }}
            className={styles.logo} 
          />
          <p className={styles.description}>
            Institución comprometida con la excelencia educativa, formando profesionales líderes en Veracruz.
          </p>
        </div>

        <nav className={styles.linksBlock} aria-label="Enlaces de navegación pie de página">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#galeria">Campus</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div className={styles.linksBlock}>
          <h4>Contacto Rápido</h4>
          <ul>
            <li><a href="tel:2299314411">Tel: 229 931 4411</a></li>
            <li><a href="https://wa.me/522295311945" target="_blank" rel="noopener noreferrer">WhatsApp: 229 531 1945</a></li>
            <li><a href="mailto:info@icaps-edu.com">info@icaps-edu.com</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {currentYear} ICAPS Sede Madero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
