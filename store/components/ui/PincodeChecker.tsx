'use client'

import { useState } from 'react'

const BANGALORE_AREAS: Record<string, string> = {
  '560034': 'Koramangala 4th Block & HSR Sector 1',
  '560102': 'HSR Layout & Agara',
  '560066': 'Whitefield & ITPL',
  '560038': 'Indiranagar 100ft Road',
  '560041': 'Jayanagar 4th Block',
  '560100': 'Electronic City Phase 1 & 2',
  '560001': 'MG Road & Brigade Road',
  '560076': 'BTM Layout 2nd Stage',
  '560037': 'Marathahalli & Bellandur',
  '560092': 'Hebbal & Sahakarnagar',
}

export function PincodeChecker() {
  const [pincode, setPincode] = useState('')
  const [result, setResult] = useState<{
    status: 'idle' | 'success' | 'out_of_area' | 'invalid'
    areaName?: string
  }>({ status: 'idle' })

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const clean = pincode.trim()
    if (!/^\d{6}$/.test(clean)) {
      setResult({ status: 'invalid' })
      return
    }

    if (clean.startsWith('560')) {
      const area = BANGALORE_AREAS[clean] || 'Bangalore Metropolitan Region'
      setResult({ status: 'success', areaName: area })
    } else {
      setResult({ status: 'out_of_area' })
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-amber-950/10 shadow-sm max-w-md w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">🚚</span>
        <h4 className="text-xs font-bold font-display uppercase tracking-wider text-emerald-950">
          Check Bangalore Delivery Eligibility
        </h4>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit Pincode (e.g. 560034)"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="flex-1 px-3 py-2 text-xs font-medium rounded-xl bg-white border border-gray-300 outline-none focus:border-amber-600"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-display font-bold text-xs rounded-xl transition-colors shrink-0 cursor-pointer"
        >
          Check
        </button>
      </form>

      {/* Result Status */}
      {result.status === 'success' && (
        <div className="mt-3 p-2.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-2">
          <span className="font-bold text-emerald-700">✓ Eligible:</span>
          <div>
            <p className="font-semibold">{result.areaName}</p>
            <p className="text-[10px] text-emerald-800 mt-0.5">
              Same-day delivery available for orders placed before 2 PM. Standard 24h delivery thereafter.
            </p>
          </div>
        </div>
      )}

      {result.status === 'out_of_area' && (
        <div className="mt-3 p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 text-xs">
          <p className="font-semibold">Outside Bangalore Express Zone</p>
          <p className="text-[10px] text-amber-900 mt-0.5">
            We currently deliver via direct courier across Karnataka. WhatsApp us for custom interstate delivery quotes.
          </p>
        </div>
      )}

      {result.status === 'invalid' && (
        <p className="mt-2 text-[11px] text-red-600 font-medium">Please enter a valid 6-digit Indian postal pincode.</p>
      )}
    </div>
  )
}
