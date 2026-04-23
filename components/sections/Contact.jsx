import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Un asesor se comunicará contigo pronto.');
  };

  return (
    <section id="contacto" className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h2 className="section-title" style={{textAlign: 'left', color: 'var(--surface)'}}>Contáctanos</h2>
            <p className={styles.description}>
              ¿Tienes dudas sobre nuestros programas o proceso de inscripción? Déjanos tus datos y un asesor académico se pondrá en contacto contigo a la brevedad.
            </p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Teléfono</h4>
                  <p><a href="tel:2299314411">229 931 4411</a></p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/522295311945" target="_blank" rel="noopener noreferrer">229 531 1945</a></p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@icaps-edu.com">info@icaps-edu.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3>Solicitud de Información</h3>
              
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre Completo *</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono / Celular *</label>
                  <input type="tel" id="telefono" name="telefono" required placeholder="Tu teléfono" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input type="email" id="email" name="email" required placeholder="Tu correo" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="programa">Programa de Interés *</label>
                <select id="programa" name="programa" required>
                  <option value="">Selecciona un programa...</option>
                  <option value="bachillerato">Bachillerato</option>
                  <option value="lic-administracion">Lic. en Administración de Empresas</option>
                  <option value="lic-derecho">Lic. en Derecho</option>
                  <option value="lic-psicopedagogia">Lic. en Psicopedagogía</option>
                  <option value="lic-comercio">Lic. en Comercio Exterior</option>
                  <option value="lic-contaduria">Lic. en Contaduría Pública</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje">Mensaje (Opcional)</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="¿Tienes alguna duda específica?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
