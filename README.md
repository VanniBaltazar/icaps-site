# ICAPS - Plataforma Digital Educativa

**Fecha de actualización:** 22 de abril del 2026
**Firma Desarrolladora:** GioMath

## Resumen del Proyecto

El proyecto ICAPS constituye una solución integral de presencia digital diseñada para una institución educativa de alto nivel. Se trata de una arquitectura de landing page de alto rendimiento, optimizada para la conversión de prospectos y la exposición clara de la oferta académica. La plataforma ha sido estructurada bajo estándares modernos de desarrollo web, priorizando la velocidad de carga, la responsividad y la experiencia de usuario (UX).

## Especificaciones Técnicas

### Stack Tecnológico

- **Framework:** Next.js 16 (App Router) para una renderización híbrida ultra rápida.
- **Biblioteca de UI:** React 19, aprovechando las últimas mejoras en concurrencia y hooks.
- **Animaciones:** Anime.js v4 para transiciones fluidas, efectos de scroll parallax y micro-interacciones premium.
- **Estilizado:** CSS Modules & Vanilla CSS moderno, garantizando zero-runtime overhead y máxima compatibilidad.
- **SEO & Datos Estructurados:** Implementación avanzada de metadatos dinámicos y JSON-LD (Schema.org) para optimización educativa.
- **Optimización de Assets:** Uso de `next/image` para carga adaptativa y lazy loading nativo.

### Estructura de Directorios

El proyecto sigue una organización modular para facilitar el mantenimiento y la escalabilidad:

- `/app`: Configuración de rutas, layouts globales y estilos base.
- `/components`: Repositorio de componentes reutilizables, subdividido en:
  - `/layout`: Elementos estructurales como Header y Footer.
  - `/sections`: Componentes de página que definen la estructura semántica (Hero, About, Programs, etc.).
  - `/ui`: Elementos atómicos de interfaz.
- `/public`: Activos estáticos, imágenes y recursos multimedia.

## Anatomía de la Landing Page

La página principal ha sido diseñada siguiendo un embudo de conversión educativo, estructurada en las siguientes secciones:

1. **Header:** Navegación persistente con efecto de transparencia adaptativo al scroll.
2. **Hero Section:** Impacto visual inmediato con animaciones de entrada, efectos parallax y llamados a la acción (CTAs) claros.
3. **Stats:** Visualización de métricas clave que refuerzan la autoridad de la institución.
4. **About:** Reseña histórica y visión pedagógica de la Sede Madero.
5. **Programas Académicos:** Grilla interactiva que detalla la oferta en Bachillerato, Licenciaturas y Maestrías.
6. **Info Sede:** Información detallada sobre las instalaciones, horarios y beneficios exclusivos.
7. **Testimonios:** Prueba social mediante experiencias de alumnos y egresados.
8. **Galería:** Recorrido visual por el campus y las actividades académicas.
9. **Contacto:** Formulario integrado con validaciones y accesos directos.
10. **Mapa:** Integración geográfica interactiva para localización de la sede.
11. **Footer:** Información legal, enlaces rápidos y redes sociales.
12. **Utilidades:** Botón de WhatsApp flotante inteligente y Scroll-to-Top para navegación optimizada.

## Funcionalidades Clave

1. **Arquitectura Modular:** Componentes totalmente desacoplados que permiten actualizaciones independientes.
2. **Sistema de Contacto Inteligente:** Botón de WhatsApp con lógica de visibilidad basada en el contexto del usuario.
3. **Animaciones Deterministas:** Secuencias de entrada sincronizadas para una experiencia de usuario premium.
4. **Optimización Móvil:** Diseño 100% responsivo con menús adaptativos y táctiles.

## Guía de Instalación y Desarrollo

### Requisitos Previos

- Node.js (versión 20.x o superior recomendada)
- Gestor de paquetes npm o yarn

### Pasos para la Ejecución

1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Iniciar el entorno de desarrollo: `npm run dev`.
4. Compilar para producción: `npm run build`.

---

## Recomendaciones Estratégicas para Escalamiento a Sitio Web Integral

Con el objetivo de transformar esta landing page en un ecosistema web completo y robusto, GioMath recomienda las siguientes líneas de acción técnica:

1. **Implementación de CMS Headless:** Integrar un gestor de contenidos desacoplado (como Sanity.io o Strapi) para permitir que el personal administrativo actualice la oferta académica, noticias y galerías sin intervención técnica, garantizando la integridad del código.

2. **Sistema de Gestión de Aprendizaje (LMS):** Expandir la plataforma mediante un subdominio o ruta protegida que albergue un área de alumnos, permitiendo el acceso a materiales, evaluaciones y seguimiento académico.

3. **Optimización de SEO Dinámico y Programático:** Implementar una estrategia de generación estática incremental (ISR) para páginas de programas individuales, utilizando datos estructurados JSON-LD para mejorar el posicionamiento en motores de búsqueda.

4. **Autenticación y Seguridad:** Integrar NextAuth.js para gestionar roles de usuario (Alumnos, Docentes, Administradores) con soporte para proveedores OAuth y autenticación multifactor.

5. **Pasarela de Pagos Integrada:** Implementar una infraestructura de cobros digitales mediante Stripe o PayPal para permitir la matriculación y el pago de colegiaturas directamente desde el portal.

6. **Internacionalización (i18n):** Configurar el soporte multi-idioma nativo de Next.js para expandir el alcance de la institución a mercados internacionales.

7. **Arquitectura de Microservicios para el Backend:** Migrar la lógica de negocio compleja a una API independiente (Node.js/Go) para desacoplar el frontend y permitir un escalamiento horizontal eficiente.

8. **Analítica Avanzada y Seguimiento de Conversiones:** Configurar Google Tag Manager con eventos personalizados para medir el rendimiento de cada sección y optimizar los embudos de conversión (funnels).

9. **Cumplimiento de Accesibilidad (A11y):** Auditar y ajustar el sitio para cumplir con los estándares WCAG 2.1 nivel AA, asegurando que la plataforma sea utilizable por personas con capacidades diferentes.

10. **Despliegue y CI/CD Automatizado:** Implementar flujos de integración y despliegue continuo mediante plataformas como Vercel o AWS Amplify, asegurando entornos de staging para pruebas antes de cada lanzamiento a producción.

---

**Desarrollado con estándares de excelencia por GioMath en2026**
