import Link from 'next/link'
import { getProductBySlug } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'
import { PincodeChecker } from '@/components/ui/PincodeChecker'

export const metadata = {
  title: "Multigrain Power Rice (8.9g Protein) for Athletes & Fitness — Grainary",
  description: "5-Grain precision formula delivering 8.9g protein per 100g (31% more than white rice). Built for post-workout macros and muscle recovery.",
}

export default function FitnessMultigrainPage() {
  const product = getProductBySlug('multigrain-power-rice')

  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-amber-900 to-emerald-950 text-white py-16 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 font-extrabold text-xs uppercase tracking-widest border border-orange-500/30 mb-4 inline-block">
              Macro-Tracked · 8.9g Protein per 100g
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
              Hit Your Protein & Macro Targets with Rice
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-6">
              Stop settling for empty white rice carbs. Grainary Multigrain Power Rice blends Sona Masoori (40%), Red Rice (20%), Brown Rice (20%), Foxtail Millet (10%), and Barnyard Millet (10%) to deliver 31% more protein and sustained workout energy.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20order%20Multigrain%20Power%20Rice%20for%20fitness%20meal%20prep."
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
        {/* Arjun Menon Review */}
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-950 text-white mb-16 relative">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">Athlete Testimonial</span>
          <blockquote className="text-lg font-display italic text-amber-100 mb-4">
            &ldquo;Post-workout meals feel noticeably more filling. I track my macros closely on MyFitnessPal and this actually hits my protein targets better than regular white rice.&rdquo;
          </blockquote>
          <p className="text-xs text-white/70"><strong>Arjun Menon</strong> · HSR Layout, Bangalore</p>
        </div>

        {product && (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-display font-bold text-center text-emerald-950 mb-6">Order Multigrain Power Rice</h2>
            <ProductCard product={product} />
          </div>
        )}
      </div>
    </div>
  )
}
