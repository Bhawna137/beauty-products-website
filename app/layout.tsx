import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BeautyHub - Premium Beauty Products',
  description: 'Discover premium beauty products including skincare, makeup, and hair care solutions.',
  keywords: 'beauty, cosmetics, skincare, makeup, hair care',
  openGraph: {
    title: 'BeautyHub - Premium Beauty Products',
    description: 'Discover premium beauty products including skincare, makeup, and hair care solutions.',
    url: 'https://beauty-products-website.vercel.app',
    siteName: 'BeautyHub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-50 to-purple-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
