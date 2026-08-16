'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PRODUCTS, Product } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/lib/store/cart'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const { addItem } = useCartStore()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Open search modal
          const searchBtn = document.getElementById('search-trigger-btn')
          if (searchBtn) searchBtn.click()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase()
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.healthClaims.some((c) => c.toLowerCase().includes(q))
    )
  })

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/65 backdrop-blur-md animate-fade-up">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-950/20"
        style={{ background: '#FDF6E3' }}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-amber-950/10 bg-white/60">
          <svg className="w-5 h-5 text-emerald-900 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Search rice varieties, GI index, low starch, diabetic care..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none text-base font-medium"
          />
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900 opacity-60 hover:opacity-100 rounded-md bg-emerald-900/10"
          >
            ESC
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-900/5 text-xs border-b border-amber-950/10 overflow-x-auto scrollbar-none">
          <span className="text-gray-500 font-medium">Quick Filters:</span>
          {['Low GI', 'Aged 18m', 'Diabetic', 'Organic', 'Multigrain'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-950 font-semibold transition-colors shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-3">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="text-lg font-display text-gray-700">No rice varieties found matching "{query}"</p>
              <p className="text-xs mt-1">Try searching for "Sona Masoori", "Low GI", "Red Rice", or "Diabetic".</p>
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between gap-4 p-3.5 rounded-xl bg-white/80 hover:bg-white border border-amber-900/10 transition-all hover:shadow-md group"
              >
                <Link
                  href={`/products/${p.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 flex-1 no-underline text-inherit"
                >
                  <div
                    className="w-12 h-14 rounded-lg flex items-center justify-center text-2xl shadow-inner shrink-0"
                    style={{ background: p.bagGradient }}
                  >
                    {p.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {p.name}
                      </h4>
                      {p.nutrition.gi && (
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          GI {p.nutrition.gi}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1">{p.tagline}</p>
                  </div>
                </Link>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block">From</span>
                    <span className="font-display font-bold text-emerald-950">{formatPrice(p.pricePerKg)}/kg</span>
                  </div>
                  <button
                    onClick={() => {
                      addItem({
                        productId: p.id,
                        name: p.name,
                        slug: p.slug,
                        pricePerKg: p.pricePerKg,
                        sizeKg: 5,
                        qty: 1,
                        bagColor: p.bagColor,
                        emoji: p.emoji,
                      })
                      onClose()
                    }}
                    className="px-3 py-2 rounded-lg bg-emerald-900 hover:bg-emerald-950 text-amber-400 font-display font-bold text-xs transition-colors shrink-0"
                  >
                    + 5kg Pack
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
