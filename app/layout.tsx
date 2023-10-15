import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sandbox | Juan Jaramillo',
  description: 'Prompt Engineer · Developer · AI and Machine Learning Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="league/spartan">{children}</body>
    </html>
  )
}
