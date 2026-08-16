"use client"

import { useState } from "react"
import Link from "next/link"
import { PRODUCTS, ProductCategory } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductComparisonModal } from "@/components/product/ProductComparisonModal"
import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"

type Filter = "all" | ProductCategory

export function ProductShowcase() {
  const [active, setActive] = useState<Filter>("all")
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.showcase || TRANSLATIONS.en.showcase

  const filters: { label: string; value: Filter }[] = [
    { label: language === 'kn' ? "ಎಲ್ಲಾ ಅಕ್ಕಿ ತಳಿಗಳು" : "All Products", value: "all" },
    { label: language === 'kn' ? "ಆರೋಗ್ಯ ಮತ್ತು ಡಯಟ್" : "Diet & Health", value: "diet" },
    { label: language === 'kn' ? "ದೈನಂದಿನ ಬಳಕೆ" : "Everyday", value: "everyday" },
    { label: language === 'kn' ? "ಪ್ರೀಮಿಯಂ ತಳಿ" : "Premium", value: "premium" },
    { label: language === 'kn' ? "ಮಲ್ಟಿಗ್ರೇನ್" : "Multigrain", value: "multigrain" },
    { label: language === 'kn' ? "ಪ್ರಾಚೀನ ಅಕ್ಕಿ" : "Ancient Grains", value: "ancient" },
  ]

  const filtered = active === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <>
      <section
        id="products"
        className="section-padding"
        style={{ background: "var(--parchment)" }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          {/* Header */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
            style={{ marginBottom: 40 }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>{t.eyebrow}</p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(30px, 5vw, 44px)",
                  fontWeight: 800,
                  color: "var(--g-dark, #111)",
                  lineHeight: 1.12,
                  marginBottom: 10,
                }}
              >
                {t.titleStart}{" "}
                <em style={{ color: "var(--moss)", fontStyle: "italic" }}>{t.titleAccent}</em>
              </h2>
              <p style={{ fontSize: 15, color: "var(--g-mid, #555)", maxWidth: 480, lineHeight: 1.7 }}>
                {t.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCompareOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-950 text-amber-300 font-display font-bold text-xs hover:bg-emerald-900 transition-colors shadow-md cursor-pointer"
              >
                <span>{t.compareBtn}</span>
              </button>

              <Link
                href="/products"
                style={{
                  color: "var(--forest)",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1.5px solid rgba(13,46,26,0.25)",
                  padding: "10px 20px",
                  borderRadius: 8,
                  flexShrink: 0,
                  display: "inline-block",
                }}
              >
                {t.viewAll}
              </Link>
            </div>
          </div>

          {/* Filter chips */}
          <div
            className="flex gap-2 overflow-x-auto scrollbar-none pb-2"
            style={{ marginBottom: 36 }}
          >
            {filters.map(f => {
              const count = f.value === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.category === f.value).length
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  style={{
                    background: active === f.value ? "var(--forest)" : "white",
                    color: active === f.value ? "white" : "var(--g-mid, #555)",
                    border: active === f.value ? "1.5px solid var(--forest)" : "1.5px solid rgba(0,0,0,0.1)",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "9px 18px",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "background 0.18s, color 0.18s, border-color 0.18s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    minHeight: 44,
                  }}
                >
                  {f.label} ({count})
                </button>
              )
            })}
          </div>

          {/* Product grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Variety Comparison Matrix Modal */}
      <ProductComparisonModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </>
  )
}
