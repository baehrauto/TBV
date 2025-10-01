import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Trust But Verify Solutions - Secure Facility Construction & Consulting',
  description: 'Leading provider of SCIF construction, secure facility design, and federal compliance consulting services. Veteran-owned and trusted by government agencies.',
  keywords: ['SCIF construction', 'secure facilities', 'federal contracting', 'compliance consulting', 'TEMPEST shielding'],
  authors: [{ name: 'Trust But Verify Solutions' }],
  creator: 'Trust But Verify Solutions',
  publisher: 'Trust But Verify Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Trust But Verify Solutions - Secure Facility Construction & Consulting',
    description: 'Leading provider of SCIF construction, secure facility design, and federal compliance consulting services.',
    siteName: 'Trust But Verify Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust But Verify Solutions - Secure Facility Construction & Consulting',
    description: 'Leading provider of SCIF construction, secure facility design, and federal compliance consulting services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${poppins.variable} font-sans h-full bg-white antialiased`}>
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}