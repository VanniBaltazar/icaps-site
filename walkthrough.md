# Walkthrough: Optimización Landing Page ICAPS Sede Madero

## Resumen

Se realizó una optimización integral de la landing page de ICAPS Sede Madero en **3 ejes**:
1. **SEO técnico y local** — Para posicionar en buscadores de Veracruz
2. **Rediseño visual premium** — Estética "Editorial Institucional Mexicana"
3. **Copywriting de conversión** — Copy enfocado en beneficios y keywords locales

---

## Archivos Modificados

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| [index.html](file:///home/giovannni/Code/icaps-site/public/index.html) | **Reescrito** | SEO completo, nueva estructura, 3 secciones nuevas |
| [styles.css](file:///home/giovannni/Code/icaps-site/public/css/styles.css) | **Reescrito** | Nueva paleta, tipografía, 21 secciones de estilos |
| [main.js](file:///home/giovannni/Code/icaps-site/public/js/main.js) | **Reescrito** | FAQ accordion, scroll reveal, smooth scroll mejorado |

## Archivos Nuevos

| Archivo | Descripción |
|---------|-------------|
| [robots.txt](file:///home/giovannni/Code/icaps-site/public/robots.txt) | Directivas para crawlers con referencia a sitemap |
| [sitemap.xml](file:///home/giovannni/Code/icaps-site/public/sitemap.xml) | Sitemap XML estándar |
| [manifest.json](file:///home/giovannni/Code/icaps-site/public/manifest.json) | Web App Manifest para PWA signals |

## Entregables

| Documento | Ubicación |
|-----------|-----------|
| Estrategia SEO Local | [estrategia_seo_local.md](file:///home/giovannni/.gemini/antigravity/brain/1f3d82db-3733-4ce2-b698-f72e56c8e6b4/estrategia_seo_local.md) |

---

## Detalle de Cambios

### 1. SEO Técnico y Local

**Title tag optimizado:**
```diff
-ICAPS | Instituto de Educación Superior - Sede Madero
+Licenciaturas Sabatinas y Dominicales en Veracruz | ICAPS Sede Madero
```

**Meta description localizada:**
```diff
-ICAPS – Instituto educativo con Licenciaturas presenciales Sábados y Domingos.
+Estudia tu licenciatura los Sábados o Domingos en Veracruz. ICAPS Sede Madero ofrece Derecho, Psicopedagogía, Administración, Contaduría y Comercio Exterior. Inscríbete hoy.
```

**Schema.org Structured Data (JSON-LD):**
- `EducationalOrganization` + `LocalBusiness` con dirección, geo-coordenadas, horarios
- 5× `Course` con precio, horario, descripción
- `FAQPage` con 6 preguntas (keywords locales)
- `BreadcrumbList`

**Geo meta tags:**
- `geo.region`: MX-VER
- `geo.placename`: Veracruz, Veracruz
- `geo.position`: 19.1979;-96.1384
- `ICBM`: 19.1979, -96.1384

**Open Graph + Twitter Cards:**
- locale `es_MX`, imágenes de 1200×630, descripciones localizadas

**Canonical + hreflang:**
- `<link rel="canonical" href="https://www.icaps-edu.com/">`
- `<link rel="alternate" hreflang="es-MX">`

---

### 2. Rediseño Visual

**Nueva paleta de colores:**

| Token | Antes | Después |
|-------|-------|---------|
| Primary | `#0277BD` (azul genérico) | `#0A2647` (azul profundo noche) |
| Accent | `#FFA000` (ámbar) | `#C9A84C` (dorado institucional) |
| Nuevo: warm bg | — | `#FBF7F0` (crema cálido) |

**Nueva tipografía:**

| Rol | Antes | Después |
|-----|-------|---------|
| Heading | Montserrat | **Playfair Display** (serif editorial) |
| Body | Open Sans | **Source Sans 3** (sans-serif profesional) |
| Nuevo: Mono | — | **DM Mono** (para badges) |

**Nuevos efectos:**
- Hero: gradiente mesh con patrón geométrico (grid lines + radial highlights)
- Header: `backdrop-filter: blur(16px)` (glassmorphism)
- Tarjetas: borde dorado + gradient bar al hover
- Estadísticas: números en dorado con prefijo $
- Animaciones scroll reveal con 5 variantes de delay
- FAQ: accordion con transición suave
- WhatsApp: botón mejorado con label flotante
- Nav desktop: underline animado al hover
- Sombras con tinte azul profundo

**Nuevas secciones diseñadas:**
- **¿Por qué ICAPS?** — 4 tarjetas de beneficios con iconos animados
- **Testimonios** — 3 blockquotes con estrellas y avatares
- **FAQ** — 6 preguntas con accordion

---

### 3. Copywriting

**H1 optimizado:**
```diff
-Forma tu futuro con educación de excelencia
+Tu Licenciatura en Veracruz — Sábados o Domingos
```

**Subtítulo orientado a beneficios:**
```diff
-Estudia tu licenciatura con nosotros los Sábados o Domingos.
+¿Trabajas entre semana? Estudia en ICAPS Sede Madero y obtén tu título
+profesional sin dejar tu empleo. 5 carreras, horarios flexibles, en el
+centro de Veracruz.
```

**CTAs mejorados:**
```diff
-Ver Licenciaturas
+Conoce Tu Carrera Ideal

-Contactar por WhatsApp
+Agenda Tu Visita

-Enviar solicitud
+Enviar Mi Solicitud
```

**Trust signals añadidos:**
- Badge "Inscripciones Abiertas — Veracruz" con dot pulsante
- Strip de confianza: 📋 RVOE SEP · 📍 Centro de Veracruz · 🗓️ Fines de semana

**FAQ con preguntas SEO-friendly:**
1. ¿Puedo estudiar una licenciatura solo los fines de semana en Veracruz?
2. ¿Qué licenciaturas ofrece ICAPS en Veracruz?
3. ¿Cuánto cuesta estudiar en ICAPS Veracruz?
4. ¿Dónde se ubica ICAPS Sede Madero en Veracruz?
5. ¿Qué documentos necesito para inscribirme?
6. ¿Las licenciaturas de ICAPS tienen validez oficial?

---

### 4. JavaScript

**Módulos nuevos:**
- **FAQ Accordion** — Abre/cierra con aria-expanded, cierra las demás
- **Scroll Reveal** — IntersectionObserver con respeto a prefers-reduced-motion
- **Smooth Scroll** — Offset del header sticky para navegación precisa
- **Counters mejorados** — Soporte para `data-prefix` (ej: "$")

---

## Validación

| Check | Resultado |
|-------|-----------|
| H1 único con keyword "Veracruz" | ✅ |
| Schema.org EducationalOrganization | ✅ |
| Schema.org FAQPage (6 preguntas) | ✅ |
| Geo meta tags (MX-VER) | ✅ |
| Tipografía Playfair Display | ✅ |
| robots.txt con sitemap | ✅ |
| sitemap.xml válido | ✅ |
| manifest.json | ✅ |
| 6 FAQ items en HTML | ✅ |
| 4 why-cards | ✅ |
| 3 testimoniales | ✅ |

---

## Próximos Pasos

1. **Hacer deploy** a Firebase Hosting para verificar visualmente
2. **Crear Google Business Profile** (ver estrategia SEO local)
3. **Configurar Google Search Console** y enviar sitemap
4. **Ejecutar auditoría completa** con squirrelscan una vez que esté live
5. **Reemplazar testimonios de ejemplo** con testimonios reales
6. **Subir fotos reales** del campus a las imágenes del hero y about
