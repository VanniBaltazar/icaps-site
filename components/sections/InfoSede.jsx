import React from 'react';
import styles from './InfoSede.module.css';

export default function InfoSede() {
  return (
    <section className={`section ${styles.infoSection}`}>
      <div className="container">
        <h2 className="section-title">Información Sede Madero</h2>
        <p className="section-subtitle">
          Conoce nuestra oferta educativa específica, horarios, costos y requisitos de inscripción para nuestra sede en Veracruz.
        </p>

        <div className={styles.grid}>
          {/* Licenciaturas */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Licenciaturas Disponibles</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.block}>
                <h4>Sábados:</h4>
                <ul>
                  <li>Psicopedagogía</li>
                  <li>Derecho</li>
                </ul>
              </div>
              <div className={styles.block}>
                <h4>Domingos:</h4>
                <ul>
                  <li>Comercio Exterior</li>
                  <li>Administración de Empresas</li>
                  <li>Contaduría Pública</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preparatoria */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Preparatoria (Horarios)</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.block}>
                <h4>Escolarizada:</h4>
                <ul>
                  <li>Lunes a Viernes</li>
                </ul>
              </div>
              <div className={styles.block}>
                <h4>Semi-escolarizada:</h4>
                <ul>
                  <li>Lunes a Jueves</li>
                  <li>Viernes</li>
                  <li>Sábados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Costes */}
          <div className={`${styles.infoCard} ${styles.highlightCard}`}>
            <div className={styles.cardHeader}>
              <h3>Costos de Inversión</h3>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.costList}>
                <li>
                  <span>Inscripción</span>
                  <strong>$1,000</strong>
                </li>
                <li>
                  <span>Mensualidad</span>
                  <strong>$1,100</strong>
                </li>
                <li className={styles.featuredCost}>
                  <span>Pago Único</span>
                  <strong>$4,500</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Requisitos */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Requisitos</h3>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.reqList}>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Acta de nacimiento</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> CURP</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Certificado de bachillerato</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Comprobante de domicilio</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Copia de INE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
