import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dinheirize — O copiloto financeiro no WhatsApp',
  description:
    'Controle suas finanças pelo WhatsApp com IA. Gamificação real, missões diárias e alertas inteligentes. Grátis para começar.',
  keywords: ['finanças pessoais', 'IA', 'WhatsApp', 'controle financeiro', 'gamificação'],
  openGraph: {
    title: 'Dinheirize — Finalmente no controle do seu dinheiro',
    description:
      'Controle suas finanças pelo WhatsApp com IA. Gamificação real, missões diárias e alertas inteligentes. Grátis para começar.',
    url: 'https://dinheirize.com',
    siteName: 'Dinheirize',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinheirize — Finalmente no controle do seu dinheiro',
    description:
      'Controle suas finanças pelo WhatsApp com IA. Gamificação real, missões diárias e alertas inteligentes. Grátis para começar.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0F0D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
