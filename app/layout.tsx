import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Advocate Avinash Singh | Best Lawyer in Delhi, Rohini | Civil & Corporate Cases',
  description: 'Top-rated Advocate Avinash Singh - Expert legal services in Delhi & Rohini. Specializing in civil litigation, family law, corporate cases, property disputes. Free initial consultation.',
  keywords: [
    'advocate in delhi',
    'best lawyer rohini',
    'civil lawyer delhi',
    'family lawyer rohini',
    'property dispute lawyer',
    'corporate lawyer delhi',
    'legal associate',
    'advocate avinash singh',
    'court cases lawyer',
    'legal consultant delhi',
    'high court advocate',
    'district court lawyer',
    'legal services rohini',
    'lawyer near me',
    'labour court lawyer',
    'labour court',
    'advocate near me',
    'advocate avinash rohini',
    'avinash advocate rohini court',
    'as legal associates'
  ],
  authors: [{ name: 'Advocate Avinash Singh' }],
  creator: 'AS Legal Associates',
  publisher: 'AS Legal Associates',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aslegalassociates.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Advocate Avinash Singh | Best Lawyer in Delhi, Rohini',
    description: 'Expert legal services in Delhi & Rohini. Specializing in civil litigation, family law, corporate cases.',
    url: 'https://aslegalassociates.in',
    siteName: 'AS Legal Associates',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Advocate Avinash Singh - AS Legal Associates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advocate Avinash Singh | Best Lawyer in Delhi, Rohini',
    description: 'Expert legal services in Delhi & Rohini. Specializing in civil litigation, family law, corporate cases.',
    images: ['/twitter-image.jpg'],
    creator: '@aslegalassociates',
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
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE', 
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi, Rohini',
    'geo.position': '28.7041;77.1025',
    'ICBM': '28.7041, 77.1025',
    'DC.title': 'Advocate Avinash Singh - AS Legal Associates',
    'DC.description': 'Legal services in Delhi & Rohini for civil, family, corporate law',
    'DC.creator': 'Advocate Avinash Singh',
    'DC.language': 'en',
    'DC.coverage': 'Delhi, India',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" itemScope itemType="https://schema.org/LegalService">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "AS Legal Associates",
              "image": "https://aslegalassociates.in/logo.jpg",
              "@id": "https://aslegalassociates.in",
              "url": "https://aslegalassociates.in",
              "telephone": "+91-XXXXXXXXXX", // Add your phone number
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Office Address",
                "addressLocality": "Rohini",
                "addressRegion": "Delhi",
                "postalCode": "110085",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.7041,
                "longitude": 77.1025
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/aslegalassociates",
                "https://www.linkedin.com/company/as-legal-associates",
                "https://twitter.com/aslegalassociates"
              ]
            })
          }}
        />
        <meta name="geo.position" content="28.7041;77.1025" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi, Rohini" />
        <meta name="ICBM" content="28.7041, 77.1025" />
        <link rel="canonical" href="https://aslegalassociates.in" />
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}