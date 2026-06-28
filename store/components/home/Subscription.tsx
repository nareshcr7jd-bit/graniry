export function Subscription() {
  return (
    <section
      id="subscribe"
      className="section-padding"
      style={{ background: "var(--parchment)" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Subscribe & Save</p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(30px, 5vw, 44px)",
                fontWeight: 800,
                color: "#111",
                lineHeight: 1.12,
                marginBottom: 18,
              }}
            >
              Never run out of rice.{" "}
              <em style={{ color: "var(--moss)", fontStyle: "italic" }}>Save 5% forever.</em>
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 28 }}>
              Rice is the most consistent monthly purchase in any South Indian household. Set your
              variety, set your quantity, and we deliver on the same day every month. Cancel any time.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                { icon: "💰", title: "Save 5% on every order", desc: "Price locked at subscription rate. No surprises." },
                { icon: "📅", title: "Monthly auto-delivery", desc: "Choose your date. We deliver. No reminders needed." },
                { icon: "✏️", title: "Change or pause anytime", desc: "Update variety, quantity or pause via WhatsApp in 60 seconds." },
                { icon: "🎁", title: "Free 1kg trial on sign-up", desc: "First subscription ships with a free 1kg sample of a new variety." },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 3 }}>{item.title}</p>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20set%20up%20a%20monthly%20subscription."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#25D366",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 9,
                textDecoration: "none",
                minHeight: 52,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Subscription via WhatsApp
            </a>
          </div>

          {/* Right: calculator card */}
          <div
            style={{
              background: "var(--forest)",
              borderRadius: 20,
              padding: 36,
              color: "white",
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(200,150,10,0.7)", marginBottom: 20 }}>
              Subscription Value Calculator
            </p>

            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
              If you order 25kg/month of Sona Masoori Old Raw:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {[
                { label: "One-time price (25kg)", val: "₹1,875", dim: false },
                { label: "Subscription price (5% off)", val: "₹1,781", dim: false, highlight: true },
                { label: "Monthly saving", val: "₹94", dim: false },
                { label: "Annual saving", val: "₹1,128", dim: false },
              ].map(row => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: row.highlight ? "rgba(200,150,10,0.12)" : "rgba(255,255,255,0.05)",
                    border: row.highlight ? "1px solid rgba(200,150,10,0.2)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{row.label}</span>
                  <span
                    className={row.highlight ? "font-display" : ""}
                    style={{
                      fontSize: row.highlight ? 20 : 15,
                      fontWeight: 700,
                      color: row.highlight ? "var(--amber)" : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
              * Based on ₹75/kg for 25kg pack. Subscription price locked at 5% discount. Cancel any time via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
