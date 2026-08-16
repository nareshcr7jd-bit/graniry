"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import { getProductBySlug, PRODUCTS, PACK_SIZES } from "@/lib/products"
import { useCartStore } from "@/lib/store/cart"
import { formatPrice, calcPrice } from "@/lib/utils"
import { BagMockup } from "@/components/product/BagMockup"
import { LabCertificateModal } from "@/components/product/LabCertificateModal"
import Link from "next/link"

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const productData = getProductBySlug(slug)
  if (!productData) notFound()
  const product = productData!

  const [selectedSize, setSelectedSize] = useState(5)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [isCertModalOpen, setIsCertModalOpen] = useState(false)
  const { addItem, openCart } = useCartStore()

  const price = calcPrice(product.pricePerKg, selectedSize) * qty

  function handleAddToCart() {
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      pricePerKg: product.pricePerKg,
      sizeKg: selectedSize,
      qty,
      bagColor: product.bagColor,
      emoji: product.emoji,
    })
    setAdded(true)
    setTimeout(() => { setAdded(false); openCart() }, 800)
  }

  const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.featured)).slice(0, 3)

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://graniry-tawny.vercel.app/packaging-lineup.png`,
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Grainary"
    },
    "offers": {
      "@type": "Offer",
      "price": product.pricePerKg,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Grainary"
      }
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Breadcrumb */}
      <div style={{ background: "var(--forest)", padding: "14px 24px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            {" · "}
            <Link href="/products" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Products</Link>
            {" · "}
            <span style={{ color: "rgba(200,150,10,0.8)" }}>{product.name}</span>
          </p>
        </div>
      </div>

      {/* Product main */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: bag visual */}
          <div>
            <div
              style={{
                background: product.bagGradient,
                borderRadius: 24,
                minHeight: 480,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "repeating-linear-gradient(45deg, transparent 0, transparent 20px, rgba(255,255,255,0.012) 20px, rgba(255,255,255,0.012) 40px)",
              }} />
              <div className="animate-float" style={{ position: "relative", zIndex: 1 }}>
                <BagMockup product={product} sizeKg={selectedSize} style={{ width: 180, height: 332 }} />
              </div>
            </div>

            {/* QC & Lab Audit Bar */}
            <div className="mt-4 p-4 rounded-2xl bg-white border border-amber-950/10 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500">NABL Accredited Quality Audit</p>
                <p className="text-xs font-bold text-emerald-950">Batch #{product.qcSpecs.labCertificateNo}</p>
              </div>
              <button
                onClick={() => setIsCertModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-emerald-950 text-amber-300 font-bold text-xs hover:bg-emerald-900 transition-colors"
              >
                Inspect Certificate 🔬
              </button>
            </div>

            {/* Nutrition panel */}
            <div
              style={{
                marginTop: 16,
                background: "white",
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 16 }}>
                Nutrition per 100g (cooked)
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Calories", val: `${product.nutrition.calories}`, unit: "kcal" },
                  { label: "Protein", val: `${product.nutrition.protein}g`, unit: "" },
                  { label: "Carbs", val: `${product.nutrition.carbs}g`, unit: "" },
                  { label: "Fibre", val: `${product.nutrition.fibre}g`, unit: "" },
                  { label: "Fat", val: `${product.nutrition.fat}g`, unit: "" },
                  { label: "Glycemic Index", val: `${product.nutrition.gi}`, unit: "" },
                ].map(n => (
                  <div
                    key={n.label}
                    style={{
                      background: "var(--parchment)",
                      borderRadius: 10,
                      padding: "12px 14px",
                      textAlign: "center",
                    }}
                  >
                    <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--forest)" }}>
                      {n.val}
                    </div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 3, letterSpacing: "0.04em" }}>
                      {n.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: product info */}
          <div>
            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
              {product.badges.map(b => (
                <span
                  key={b}
                  style={{
                    background: "var(--forest)",
                    color: "var(--amber)",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 5,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#111",
                lineHeight: 1.1,
                marginBottom: 10,
              }}
            >
              {product.name}
            </h1>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75, marginBottom: 24 }}>
              {product.longDescription}
            </p>

            {/* Health claims */}
            <div
              style={{
                background: "rgba(13,46,26,0.04)",
                border: "1px solid rgba(13,46,26,0.1)",
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--forest)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Health & Quality Proof
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {product.healthClaims.map(claim => (
                  <div key={claim} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--sage)", fontSize: 14, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#444" }}>{claim}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <p style={{ fontSize: 12, fontWeight: 600, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              Select Pack Size & Volume Discount
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {PACK_SIZES.map(size => {
                const discount = size === 25 ? "Save 15%" : size === 10 ? "Save 10%" : size === 5 ? "Save 5%" : null
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      background: selectedSize === size ? "var(--forest)" : "white",
                      color: selectedSize === size ? "white" : "#555",
                      border: selectedSize === size ? "1.5px solid var(--forest)" : "1.5px solid rgba(0,0,0,0.12)",
                      fontSize: 14,
                      fontWeight: 600,
                      padding: "10px 18px",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      minHeight: 44,
                    }}
                  >
                    {size}kg
                    {discount && (
                      <span
                        style={{
                          display: "block",
                          fontSize: 9,
                          color: selectedSize === size ? "rgba(255,255,255,0.7)" : "#166534",
                          marginTop: 1,
                          fontWeight: 700,
                        }}
                      >
                        {discount}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Qty + Price + CTA */}
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  border: "1.5px solid rgba(0,0,0,0.12)",
                  borderRadius: 9,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{
                    width: 44, height: 52,
                    background: "transparent", border: "none",
                    cursor: "pointer", fontSize: 18, fontWeight: 500,
                  }}
                >
                  −
                </button>
                <span style={{ width: 40, textAlign: "center", fontSize: 16, fontWeight: 700 }}>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  style={{
                    width: 44, height: 52,
                    background: "transparent", border: "none",
                    cursor: "pointer", fontSize: 18,
                  }}
                >
                  +
                </button>
              </div>

              <div>
                <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--forest)", lineHeight: 1 }}>
                  {formatPrice(price)}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 3 }}>
                  {formatPrice(product.pricePerKg)}/kg · {selectedSize}kg × {qty}
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                width: "100%",
                background: added ? "var(--moss)" : "var(--forest)",
                color: "white",
                border: "none",
                padding: "16px 24px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
                minHeight: 56,
                letterSpacing: "0.02em",
              }}
            >
              {added ? "✓ Added to Cart" : `Add to Cart — ${formatPrice(price)}`}
            </button>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#666" }}>
                <span>🚚</span> Express Bangalore delivery
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#666" }}>
                <span>🔬</span> CFTRI / NABL lab audited
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#666" }}>
                <span>🌿</span> 100% natural, no fumigation
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#666" }}>
                <span>⏱</span> Cooks in {product.cookTime}
              </div>
            </div>
          </div>
        </div>

        {/* Compare with Regular Rice Micro-Table */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-amber-950/10 shadow-sm">
          <h3 className="text-xl font-display font-bold text-emerald-950 mb-2">Compare vs. Fresh Commodity White Rice</h3>
          <p className="text-xs text-gray-600 mb-6">See how {product.name} compares side-by-side with fresh-milled unaged white rice.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase text-[10px]">
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4 text-emerald-950 font-extrabold">{product.name} (Grainary)</th>
                  <th className="py-3 px-4 text-gray-400">Generic Fresh White Rice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-700">Glycemic Index (GI)</td>
                  <td className="py-3 px-4 font-bold text-emerald-900">{product.nutrition.gi} ({product.nutrition.gi <= 55 ? 'Certified Low GI' : 'Moderate GI'})</td>
                  <td className="py-3 px-4 text-gray-500">72 (High GI — Glucose Spike)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-700">Aging Duration</td>
                  <td className="py-3 px-4 font-bold text-emerald-900">{product.aging || 'Fresh Crop Selected'}</td>
                  <td className="py-3 px-4 text-gray-500">0–2 Months (High Moisture/Starch)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-700">Moisture Content</td>
                  <td className="py-3 px-4 font-bold text-emerald-900">{product.qcSpecs.moisturePercent}</td>
                  <td className="py-3 px-4 text-gray-500">&gt; 13.5% (Sticky / Heavy)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-700">Protein per 100g</td>
                  <td className="py-3 px-4 font-bold text-emerald-900">{product.nutrition.protein}g</td>
                  <td className="py-3 px-4 text-gray-500">6.2g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recipe Ideas & Chef Notes */}
        <div className="mt-12 p-8 rounded-3xl bg-emerald-950 text-white">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">Kitchen Guide & Dish Ideas</span>
          <h3 className="text-2xl font-display font-bold text-white mb-4">Best Cooking Uses for {product.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {product.bestFor.map((dish, idx) => (
              <div key={dish} className="p-4 rounded-2xl bg-white/10 border border-white/15">
                <span className="text-amber-300 font-bold text-sm block mb-1">Dish #{idx + 1}: {dish}</span>
                <p className="text-white/70">
                  Cook with water ratio {product.waterRatio}. Cook time: {product.cookTime}. Pair with fresh Bangalore sambar or chutney.
                </p>
              </div>
            ))}
          </div>
          {product.recipeNotes && (
            <div className="mt-4 p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-200 text-xs font-medium">
              💡 <strong>Chef Recipe Note:</strong> {product.recipeNotes}
            </div>
          )}
        </div>

        {/* Related products */}
        <div style={{ marginTop: 80 }}>
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#111", marginBottom: 28 }}>
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map(p => (
              <Link key={p.id} href={`/products/${p.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "white",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "transform 0.25s var(--ease-out)",
                  }}
                >
                  <div
                    style={{
                      height: 120,
                      background: p.bagGradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 40,
                    }}
                  >
                    {p.emoji}
                  </div>
                  <div style={{ padding: "16px" }}>
                    <p className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 4 }}>{p.name}</p>
                    <p style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>{p.tagline.split(" · ")[0]}</p>
                    <p className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--forest)" }}>
                      {formatPrice(p.pricePerKg)}/kg
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Certificate Modal */}
      <LabCertificateModal product={product} isOpen={isCertModalOpen} onClose={() => setIsCertModalOpen(false)} />
    </div>
  )
}
