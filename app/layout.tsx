import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Quicksand } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Feliz San Valentin!',
  description: 'Un regalo de San Valentin ridiculamente tierno solo para vos',
}

export const viewport: Viewport = {
  themeColor: '#1a1428',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${quicksand.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
