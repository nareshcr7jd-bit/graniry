"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer style={{ background: "var(--forest)", color: "rgba(255,255,255,0.6)" }}>
      {/* Main footer */}
      <div
        style={{ maxWidth: 1320, margin: "0 auto", padding: "64px 24px 40px" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Brand col */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="flex items-center justify-center rounded-[9px] flex-shrink-0"
              style={{
                width: 36, height: 36,
                background: "linear-gradient(135deg, #C8960A, #E8A800)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <ellipse cx="11" cy="5.5" rx="3.5" ry="4.8" fill="#0D2E1A" />
                <ellipse cx="6.5" cy="14" rx="3" ry="4.2" transform="rotate(-22 6.5 14)" fill="#0D2E1A" />
                <ellipse cx="15.5" cy="15" rx="3" ry="4.2" transform="rotate(22 15.5 14)" fill="#0D2E1A" />
              </svg>
            </div>
            <div>
              <span className="font-display text-white block" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1 }}>
                GRAINARY
              </span>
              <span className="text-[10px] text-amber-400/80 font-bold uppercase tracking-wider block mt-0.5">
                A Brand by JDP Enterprises
              </span>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 16 }}>
            South India&apos;s first premium rice brand with a health story. Marketed & managed by <strong>JDP Enterprises</strong>. Farm to kitchen — 18-month aged, low GI, NABL lab tested.
          </p>
          <p style={{ fontSize: 11, color: "rgba(200,150,10,0.85)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>
            FSSAI Lic. No. 11224999000123 (JDP Enterprises)
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
            Same-Day Bangalore Delivery
          </p>
        </div>

        {/* Health & Specialised Pages */}
        <div>
          <p className="eyebrow mb-4">Specialised Care</p>
          {[
            { label: "Diabetic Diet Rice (GI 54)", href: "/diabetes-diet-rice" },
            { label: "PCOS & Gut Health Rice", href: "/pcos-brown-rice" },
            { label: "Fitness & Protein Multigrain", href: "/fitness-multigrain" },
            { label: "Restaurant Wholesale (B2B)", href: "/b2b" },
            { label: "Rice Science Blog", href: "/blog" },
            { label: "Packaging Transparency", href: "/packaging" },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block transition-colors duration-150 no-underline"
              style={{ fontSize: 13, marginBottom: 8, color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8A800")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Products */}
        <div>
          <p className="eyebrow mb-4">Our Catalogue</p>
          {[
            { label: "Sona Masoori Old Raw", href: "/products/sona-masoori-old-raw" },
            { label: "Diet Rice — Low GI", href: "/products/diet-rice-low-gi" },
            { label: "Multigrain Power Rice", href: "/products/multigrain-power-rice" },
            { label: "Red Rice (Kavuni)", href: "/products/red-rice-kavuni" },
            { label: "Brown Rice", href: "/products/brown-rice-whole-grain" },
            { label: "All Products", href: "/products" },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block transition-colors duration-150 no-underline"
              style={{ fontSize: 13, marginBottom: 8, color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8A800")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow mb-4">Order / Contact</p>
          <a
            href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[8px] no-underline mb-4 transition-all"
            style={{
              background: "rgba(37,211,102,0.12)",
              border: "1px solid rgba(37,211,102,0.25)",
              color: "#4ade80",
              fontSize: 13,
              fontWeight: 600,
              padding: "10px 16px",
              display: "inline-flex",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Support
          </a>
          <p style={{ fontSize: 13, marginBottom: 8 }}>📍 Koramangala & HSR, Bangalore, KA</p>
          <p style={{ fontSize: 13, marginBottom: 8 }}>
            <a href="mailto:hello@grainary.in" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
              hello@grainary.in
            </a>
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 16, lineHeight: 1.6 }}>
            JDP Enterprises · FSSAI Licensed · CFTRI NABL Accredited Testing
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 24px",
          maxWidth: 1320,
          margin: "0 auto",
        }}
        className="flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Grainary (JDP Enterprises) · All rights reserved
        </p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          Made with care in Bangalore 🌾
        </p>
      </div>
    </footer>
  )
}
