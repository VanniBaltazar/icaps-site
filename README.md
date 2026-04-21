# 🎓 ICAPS — Plataforma Institucional

Sitio web oficial del **ICAPS**, rediseñado y migrado a una arquitectura moderna para ofrecer una mejor experiencia de usuario, mayor rendimiento y escalabilidad.

> [!IMPORTANT]
> **Nota de Migración:** Hemos migrado exitosamente toda la plataforma a **Next.js**. Este cambio estratégico nos permite preparar el sitio para un crecimiento futuro, facilitando la adición de nuevas funcionalidades, optimización SEO avanzada y una gestión de contenido más eficiente.

---

## 🚀 Tecnologías Principales

El proyecto ha evolucionado de una landing page estática a una aplicación web robusta utilizando:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Despliegue:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 📁 Estructura del Proyecto

```text
icaps-site/
├── src/
│   ├── app/            # Rutas, layouts y páginas (App Router)
│   ├── components/     # Componentes de React reutilizables (UI, Layout, etc.)
│   └── lib/            # Funciones de utilidad, hooks y configuraciones
├── public/             # Recursos estáticos (imágenes, fuentes, etc.)
├── assets/             # Recursos de diseño y documentación adicional
├── next.config.ts      # Configuración de Next.js
├── tailwind.config.ts  # Configuración de Tailwind CSS
└── firebase.json       # Configuración de despliegue en Firebase
```

---

## 🛠️ Desarrollo Local

Para comenzar a trabajar en el proyecto localmente:

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

3.  **Construir para producción:**
    ```bash
    npm run build
    ```

---

## 🌐 Secciones de la Plataforma

La plataforma incluye actualmente:

| # | Sección | Descripción |
|---|---|---|
| 1 | **Hero** | Banner principal con navegación dual (Prepa/Licenciatura) |
| 2 | **Estadísticas** | Contadores interactivos de egresados y programas |
| 3 | **Nosotros** | Misión, visión e identidad institucional |
| 4 | **¿Por qué ICAPS?** | Diferenciadores y ventajas competitivas |
| 5 | **Programas** | Oferta detallada de Bachillerato y Carreras |
| 6 | **Admisiones** | Proceso de inscripción y requisitos |
| 7 | **Testimonios** | Experiencias de nuestra comunidad estudiantil |
| 8 | **FAQ** | Preguntas frecuentes resueltas |
| 9 | **Contacto** | Formulario dinámico y canales directos |
| 10 | **Redes Sociales** | Integración con Facebook, TikTok y YouTube |
| 11 | **Ubicación** | Mapa interactivo del campus |

---

## 🔥 Despliegue en Firebase

El sitio está configurado para desplegarse en Firebase Hosting. El proceso requiere generar primero la build de producción:

```bash
# 1. Construir el proyecto
npm run build

# 2. Desplegar a Firebase
firebase deploy --only hosting
```

---

## ♿ Compromiso con la Accesibilidad

Mantenemos un estándar alto de accesibilidad:
- Uso estricto de HTML semántico.
- Soporte completo para navegación por teclado.
- Etiquetas ARIA donde es necesario.
- Optimización de contraste y legibilidad.

---

<div align="center">
  <p><i>Instituto ICAPS © 2026 — Construyendo el futuro profesional.</i></p>
  <br/>
  <p>
    ✨ <b>Diseño y Desarrollo a cargo de <a href="https://github.com/Giomath" target="_blank" style="color: #C9A84C; text-decoration: none;">Giomath</a></b> ✨
  </p>
</div>
