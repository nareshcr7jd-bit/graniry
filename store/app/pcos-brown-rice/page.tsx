import Link from 'next/link'
import { getProductBySlug } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'
import { PincodeChecker } from '@/components/ui/PincodeChecker'

export const metadata = {
  title: "Whole Grain Brown Rice for PCOS & Gut Health — Grainary",
  description: "3.5g Fibre per 100g (8x white rice), GI 50. High magnesium and B-vitamins designed for PCOS management and hormone balance.",
}

export default function PCOSBrownRicePage() {
  const product = getProductBySlug('brown-rice-whole-grain')

  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-amber-900 to-forest text-white py-16 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
              PCOS & Gut Health Protocol · 3.5g Fibre
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
              Whole Grain Protection for Hormonal Balance
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-6">
              Managing PCOS requires slow-digesting complex carbs, high dietary fibre, and essential magnesium. Grainary Whole Grain Brown Rice retains its intact bran layer — delivering 8× more fibre than polished white rice.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20order%20Whole%20Grain%20Brown%20Rice%20for%20PCOS%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gold hover:bg-amber-400 text-emerald-950 font-display font-extrabold text-sm transition-all shadow-xl no-underline"
              >
                Order 5kg Pack via WhatsApp →
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <PincodeChecker />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pt-16">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-amber-950/10 shadow-sm mb-16">
          <h2 className="text-2xl font-display font-bold text-emerald-950 mb-4">Why Fibre & Magnesium Matter for PCOS</h2>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
            Women managing PCOS often experience insulin resistance and digestive sluggishness. The 3.5g fibre in Grainary Brown Rice slows gastric emptying, improving satiety and supporting gut microbiome diversity.
          </p>
          <ul className="space-y-2 text-xs text-gray-700">
            <li>✓ <strong>GI 50:</strong> The lowest glycemic index in our entire product catalogue.</li>
            <li>✓ <strong>Natural Magnesium:</strong> Aids cellular glucose transport and muscle relaxation.</li>
            <li>✓ <strong>Unpolished Bran:</strong> Preserves natural B-complex vitamins naturally present in whole grains.</li>
          </ul>
        </div>

        {product && (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-display font-bold text-center text-emerald-950 mb-6">Order Whole Grain Brown Rice</h2>
            <ProductCard product={product} />
          </div>
        )}
      </div>
    </div>
  )
}
