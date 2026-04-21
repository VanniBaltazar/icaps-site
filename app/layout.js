import "./globals.css";

export const metadata = {
  title: "ICAPS Sede Madero | Construye tu futuro profesional",
  description: "Formación de excelencia académica en ICAPS Sede Madero. Ofrecemos Preparatoria y Licenciaturas en Administración, Derecho y Psicopedagogía.",
  keywords: "ICAPS, Preparatoria, Licenciaturas, Educación, Madero, Veracruz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
