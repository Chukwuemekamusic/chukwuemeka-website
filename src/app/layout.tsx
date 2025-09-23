import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/utils/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.siteName}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.author} - Christian Musician and Worship Leader`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.ogImage],
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
    google: 'your-google-verification-code', // You'll need to add this when you set up Google Search Console
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-icon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chukwuemeka",
    "alternateName": "Chukwuemeka Anyaegbunam",
    "description": SITE_CONFIG.description,
    "url": SITE_CONFIG.url,
    "image": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    "sameAs": [
      "https://open.spotify.com/artist/your-spotify-id",
      "https://music.apple.com/artist/your-apple-music-id",
      "https://www.instagram.com/your-instagram",
      "https://www.facebook.com/your-facebook"
    ],
    "jobTitle": "Christian Musician",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Artist"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aberdeen",
      "addressCountry": "Scotland"
    },
    "nationality": "Nigerian",
    "genre": ["Gospel", "Christian", "Worship"],
    "album": [
      {
        "@type": "MusicAlbum",
        "name": "His Yoke My Rest",
        "albumProductionType": "StudioAlbum"
      },
      {
        "@type": "MusicAlbum",
        "name": "Keep Hope Alive",
        "albumProductionType": "StudioAlbum"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
