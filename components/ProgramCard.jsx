'use client';
import React, { useRef, useEffect, useState } from 'react';
import ProgramDetailsModal from './ui/ProgramDetailsModal';

export default function ProgramCard({ title, level, description, schedules, icon, iconColorClass, delayIndex, detailedInfo }) {
  // Old observer removed in favor of Anime.js in parent component
  const cardRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article ref={cardRef} className="programa-card">
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
        
        <div className="programa-card__actions">
          {detailedInfo ? (
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="programa-card__btn"
            >
              Ver detalles y costos
            </button>
          ) : (
            <a href="#contacto" className="programa-card__btn">Pedir información</a>
          )}
        </div>
      </article>

      {detailedInfo && (
        <ProgramDetailsModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          detailedInfo={detailedInfo}
        />
      )}
    </>
  );
}
