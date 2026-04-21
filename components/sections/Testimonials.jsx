import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Estudiar en ICAPS me dio las herramientas prácticas y teóricas para insertarme rápidamente en el mercado laboral. Los profesores son excelentes.",
      name: "María Fernanda López",
      generation: "Generación 2019-2023",
      program: "Lic. en Administración"
    },
    {
      text: "La flexibilidad de horarios en la modalidad de fin de semana me permitió trabajar y estudiar al mismo tiempo sin descuidar mi rendimiento académico.",
      name: "Carlos Rodríguez",
      generation: "Generación 2018-2022",
      program: "Lic. en Derecho"
    },
    {
      text: "El ambiente escolar es increíble y el nivel académico supera las expectativas. Lo recomiendo ampliamente para quienes buscan calidad a un costo accesible.",
      name: "Ana Sofía Martínez",
      generation: "Generación 2020-2024",
      program: "Lic. en Psicopedagogía"
    }
  ];

  return (
    <section className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <h2 className="section-title">Testimonios de Egresados</h2>
        <p className="section-subtitle">
          Nuestra mejor carta de presentación son los casos de éxito de nuestros estudiantes y egresados.
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonio, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.text}>{testimonio.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonio.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{testimonio.name}</h4>
                  <p className={styles.meta}>{testimonio.program} | {testimonio.generation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
