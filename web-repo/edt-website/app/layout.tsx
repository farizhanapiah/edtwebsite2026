import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'EDT | Immersive AR VR MR Experiences & AI Avatars Malaysia',
    template: '%s | EDT',
  },
  description:
    "Malaysia's leading experiential technology studio. AR, VR, MR, AI holograms and immersive activations for brands, events, tourism and government across Southeast Asia.",
  metadataBase: new URL('https://weareedt.com'),
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://weareedt.com',
    siteName: 'Experiential Design Team',
    title: 'EDT | Immersive AR VR MR Experiences & AI Avatars Malaysia',
    description:
      "Malaysia's leading experiential technology studio. AR, VR, MR, AI holograms and immersive activations for brands, events, tourism and government.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDT | Immersive AR VR MR Experiences',
    description: "Malaysia's leading experiential technology studio.",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2D2DFF" />
      </head>
      <body className="bg-edt-black text-white font-sans antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
