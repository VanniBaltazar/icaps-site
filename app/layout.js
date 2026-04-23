import "./globals.css";

export const metadata = {
  title: "ICAPS Sede Madero | Construye tu futuro profesional",
  description: "Formación de excelencia académica en ICAPS Sede Madero. Ofrecemos Bachillerato y Licenciaturas en Administración, Derecho y Psicopedagogía.",
  keywords: "ICAPS, Bachillerato, Licenciaturas, Educación, Madero, Veracruz",
  alternates: {
    canonical: 'https://icaps-madero.edu.mx', // Replace with actual domain when available
  },
  openGraph: {
    title: "ICAPS Sede Madero | Construye tu futuro profesional",
    description: "Formación de excelencia académica en Veracruz. Bachillerato y Licenciaturas con horarios flexibles.",
    url: 'https://icaps-madero.edu.mx',
    siteName: 'ICAPS Sede Madero',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'ICAPS Logo',
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
    "name": "ICAPS Sede Madero",
    "url": "https://icaps-madero.edu.mx",
    "logo": "https://icaps-madero.edu.mx/logo.png",
    "description": "Institución comprometida con la excelencia educativa, formando profesionales líderes en Veracruz.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Veracruz",
      "addressRegion": "Veracruz",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-229-931-4411",
      "contactType": "admissions"
    }
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
