"use client"

const REASONS = [
  {
    icon: "🔬",
    title: "Batch-tested health data",
    desc: "Every batch tested for moisture content, broken grain %, and glycemic index. The numbers are on the bag — not just marketing claims.",
    color: "rgba(74,222,128,0.1)",
  },
  {
    icon: "⏳",
    title: "Aged 12–24 months",
    desc: "Starch crystallises. Moisture drops below 10%. GI falls. The science of aging applied to South Indian rice — a first in Bangalore.",
    color: "rgba(200,150,10,0.1)",
  },
  {
    icon: "📦",
    title: "1kg trial packs",
    desc: "Kitchen King's smallest is 10kg. We start at ₹75. Remove the ₹750 first-order barrier. Try us risk-free.",
    color: "rgba(96,165,250,0.1)",
  },
  {
    icon: "🚚",
    title: "Bangalore-first delivery",
    desc: "Day 1 delivery across Bangalore. WhatsApp order in under 60 seconds. No form filling, no minimum order pain.",
    color: "rgba(168,85,247,0.1)",
  },
  {
    icon: "🔄",
    title: "Subscribe & Save 5%",
    desc: "Rice is a monthly staple. No brand offers Sona Masoori auto-delivery. Set it once, get it every month — 5% cheaper forever.",
    color: "rgba(251,146,60,0.1)",
  },
  {
    icon: "🌿",
    title: "Transparent sourcing",
    desc: "Origin state, mill name, aging month — on every pack and listing. Not because we must. Because you deserve to know.",
    color: "rgba(34,197,94,0.1)",
  },
]

export function WhyGrainary() {
  return (
    <section
      id="why"
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Why Choose Grainary</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(30px, 5vw, 44px)",
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.12,
              marginBottom: 14,
            }}
          >
            Six gaps.{" "}
            <em style={{ color: "var(--moss)", fontStyle: "italic" }}>One brand fills them.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--mid)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            We studied every rice brand in Bangalore. Here&apos;s exactly what was missing — and what we built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(r => (
            <div
              key={r.title}
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 16,
                padding: "28px 28px 32px",
                transition: "transform 0.3s var(--ease-out)",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: r.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {r.icon}
              </div>
              <h3
                className="font-display"
                style={{ fontSize: 19, fontWeight: 700, color: "#111", marginBottom: 10 }}
              >
                {r.title}
              </h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.82 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
