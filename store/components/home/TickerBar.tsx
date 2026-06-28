const ITEMS = [
  { icon: "🌾", text: "Aged Sona Masoori" },
  { icon: "📊", text: "Glycemic Index: 54" },
  { icon: "💪", text: "8.9g Protein per 100g" },
  { icon: "🏺", text: "Ancient Red Rice" },
  { icon: "🥗", text: "Diet-Safe · Low Starch" },
  { icon: "🚚", text: "Bangalore Delivery" },
  { icon: "🔬", text: "Batch-Tested Quality" },
  { icon: "🌱", text: "Farm Direct" },
  { icon: "♾️", text: "No Preservatives" },
  { icon: "⭐", text: "Restaurant Grade" },
]

export function TickerBar() {
  // Duplicate for seamless loop
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{
        background: "var(--gold)",
        padding: "13px 0",
        overflow: "hidden",
      }}
    >
      <div className="animate-ticker" style={{ display: "flex", gap: 0, width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              fontWeight: 700,
              color: "var(--forest)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0 32px",
              flexShrink: 0,
              borderRight: "1px solid rgba(13,46,26,0.14)",
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
