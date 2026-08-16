"use client"

import { useState, useRef, useEffect } from "react"

type Message = {
  from: "bot" | "user"
  text: string
}

const QUICK_REPLIES = [
  "What rice is best for weight loss?",
  "Do you deliver to my area?",
  "How to place an order?",
  "What is Glycemic Index?",
  "Return & refund policy",
  "Talk to a human",
]

const BOT_RESPONSES: Record<string, string> = {
  "What rice is best for weight loss?":
    "Our Diet Rice Low GI (GI 54) and Brown Rice Whole Grain are your best picks. Both are high in fibre, lower in starch, and keep you full longer. The Diet Rice has 30% less starch than regular Sona Masoori.",
  "Do you deliver to my area?":
    "We currently deliver across Bangalore. Enter your pincode on the order form and we'll confirm availability. For bulk orders (10kg+) we also deliver to select cities in Karnataka — reach us on WhatsApp for details.",
  "How to place an order?":
    "Click 'Order Now' in the top nav or browse our Products page. Add your rice and pack size to cart, then checkout via WhatsApp — we'll confirm your order and arrange delivery within 24–48 hours.",
  "What is Glycemic Index?":
    "Glycemic Index (GI) measures how fast a food raises your blood sugar. Fresh rice is GI 72 (high). Our aged Sona Masoori has GI 54 (medium-low) — that means slower digestion, steadier energy, and less fat storage. Ideal for diabetics and weight-watchers.",
  "Return & refund policy":
    "If you receive a damaged or incorrect product, contact us within 48 hours of delivery and we'll arrange a free replacement or full refund. Quality issues with an opened bag? We'll still sort it — just send us a photo on WhatsApp.",
  "Talk to a human":
    "Of course! Tap the WhatsApp button below and our team will respond within 30 minutes (9am–8pm IST).",
}

function BotAvatar() {
  return (
    <div
      className="flex items-center justify-center rounded-full flex-shrink-0"
      style={{ width: 28, height: 28, background: "var(--forest)", border: "1.5px solid var(--gold)" }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8960A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
      </svg>
    </div>
  )
}

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! I'm the Grainary assistant. Ask me anything about our rice, delivery, or orders." },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open, typing])

  function sendMessage(text: string) {
    if (!text.trim()) return
    setMessages(prev => [...prev, { from: "user", text }])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      const response =
        BOT_RESPONSES[text] ??
        "Great question! For detailed help, our team is available on WhatsApp — tap the button below and we'll get back to you shortly."
      setTyping(false)
      setMessages(prev => [...prev, { from: "bot", text: response }])
    }, 700)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? "Close chat" : "Open customer support chat"}
        className="fixed z-50 flex items-center justify-center rounded-full shadow-2xl transition-transform duration-200 active:scale-90"
        style={{
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          background: open ? "var(--forest)" : "var(--gold)",
          border: "2px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(13,46,26,0.35), 0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDF6E3" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D2E1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className="fixed z-40 flex flex-col overflow-hidden"
        style={{
          bottom: 92,
          right: 24,
          width: "min(380px, calc(100vw - 32px))",
          height: "min(520px, calc(100vh - 120px))",
          borderRadius: 20,
          background: "#fff",
          boxShadow: "0 24px 64px rgba(13,46,26,0.22), 0 4px 16px rgba(0,0,0,0.12)",
          border: "1px solid rgba(200,150,10,0.18)",
          transform: open ? "scale(1) translateY(0)" : "scale(0.92) translateY(16px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease",
          transformOrigin: "bottom right",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 flex-shrink-0"
          style={{
            background: "var(--forest)",
            padding: "14px 18px",
            borderBottom: "1px solid rgba(200,150,10,0.2)",
          }}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 38, height: 38, background: "rgba(200,150,10,0.15)", border: "1.5px solid var(--gold)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8960A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <div style={{ color: "#FDF6E3", fontWeight: 700, fontSize: 14, fontFamily: "var(--font-playfair)" }}>
              Grainary Support
            </div>
            <div className="flex items-center gap-1.5" style={{ marginTop: 2 }}>
              <span
                className="rounded-full"
                style={{ width: 7, height: 7, background: "#4ade80", display: "inline-block" }}
              />
              <span style={{ color: "rgba(253,246,227,0.6)", fontSize: 11 }}>Online · replies in ~30 min</span>
            </div>
          </div>
          <a
            href="https://wa.me/919900000000"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="ml-auto flex items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-80"
            style={{ width: 34, height: 34, background: "rgba(37,211,102,0.18)", border: "1px solid rgba(37,211,102,0.3)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#4ade80">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {msg.from === "bot" && <BotAvatar />}
              <div
                style={{
                  maxWidth: "78%",
                  padding: "9px 13px",
                  borderRadius: msg.from === "bot" ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
                  background: msg.from === "bot" ? "#f4f0e6" : "var(--forest)",
                  color: msg.from === "bot" ? "#1C1C1C" : "#FDF6E3",
                  fontSize: 13,
                  lineHeight: 1.55,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex gap-2 flex-row">
              <BotAvatar />
              <div
                className="flex items-center gap-1"
                style={{ padding: "10px 14px", borderRadius: "4px 14px 14px 14px", background: "#f4f0e6" }}
              >
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="rounded-full"
                    style={{
                      width: 6, height: 6,
                      background: "#888",
                      display: "inline-block",
                      animation: "typing-dot 1.2s infinite",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        {messages.length <= 2 && (
          <div
            className="flex-shrink-0 overflow-x-auto scrollbar-none"
            style={{ padding: "0 12px 10px", display: "flex", gap: 7, flexWrap: "wrap" }}
          >
            {QUICK_REPLIES.map(q => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 rounded-full transition-all duration-150 active:scale-95"
                style={{
                  padding: "6px 12px",
                  fontSize: 11.5,
                  fontWeight: 500,
                  background: "rgba(13,46,26,0.06)",
                  border: "1px solid rgba(13,46,26,0.15)",
                  color: "var(--forest)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="flex-shrink-0 flex items-center gap-2"
          style={{
            padding: "10px 12px",
            borderTop: "1px solid rgba(13,46,26,0.08)",
            background: "#fafaf8",
          }}
        >
          <input
            type="text"
            inputMode="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage(input)}
            placeholder="Type a message..."
            style={{
              flex: 1,
              border: "1px solid rgba(13,46,26,0.15)",
              borderRadius: 10,
              padding: "9px 13px",
              fontSize: 13,
              outline: "none",
              fontFamily: "var(--font-inter)",
              background: "#fff",
              color: "#111",
              minHeight: 40,
            }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="flex items-center justify-center rounded-[10px] transition-all duration-150 active:scale-90 disabled:opacity-40"
            style={{
              width: 40, height: 40,
              background: "var(--forest)",
              border: "none",
              cursor: input.trim() ? "pointer" : "default",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8960A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
