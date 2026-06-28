"use client"

import { PRODUCTS } from "@/lib/products"
import { BagMockup } from "@/components/product/BagMockup"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

export default function PackagingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A" }}>
      {/* Header */}
      <div
        style={{
          background: "var(--forest)",
          padding: "80px 24px 64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Packaging Lineup</p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.06,
              marginBottom: 16,
            }}
          >
            Premium.{" "}
            <em style={{ color: "var(--amber)", fontStyle: "italic" }}>Transparent. Honest.</em>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
            Batch number, moisture %, glycemic index data — all on the pack. Eight colour-coded varieties.
            Stand-up resealable pouches. FSSAI licensed.
          </p>
        </div>
      </div>

      {/* All bags showcase */}
      <div style={{ background: "#0A0A0A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {PRODUCTS.map(product => (
              <div
                key={product.id}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
              >
                {/* Size variants */}
                <div className="flex gap-4 items-end overflow-x-auto scrollbar-none pb-2">
                  {[1, 5].map(size => (
                    <div
                      key={size}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                      }}
                      className="group cursor-pointer"
                    >
                      <div
                        style={{ transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)", willChange: "transform" }}
                        className="group-hover:-translate-y-4 group-hover:scale-105 group-hover:drop-shadow-2xl"
                      >
                        <BagMockup
                          product={product}
                          sizeKg={size}
                          style={{
                            width: size === 1 ? 90 : 120,
                            height: size === 1 ? 166 : 222,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.4)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {size}kg
                      </span>
                    </div>
                  ))}
                </div>

                {/* Product info */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: 4 }}>
                    {product.shortName}
                  </p>
                  <p
                    className="font-display"
                    style={{ fontSize: 18, fontWeight: 700, color: "var(--amber)", marginBottom: 8 }}
                  >
                    {formatPrice(product.pricePerKg)}/kg
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    style={{
                      display: "inline-block",
                      background: "rgba(200,150,10,0.12)",
                      border: "1px solid rgba(200,150,10,0.25)",
                      color: "var(--amber)",
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: 6,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pack sizes section */}
      <div style={{ background: "var(--forest)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Available Pack Sizes</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "white", marginBottom: 48 }}
          >
            Right size for every household
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { size: 1, desc: "Try before you commit. Perfect for testing a new variety.", rec: "First-time buyers" },
              { size: 5, desc: "One to two weeks for a small family. Most popular size.", rec: "Couples & singles" },
              { size: 10, desc: "A month for a small family. Great value pack.", rec: "Small families" },
              { size: 25, desc: "Two months or more. Our best price per kg.", rec: "Large families & subscribers" },
            ].map(p => (
              <div
                key={p.size}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 40, fontWeight: 900, color: "var(--amber)", lineHeight: 1, marginBottom: 8 }}
                >
                  {p.size}kg
                </div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(200,150,10,0.65)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {p.rec}
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "var(--gold)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{ fontSize: 36, fontWeight: 800, color: "var(--forest)", marginBottom: 14 }}
          >
            Order your first bag today
          </h2>
          <p style={{ fontSize: 15, color: "rgba(13,46,26,0.65)", marginBottom: 28, lineHeight: 1.7 }}>
            Start with a 1kg trial. No commitment. Free delivery on first order.
          </p>
          <Link
            href="/products"
            style={{
              display: "inline-block",
              background: "var(--forest)",
              color: "white",
              fontSize: 15,
              fontWeight: 700,
              padding: "15px 36px",
              borderRadius: 9,
              textDecoration: "none",
              minHeight: 52,
            }}
          >
            Shop All Products
          </Link>
        </div>
      </div>
    </div>
  )
}
