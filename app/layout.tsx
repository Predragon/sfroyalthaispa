import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Royal Thai Spa | San Francisco Wellness & Massage',
  description: "San Francisco's premier massage and wellness spa. Experience traditional Thai massage, deep tissue therapy, cryotherapy, infrared sauna, and more at Fisherman's Wharf.",
  keywords: 'thai massage, spa san francisco, massage therapy, cryotherapy, infrared sauna, wellness, fishermans wharf',
  openGraph: {
    title: 'Royal Thai Spa | San Francisco Wellness & Massage',
    description: "San Francisco's premier massage and wellness spa at Fisherman's Wharf Marriott Hotel.",
    url: 'https://sfroyalthaispa.com',
    siteName: 'Royal Thai Spa',
    locale: 'en_US',
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
