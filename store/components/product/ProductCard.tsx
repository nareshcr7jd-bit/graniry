"use client"

import { useState } from "react"
import Link from "next/link"
import { Product, PACK_SIZES } from "@/lib/products"
import { useCartStore } from "@/lib/store/cart"
import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"
import { formatPrice, calcPrice } from "@/lib/utils"
import { BagMockup } from "./BagMockup"
import { ProductQuickView } from "./ProductQuickView"

interface ProductCardProps {
  product: Product
  featured?: boolean
}

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  "HERO":            { bg: "var(--gold)", color: "#0D2E1A" },
  "DIET-SAFE":       { bg: "#166534", color: "#bbf7d0" },
  "LOW GI":          { bg: "#166534", color: "#bbf7d0" },
  "LOW GI · 54":     { bg: "#166534", color: "#bbf7d0" },
  "BATCH-TESTED":    { bg: "rgba(22,101,52,0.15)", color: "#16a34a" },
  "FAST COOK":       { bg: "rgba(37,99,235,0.12)", color: "#2563eb" },
  "NUTRIENT-RICH":   { bg: "rgba(37,99,235,0.12)", color: "#2563eb" },
  "BATTER GRADE":    { bg: "rgba(91,33,182,0.12)", color: "#7c3aed" },
  "IDLI SPECIALIST": { bg: "rgba(91,33,182,0.12)", color: "#7c3aed" },
  "RESTAURANT GRADE":{ bg: "var(--red, #b91c1c)", color: "white" },
  "PREMIUM":         { bg: "var(--red, #b91c1c)", color: "white" },
  "18+ MONTHS":      { bg: "rgba(200,150,10,0.15)", color: "var(--gold)" },
  "8.9g PROTEIN":    { bg: "rgba(234,88,12,0.15)", color: "#ea580c" },
  "MULTIGRAIN":      { bg: "rgba(234,88,12,0.12)", color: "#c2410c" },
  "5-GRAIN BLEND":   { bg: "rgba(234,88,12,0.1)", color: "#c2410c" },
  "ANCIENT GRAIN":   { bg: "rgba(185,28,28,0.12)", color: "#b91c1c" },
  "ANTIOXIDANT-RICH":{ bg: "rgba(185,28,28,0.12)", color: "#b91c1c" },
  "HEIRLOOM":        { bg: "rgba(185,28,28,0.1)", color: "#b91c1c" },
  "WHOLE GRAIN":     { bg: "rgba(120,80,30,0.15)", color: "#92400e" },
  "HIGH FIBRE":      { bg: "rgba(120,80,30,0.12)", color: "#92400e" },
  "UNPOLISHED":      { bg: "rgba(120,80,30,0.1)", color: "#78350f" },
}

function Badge({ label }: { label: string }) {
  const s = BADGE_STYLES[label] || { bg: "rgba(0,0,0,0.07)", color: "#555" }
  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: 4,
        display: "inline-block",
      }}
    >
      {label}
    </span>
  )
}

export function ProductCard({ product, featured }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(5)
  const [added, setAdded] = useState(false)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const { addItem } = useCartStore()
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.showcase || TRANSLATIONS.en.showcase

  const price = calcPrice(product.pricePerKg, selectedSize)
  const isBestValue = selectedSize >= 10

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      pricePerKg: product.pricePerKg,
      sizeKg: selectedSize,
      qty: 1,
      bagColor: product.bagColor,
      emoji: product.emoji,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const categoryColorMap: Record<string, string> = {
    everyday: '#C8960A',
    diet: '#4ADE80',
    premium: '#E8A800',
    multigrain: '#FB923C',
    ancient: '#FCA5A5',
  }
  const categoryStripeColor = categoryColorMap[product.category] || '#C8960A'

  return (
    <>
      <div
        className="product-card group relative flex flex-col justify-between overflow-hidden"
        style={{
          background: "white",
          borderRadius: 16,
          border: "1px solid rgba(0,0,0,0.07)",
          transition: "transform 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out)",
        }}
      >
        {/* Category color-coded top accent stripe */}
        <div style={{ height: 4, background: categoryStripeColor, width: "100%" }} />

        {/* Top visual area */}
        <Link href={`/products/${product.slug}`} className="no-underline block">
          <div
            style={{
              height: featured ? 280 : 220,
              background: product.bagGradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grid texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "repeating-linear-gradient(45deg, transparent 0, transparent 20px, rgba(255,255,255,0.012) 20px, rgba(255,255,255,0.012) 40px)",
              }}
            />

            {/* Quick view button overlay on hover */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsQuickViewOpen(true)
              }}
              className="absolute z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0"
            >
              {t.quickView}
            </button>

            {/* Centered bag mockup */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                transform: "scale(0.88)",
                transition: "transform 0.35s var(--ease-spring)",
              }}
              className="group-hover:scale-95"
            >
              <BagMockup product={product} sizeKg={selectedSize} />
            </div>

            {/* Badges overlay */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                right: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 6,
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {product.badges.slice(0, 2).map(b => <Badge key={b} label={b} />)}
              </div>
              {product.popular && (
                <span
                  style={{
                    background: "rgba(200,150,10,0.92)",
                    color: "#0D2E1A",
                    fontSize: 9,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    flexShrink: 0,
                  }}
                >
                  Popular
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Card body */}
        <div style={{ padding: "20px 20px 18px" }} className="flex-1 flex flex-col justify-between">
          <div>
            <Link href={`/products/${product.slug}`} className="no-underline block">
              <h3
                className="font-display group-hover:text-amber-700 transition-colors"
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 6,
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </h3>
            </Link>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 14 }}>
              {product.description.slice(0, 90)}
              {product.description.length > 90 ? "…" : ""}
            </p>

            {/* Raw vs Steam quick buyer guide chip */}
            {(product.id === 'sona-masoori-old-raw' || product.id === 'sona-masoori-steam') && (
              <div className="mb-3 p-2 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-950 font-medium leading-tight">
                {product.id === 'sona-masoori-old-raw' ? (
                  <span>💡 <strong>Raw Rice:</strong> Aged 12–24m · Lower GI (56) · Traditional fluffy texture</span>
                ) : (
                  <span>♨️ <strong>Steam Rice:</strong> Parboiled · Cooks in 14 min · Nutrient-locked for tiffin</span>
                )}
              </div>
            )}

            {/* Health chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
              {product.healthClaims.slice(0, 3).map(claim => (
                <span
                  key={claim}
                  style={{
                    background: "var(--parchment)",
                    color: "var(--moss)",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 9px",
                    borderRadius: 4,
                    border: "1px solid rgba(28,92,46,0.1)",
                  }}
                >
                  {claim.split(" ").slice(0, 4).join(" ")}
                </span>
              ))}
            </div>

            {/* Size selector with savings badges */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
              {PACK_SIZES.map(size => {
                const isSelected = selectedSize === size
                const discount = size === 25 ? "Save 15%" : size === 10 ? "Save 10%" : size === 5 ? "Save 5%" : null
                return (
                  <button
                    key={size}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedSize(size) }}
                    className={`size-btn relative ${isSelected ? "active" : ""}`}
                    title={discount ? `Bulk order discount: ${discount}` : `${size}kg pack`}
                  >
                    {size}kg
                    {discount && isSelected && (
                      <span className="ml-1 text-[8px] font-bold text-amber-400 uppercase">
                        (-{size === 25 ? '15%' : size === 10 ? '10%' : '5%'})
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Price row + CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <div>
              <div className="font-display" style={{ fontSize: 24, fontWeight: 700, color: "var(--forest)", lineHeight: 1 }}>
                {formatPrice(price)}
              </div>
              <div style={{ fontSize: 11, color: "#888", marginTop: 3, display: "flex", alignItems: "center", gap: 6 }}>
                <span>{formatPrice(product.pricePerKg)}/kg</span>
                {isBestValue && (
                  <span
                    style={{
                      background: "rgba(22,101,52,0.12)",
                      color: "#15803d",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 3,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.bestValue}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              style={{
                background: added ? "var(--moss)" : "var(--forest)",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: 9,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
                minHeight: 44,
                minWidth: 44,
                display: "flex",
                alignItems: "center",
                gap: 6,
                letterSpacing: "0.02em",
                flexShrink: 0,
              }}
            >
              {added ? "✓ Added" : t.addToCart}
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Lightbox */}
      {isQuickViewOpen && (
        <ProductQuickView product={product} onClose={() => setIsQuickViewOpen(false)} />
      )}
    </>
  )
}
