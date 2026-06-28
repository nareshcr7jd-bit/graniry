export function HealthScienceSection() {
  const giData = [
    { label: "Grainary Diet Rice", value: 54, maxVal: 100, color: "#4ADE80", tag: "LOW GI" },
    { label: "Grainary Sona Masoori", value: 56, maxVal: 100, color: "#86EFAC", tag: null },
    { label: "Regular White Rice", value: 72, maxVal: 100, color: "#FCA5A5", tag: "COMMON" },
    { label: "White Bread", value: 75, maxVal: 100, color: "#F87171", tag: "HIGH GI" },
  ]

  const proteinData = [
    { label: "Multigrain Power Rice", value: 8.9, maxVal: 12, color: "#FB923C" },
    { label: "Red Rice (Kavuni)", value: 8.2, maxVal: 12, color: "#F87171" },
    { label: "Brown Rice", value: 7.6, maxVal: 12, color: "#D4B483" },
    { label: "Regular White Rice", value: 6.8, maxVal: 12, color: "#CBD5E1" },
  ]

  const fibreData = [
    { label: "Brown Rice (Whole Grain)", value: 3.5, maxVal: 5, color: "#D4B483" },
    { label: "Red Rice (Kavuni)", value: 2.8, maxVal: 5, color: "#F87171" },
    { label: "Multigrain Power Rice", value: 3.2, maxVal: 5, color: "#FB923C" },
    { label: "Polished White Rice", value: 0.4, maxVal: 5, color: "#CBD5E1" },
  ]

  return (
    <section
      id="health"
      style={{
        background: "linear-gradient(140deg, var(--forest) 0%, #081A0D 100%)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: 600, marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>The Science Behind Grainary</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 46px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.12,
              marginBottom: 20,
            }}
          >
            Why{" "}
            <em style={{ color: "var(--amber)", fontStyle: "italic" }}>aged rice</em>{" "}
            is different
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.9, marginBottom: 24 }}>
            When rice is aged 12–24 months, starch molecules crystallise, moisture drops below 10%,
            and the glycemic index falls significantly. No one in Bangalore was telling this story.{" "}
            <strong style={{ color: "rgba(255,255,255,0.82)" }}>Grainary does.</strong>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Reduced starch by 32%", "GI drops to 54", "Safe for diabetics", "Better digestion", "Lower insulin spike"].map(chip => (
              <span
                key={chip}
                style={{
                  background: "rgba(46,139,74,0.15)",
                  border: "1px solid rgba(46,139,74,0.28)",
                  color: "#86efac",
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: 30,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GI chart */}
          <ChartCard
            title="Glycemic Index (lower = better)"
            subtitle="Measured per 100g cooked"
            note="GI < 55 = Low · 55–70 = Medium · > 70 = High"
            data={giData}
            unit=""
          />

          {/* Protein chart */}
          <ChartCard
            title="Protein per 100g (cooked)"
            subtitle="Grams of protein"
            note="Multigrain has 31% more protein than regular rice"
            data={proteinData}
            unit="g"
            maxLabel="12g"
          />

          {/* Fibre chart */}
          <ChartCard
            title="Dietary Fibre per 100g"
            subtitle="Grams of fibre (cooked)"
            note="Brown Rice has 8× more fibre than polished white"
            data={fibreData}
            unit="g"
            maxLabel="5g"
          />
        </div>

        {/* Science pull quote */}
        <div
          style={{
            marginTop: 56,
            background: "rgba(200,150,10,0.07)",
            borderLeft: "3px solid var(--gold)",
            padding: "22px 28px",
            borderRadius: "0 14px 14px 0",
            maxWidth: 760,
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.72)",
              fontStyle: "italic",
              lineHeight: 1.8,
            }}
          >
            &ldquo;Kitchen King has 573+ verified reviews on aged rice. Not one mentions GI, starch, or
            diet benefit. Not one product description explains why aging matters. Grainary owns that
            narrative — every bag, every Reel, every listing teaches the science.&rdquo;
          </p>
          <p style={{ fontSize: 12, color: "rgba(200,150,10,0.6)", marginTop: 12, letterSpacing: "0.05em" }}>
            — Grainary Business Plan, 2026
          </p>
        </div>
      </div>
    </section>
  )
}

interface ChartItem {
  label: string
  value: number
  maxVal: number
  color: string
  tag?: string | null
}

function ChartCard({
  title,
  subtitle,
  note,
  data,
  unit,
}: {
  title: string
  subtitle: string
  note: string
  data: ChartItem[]
  unit: string
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 20,
        padding: 28,
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "white",
          marginBottom: 4,
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", marginBottom: 24 }}>
        {subtitle}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {data.map(item => (
          <div key={item.label}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 6,
                gap: 8,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.3,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {item.label}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                {item.tag && (
                  <span
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 3,
                      background: item.tag === "LOW GI" ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)",
                      color: item.tag === "LOW GI" ? "#4ade80" : "#f87171",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.tag}
                  </span>
                )}
                <span
                  className="font-display"
                  style={{ fontSize: 16, fontWeight: 700, color: item.color }}
                >
                  {item.value}
                  {unit}
                </span>
              </div>
            </div>
            <div
              style={{
                height: 8,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                className="animate-bar"
                style={{
                  height: "100%",
                  width: `${(item.value / item.maxVal) * 100}%`,
                  background: item.color,
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          marginTop: 20,
          fontStyle: "italic",
          lineHeight: 1.5,
        }}
      >
        {note}
      </p>
    </div>
  )
}
