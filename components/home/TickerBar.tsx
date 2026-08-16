"use client"

import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"

export function TickerBar() {
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.ticker || TRANSLATIONS.en.ticker

  const items = [
    t.item1,
    t.item2,
    t.item3,
    t.item4,
    t.item5,
  ]

  const doubled = [...items, ...items]

  return (
    <div
      style={{
        background: "#081A0D",
        borderTop: "1px solid rgba(200,150,10,0.18)",
        borderBottom: "1px solid rgba(200,150,10,0.18)",
        overflow: "hidden",
        padding: "13px 0",
        userSelect: "none",
      }}
    >
      <div
        className="animate-ticker"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {doubled.map((item, index) => (
          <div
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              paddingRight: 40,
            }}
          >
            <span>{item}</span>
            <span
              style={{
                color: "var(--gold)",
                margin: "0 0 0 40px",
                fontSize: 10,
              }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
