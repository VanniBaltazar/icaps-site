import React, { useEffect } from 'react';
import styles from './ProgramDetailsModal.module.css';

export default function ProgramDetailsModal({ isOpen, onClose, title, detailedInfo }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.header}>
          <span className={styles.subtitle}>Detalles del programa</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Modalidades y Horarios</h3>
            <div className={styles.modalidadesGrid}>
              {detailedInfo.modalidades.map((mod, idx) => (
                <div key={idx} className={styles.modalityCard}>
                  <div className={styles.modalityHeader}>
                    <span className={styles.modalityBadge}>{mod.name}</span>
                  </div>
                  <div className={styles.schedulesList}>
                    {mod.schedules.map((s, sIdx) => (
                      <div key={sIdx} className={styles.scheduleItem}>
                        <div className={styles.scheduleTime}>
                          <strong>{s.day}</strong>
                          <span>{s.time}</span>
                        </div>
                        <div className={styles.scheduleCost}>
                          <p>{s.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.requirementsSection}>
              <h3 className={styles.sectionTitleSmall}>Requisitos de Inscripción</h3>
              <ul className={styles.requirementsList}>
                {detailedInfo.requisitos.map((req, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.ctaSection}>
              <div className={styles.ctaCard}>
                <h4>¿Listo para comenzar?</h4>
                <p>Nuestros asesores te ayudarán con todo el proceso de inscripción.</p>
                <a 
                  href={`https://wa.me/522295311945?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20programa%20de%20${title}`} 
                  className={styles.waBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
