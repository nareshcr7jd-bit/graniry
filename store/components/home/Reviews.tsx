"use client"

import { useState } from "react"
import { useToastStore } from "@/lib/store/toast"
import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"

interface Review {
  stars: number
  text: string
  name: string
  location: string
  avatar: string
  product: string
  category: "all" | "diabetic" | "fitness" | "everyday"
}

const INITIAL_REVIEWS: Review[] = [
  {
    stars: 5,
    text: "Finally, a brand that explains WHY aged rice is better! Switched to Grainary Diet Rice for my husband's diabetes — his post-prandial glucose numbers have stabilized nicely.",
    name: "Priya Raghunathan",
    location: "Koramangala, Bangalore",
    avatar: "👩",
    product: "Diet Rice — Low GI",
    category: "diabetic",
  },
  {
    stars: 5,
    text: "The Multigrain Power Rice is genuinely different. Post-workout meals feel more filling. I track my macros and this actually hits my protein targets better than white rice. Taste is nutty and earthy.",
    name: "Arjun Menon",
    location: "HSR Layout",
    avatar: "👨",
    product: "Multigrain Power Rice",
    category: "fitness",
  },
  {
    stars: 5,
    text: "Ordered the 5kg pack of Sona Masoori Old Raw. Cook was perfect — fluffy, completely separated grains. Placed a 25kg subscription the same day. WhatsApp ordering took 2 minutes.",
    name: "Sudha Krishnamurthy",
    location: "Whitefield",
    avatar: "👩",
    product: "Sona Masoori Old Raw",
    category: "everyday",
  },
  {
    stars: 5,
    text: "The Red Rice Kavuni is beautiful. The colour is deep maroon, the texture is slightly chewy, and the aroma is earthy. Made a payasam for Pongal — it was the best I have made in years.",
    name: "Lakshmi Venkataraman",
    location: "Jayanagar",
    avatar: "👵",
    product: "Red Rice — Kavuni",
    category: "everyday",
  },
  {
    stars: 5,
    text: "As a chef, rice quality matters a lot. RNR Jeera Sona is exceptional — perfect separation after cooking, exact what we need for our biryani. Placed a B2B order for 100kg.",
    name: "Chef Ravi Prakash",
    location: "Indiranagar Cloud Kitchen",
    avatar: "👨‍🍳",
    product: "RNR / Jeera Sona",
    category: "everyday",
  },
  {
    stars: 5,
    text: "Bought the Brown Rice for my PCOS & fitness routine. The fibre content is noticeably high — I feel fuller for much longer. The batch testing certificate was a nice touch of transparency.",
    name: "Divya Nair",
    location: "Electronic City",
    avatar: "👩",
    product: "Brown Rice — Whole Grain",
    category: "fitness",
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
  const [reviewsList, setReviewsList] = useState<Review[]>(INITIAL_REVIEWS)
  const [filter, setFilter] = useState<"all" | "diabetic" | "fitness" | "everyday">("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newReview, setNewReview] = useState({ name: "", location: "", text: "", product: "Diet Rice — Low GI", stars: 5 })
  const { addToast } = useToastStore()
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.reviews || TRANSLATIONS.en.reviews

  const filteredReviews = filter === "all" ? reviewsList : reviewsList.filter((r) => r.category === filter)

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReview.name || !newReview.text) return

    const created: Review = {
      ...newReview,
      avatar: "👤",
      category: "everyday",
    }

    setReviewsList([created, ...reviewsList])
    setIsModalOpen(false)
    setNewReview({ name: "", location: "", text: "", product: "Diet Rice — Low GI", stars: 5 })
    addToast({
      title: "Review Submitted!",
      description: "Thank you for sharing your Grainary experience.",
      type: "gold",
    })
  }

  return (
    <section
      id="reviews"
      className="section-padding"
      style={{ background: "var(--forest)" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>{t.eyebrow}</p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(30px, 5vw, 44px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.12,
                marginBottom: 10,
              }}
            >
              {t.titleStart}{" "}
              <em style={{ color: "var(--amber)", fontStyle: "italic" }}>{t.titleAccent}</em>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 440 }}>
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-amber-400 text-emerald-950 font-display font-bold text-xs hover:bg-amber-300 transition-all shadow-lg shrink-0"
          >
            {t.writeReview}
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
          {[
            { label: "All Reviews", value: "all" },
            { label: "Diabetic & Health", value: "diabetic" },
            { label: "Fitness & Macros", value: "fitness" },
            { label: "Everyday Cooking", value: "everyday" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                filter === tab.value
                  ? "bg-amber-400 text-emerald-950 border-amber-400 font-bold shadow-md"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 16,
                padding: 28,
                transition: "transform 0.25s var(--ease-out)",
              }}
              className="hover:-translate-y-1 transition-transform"
            >
              <Stars count={r.stars} />
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.72)",
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
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>
                    {r.location || "Bangalore"}
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(200,150,10,0.8)",
                      marginTop: 3,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Verified Purchaser · {r.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-up">
          <div className="bg-emerald-950 border border-gold/30 p-6 md:p-8 rounded-3xl max-w-md w-full text-white shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-display font-bold text-amber-400 mb-1">Write a Review</h3>
            <p className="text-xs text-white/60 mb-4">Share your feedback with the Grainary community.</p>

            <form onSubmit={handleSubmitReview} className="flex flex-col gap-3">
              <div>
                <label className="text-[10px] uppercase font-bold text-white/60 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-white/60 block mb-1">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Koramangala, Bangalore"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-white/60 block mb-1">Rice Variety Purchased</label>
                <select
                  value={newReview.product}
                  onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs outline-none focus:border-amber-400"
                >
                  <option className="bg-emerald-950">Diet Rice — Low GI</option>
                  <option className="bg-emerald-950">Sona Masoori Old Raw</option>
                  <option className="bg-emerald-950">Multigrain Power Rice</option>
                  <option className="bg-emerald-950">Red Rice — Kavuni</option>
                  <option className="bg-emerald-950">Brown Rice — Whole Grain</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-white/60 block mb-1">Review</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the texture, cooking, and taste..."
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-3 rounded-xl bg-gold text-emerald-950 font-display font-bold text-xs hover:bg-amber-400 transition-colors shadow-lg"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
