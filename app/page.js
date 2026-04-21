'use client';

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

export default function Home() {
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
      <Footer />
    </>
  );
}
