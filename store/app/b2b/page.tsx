import Link from 'next/link'
import { getProductBySlug } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'
import { PincodeChecker } from '@/components/ui/PincodeChecker'

export const metadata = {
  title: "B2B Wholesale & Restaurant Rice Supply Bangalore — Grainary",
  description: "Bulk supply of 18+ month aged RNR/Jeera Sona and Sona Masoori for cloud kitchens, hotels, and housing societies in Bangalore. 50kg & 100kg tiers.",
}

export default function B2BWholesalePage() {
  const rnrProduct = getProductBySlug('rnr-jeera-sona')

  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 text-white py-16 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-gold/20 text-amber-300 font-extrabold text-xs uppercase tracking-widest border border-gold/30 mb-4 inline-block">
              B2B & Commercial Wholesale Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
              Restaurant-Grade Aged Rice for Cloud Kitchens & Hotels
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-6">
              In biryani and commercial food service, grain separation and moisture consistency are everything. Grainary supplies 18+ month aged RNR Jeera Sona and Sona Masoori in 25kg, 50kg, and 100kg+ commercial tiers.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20am%20a%20restaurant/cloud%20kitchen%20owner%20looking%20for%20a%20bulk%20rice%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gold hover:bg-amber-400 text-emerald-950 font-display font-extrabold text-sm transition-all shadow-xl no-underline"
              >
                Request Commercial Wholesale Quote →
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <PincodeChecker />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pt-16">
        {/* Chef Review Quote */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-amber-950/10 shadow-sm mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">Partner Chef Endorsement</span>
          <blockquote className="text-lg md:text-xl font-display italic text-emerald-950 leading-relaxed mb-4">
            &ldquo;As a chef, rice quality matters a lot. RNR Jeera Sona is exceptional — perfect separation after cooking, exact what we need for our biryani. We placed a B2B order for 100kg.&rdquo;
          </blockquote>
          <p className="text-xs font-bold text-gray-900">Chef Ravi Prakash · Indiranagar Cloud Kitchen</p>
        </div>

        {/* Pricing Tiers Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-emerald-950 mb-6 text-center">B2B Wholesale Volume Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-amber-950/10 shadow-sm text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Starter Commercial</span>
              <span className="text-3xl font-display font-bold text-emerald-950 block mb-1">25kg Bag</span>
              <p className="text-xs text-gray-600 mb-4">Ideal for small cafes & tiffin services.</p>
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20to%20order%2025kg%20commercial%20pack."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-emerald-900 text-amber-300 font-bold text-xs no-underline"
              >
                Order 25kg →
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950 text-white border border-gold/30 shadow-xl text-center relative">
              <span className="px-2 py-0.5 rounded bg-gold text-emerald-950 text-[10px] font-bold uppercase tracking-wider absolute top-3 right-3">Most Popular</span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">Cloud Kitchen Tier</span>
              <span className="text-3xl font-display font-bold text-white block mb-1">100kg (4 × 25kg)</span>
              <p className="text-xs text-white/70 mb-4">Dedicated delivery slot & trade discount.</p>
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20want%20a%20100kg%20cloud%20kitchen%20wholesale%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-gold text-emerald-950 font-bold text-xs no-underline"
              >
                Get 100kg Quote →
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-950/10 shadow-sm text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Institutional Tier</span>
              <span className="text-3xl font-display font-bold text-emerald-950 block mb-1">500kg+ Monthly</span>
              <p className="text-xs text-gray-600 mb-4">For hotel chains & housing societies.</p>
              <a
                href="https://wa.me/919900000000?text=Hi%20Grainary!%20I%20am%20looking%20for%20500kg+%20monthly%20institutional%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-emerald-900 text-amber-300 font-bold text-xs no-underline"
              >
                Contact B2B Team →
              </a>
            </div>
          </div>
        </div>

        {rnrProduct && (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-display font-bold text-center text-emerald-950 mb-6">Flagship Restaurant Variety</h2>
            <ProductCard product={rnrProduct} />
          </div>
        )}
      </div>
    </div>
  )
}
