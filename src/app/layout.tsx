import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

import { ModalProvider } from '@/context/ModalContext';
import { DemoModal } from '@/components/ui/DemoModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DATZEN - Secure Payments. Smarter Risk Intelligence.',
  description: 'Enterprise-grade fraud detection, KYC verification, and unified payments platform.',
  icons: {
    icon: [{ url: '/assets/logo.png', type: 'image/png' }],
    apple: [{ url: '/assets/logo.png', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ModalProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <DemoModal />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}
