import "./globals.css";

export const metadata = {
  title: "ICAPS Sede Madero | Escuela, Preparatoria y Universidad en Veracruz",
  description: "ICAPS Sede Madero es tu mejor opción de escuela en Veracruz. Ofrecemos educación de excelencia: Bachillerato, Preparatoria y Licenciaturas en Administración, Derecho y Psicopedagogía. ¡Inscríbete hoy!",
  keywords: "Escuela en Veracruz, Preparatoria en Veracruz, Universidad en Veracruz, Bachillerato en Veracruz, Licenciaturas en Veracruz, ICAPS, Educación, Madero",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: 'https://icaps-madero.edu.mx', // Replace with actual domain when available
  },
  openGraph: {
    title: "ICAPS Sede Madero | Escuela, Preparatoria y Universidad en Veracruz",
    description: "Formación de excelencia académica en Veracruz. Estudia tu Bachillerato o Licenciatura con horarios flexibles en la mejor escuela del centro de Veracruz.",
    url: 'https://icaps-madero.edu.mx',
    siteName: 'ICAPS Sede Madero - Escuela en Veracruz',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'ICAPS Logo - Escuela en Veracruz',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ICAPS Sede Madero - Escuela y Universidad en Veracruz",
    "url": "https://icaps-madero.edu.mx",
    "logo": "https://icaps-madero.edu.mx/logo.png",
    "description": "Institución comprometida con la excelencia educativa, formando profesionales líderes en Veracruz. Ofrecemos preparatoria, bachillerato y universidad.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Francisco I. Madero",
      "addressLocality": "Veracruz",
      "addressRegion": "Veracruz",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-229-931-4411",
      "contactType": "admissions",
      "areaServed": "Veracruz",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.facebook.com/icapsmadero"
    ],
    "keywords": "Escuela en Veracruz, Preparatoria en Veracruz, Universidad en Veracruz"
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
