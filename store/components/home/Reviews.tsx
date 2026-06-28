"use client"

const REVIEWS = [
  {
    stars: 5,
    text: "Finally, a brand that explains WHY aged rice is better! I have been buying 10kg every month from Kitchen King but nobody ever told me about glycemic index. Switched to Grainary Diet Rice for my husband's diabetes — his numbers have improved.",
    name: "Priya Raghunathan",
    location: "Koramangala, Bangalore",
    avatar: "👩",
    product: "Diet Rice — Low GI",
  },
  {
    stars: 5,
    text: "The Multigrain Power Rice is genuinely different. Post-workout meals feel more filling. I track my macros and this actually hits my protein targets better than white rice. Taste is nutty, earthy — premium.",
    name: "Arjun Menon",
    location: "HSR Layout",
    avatar: "👨",
    product: "Multigrain Power Rice",
  },
  {
    stars: 5,
    text: "Ordered the 1kg trial of Sona Masoori Old Raw. Cook was perfect — fluffy, separated grains. Placed a 25kg subscription the same day. WhatsApp ordering took 2 minutes.",
    name: "Sudha Krishnamurthy",
    location: "Whitefield",
    avatar: "👩",
    product: "Sona Masoori Old Raw",
  },
  {
    stars: 5,
    text: "The Red Rice Kavuni is beautiful. The colour is deep maroon, the texture is slightly chewy, and the aroma is earthy. Made a payasam for Pongal — it was the best I have made in years.",
    name: "Lakshmi Venkataraman",
    location: "Jayanagar",
    avatar: "👵",
    product: "Red Rice — Kavuni",
  },
  {
    stars: 5,
    text: "As a chef, rice quality matters a lot. RNR Jeera Sona is exceptional — perfect separation after cooking, exact what we need for our biryani. Placed a B2B order for 100kg.",
    name: "Chef Ravi Prakash",
    location: "Indiranagar Cloud Kitchen",
    avatar: "👨‍🍳",
    product: "RNR / Jeera Sona",
  },
  {
    stars: 5,
    text: "Bought the Brown Rice for my PCOS management plan. The fibre content is noticeably high — I feel fuller for much longer. The batch testing certificate was a nice touch of transparency.",
    name: "Divya Nair",
    location: "Electronic City",
    avatar: "👩",
    product: "Brown Rice — Whole Grain",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <span style={{ color: "var(--amber)", fontSize: 14, letterSpacing: 2 }}>
      {"★".repeat(count)}
    </span>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="section-padding"
      style={{ background: "var(--forest)" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Customer Reviews</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(30px, 5vw, 44px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.12,
              marginBottom: 14,
            }}
          >
            What Bangalore is{" "}
            <em style={{ color: "var(--amber)", fontStyle: "italic" }}>saying</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 440, margin: "0 auto" }}>
            Real customers. Real results. No manufactured reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 16,
                padding: 28,
                transition: "transform 0.25s var(--ease-out)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              <Stars count={r.stars} />
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.82,
                  fontStyle: "italic",
                  margin: "14px 0 20px",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(200,150,10,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.88)" }}>
                    {r.name}
                  </p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 1 }}>
                    {r.location}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(200,150,10,0.7)",
                      marginTop: 3,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Verified · {r.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
