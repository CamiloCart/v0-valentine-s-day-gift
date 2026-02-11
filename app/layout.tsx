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
  title: 'Happy Valentine\'s Day!',
  description: 'A silly and sweet Valentine\'s Day gift just for you',
}

export const viewport: Viewport = {
  themeColor: '#e11d6d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${quicksand.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
