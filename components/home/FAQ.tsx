"use client"

import { useState } from "react"
import { useLanguageStore } from "@/lib/store/language"
import { TRANSLATIONS } from "@/lib/translations"

const FAQS = [
  {
    q: "Is Grainary rice actually safe for people with diabetes?",
    a: "Our Diet Rice (Low GI) has a tested glycemic index of 54, which is classified as LOW GI (below 55). Regular white rice typically scores 70–72. A lower GI means slower glucose release and a smaller insulin spike. We recommend consulting your dietitian, but our product is designed for diabetic-safe meal planning.",
    category: "health",
  },
  {
    q: "What does 'aged rice' actually mean?",
    a: "After harvest, rice is stored in climate-controlled conditions for 12–24 months. During this time, moisture drops from 14–16% to below 10%, starch molecules crystallise (making them harder to digest rapidly), and the glycemic index falls. The grain also develops better cooking characteristics — it stays separate and absorbs less water, giving you a perfectly fluffy texture.",
    category: "health",
  },
  {
    q: "What are the pack sizes available?",
    a: "We offer 1kg, 5kg, 10kg, and 25kg packs. The 1kg pack is our trial size — we encourage first-time buyers to start here. The 25kg pack is best for families and subscribers.",
    category: "orders",
  },
  {
    q: "How do I order?",
    a: "Click 'Add to Cart' on any product, then checkout via WhatsApp. Our team confirms your order and delivers to your address in Bangalore. We'll soon be live on Blinkit, Zepto, and Amazon too.",
    category: "orders",
  },
  {
    q: "What is the difference between raw rice and steam rice?",
    a: "Raw (unprocessed) rice is milled directly without pre-treatment. Steam rice (parboiled) undergoes partial boiling before milling — this drives nutrients from the bran into the grain. Steam rice has slightly more nutrients but a firmer texture. Raw rice is preferred for South Indian cooking like curd rice and pongal; steam rice is preferred for sambar rice and daily meals.",
    category: "cooking",
  },
  {
    q: "Is Multigrain Power Rice suitable for kids?",
    a: "Yes. The 5-grain blend is 100% natural with no additives. For children under 2, consult a pediatrician. For older children, it's a nutritious alternative to plain white rice with 31% more protein and better fibre content.",
    category: "health",
  },
  {
    q: "Do you deliver outside Bangalore?",
    a: "Currently Bangalore only. We are expanding to Mysuru, Hubli, and Mangaluru by late 2026. For national orders, we'll be on Amazon India — sign up for updates via WhatsApp.",
    category: "orders",
  },
  {
    q: "What is Kavuni Red Rice?",
    a: "Kavuni (also called Mappillai Samba) is an ancient heirloom Tamil variety grown for over 2,000 years. The deep red-black colour comes from anthocyanins — powerful antioxidants also found in blueberries. It has a nutty, slightly chewy texture and higher protein than white rice. Best for antioxidant-rich meals, Chettinad cuisine, and traditional desserts.",
    category: "cooking",
  },
  {
    q: "Can I subscribe to monthly delivery?",
    a: "Yes. WhatsApp us to set up a monthly subscription. You save 5% on every order, choose your delivery date, and can change or cancel any time. Your first subscription also ships with a free 1kg sample of a new variety.",
    category: "orders",
  },
  {
    q: "Do you supply to restaurants or hotels?",
    a: "Yes — we have B2B pricing for cloud kitchens, restaurants, hotels, and housing societies. Our RNR/Jeera Sona is restaurant grade. WhatsApp us with your monthly volume requirements.",
    category: "wholesale",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"all" | "aging" | "gi" | "delivery" | "cooking">("all")
  const { language } = useLanguageStore()
  const t = TRANSLATIONS[language]?.faq || TRANSLATIONS.en.faq

  const categories: { label: string; value: "all" | "aging" | "gi" | "delivery" | "cooking" }[] = [
    { label: language === 'kn' ? "ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳು" : "All FAQs", value: "all" },
    { label: language === 'kn' ? "ಹಳೆಯ ಅಕ್ಕಿ" : "Aging Process", value: "aging" },
    { label: language === 'kn' ? "ಗ್ಲೈಸೆಮಿಕ್ (GI)" : "GI & Diabetes", value: "gi" },
    { label: language === 'kn' ? "ಡೆಲಿವರಿ" : "Delivery", value: "delivery" },
    { label: language === 'kn' ? "ಅಡುಗೆ" : "Cooking", value: "cooking" },
  ]

  const filteredFAQS = FAQS.filter((item) => {
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCat = activeCategory === "all" || item.category === activeCategory
    return matchesSearch && matchesCat
  })

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  }

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>{t.eyebrow}</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(30px, 5vw, 44px)",
              fontWeight: 800,
              color: "var(--g-dark, #111)",
              lineHeight: 1.12,
              marginBottom: 16,
            }}
          >
            {t.title}
          </h2>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 text-xs font-medium rounded-xl bg-white border border-gray-300 outline-none focus:border-emerald-800 shadow-sm"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter Pills */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat.value
                    ? "bg-emerald-950 text-amber-300 border-emerald-950 font-bold shadow-sm"
                    : "bg-white text-gray-700 border-gray-300 hover:border-emerald-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {filteredFAQS.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="font-display text-base">No questions found matching "{searchQuery}"</p>
              <p className="text-xs mt-1">Try searching for "aging", "GI", "delivery", or "diabetic".</p>
            </div>
          ) : (
            filteredFAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "between",
                    gap: 16,
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    minHeight: 64,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111",
                      lineHeight: 1.4,
                      flex: 1,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: 20,
                      color: "var(--gold)",
                      transition: "transform 0.2s",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                      flexShrink: 0,
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div style={{ paddingBottom: 20 }}>
                    <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
