'use client'

export function TrustBadgesBar() {
  return (
    <div className="py-4 px-6 bg-white/80 backdrop-blur-md rounded-2xl border border-amber-950/10 shadow-sm my-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="flex items-center gap-2.5 justify-center">
          <span className="text-xl">🛡️</span>
          <div className="text-left">
            <p className="font-bold text-emerald-950 text-xs">JDP Enterprises</p>
            <p className="text-[10px] text-gray-500">FSSAI Lic. 11224999000123</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 justify-center border-l border-gray-200 pl-4 sm:pl-0 sm:border-l-0">
          <span className="text-xl">🔬</span>
          <div className="text-left">
            <p className="font-bold text-emerald-950 text-xs">CFTRI / NABL Lab</p>
            <p className="text-[10px] text-gray-500">Batch-Tested Purity</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 justify-center border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-4">
          <span className="text-xl">🚚</span>
          <div className="text-left">
            <p className="font-bold text-emerald-950 text-xs">Bangalore Delivery</p>
            <p className="text-[10px] text-gray-500">Same-Day Express Available</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 justify-center border-t sm:border-t-0 border-l border-gray-200 pt-3 sm:pt-0 pl-4">
          <span className="text-xl">💵</span>
          <div className="text-left">
            <p className="font-bold text-emerald-950 text-xs">Cash on Delivery</p>
            <p className="text-[10px] text-gray-500">Pay After Inspection</p>
          </div>
        </div>
      </div>
    </div>
  )
}
