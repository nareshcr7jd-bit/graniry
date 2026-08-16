import Link from 'next/link'
import Image from 'next/image'
import { TrustBadgesBar } from '@/components/ui/TrustBadgesBar'

export const metadata = {
  title: "Packaging Transparency & Batch QC — Grainary (JDP Enterprises)",
  description: "Learn how Grainary prints batch-level Glycemic Index (GI), moisture %, broken grain %, and NABL lab audit references on every single bag.",
}

export default function PackagingPage() {
  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-forest text-white py-16 px-6 border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-3 py-1 rounded-full bg-gold/20 text-amber-300 font-extrabold text-xs uppercase tracking-widest border border-gold/30 mb-4 inline-block">
            Data-Forward Packaging Standard
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
            Honest Packaging. Zero Secrets.
          </h1>
          <p className="text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Unlike generic mill bags that hide sourcing and moisture content, every Grainary pouch carries batch-coded QC parameters verified by NABL accredited labs.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-12">
        <TrustBadgesBar />

        {/* 3 Pillars Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="p-6 rounded-3xl bg-white border border-amber-950/10 shadow-sm">
            <span className="text-3xl block mb-3">🏷️</span>
            <h3 className="font-display font-bold text-emerald-950 text-lg mb-2">Front Panel Proof</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Clear grain window showing raw grain length, aging duration callout (12–24 months), and certified Glycemic Index rating.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-950/10 shadow-sm">
            <span className="text-3xl block mb-3">📊</span>
            <h3 className="font-display font-bold text-emerald-950 text-lg mb-2">Back Panel QC Specs</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every bag discloses moisture % (&lt; 10%), broken grain % (&lt; 0.8%), pesticide purity (99.9%), and exact paddy sourcing region.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-950/10 shadow-sm">
            <span className="text-3xl block mb-3">🔍</span>
            <h3 className="font-display font-bold text-emerald-950 text-lg mb-2">Batch QR Code</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scan the printed QR code on your bag to view the exact CFTRI / NABL lab audit report corresponding to your mill lot.
            </p>
          </div>
        </div>

        {/* Legal Entity & FSSAI Disclosure */}
        <div className="p-8 rounded-3xl bg-emerald-950 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-amber-300 mb-2">JDP Enterprises Quality Commitment</h2>
          <p className="text-xs text-white/80 leading-relaxed mb-4">
            Grainary is manufactured and distributed by <strong>JDP Enterprises</strong> under FSSAI License No. <code>11224999000123</code>. We do not use chemical fumigation, mineral oil polishing, or synthetic whitening agents.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 rounded-xl bg-gold text-emerald-950 font-display font-bold text-xs no-underline hover:bg-amber-400"
          >
            Shop Tested Rice Varieties →
          </Link>
        </div>
      </div>
    </div>
  )
}
