'use client';

import React, { useEffect, useRef } from 'react';
import { animate, createTimeline, stagger } from '../../lib/anime';
import styles from './Hero.module.css';

export default function Hero() {
  const bgRef = useRef(null);
  const heroContentRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Parallax Effect
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0) scale(1.15)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Entrance Animation Timeline (v4 API)
    const timeline = createTimeline({
      defaults: {
        ease: 'outQuart',
      }
    });

    timeline
      // 1. Line 1: Quick reveal
      .add(`.${styles.line1} .letter`, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 300,
        delay: stagger(20),
      })
      // 2. ICAPS: The Hero - High impact forming from extremes
      .add(`.icaps-letter`, {
        translateX: (el, i) => {
          const positions = [-1000, -500, 0, 500, 1000];
          return [positions[i], 0];
        },
        translateY: (el, i) => i === 2 ? [-250, 0] : 0, 
        opacity: [0, 1],
        scale: [2.5, 1],
        filter: ['blur(15px)', 'blur(0px)'],
        duration: 500,
        delay: stagger(40, { from: 'center' }),
        ease: 'outExpo'
      }, '-=100')
      // 3. Line 2 & Subtitle: Supporting info
      .add(`.${styles.line2} .letter`, {
        translateY: [15, 0],
        opacity: [0, 1],
        duration: 300,
        delay: stagger(20),
      }, '-=200')
      .add(subtitleRef.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
      }, '-=300')
      // 4. Actions: The Call to Action
      .add(`.${styles.actions} .hero-btn`, {
        translateY: [20, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 400,
        delay: stagger(60),
      }, '-=300');

    // Idle Floating Animation
    animate(heroContentRef.current, {
      translateY: [-5, 5],
      alternate: true,
      loop: true,
      duration: 3000,
      ease: 'inOutQuad'
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="hero" aria-label="ICAPS - La mejor opción de escuela y universidad en Veracruz" className={styles.hero}>
      <div ref={bgRef} className={styles.parallaxBg}></div>
      <div className={styles.overlay}></div>
      <div ref={heroContentRef} className={`container ${styles.heroContent}`}>
        <h1 className={`${styles.title} hero-title`}>
          <div className={styles.line1}>
            {splitText("Construye tu futuro profesional en")}
          </div>
          <div className={styles.icapsContainer}>
            {"ICAPS".split('').map((letter, i) => (
              <span key={i} className={`${styles.icapsEmphasis} icaps-letter`}>
                {letter}
              </span>
            ))}
          </div>
          <div className={styles.line2}>
            {splitText("Sede Madero")}
          </div>
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Educación de excelencia con ubicación en el centro de Veracruz. Programas diseñados para impulsar tu carrera y alcanzar tus metas académicas.
        </p>
        <div className={styles.actions}>
          <a href="#contacto" className="btn btn-primary hero-btn">
            Solicitar información
          </a>
          <a href="#programas" className="btn btn-outline hero-btn">
            Preparatoria/Universidad
          </a>
          <a href="#programas" className="btn btn-outline hero-btn">
            Maestría
          </a>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
