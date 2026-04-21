import type { Metadata } from 'next'
import { Header }        from '@/components/layout/Header'
import { Footer }        from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { GlobalScripts } from '@/components/layout/GlobalScripts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default:  'Licenciaturas y Preparatoria en Veracruz | ICAPS Sede Madero',
    template: '%s | ICAPS Sede Madero',
  },
  description: 'Estudia tu licenciatura o bachillerato en Veracruz. ICAPS Sede Madero ofrece licenciaturas sabatinas y preparatoria en diversas modalidades. Inscríbete hoy.',
  metadataBase: new URL('https://www.icaps-edu.com'),
  openGraph: { siteName: 'ICAPS Sede Madero', locale: 'es_MX', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <meta name="geo.region"    content="MX-VER" />
        <meta name="geo.placename" content="Veracruz, Veracruz" />
        <meta name="geo.position"  content="19.1979;-96.1384" />
        <meta name="ICBM"          content="19.1979, -96.1384" />
        <meta name="theme-color"   content="#0A2647" />
        {/* Fuentes cargadas desde Google en runtime para el entorno de producción */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GlobalScripts />
        <a href="#main-content" className="absolute -top-full left-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-semibold z-[9999] focus:top-4 transition-all">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
