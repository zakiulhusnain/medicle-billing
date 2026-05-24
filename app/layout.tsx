import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedCare MSO – AI-Powered Medical Billing Software',
  description: 'Empower Your Healthcare Practice with MedCare MSO - A Comprehensive Medical Billing Software Provider',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
