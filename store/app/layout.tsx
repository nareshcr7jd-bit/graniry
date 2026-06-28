import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { CartDrawer } from "@/components/layout/CartDrawer"
import { Footer } from "@/components/layout/Footer"
import { ChatBot } from "@/components/layout/ChatBot"

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
  title: "Grainary — South India's Premium Rice Brand",
  description:
    "Farm to your kitchen. Aged Sona Masoori with lower GI, lower starch, and a health story. Bangalore delivery. Diet Rice, Multigrain, Red Rice & more.",
  keywords: [
    "Sona Masoori rice Bangalore",
    "aged rice low GI",
    "diet rice India",
    "multigrain rice online",
    "red rice Kavuni",
    "brown rice whole grain",
    "premium rice brand South India",
  ],
  openGraph: {
    title: "Grainary — Eat Rice. Stay Fit.",
    description: "South India's first premium rice brand with a health story. Low GI, aged, batch-tested.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" style={{ background: "var(--cream)" }}>
        <Navbar />
        <CartDrawer />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
