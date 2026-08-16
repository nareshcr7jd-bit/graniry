'use client'

import { useState } from 'react'
import { Product } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/lib/store/cart'

interface ProductQuickViewProps {
  product: Product | null
  onClose: () => void
}

const PACK_SIZES = [1, 5, 10, 25]

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const [selectedSize, setSelectedSize] = useState<number>(5)
  const { addItem } = useCartStore()

  if (!product) return null

  const totalPrice = product.pricePerKg * selectedSize

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-up">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-950/20 max-h-[90vh] overflow-y-auto"
        style={{ background: '#FDF6E3' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-emerald-950/10 hover:bg-emerald-950/20 text-emerald-950 flex items-center justify-center font-bold text-sm transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Bag Preview Hero */}
          <div
            className="p-8 flex flex-col items-center justify-center relative overflow-hidden"
            style={{ background: product.bagGradient }}
          >
            <div className="text-8xl drop-shadow-2xl animate-float my-6">{product.emoji}</div>
            {product.aging && (
              <span className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Aged {product.aging}
              </span>
            )}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">{product.category}</span>
              <h3 className="text-2xl font-display font-extrabold text-white mt-1">{product.shortName}</h3>
            </div>
          </div>

          {/* Right Product Info */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">{product.origin}</span>
                {product.nutrition.gi && (
                  <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    GI {product.nutrition.gi} (Low)
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-display font-bold text-emerald-950">{product.name}</h2>
              <p className="text-xs text-gray-600 italic mt-1">{product.tagline}</p>
              <p className="text-xs text-gray-700 mt-3 leading-relaxed">{product.description}</p>

              {/* Health Claims */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {product.healthClaims.map((claim, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-950/5 text-emerald-900 border border-emerald-950/10"
                  >
                    ✓ {claim}
                  </span>
                ))}
              </div>

              {/* Nutrition Quick Grid */}
              <div className="mt-5 grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-amber-900/5 border border-amber-900/10">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block font-semibold">Calories</span>
                  <span className="text-xs font-bold text-gray-900">{product.nutrition.calories}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block font-semibold">Protein</span>
                  <span className="text-xs font-bold text-gray-900">{product.nutrition.protein}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block font-semibold">Cook Time</span>
                  <span className="text-xs font-bold text-gray-900">{product.cookTime}</span>
                </div>
              </div>

              {/* Pack Size Selector */}
              <div className="mt-5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-2">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {PACK_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'bg-emerald-950 text-white border-emerald-950 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-900'
                      }`}
                    >
                      {size} kg
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Add to Cart CTA */}
            <div className="mt-6 pt-4 border-t border-amber-950/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-500 block">Total Price</span>
                <span className="text-2xl font-display font-extrabold text-emerald-950">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={() => {
                  addItem({
                    productId: product.id,
                    name: product.name,
                    slug: product.slug,
                    pricePerKg: product.pricePerKg,
                    sizeKg: selectedSize,
                    qty: 1,
                    bagColor: product.bagColor,
                    emoji: product.emoji,
                  })
                  onClose()
                }}
                className="flex-1 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-display font-extrabold text-sm transition-all shadow-lg hover:shadow-xl text-center"
              >
                Add {selectedSize}kg to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
