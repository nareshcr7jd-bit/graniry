"use client"

import Link from "next/link"
import { PRODUCTS } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

export function HeroSection() {
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4)

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
      {/* Background effects */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 70% 40%, rgba(28,92,46,0.22) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 15% 75%, rgba(200,150,10,0.07) 0%, transparent 60%)",
        }}
      />
      <div className="grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      <div
        style={{ maxWidth: 1320, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 2, width: "100%" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="animate-fade-up">
            {/* Live pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(200,150,10,0.1)",
                border: "1px solid rgba(200,150,10,0.28)",
                color: "var(--amber)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 30,
                marginBottom: 28,
              }}
            >
              <span className="animate-pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              Bangalore Delivery · Available Now
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(48px, 7vw, 72px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.04,
                marginBottom: 22,
                letterSpacing: "-0.01em",
              }}
            >
              Eat Rice.{" "}
              <em style={{ fontStyle: "italic", color: "var(--amber)" }}>Stay Fit.</em>
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.85,
                maxWidth: 480,
                marginBottom: 16,
              }}
            >
              South India&apos;s first premium rice brand with a health story. Our aged Sona Masoori
              has a{" "}
              <strong style={{ color: "rgba(255,255,255,0.82)" }}>Glycemic Index of 54</strong> — 25%
              lower than regular rice. Eat it on your diet.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: 460,
                marginBottom: 40,
              }}
            >
              Farm-direct · Aged 12–24 months · Batch-tested · Bangalore delivery
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
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
                  transition: "all 0.2s",
                  minHeight: 52,
                }}
              >
                Shop Now
              </Link>
              <a
                href="#health"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "15px 32px",
                  borderRadius: 9,
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  display: "inline-block",
                  minHeight: 52,
                }}
              >
                The Science →
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: 0,
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: 28,
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
                    paddingRight: i < 3 ? 24 : 0,
                    marginRight: i < 3 ? 24 : 0,
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <div
                    className="font-display"
                    style={{ fontSize: 24, fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.38)",
                      marginTop: 5,
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

          {/* Right: product preview card */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 20,
              padding: 24,
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(200,150,10,0.7)",
                marginBottom: 18,
              }}
            >
              Our Products
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {featured.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = "rgba(200,150,10,0.08)"
                      el.style.borderColor = "rgba(200,150,10,0.18)"
                      el.style.transform = "translateX(4px)"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = "rgba(255,255,255,0.04)"
                      el.style.borderColor = "rgba(255,255,255,0.06)"
                      el.style.transform = "translateX(0)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 9,
                          background: product.bagGradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 16,
                          flexShrink: 0,
                        }}
                      >
                        {product.emoji}
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.88)" }}>
                          {product.shortName}
                        </p>
                        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", marginTop: 2 }}>
                          {product.aging ? `Aged ${product.aging}` : product.tagline.split(" · ")[0]}
                        </p>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "2px 7px",
                            borderRadius: 4,
                            marginTop: 4,
                            background: "rgba(200,150,10,0.18)",
                            color: "var(--amber)",
                          }}
                        >
                          {product.badges[0]}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        className="font-display"
                        style={{ fontSize: 18, fontWeight: 700, color: "var(--amber)" }}
                      >
                        {formatPrice(product.pricePerKg)}
                      </div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
                        per kg
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/products"
              style={{
                display: "block",
                marginTop: 14,
                textAlign: "center",
                color: "rgba(200,150,10,0.7)",
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              View all 8 products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
