"use client"

import Link from "next/link"
import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"

export function FinalCTA() {
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.cta || TRANSLATIONS.en.cta

  return (
    <section
      style={{
        background: "var(--forest)",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(200,150,10,0.2)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,150,10,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.08,
            marginBottom: 20,
            letterSpacing: "-0.01em",
          }}
        >
          {t.title}
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 44,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 44px",
          }}
        >
          {t.subtitle}
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--gold)",
              color: "#0D2E1A",
              fontSize: 15,
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: 9,
              textDecoration: "none",
              display: "inline-block",
              letterSpacing: "0.02em",
              transition: "transform 0.2s",
              minHeight: 52,
            }}
          >
            {t.orderWhatsapp}
          </a>
          <Link
            href="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "var(--forest)",
              border: "2px solid rgba(13,46,26,0.3)",
              fontSize: 15,
              fontWeight: 600,
              padding: "15px 32px",
              borderRadius: 9,
              textDecoration: "none",
              minHeight: 52,
            }}
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}
