'use client';
import React, { useRef, useEffect } from 'react';

export default function ProgramCard({ title, level, description, schedules, icon, iconColorClass, delayIndex }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      if (cardRef.current) {
        cardRef.current.classList.add('visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, (delayIndex % 3) * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delayIndex]);

  return (
    <div ref={cardRef} className="programa-card">
      <div className={`programa-card__icono ${iconColorClass}`}>
        {icon}
      </div>
      <span className="programa-card__nivel">{level}</span>
      <h3 className="programa-card__titulo">{title}</h3>
      <p className="programa-card__descripcion">{description}</p>
      <div className="programa-card__horarios">
        {schedules.map((schedule, idx) => (
          <span key={idx} className="horario-tag">{schedule}</span>
        ))}
      </div>
      <a href="#contacto" className="programa-card__btn">Pedir información</a>
    </div>
  );
}
