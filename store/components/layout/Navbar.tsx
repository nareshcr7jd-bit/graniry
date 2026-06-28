"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useCartStore } from "@/lib/store/cart"

function GrainaryLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 cursor-pointer no-underline">
      {/* SVG logo mark */}
      <div
        className="flex items-center justify-center flex-shrink-0 rounded-[10px]"
        style={{
          width: 40,
          height: 40,
          background: "linear-gradient(135deg, #C8960A, #E8A800)",
          boxShadow: "0 0 18px rgba(200,150,10,0.35)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {/* Three rice grains */}
          <ellipse cx="11" cy="5.5" rx="3.5" ry="4.8" fill="#0D2E1A" />
          <ellipse
            cx="6.5" cy="14"
            rx="3" ry="4.2"
            transform="rotate(-22 6.5 14)"
            fill="#0D2E1A"
          />
          <ellipse
            cx="15.5" cy="14"
            rx="3" ry="4.2"
            transform="rotate(22 15.5 14)"
            fill="#0D2E1A"
          />
        </svg>
      </div>
      {/* Word mark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-white"
          style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.06em" }}
        >
          GRAINARY
        </span>
        <span
          style={{
            fontSize: 8,
            color: "rgba(200,150,10,0.72)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: 2,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          South India&apos;s Premium Rice
        </span>
      </div>
    </Link>
  )
}

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Health Science", href: "/#health" },
  { label: "Packaging", href: "/packaging" },
  { label: "Subscribe", href: "/#subscribe" },
]

function CartIcon() {
  const { itemCount, openCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])
  const count = mounted ? itemCount() : 0

  return (
    <button
      onClick={openCart}
      aria-label={`Open cart — ${count} items`}
      className="relative flex items-center justify-center rounded-[9px] transition-all duration-200 cursor-pointer"
      style={{
        width: 44,
        height: 44,
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      {count > 0 && (
        <span
          className="absolute flex items-center justify-center text-white rounded-full"
          style={{
            top: -6, right: -6,
            width: 18, height: 18,
            background: "var(--gold)",
            fontSize: 10,
            fontWeight: 700,
            color: "#0D2E1A",
          }}
        >
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  )
}

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(13,46,26,0.97)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(200,150,10,0.14)",
      }}
    >
      <div
        className="flex items-center justify-between safe-top"
        style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", height: 68 }}
      >
        <GrainaryLogo />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-200 rounded-[7px]"
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: 13,
                fontWeight: 500,
                padding: "9px 15px",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#E8A800"
                ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.62)"
                ;(e.currentTarget as HTMLElement).style.background = "transparent"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-[7px] transition-all duration-200 no-underline"
            style={{
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.22)",
              color: "#4ade80",
              fontSize: 12,
              fontWeight: 600,
              padding: "8px 14px",
              letterSpacing: "0.02em",
              minHeight: 44,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          <CartIcon />

          <Link
            href="/products"
            className="hidden sm:flex items-center rounded-[7px] transition-all duration-200 no-underline font-display"
            style={{
              background: "var(--gold)",
              color: "#0D2E1A",
              fontSize: 13,
              fontWeight: 700,
              padding: "10px 20px",
              minHeight: 44,
              letterSpacing: "0.02em",
            }}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
