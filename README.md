# 🎓 ICAPS — Landing Page Institucional

Sitio web de la página de aterrizaje (landing page) del **Instituto ICAPS**, construido con HTML5, CSS3 y JavaScript puro, optimizado para desplegarse en **Firebase Hosting**.

---

## 📁 Estructura del proyecto

```
icaps-site/
│
├── public/                        ← Carpeta raíz publicada por Firebase Hosting
│   ├── index.html                 ← Página principal (HTML semántico)
│   ├── css/
│   │   └── styles.css             ← Estilos puros (CSS Variables + BEM + Mobile First)
│   └── js/
│       └── main.js                ← JavaScript modular (sin dependencias externas)
│
├── assets/                        ← Recursos estáticos (fuera del deploy)
│   └── README.md                  ← Guía de organización de imágenes y documentos
│
├── .firebase/                     ← Caché interna de Firebase CLI (ignorada en git)
│
├── firebase.json                  ← Configuración de Firebase Hosting
└── .gitignore                     ← Archivos y carpetas excluidos del repositorio
```

---

## 🌐 Secciones del sitio (`index.html`)

| # | Sección | Descripción |
|---|---|---|
| 1 | **Header / Nav** | Barra fija con logo, menú accesible y botón hamburguesa para móvil |
| 2 | **Hero** | Pantalla principal con título, subtítulo y botones de acción |
| 3 | **Estadísticas** | Contadores animados: egresados, años, programas y satisfacción |
| 4 | **Nosotros** | Misión y Visión del instituto con foto del campus |
| 5 | **Programas** | Tarjetas de Preparatoria, Adm. de Empresas y Derecho |
| 6 | **Testimonios** | Citas de egresados con nombre y generación |
| 7 | **Galería** | Grid de fotos del campus (placeholders reemplazables) |
| 8 | **Contacto** | Formulario de inscripción con validación y datos de contacto |
| 9 | **Mapa** | Iframe de Google Maps (placeholder configurado) |
| 10 | **Footer** | Columnas de navegación, redes sociales y copyright dinámico |

---

## 🎨 Arquitectura CSS (`styles.css`)

### Metodología

- **BEM** (Block, Element, Modifier): nomenclatura de clases predecible y mantenible.
  ```
  Bloque:      .program-card
  Elemento:    .program-card__title
  Modificador: .program-card--featured
  ```
- **Mobile First**: los estilos base cubren pantallas pequeñas. Las media queries con `min-width` añaden estilos para pantallas mayores.
- **CSS Variables** centralizadas en `:root` para toda la paleta de colores, tipografía, espaciado y sombras.

### Variables principales

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#0277BD` | Azul institucional principal |
| `--color-primary-dark` | `#01579B` | Hover / estados activos |
| `--color-primary-light` | `#E1F5FE` | Fondos suaves |
| `--color-accent` | `#FFA000` | Llamadas a acción secundarias |
| `--font-heading` | `Montserrat` | Títulos y etiquetas |
| `--font-body` | `Open Sans` | Párrafos y contenido |

### Breakpoints

| Nombre | Tamaño | Cambios principales |
|---|---|---|
| Base (móvil) | `< 640px` | 1 columna, botones verticales, menú oculto |
| Tablet | `≥ 640px` | 2 columnas, botones en fila, 4 stats en fila |
| Desktop | `≥ 1024px` | 3–4 columnas, nav horizontal visible, 2 col en contacto |

### Secciones del CSS

| # | Sección |
|---|---|
| 1 | Variables CSS (Design Tokens) |
| 2 | Reset y base |
| 3 | Utilidades (`.container`, `.section`) |
| 4 | Botones (`.btn`) |
| 5 | Header / Navegación |
| 6 | Hero |
| 7 | Estadísticas |
| 8 | Nosotros / Misión |
| 9 | Programas académicos |
| 10 | Testimonios |
| 11 | Galería |
| 12 | Formulario de contacto |
| 13 | Mapa |
| 14 | Footer |
| 15 | Responsive — Tablet (≥ 640px) |
| 16 | Responsive — Desktop (≥ 1024px) |
| 17 | Reducción de movimiento (accesibilidad) |

---

## ⚙️ JavaScript (`main.js`)

El script se divide en **5 módulos IIFE** (funciones de ejecución inmediata), cada uno independiente:

### 1. `initMobileMenu()`
Maneja el menú de navegación en dispositivos móviles.
- Toggle del botón hamburguesa con animación a "X" (CSS puro).
- Actualiza `aria-expanded` para accesibilidad con lectores de pantalla.
- Bloquea el scroll del fondo (`overflow: hidden`) mientras el menú está abierto.
- Cierra automáticamente con la tecla `ESC` o al hacer clic en un enlace.

### 2. `initHeaderScroll()`
Añade sombra dinámica al header cuando el usuario hace scroll.
- Usa `{ passive: true }` para mejor rendimiento en dispositivos táctiles.

### 3. `initContactForm()`
Validación completa del formulario de contacto.
- Reglas de validación por campo en un objeto centralizado.
- Valida en tiempo real al salir de cada campo (`blur`).
- Muestra estados `is-error` / `is-valid` y mensajes con `aria-live="polite"`.
- Deshabilita el botón de envío para evitar dobles envíos.
- Incluye un placeholder `simulateFormSubmit()` listo para reemplazar con Firebase.

### 4. `initCounters()`
Animación de los contadores numéricos en la sección de estadísticas.
- Usa `IntersectionObserver` para iniciar la animación solo cuando la sección es visible.
- Animación con `requestAnimationFrame` (~60fps) y easing `easeOutQuart`.
- Fallback para navegadores sin `IntersectionObserver`.

### 5. `setCurrentYear()`
Inserta el año actual de forma dinámica en el footer.

---

## 🔥 Configuración de Firebase (`firebase.json`)

```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }],
    "headers": [
      { "source": "**/*.@(js|css)",   "headers": [{ "key": "Cache-Control", "value": "max-age=604800"  }] },
      { "source": "**/*.@(jpg|png…)", "headers": [{ "key": "Cache-Control", "value": "max-age=2592000" }] }
    ]
  }
}
```

- La carpeta `public/` es la raíz del sitio.
- Los archivos JS/CSS tienen caché de **7 días**; las imágenes de **30 días**.
- El `rewrite` redirige todas las rutas a `index.html`.

---

## 🚀 Cómo desplegar en Firebase Hosting

```bash
# 1. Instalar Firebase CLI globalmente
npm install -g firebase-tools

# 2. Iniciar sesión con tu cuenta de Google
firebase login

# 3. Inicializar el proyecto (solo la primera vez)
#    Selecciona "Hosting" y confirma que la carpeta pública es: public
firebase init hosting

# 4. Desplegar el sitio
firebase deploy --only hosting
```

Tras el despliegue Firebase proporciona una URL:
```
https://tu-proyecto.web.app
```

---

## 🗂️ Cómo reemplazar los placeholders

### Imagen del Hero
Coloca el archivo en `assets/images/hero/hero-bg.jpg`.
El `.hero__overlay` ya apunta a esa ruta en el CSS.

### Foto de Campus (sección Nosotros)
```html
<!-- Reemplaza el .about__image-placeholder por: -->
<img
  src="../assets/images/about/campus.jpg"
  alt="Vista del campus ICAPS"
  width="600" height="450"
  loading="lazy"
/>
```

### Galería de fotos
```html
<!-- Reemplaza cada .gallery__placeholder por: -->
<img
  src="../assets/images/gallery/gallery-01.jpg"
  alt="Descripción de la foto"
  width="800" height="450"
  loading="lazy"
/>
```

### Mapa de Google Maps
```html
<!-- 1. maps.google.com → busca la dirección → Compartir → Insertar mapa -->
<!-- 2. Reemplaza el .map-section__placeholder por el iframe copiado -->
<iframe
  src="https://www.google.com/maps/embed?pb=TU_EMBED_URL"
  width="100%" height="450"
  style="border:0;" allowfullscreen="" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Ubicación de ICAPS en el mapa"
></iframe>
```

### Integrar el formulario con un backend real
En `main.js`, reemplaza `simulateFormSubmit()` con una llamada `fetch()`:

```javascript
function simulateFormSubmit(callback) {
  var datos = {
    nombre:   form.elements['nombre'].value,
    email:    form.elements['email'].value,
    programa: form.elements['programa'].value,
    mensaje:  form.elements['mensaje'].value
  };
  fetch('/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
  .then(function(res) { callback(res.ok); })
  .catch(function()   { callback(false);  });
}
```

---

## ♿ Accesibilidad implementada

- Etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`, `<blockquote>`, `<cite>`, `<figure>`.
- Atributos ARIA: `role`, `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls`, `aria-required`, `aria-invalid`, `aria-describedby`, `aria-live`.
- `:focus-visible` para navegación por teclado sin afectar usuarios de ratón.
- `@media (prefers-reduced-motion)` desactiva todas las animaciones para usuarios que lo requieran.
- `rel="noopener noreferrer"` en todos los enlaces externos (`target="_blank"`).

---

## 📦 Dependencias externas

| Recurso | URL | Motivo |
|---|---|---|
| Google Fonts | `fonts.googleapis.com` | Montserrat + Open Sans |
| Firebase CLI | `npm install -g firebase-tools` | Deploy a Firebase Hosting |

> **Sin frameworks CSS ni JS** — sin Bootstrap, Tailwind, jQuery ni similares.
> Todo el código es HTML, CSS y JavaScript nativos.

---

## 📝 Notas antes del lanzamiento

- [ ] Actualizar dirección, teléfono y email en `index.html`.
- [ ] Conectar `simulateFormSubmit()` al backend real.
- [ ] Agregar URLs reales de redes sociales en el footer.
- [ ] Reemplazar todos los placeholders de imágenes con fotos reales.
- [ ] Configurar el iframe de Google Maps con la ubicación real de ICAPS.
- [ ] Establecer el dominio personalizado en Firebase Hosting Console.

---

*Instituto ICAPS © 2026 — Todos los derechos reservados.*
