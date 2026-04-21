// Sección Mapa — Server Component
// El iframe de Google Maps no requiere interactividad del cliente

export function Map() {
  return (
    <section className="bg-white" aria-labelledby="map-title">
      {/* Encabezado de la sección */}
      <div className="container pt-12 pb-8 text-center">
        <p className="section__pretitle">Encuéntranos fácilmente</p>
        <h2 className="section__title" id="map-title">¿Cómo llegar a ICAPS en Veracruz?</h2>
      </div>

      {/* Contenedor del iframe — altura fija para consistencia visual */}
      <div className="w-full h-[400px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.2285121650393!2d-96.13840742510255!3d19.197992984180155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3411a766a50ab%3A0xe74e92ebf68e987b!2sMariano%20Arista%20966%2C%20Centro%2C%2091700%20Veracruz%2C%20Ver.!5e0!3m2!1sen!2smx!4v1713292023023!5m2!1sen!2smx"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block', filter: 'saturate(.8) contrast(1.05)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de ICAPS Sede Madero en el mapa — Mariano Arista No. 966, Centro, Veracruz"
        />
      </div>
    </section>
  )
}
