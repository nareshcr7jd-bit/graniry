import Link from 'next/link'
import { getProductBySlug } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'
import { PincodeChecker } from '@/components/ui/PincodeChecker'

export const metadata = {
  title: "Low GI Diet Rice for Diabetes & Glucose Management — Grainary",
  description: "Aged 18–24 months, batch-tested Glycemic Index of 54. Designed for diabetic meal plans and blood sugar management in Bangalore.",
}

export default function DiabetesDietRicePage() {
  const product = getProductBySlug('diet-rice-low-gi')

  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-forest text-white py-16 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs uppercase tracking-widest border border-emerald-500/30 mb-4 inline-block">
              Clinical Low GI Standard · GI 54
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
              Eat Rice Without Blood Sugar Spikes
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-6">
              Most people with diabetes are told to eliminate rice completely. That advice was written for fresh, high-starch rice. Grainary Diet Rice is aged 18–24 months — starch crystallises, moisture drops to 9.2%, and the GI falls to 54.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20order%20Low%20GI%20Diet%20Rice%20for%20diabetes%20management."
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

      {/* Main Content Grid */}
      <div className="max-w-5xl mx-auto px-6 pt-16">
        {/* Verification & Proof Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-amber-950/10 shadow-sm text-center">
            <span className="text-3xl block mb-2">📊</span>
            <h3 className="font-display font-bold text-emerald-950 text-base">GI 54 (Certified Low)</h3>
            <p className="text-xs text-gray-600 mt-1">Tested via NABL ISO/IEC 17025 accredited laboratory methods.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-amber-950/10 shadow-sm text-center">
            <span className="text-3xl block mb-2">🧪</span>
            <h3 className="font-display font-bold text-emerald-950 text-base">32% Starch Reduction</h3>
            <p className="text-xs text-gray-600 mt-1">Extended 18–24m aging crystallises amylose for slow glucose release.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-amber-950/10 shadow-sm text-center">
            <span className="text-3xl block mb-2">🩺</span>
            <h3 className="font-display font-bold text-emerald-950 text-base">Diabetic Meal Approved</h3>
            <p className="text-xs text-gray-600 mt-1">Allows Type 2 diabetics to enjoy daily rice without insulin surges.</p>
          </div>
        </div>

        {/* Priya Raghunathan Testimonial Feature */}
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-950 text-white mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">Verified Customer Case Study</span>
            <blockquote className="text-lg md:text-xl font-display italic text-amber-100 leading-relaxed mb-6">
              &ldquo;Switched to Grainary Diet Rice for my husband's Type 2 diabetes management. His post-meal glucose numbers stabilized from 210 mg/dL down to 142 mg/dL without changing his meal portions.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="text-3xl">👩</span>
              <div>
                <p className="font-bold text-white text-sm">Priya Raghunathan</p>
                <p className="text-xs text-white/60">Koramangala, Bangalore · Verified Purchaser</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Card */}
        {product && (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-display font-bold text-center text-emerald-950 mb-6">Order Diet Rice Directly</h2>
            <ProductCard product={product} />
          </div>
        )}
      </div>
    </div>
  )
}
