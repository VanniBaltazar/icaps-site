import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="ICAPS Sede Madero Logo" 
            width={120} 
            height={60} 
            priority
            style={{ objectFit: 'contain' }}
          />
        </a>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`} aria-label="Main Navigation">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
          <a href="#programas" onClick={() => setIsMobileMenuOpen(false)}>Programas</a>
          <a href="#galeria" onClick={() => setIsMobileMenuOpen(false)}>Campus</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          <a href="#contacto" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Inscribirme
          </a>
        </nav>

        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1Open : ''}`} aria-hidden="true"></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2Open : ''}`} aria-hidden="true"></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3Open : ''}`} aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}
