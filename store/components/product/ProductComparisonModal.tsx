'use client'

import { useState } from 'react'
import { PRODUCTS, Product } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/lib/store/cart'

interface ProductComparisonModalProps {
  isOpen: boolean
  onClose: () => void
  initialProductIds?: string[]
}

export function ProductComparisonModal({ isOpen, onClose, initialProductIds = ['sona-masoori-aged', 'kavuni-black-rice', 'multigrain-mix'] }: ProductComparisonModalProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialProductIds)
  const { addItem } = useCartStore()

  if (!isOpen) return null

  const selectedProducts = PRODUCTS.filter((p) => selectedIds.includes(p.id))

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((i) => i !== id))
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id])
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-up">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-950/20 max-h-[90vh] flex flex-col"
        style={{ background: '#FDF6E3' }}
      >
        {/* Header */}
        <div className="p-6 border-b border-amber-950/10 flex items-center justify-between bg-white/70">
          <div>
            <h2 className="text-xl font-display font-bold text-emerald-950">Rice Variety Comparison Matrix</h2>
            <p className="text-xs text-gray-600">Select up to 3 varieties to compare health metrics, GI rating, and cooking profiles.</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-emerald-950/10 hover:bg-emerald-950/20 text-emerald-950 flex items-center justify-center font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Variety Selector Pills */}
        <div className="px-6 py-3 bg-amber-900/5 border-b border-amber-950/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-gray-500 uppercase shrink-0">Toggle Varieties:</span>
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              onClick={() => toggleSelect(p.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all shrink-0 ${
                selectedIds.includes(p.id)
                  ? 'bg-emerald-900 text-amber-300 border-emerald-900 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-800'
              }`}
            >
              {p.emoji} {p.shortName}
            </button>
          ))}
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto p-6 flex-1">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-amber-950/10">
                <th className="p-3 text-xs font-bold text-gray-500 uppercase w-1/4">Feature</th>
                {selectedProducts.map((p) => (
                  <th key={p.id} className="p-3 text-center">
                    <div className="text-3xl mb-1">{p.emoji}</div>
                    <div className="font-display font-bold text-emerald-950 text-sm">{p.shortName}</div>
                    <div className="text-xs text-amber-700 font-semibold">{formatPrice(p.pricePerKg)}/kg</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-950/10 text-xs">
              <tr>
                <td className="p-3 font-bold text-gray-700">Glycemic Index (GI)</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center">
                    {p.nutrition.gi ? (
                      <span className="inline-block px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-extrabold">
                        {p.nutrition.gi} (Low GI)
                      </span>
                    ) : (
                      <span className="text-gray-400">Medium</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-700">Aging Period</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center font-semibold text-emerald-950">
                    {p.aging || 'Fresh Crop'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-700">Protein Content</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center font-semibold text-gray-900">
                    {p.nutrition.protein}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-700">Fibre Content</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center font-semibold text-gray-900">
                    {p.nutrition.fibre}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-700">Cook Time</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center font-semibold text-gray-900">
                    {p.cookTime}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-700">Best Pairings</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {p.bestFor.map((item, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-white text-gray-700 border text-[10px]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-bold text-gray-700">Key Health Benefit</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-3 text-center text-emerald-900 font-medium">
                    {p.healthClaims[0]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white/80 border-t border-amber-950/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-gray-100"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  )
}
