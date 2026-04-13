import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Aarogya Dental Clinic & Implant Center',
  description: 'Your trusted partner for comprehensive dental care. Expert dentists, modern equipment, and personalized treatment plans.',
  keywords: 'dental clinic, dentist, dental implant, root canal, braces, teeth whitening, Panvel, Navi Mumbai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
