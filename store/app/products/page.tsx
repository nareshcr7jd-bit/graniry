"use client"

import { useState } from "react"
import { PRODUCTS, ProductCategory } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"

type Filter = "all" | ProductCategory
type Sort = "default" | "price-asc" | "price-desc"

const FILTERS: { label: string; value: Filter; emoji: string }[] = [
  { label: "All Products", value: "all", emoji: "🌾" },
  { label: "Diet & Health", value: "diet", emoji: "🥗" },
  { label: "Everyday", value: "everyday", emoji: "🍚" },
  { label: "Premium", value: "premium", emoji: "⭐" },
  { label: "Multigrain", value: "multigrain", emoji: "💪" },
  { label: "Ancient Grains", value: "ancient", emoji: "🏺" },
]

export default function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("all")
  const [sort, setSort] = useState<Sort>("default")

  let products = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter)
  if (sort === "price-asc") products = [...products].sort((a, b) => a.pricePerKg - b.pricePerKg)
  if (sort === "price-desc") products = [...products].sort((a, b) => b.pricePerKg - a.pricePerKg)

  return (
    <div style={{ minHeight: "100vh", background: "var(--parchment)" }}>
      {/* Page header */}
      <div
        style={{
          background: "var(--forest)",
          padding: "64px 24px 56px",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Our Range</p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.06,
              marginBottom: 14,
            }}
          >
            All Products
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 500, lineHeight: 1.8 }}>
            Eight rice varieties. Each aged, batch-tested, and chosen for a specific reason.
            From diet-safe to restaurant-grade.
          </p>
        </div>
      </div>

      {/* Filters bar */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding: "16px 24px",
          position: "sticky",
          top: 68,
          zIndex: 10,
        }}
      >
        <div
          style={{ maxWidth: 1320, margin: "0 auto" }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                style={{
                  background: filter === f.value ? "var(--forest)" : "transparent",
                  color: filter === f.value ? "white" : "#555",
                  border: filter === f.value ? "1.5px solid var(--forest)" : "1.5px solid rgba(0,0,0,0.1)",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "8px 16px",
                  borderRadius: 7,
                  cursor: "pointer",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  minHeight: 36,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value as Sort)}
            style={{
              border: "1.5px solid rgba(0,0,0,0.1)",
              borderRadius: 7,
              padding: "8px 12px",
              fontSize: 13,
              fontWeight: 500,
              color: "#555",
              background: "white",
              cursor: "pointer",
              minHeight: 36,
            }}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products grid */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "48px 24px" }}>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 28 }}>
          Showing {products.length} of {PRODUCTS.length} products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
