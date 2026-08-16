'use client'

import { Product } from '@/lib/products'

interface LabCertificateModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function LabCertificateModal({ product, isOpen, onClose }: LabCertificateModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-up">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-950/20 max-h-[90vh] flex flex-col" style={{ background: '#FDF6E3' }}>
        {/* Header */}
        <div className="p-6 bg-emerald-950 text-white flex items-center justify-between border-b border-gold/20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">NABL Accredited Test Certificate</span>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">{product.name} — Batch Audit</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm">
            ✕
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Certificate Header Stamp */}
          <div className="p-4 rounded-2xl bg-white border border-amber-950/10 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold">Testing Laboratory</p>
              <p className="font-bold text-emerald-950 text-sm">{product.qcSpecs.labName}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">ISO/IEC 17025:2017 Accredited Facility</p>
            </div>
            <div className="text-right">
              <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-bold text-[11px] block">
                VERIFIED PASS
              </span>
              <span className="text-[10px] text-gray-400 mt-1 block">Ref: {product.qcSpecs.labCertificateNo}</span>
            </div>
          </div>

          {/* Test Parameters Grid */}
          <div>
            <h4 className="font-bold font-display text-emerald-950 text-sm mb-3">Audited Quality & Health Metrics</h4>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-amber-900/5 border border-amber-950/10">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Glycemic Index (GI)</span>
                <span className="text-lg font-bold text-emerald-900">{product.nutrition.gi} (Low GI)</span>
                <span className="text-[9px] text-emerald-700 block mt-0.5">Standard: ISO 26642:2010</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-900/5 border border-amber-950/10">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Moisture Content</span>
                <span className="text-lg font-bold text-emerald-900">{product.qcSpecs.moisturePercent}</span>
                <span className="text-[9px] text-emerald-700 block mt-0.5">Benchmark: &lt; 10.5%</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-900/5 border border-amber-950/10">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Broken Grain %</span>
                <span className="text-lg font-bold text-emerald-900">{product.qcSpecs.brokenGrainPercent}</span>
                <span className="text-[9px] text-emerald-700 block mt-0.5">Sortex Triple Cleaned</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-900/5 border border-amber-950/10">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Purity Rating</span>
                <span className="text-lg font-bold text-emerald-900">{product.qcSpecs.purityPercent}</span>
                <span className="text-[9px] text-emerald-700 block mt-0.5">Zero Chemical Fumigation</span>
              </div>
            </div>
          </div>

          {/* Sourcing & Traceability */}
          <div className="p-4 rounded-2xl bg-white border border-amber-950/10 space-y-2">
            <h4 className="font-bold text-emerald-950">Traceability & Sourcing Details</h4>
            <p className="text-gray-600"><strong>Paddy Origin Belt:</strong> {product.qcSpecs.sourcingBelt}</p>
            <p className="text-gray-600"><strong>Aging Duration:</strong> {product.aging || 'Fresh Crop Processed'}</p>
            <p className="text-gray-600"><strong>FSSAI Registration:</strong> Lic. No. 11224999000123</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white/80 border-t border-amber-950/10 flex items-center justify-between">
          <span className="text-[10px] text-gray-500">Official Grainary QA Audit Record</span>
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-emerald-950 text-white font-bold text-xs">
            Close Certificate
          </button>
        </div>
      </div>
    </div>
  )
}
