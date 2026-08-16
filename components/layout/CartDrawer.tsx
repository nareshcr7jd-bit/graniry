"use client"

import { useEffect, useState } from "react"
import { useCartStore, CartItem } from "@/lib/store/cart"
import { formatPrice, whatsappOrderLink } from "@/lib/utils"
import Link from "next/link"

function CartItemRow({ item }: { item: CartItem }) {
  const { removeItem, updateQty } = useCartStore()
  const lineTotal = item.pricePerKg * item.sizeKg * item.qty

  return (
    <div
      className="flex items-start gap-3 py-4"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      {/* Bag emoji / color chip */}
      <div
        className="flex items-center justify-center rounded-[8px] flex-shrink-0 text-lg"
        style={{ width: 44, height: 44, background: item.bagColor }}
      >
        {item.emoji}
      </div>

      <div className="flex-1 min-w-0">
        <p style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2 }} className="truncate">
          {item.name}
        </p>
        <p style={{ fontSize: 11, color: "#888" }}>
          {item.sizeKg}kg pack · {formatPrice(item.pricePerKg)}/kg
        </p>

        {/* Qty controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQty(item.id, item.qty - 1)}
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 28, height: 28,
              background: "rgba(0,0,0,0.06)",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: 1,
            }}
          >−</button>
          <span style={{ fontSize: 13, fontWeight: 600, minWidth: 20, textAlign: "center" }}>
            {item.qty}
          </span>
          <button
            onClick={() => updateQty(item.id, item.qty + 1)}
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 28, height: 28,
              background: "rgba(13,46,26,0.08)",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: 1,
            }}
          >+</button>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span
          className="font-display"
          style={{ fontSize: 15, fontWeight: 700, color: "var(--forest)" }}
        >
          {formatPrice(lineTotal)}
        </span>
        <button
          onClick={() => removeItem(item.id)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: 11 }}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export function CartDrawer() {
  // All hooks must be called unconditionally before any early return
  const { items, isOpen, closeCart, total, clearCart } = useCartStore()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [closeCart])

  useEffect(() => {
    if (!mounted) return
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen, mounted])

  const cartTotal = total()
  const waLink = items.length > 0 ? whatsappOrderLink(items) : "#"

  // Don't render markup until client-side (avoids localStorage hydration mismatch)
  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[998] transition-opacity"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-[999] flex flex-col"
        style={{
          width: "min(420px, 100vw)",
          background: "white",
          boxShadow: "-8px 0 48px rgba(0,0,0,0.18)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 flex-shrink-0"
          style={{
            height: 64,
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <div>
            <h2 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "var(--forest)" }}>
              Your Order
            </h2>
            <p style={{ fontSize: 11, color: "#888", marginTop: 1 }}>
              {items.length === 0 ? "No items yet" : `${items.reduce((s, i) => s + i.qty, 0)} item${items.reduce((s, i) => s + i.qty, 0) !== 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="flex items-center justify-center rounded-full transition-colors"
            style={{
              width: 36, height: 36,
              background: "rgba(0,0,0,0.06)",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
            }}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5" style={{ paddingTop: 4 }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
              <span style={{ fontSize: 56 }}>🌾</span>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>Your cart is empty</p>
              <p style={{ fontSize: 13, color: "#888", maxWidth: 240 }}>
                Choose from our range of premium aged rice varieties.
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="btn-forest no-underline"
                style={{
                  background: "var(--forest)",
                  color: "white",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: 9,
                  display: "inline-block",
                }}
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div>
              {items.map(item => <CartItemRow key={item.id} item={item} />)}
            </div>
          )}
        </div>

        {/* Footer totals + checkout */}
        {items.length > 0 && (
          <div
            className="flex-shrink-0 px-5 pb-6 pt-4 safe-bottom"
            style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "white" }}
          >
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-1">
              <span style={{ fontSize: 13, color: "#888" }}>Subtotal</span>
              <span className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--forest)" }}>
                {formatPrice(cartTotal)}
              </span>
            </div>
            <p style={{ fontSize: 11, color: "#aaa", marginBottom: 16 }}>
              Delivery calculated on confirmation
            </p>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-[9px] transition-all duration-200 no-underline"
              style={{
                background: "#25D366",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                padding: "14px 20px",
                minHeight: 52,
                letterSpacing: "0.02em",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>

            <button
              onClick={clearCart}
              className="w-full mt-2 transition-colors"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                color: "#aaa",
                padding: "8px",
              }}
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
