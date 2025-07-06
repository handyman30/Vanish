import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vanishapp.com'),
  title: 'Vanish - Real Connections, Smart Notifications',
  description: 'Experience authentic connections with verified profiles, smart notifications, and video introductions. The future of dating is here.',
  keywords: 'vanish app, dating app, verified dating, video dating, smart notifications, authentic connections',
  openGraph: {
    title: 'Vanish - Real Connections, Smart Notifications',
    description: 'Experience authentic connections with verified profiles, smart notifications, and video introductions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 