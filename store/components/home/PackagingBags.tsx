import { PRODUCTS } from "@/lib/products"
import { BagMockupHover } from "@/components/product/BagMockup"
import Link from "next/link"

export function PackagingBags() {
  return (
    <section
      id="packaging"
      style={{ background: "var(--dark, #111)", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Premium Packaging</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(30px, 5vw, 44px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.12,
              marginBottom: 16,
            }}
          >
            Every bag tells a{" "}
            <em style={{ color: "var(--amber)", fontStyle: "italic" }}>story</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
            Batch number, moisture percentage, GI data — printed on every bag. Transparent by design. Hover to explore.
          </p>
        </div>

        {/* Bags showcase */}
        <div
          className="flex gap-8 overflow-x-auto scrollbar-none pb-4 items-end justify-center flex-wrap"
        >
          {PRODUCTS.map(product => (
            <Link key={product.id} href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
              <BagMockupHover product={product} sizeKg={5} />
            </Link>
          ))}
        </div>

        {/* Features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
          {[
            { icon: "🔬", title: "Batch-level data", desc: "Moisture %, broken grain %, GI — on every bag" },
            { icon: "♻️", title: "Resealable zipper", desc: "Premium stand-up pouch with airtight seal" },
            { icon: "📋", title: "FSSAI Licensed", desc: "All regulations met. License number on pack." },
            { icon: "🌿", title: "No additives", desc: "100% natural rice. Nothing added, nothing removed." },
          ].map(f => (
            <div
              key={f.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
              <p style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 6 }}>{f.title}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link
            href="/packaging"
            style={{
              display: "inline-block",
              background: "var(--gold)",
              color: "#0D2E1A",
              fontSize: 14,
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: 9,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            View Full Packaging Lineup
          </Link>
        </div>
      </div>
    </section>
  )
}
