"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.hero || TRANSLATIONS.en.hero

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--forest)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,28,14,0.62)",
          zIndex: 1,
        }}
      />
      {/* Gold accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 40% 40% at 15% 75%, rgba(200,150,10,0.07) 0%, transparent 60%)",
          zIndex: 1,
        }}
      />
      <div className="grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 1 }} />

      <div
        style={{ maxWidth: 1320, margin: "0 auto", padding: "0px 24px", position: "relative", zIndex: 2, width: "100%" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">{t.eyebrow}</span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(44px, 6.5vw, 68px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.04,
                marginBottom: 22,
                letterSpacing: "-0.01em",
              }}
            >
              {t.titleStart}{" "}
              <em style={{ fontStyle: "italic", color: "var(--amber)" }}>{t.titleAccent}</em>{" "}
              {t.titleEnd}
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.85,
                maxWidth: 480,
                marginBottom: 16,
              }}
            >
              {t.description}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: 460,
                marginBottom: 36,
              }}
            >
              Farm-direct · Aged 12–24 months · Batch-tested · Bangalore delivery
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <Link
                href="/products"
                style={{
                  background: "var(--gold)",
                  color: "#0D2E1A",
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "15px 32px",
                  borderRadius: 9,
                  textDecoration: "none",
                  display: "inline-block",
                  letterSpacing: "0.02em",
                  transition: "transform 0.2s, opacity 0.2s",
                  minHeight: 52,
                }}
              >
                {t.exploreProducts}
              </Link>
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  color: "#4ade80",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "15px 28px",
                  borderRadius: 9,
                  border: "1.5px solid rgba(37,211,102,0.3)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 52,
                }}
              >
                {t.whatsappOrder}
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: 24,
              }}
            >
              {[
                { val: "GI 54", label: "Diet Rice GI" },
                { val: "8 Products", label: "Premium Varieties" },
                { val: "Day 1", label: "Bangalore Delivery" },
                { val: "100%", label: "Natural, No Additives" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    paddingRight: i < 3 ? 20 : 0,
                    marginRight: i < 3 ? 20 : 0,
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    minWidth: "max-content",
                  }}
                >
                  <div
                    className="font-display"
                    style={{ fontSize: 22, fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 4,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: packaging lineup image */}
          <div
            className="flex items-center justify-center"
            style={{ position: "relative" }}
          >
            <Image
              src="/packaging-lineup.png"
              alt="Grainary premium rice packaging lineup"
              width={560}
              height={560}
              style={{
                width: "100%",
                maxWidth: 560,
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.5))",
                willChange: "transform",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
