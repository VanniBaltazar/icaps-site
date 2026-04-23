import React from 'react';
import styles from './Programas.module.css';
import ProgramsGrid from '../ProgramsGrid';
import CallToAction from '../CallToAction';

export default function Programas() {
  return (
    <section id="programas" className={`section ${styles.programasSection}`}>
      <div className="container">
        <h2 className="section-title">Nuestros Programas</h2>
        <p className="section-subtitle">
          Elige el camino que mejor se adapte a tus metas. Contamos con opciones de preparatoria y nivel superior.
        </p>

        <ProgramsGrid />

        <CallToAction 
          text="¿No encuentras lo que buscas? Nuestros asesores te orientan sin compromiso."
          variant="centered"
          primaryBtn={{ href: '#contacto', text: 'Hablar con un asesor' }}
          onWhatsapp={{ href: 'https://wa.me/522295311945?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20programas%20de%20ICAPS', text: 'WhatsApp directo' }}
        />
      </div>
    </section>
  );
}
