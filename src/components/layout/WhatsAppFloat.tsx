// WhatsApp flotante — Server Component
// Se muestra fijo en la esquina inferior derecha en todas las páginas

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/522293978728?text=Hola%2C%20quiero%20información%20sobre%20las%20licenciaturas%20en%20ICAPS"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 no-underline hover:no-underline group"
    >
      {/* Etiqueta de texto — visible en tablet+ */}
      <span
        className="hidden sm:block px-4 py-2 bg-white rounded-md text-sm font-semibold whitespace-nowrap"
        style={{ boxShadow: 'var(--shadow-md)', color: 'var(--color-text)' }}
      >
        ¿Dudas? Escríbenos
      </span>

      {/* Botón circular verde de WhatsApp */}
      <span
        className="flex items-center justify-center w-[60px] h-[60px] rounded-full text-white transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,.35)',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </span>
    </a>
  )
}
