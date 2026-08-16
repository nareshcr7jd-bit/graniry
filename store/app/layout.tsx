import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { CartDrawer } from "@/components/layout/CartDrawer"
import { Footer } from "@/components/layout/Footer"
import { ChatBot } from "@/components/layout/ChatBot"
import { ToastContainer } from "@/components/ui/ToastContainer"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grainary — South India's Premium Aged & Low GI Rice Brand",
  description:
    "Aged Sona Masoori with clinically tested Low GI (54), lower starch, and transparent NABL lab testing. Same-day delivery in Bangalore. Diet Rice, Multigrain, Red Rice & more.",
  keywords: [
    "Low GI Sona Masoori Bangalore",
    "Aged rice online Bangalore",
    "Diabetic diet rice India",
    "Kavuni red rice Chettinad",
    "Multigrain power rice protein",
    "B2B restaurant rice wholesale Bangalore",
    "PCOS brown rice whole grain",
  ],
  openGraph: {
    title: "Grainary — Eat Rice. Stay Fit.",
    description: "South India's first premium rice brand with a health story. Low GI, 18-month aged, NABL batch-tested.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grainary — JDP Enterprises",
    "legalName": "JDP Enterprises",
    "image": "https://graniry-tawny.vercel.app/logo-dark.png",
    "@id": "https://graniry-tawny.vercel.app",
    "url": "https://graniry-tawny.vercel.app",
    "telephone": "+919900000000",
    "priceRange": "₹58 - ₹130 / kg",
    "parentOrganization": {
      "@type": "Organization",
      "name": "JDP Enterprises"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Koramangala 4th Block",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9352,
      "longitude": 77.6245
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://wa.me/919900000000"
    ]
  }

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased" style={{ background: "var(--cream)" }}>
        <Navbar />
        <CartDrawer />
        <ToastContainer />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
