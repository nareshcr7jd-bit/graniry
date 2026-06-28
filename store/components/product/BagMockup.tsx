import { Product } from "@/lib/products"

interface BagMockupProps {
  product: Product
  sizeKg?: number
  className?: string
  style?: React.CSSProperties
}

export function BagMockup({ product, sizeKg = 5, style }: BagMockupProps) {
  const { bagGradient, bagAccent, bagTextColor, name, shortName, tagline, emoji } = product

  return (
    <div
      style={{
        width: 152,
        height: 280,
        position: "relative",
        borderRadius: "11px 11px 18px 18px",
        overflow: "hidden",
        background: bagGradient,
        boxShadow: "6px 12px 36px rgba(0,0,0,0.5), inset 1px 1px 0 rgba(255,255,255,0.07), inset -2px 0 0 rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Sheen overlay */}
      <div className="bag-sheen" style={{ zIndex: 20 }} />

      {/* Top seal */}
      <div
        style={{
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.35)",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
          flexShrink: 0,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 16,
            right: 16,
            height: 1.5,
            background: "rgba(255,255,255,0.09)",
            borderRadius: 1,
          }}
        />
      </div>

      {/* Brand band */}
      <div
        style={{
          padding: "9px 14px 8px",
          textAlign: "center",
          background: "rgba(0,0,0,0.28)",
          borderBottom: `1px solid ${bagAccent}28`,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 3 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 3,
              background: bagAccent,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: bagTextColor,
            }}
          >
            GRAINARY
          </span>
        </div>
        <span
          style={{
            fontSize: 7,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: bagTextColor,
            opacity: 0.5,
          }}
        >
          South India&apos;s Premium Rice
        </span>
      </div>

      {/* Center product info */}
      <div
        style={{
          flex: 1,
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{emoji}</span>
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: 5,
            color: "rgba(255,255,255,0.95)",
          }}
        >
          {shortName}
        </p>
        <p
          style={{
            fontSize: 8,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.02em",
          }}
        >
          {tagline.split(" · ").slice(0, 2).join(" · ")}
        </p>

        {/* Grain window */}
        <div
          style={{
            margin: "10px 0 0",
            background: "rgba(0,0,0,0.18)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 6,
            height: 32,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                width: 5,
                height: 13,
                borderRadius: 3,
                background: bagAccent,
                opacity: 0.55 + i * 0.1,
                transform: `rotate(${[-8, 4, -4, 8][i]}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom seal */}
      <div
        style={{
          padding: "9px 14px 12px",
          textAlign: "center",
          background: "rgba(0,0,0,0.32)",
          borderTop: "1px solid rgba(0,0,0,0.2)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: 22,
            fontWeight: 700,
            color: bagTextColor,
            lineHeight: 1,
          }}
        >
          {sizeKg}
        </div>
        <div
          style={{
            fontSize: 7,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            display: "block",
            marginTop: 1,
          }}
        >
          KG NET
        </div>
        <p
          style={{
            fontSize: 6.5,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            marginTop: 4,
          }}
        >
          FSSAI Licensed · {name.slice(0, 14)}
        </p>
      </div>
    </div>
  )
}

export function BagMockupHover({ product, sizeKg = 5 }: BagMockupProps) {
  return (
    <div
      className="group cursor-pointer"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
    >
      <div
        style={{
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          willChange: "transform",
        }}
        className="group-hover:-translate-y-4 group-hover:scale-[1.03] group-hover:drop-shadow-2xl"
      >
        <BagMockup product={product} sizeKg={sizeKg} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
          {product.shortName}
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: 16,
            fontWeight: 700,
            color: "var(--amber)",
            marginTop: 4,
          }}
        >
          ₹{product.pricePerKg}/kg
        </p>
      </div>
    </div>
  )
}
