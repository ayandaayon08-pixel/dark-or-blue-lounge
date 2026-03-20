import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dark or Blue Lounge | Premier Nightlife — Ntuzuma, Durban',
  description: 'Ntuzuma\'s most elite nightlife destination. Shisanyama, Car Wash, Hubbly, Beverages & live entertainment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}