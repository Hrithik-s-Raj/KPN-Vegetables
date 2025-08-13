import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'KPN Vegetables - Fresh Wholesale & Retail in Kozhikode',
  description: 'Premium quality fresh vegetables for wholesale and retail in Kozhikode, Kerala. Daily fresh produce from local farms. Best prices guaranteed.',
  keywords: 'vegetables Kozhikode, fresh vegetables Kerala, wholesale vegetables, retail vegetables, organic vegetables Calicut, KPN Vegetables',
  authors: [{ name: 'KPN Vegetables' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'KPN Vegetables - Fresh Wholesale & Retail in Kozhikode',
    description: 'Premium quality fresh vegetables for wholesale and retail in Kozhikode, Kerala. Daily fresh produce from local farms.',
    url: 'https://greenvalleyvegetables.com',
    siteName: 'KPN Vegetables',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Fresh vegetables at KPN Vegetables Kozhikode'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KPN Vegetables - Fresh Wholesale & Retail in Kozhikode',
    description: 'Premium quality fresh vegetables for wholesale and retail in Kozhikode, Kerala.'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KPN Vegetables",
  "description": "Premium quality fresh vegetables for wholesale and retail in Kozhikode, Kerala",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Beach Road",
    "addressLocality": "Kozhikode",
    "addressRegion": "Kerala",
    "postalCode": "673001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2588,
    "longitude": 75.7804
  },
  "url": "https://greenvalleyvegetables.com",
  "telephone": "+91-495-2345678",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "₹₹",
  "image": "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2D5016" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}