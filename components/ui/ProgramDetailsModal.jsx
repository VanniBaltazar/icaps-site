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

  const isPosgrado = detailedInfo?.tipo === 'posgrado';

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={isPosgrado ? styles.headerPosgrado : styles.header}>
          <span className={styles.subtitle}>Detalles del programa</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.content}>
          {isPosgrado ? (
            /* ── VISTA POSGRADO: Burbujas y secciones ricas ── */
            <div className={styles.posgradoLayout}>

              {/* Perfil de Egreso */}
              {detailedInfo.perfil && (
                <div className={styles.posgradoSection}>
                  <h3 className={styles.sectionTitle}>Perfil de Egreso y Propuesta de Valor</h3>
                  <div className={styles.perfilBubblesGrid}>
                    {detailedInfo.perfil.map((item, idx) => (
                      <div key={idx} className={styles.perfilBubble}>
                        <span className={styles.perfilBubbleLabel}>{item.label}</span>
                        <p className={styles.perfilBubbleDesc}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detalles del Programa */}
              {detailedInfo.programaDetalles && (
                <div className={styles.posgradoSection}>
                  <h3 className={styles.sectionTitle}>Detalles del Programa</h3>
                  <div className={styles.detalleBubblesRow}>
                    {detailedInfo.programaDetalles.map((item, idx) => (
                      <div key={idx} className={styles.detalleBubble}>
                        <span className={styles.detalleIcon} aria-hidden="true">{item.icon}</span>
                        <span className={styles.detalleLabel}>{item.label}</span>
                        <strong className={styles.detalleValue}>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inversión */}
              {detailedInfo.inversion && (
                <div className={styles.posgradoSection}>
                  <h3 className={styles.sectionTitle}>Inversión y Beneficios</h3>
                  <div className={styles.inversionGrid}>
                    <div className={styles.inversionChip}>
                      <span className={styles.inversionChipLabel}>Mensualidad</span>
                      <strong className={styles.inversionChipAmount}>{detailedInfo.inversion.mensualidad}</strong>
                    </div>
                    <div className={styles.inversionChip}>
                      <span className={styles.inversionChipLabel}>Inscripción</span>
                      <strong className={styles.inversionChipAmount}>{detailedInfo.inversion.inscripcion}</strong>
                    </div>
                    <div className={styles.inversionDescuento}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{detailedInfo.inversion.descuento}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Requisitos + Contacto */}
              <div className={styles.bottomGrid}>
                {detailedInfo.requisitos && (
                  <div className={styles.requirementsSection}>
                    <h3 className={styles.sectionTitleSmall}>Requisitos de Admisión</h3>
                    <p className={styles.requisitosNote}>Original y 3 copias de:</p>
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
                )}

                {detailedInfo.contacto && (
                  <div className={styles.contactoCard}>
                    <h4 className={styles.contactoTitle}>Atención y Consultoría</h4>
                    <div className={styles.contactoItems}>
                      <div className={styles.contactoItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        <div>
                          {detailedInfo.contacto.telefonos.map((tel, i) => {
                            const digits = tel.replace(/\s/g, '');
                            const waNumber = `52${digits}`;
                            const waText = encodeURIComponent('Hola, quiero información sobre la Maestría en Educación de ICAPS Sede Madero');
                            return (
                              <a
                                key={i}
                                href={`https://wa.me/${waNumber}?text=${waText}`}
                                className={styles.telLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {tel}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      <div className={styles.contactoItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{detailedInfo.contacto.ubicacion}</span>
                      </div>
                      <div className={styles.contactoItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>{detailedInfo.contacto.horarios}</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/522295311945?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Maestr%C3%ADa%20en%20Educaci%C3%B3n`}
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
                )}
              </div>

              {/* CTA final */}
              <div className={styles.posgradoCta}>
                <p>Impulse su trayectoria profesional hoy mismo.</p>
                <a href="#contacto" onClick={onClose} className={styles.ctaBtn}>Solicitar información</a>
              </div>

            </div>
          ) : (
            /* ── VISTA CLÁSICA: Bachillerato (modalidades + horarios) ── */
            <>
              {detailedInfo.modalidades && (
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
              )}

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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
