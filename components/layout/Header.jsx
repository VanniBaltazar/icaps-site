import React, { useState, useEffect } from 'react';
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
          <img src="/logo.png" alt="ICAPS Logo" />
        </a>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
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
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1Open : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2Open : ''}`}></span>
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3Open : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
