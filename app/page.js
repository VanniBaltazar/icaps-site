'use client';
import { useState, useEffect } from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import Programas from '../components/sections/Programas';
import InfoSede from '../components/sections/InfoSede';
import Testimonials from '../components/sections/Testimonials';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import Map from '../components/sections/Map';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const [showWaButton, setShowWaButton] = useState(true);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    
    const seccionContacto = document.getElementById('contacto');
    if (!seccionContacto) return;

    const observadorContacto = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowWaButton(false);
          } else {
            setShowWaButton(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observadorContacto.observe(seccionContacto);

    return () => {
      observadorContacto.unobserve(seccionContacto);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programas />
        <InfoSede />
        <Testimonials />
        <Gallery />
        <Contact />
        <Map />
      </main>
      <WhatsAppButton isVisible={showWaButton} />
      <ScrollToTop />
      <Footer />
    </>
  );
}
