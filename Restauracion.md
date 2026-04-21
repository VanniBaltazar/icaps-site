# Guía de Restauración - Proyecto ICAPS Sede Madero

Este documento contiene toda la información técnica y de contenido necesaria para replicar el proyecto ICAPS desde cero, eliminando el código muerto y archivos heredados de migraciones previas.

---

## 1. Tecnologías Principales

El proyecto está construido sobre un stack moderno y eficiente:

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4 (usando variables CSS nativas para el sistema de diseño)
- **Iconos:** Lucide React & Emojis descriptivos
- **Despliegue:** Vercel (Recomendado)

---

## 2. Estructura de Archivos (Versión Limpia)

Para iniciar de cero, la estructura mínima necesaria es:

```text
icaps-site/
├── public/                 # Assets estáticos (imágenes, logos, favicon)
│   └── images/
│       ├── hero/           # hero-bg.jpg
│       └── logos/          # logo.png
├── src/
│   ├── app/                # Rutas y layouts
│   │   ├── layout.tsx      # Configuración global y metadatos
│   │   ├── globals.css     # Sistema de diseño y estilos base
│   │   └── page.tsx        # Composición de la landing page
│   ├── components/
│   │   ├── layout/         # Header, Footer, WhatsAppFloat
│   │   └── sections/       # Secciones de la landing (Hero, Programs, etc.)
│   └── lib/
│       └── utils.ts        # Funciones auxiliares (cn, etc.)
├── tailwind.config.ts      # Configuración de Tailwind
├── package.json            # Dependencias y scripts
└── tsconfig.json           # Configuración de TypeScript
```

---

## 3. Sistema de Diseño (CSS Variables)

Definidas en `src/app/globals.css`, estas variables controlan toda la estética premium:

- **Colores Primarios:** `#0A2647` (Azul Marino), `#C9A84C` (Dorado ICAPS)
- **Tipografía:**
  - `Playfair Display`: Para títulos (Serif elegante)
  - `Source Sans 3`: Para cuerpo de texto (Sans-serif legible)
- **Sombras:** `shadow-gold` para resaltar elementos dorados.
- **Animaciones:** Sistema de "Reveal" (clases `.reveal`, `.reveal--delay-X`) para entradas suaves.

---

## 4. Contenido de la Landing Page

### A. Metadatos (SEO)
- **Título:** `Licenciaturas y Bachillerato en Veracruz | ICAPS Sede Madero`
- **Descripción:** `Estudia tu licenciatura o bachillerato en Veracruz. ICAPS Sede Madero ofrece licenciaturas sabatinas y bachillerato en diversas modalidades. Inscríbete hoy.`
- **Keywords:** Veracruz, Licenciaturas sabatinas, Bachillerato Veracruz, ICAPS, Educación superior.

### B. Secciones Clave
1. **Hero:** 
   - Título: "Construye tu futuro profesional en ICAPS Sede Madero" (ICAPS resaltado en amarillo `#FFEA00`).
   - CTAs: Botones para "Licenciaturas" (Sabatino/Dominical) y "Bachillerato" (Varias modalidades).
2. **Programas:**
   - **Licenciaturas:** Psicopedagogía (Sáb), Derecho (Sáb), Comercio Exterior (Dom), Administración (Dom), Contaduría (Dom).
   - **Bachillerato:** Escolarizado, Semi-escolarizado (Lun-Jue, Vie, Sáb).
3. **Contacto:**
   - **WhatsApp:** 229 531 1945
   - **Teléfono:** 229 931 4411
   - **Dirección:** Arista 966 Esq. Madero, Col. Centro, Veracruz, Ver.

---

--
*Documento generado para la limpieza y restauración técnica del sitio ICAPS.*
