"use client"

import { useState } from "react"

const COOKING_PRESETS: Record<
  string,
  { waterRatio: string; whistles: string; electricTime: string; soakTime: string }
> = {
  "Aged Sona Masoori": { waterRatio: "1 : 2.0", whistles: "3 Whistles (Medium Flame)", electricTime: "18–20 Mins", soakTime: "20 Mins" },
  "Diet Rice (Low GI)": { waterRatio: "1 : 2.2", whistles: "3 Whistles (Medium Flame)", electricTime: "20 Mins", soakTime: "25 Mins" },
  "Kavuni Red Rice": { waterRatio: "1 : 3.0", whistles: "5 Whistles (Low Flame)", electricTime: "30 Mins", soakTime: "4 Hours" },
  "Brown Rice": { waterRatio: "1 : 2.5", whistles: "4 Whistles (Medium Flame)", electricTime: "25 Mins", soakTime: "45 Mins" },
  "Multigrain Mix": { waterRatio: "1 : 2.25", whistles: "4 Whistles (Medium Flame)", electricTime: "22 Mins", soakTime: "30 Mins" },
}

export function HealthScienceSection() {
  const [dailyGrams, setDailyGrams] = useState<number>(200)
  const [selectedRiceType, setSelectedRiceType] = useState<string>("Aged Sona Masoori")
  const [portionCups, setPortionCups] = useState<number>(2)

  // Calculations:
  // Glycemic Load (GL) = (GI * carbs_per_serving) / 100
  // Carbs approx 28g per 100g cooked rice
  const carbsPerServing = (dailyGrams / 100) * 28
  const regularGL = Math.round((72 * carbsPerServing) / 100)
  const grainaryGL = Math.round((54 * carbsPerServing) / 100)
  const glDiff = regularGL - grainaryGL

  const currentPreset = COOKING_PRESETS[selectedRiceType] || COOKING_PRESETS["Aged Sona Masoori"]

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
      className="section-padding"
      style={{
        background: "linear-gradient(140deg, var(--forest) 0%, #081A0D 100%)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: 650, marginBottom: 56 }}>
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
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 24 }}>
            When rice is aged 12–24 months, starch molecules crystallise, moisture drops below 10%,
            and the glycemic index falls significantly. No one in Bangalore was telling this story.{" "}
            <strong style={{ color: "rgba(255,255,255,0.85)" }}>Grainary does.</strong>
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

        {/* Interactive Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tool 1: GI & Glycemic Load Calculator */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">Interactive Calculator</span>
                <h3 className="text-xl font-display font-bold text-white mt-1">Glycemic Load & Glucose Impact</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30">
                -25% GL Reduction
              </span>
            </div>

            <p className="text-xs text-white/60 mb-6">
              Adjust your daily cooked rice portion to see the difference in Glycemic Load (GL) between regular rice and Grainary Aged Sona Masoori.
            </p>

            {/* Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2 text-xs font-semibold text-white/80">
                <span>Daily Rice Consumption:</span>
                <span className="text-amber-400 font-bold text-sm">{dailyGrams}g cooked</span>
              </div>
              <input
                type="range"
                min={100}
                max={400}
                step={25}
                value={dailyGrams}
                onChange={(e) => setDailyGrams(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>100g (Light)</span>
                <span>250g (Standard)</span>
                <span>400g (Large)</span>
              </div>
            </div>

            {/* Live Comparison Box */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-black/30 border border-white/10 text-center">
              <div>
                <span className="text-[10px] text-red-300 font-bold uppercase block">Fresh White Rice (GI 72)</span>
                <span className="text-2xl font-display font-extrabold text-red-400 mt-1 block">{regularGL} GL</span>
                <span className="text-[10px] text-red-300/70 block mt-0.5">Higher Insulin Spike</span>
              </div>
              <div className="border-l border-white/10">
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">Grainary Aged Rice (GI 54)</span>
                <span className="text-2xl font-display font-extrabold text-emerald-400 mt-1 block">{grainaryGL} GL</span>
                <span className="text-[10px] text-emerald-300/70 block mt-0.5">Sustained Energy ({glDiff} GL lower)</span>
              </div>
            </div>
          </div>

          {/* Tool 2: Water Ratio & Cooking Time Estimator */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">Chef's Tool</span>
                <h3 className="text-xl font-display font-bold text-white mt-1">Water & Cooking Ratio Estimator</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-extrabold border border-amber-500/30">
                Fluffy Every Time
              </span>
            </div>

            <p className="text-xs text-white/60 mb-4">
              Select your grain variety and cup count for exact water proportion, soak duration, and cooker timing.
            </p>

            {/* Selector */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-[10px] font-bold text-white/60 uppercase block mb-1">Select Grain:</label>
                <select
                  value={selectedRiceType}
                  onChange={(e) => setSelectedRiceType(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs outline-none"
                >
                  {Object.keys(COOKING_PRESETS).map((key) => (
                    <option key={key} value={key} className="bg-emerald-950 text-white">
                      {key}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-white/60 uppercase block mb-1">Raw Rice Quantity:</label>
                <select
                  value={portionCups}
                  onChange={(e) => setPortionCups(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs outline-none"
                >
                  <option value={1} className="bg-emerald-950 text-white">1 Cup (2 Persons)</option>
                  <option value={2} className="bg-emerald-950 text-white">2 Cups (4 Persons)</option>
                  <option value={3} className="bg-emerald-950 text-white">3 Cups (6 Persons)</option>
                  <option value={4} className="bg-emerald-950 text-white">4 Cups (8 Persons)</option>
                </select>
              </div>
            </div>

            {/* Results Card */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <div>
                <span className="text-amber-300 font-semibold block text-[11px]">Water Ratio</span>
                <span className="text-white font-bold text-sm">{portionCups} Cups Rice : {(portionCups * parseFloat(currentPreset.waterRatio.split(':')[1])).toFixed(1)} Cups Water</span>
              </div>
              <div>
                <span className="text-amber-300 font-semibold block text-[11px]">Soak Time</span>
                <span className="text-white font-bold text-sm">{currentPreset.soakTime}</span>
              </div>
              <div>
                <span className="text-amber-300 font-semibold block text-[11px]">Pressure Cooker</span>
                <span className="text-white font-bold text-sm">{currentPreset.whistles}</span>
              </div>
              <div>
                <span className="text-amber-300 font-semibold block text-[11px]">Electric Cooker</span>
                <span className="text-white font-bold text-sm">{currentPreset.electricTime}</span>
              </div>
            </div>
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
          />

          {/* Fibre chart */}
          <ChartCard
            title="Dietary Fibre per 100g"
            subtitle="Grams of fibre (cooked)"
            note="Brown Rice has 8× more fibre than polished white"
            data={fibreData}
            unit="g"
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
            &ldquo;Many brands have 573+ verified reviews on aged rice. But not one mentions GI, starch, or
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
