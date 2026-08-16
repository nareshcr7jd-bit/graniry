'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS, Product } from '@/lib/products'
import { useCartStore } from '@/lib/store/cart'
import { useLanguageStore } from '@/lib/store/language'

interface RiceDecisionQuizModalProps {
  isOpen: boolean
  onClose: () => void
}

type HealthGoal = 'diabetic' | 'fitness' | 'everyday' | 'biryani' | 'idli' | 'ancient'

export function RiceDecisionQuizModal({ isOpen, onClose }: RiceDecisionQuizModalProps) {
  const [goal, setGoal] = useState<HealthGoal | null>(null)
  const { addItem } = useCartStore()
  const { language } = useLanguageStore()

  if (!isOpen) return null

  const getRecommendation = (): Product => {
    switch (goal) {
      case 'diabetic':
        return PRODUCTS.find(p => p.id === 'diet-rice-low-gi') || PRODUCTS[0]
      case 'fitness':
        return PRODUCTS.find(p => p.id === 'multigrain-power-rice') || PRODUCTS[0]
      case 'biryani':
        return PRODUCTS.find(p => p.id === 'rnr-jeera-sona') || PRODUCTS[0]
      case 'idli':
        return PRODUCTS.find(p => p.id === 'idli-dosa-rice') || PRODUCTS[0]
      case 'ancient':
        return PRODUCTS.find(p => p.id === 'red-rice-kavuni') || PRODUCTS[0]
      case 'everyday':
      default:
        return PRODUCTS.find(p => p.id === 'sona-masoori-old-raw') || PRODUCTS[0]
    }
  }

  const recommendedProduct = goal ? getRecommendation() : null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-up">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-950/20 max-h-[90vh] flex flex-col" style={{ background: '#FDF6E3' }}>
        {/* Header */}
        <div className="p-6 bg-emerald-950 text-white flex items-center justify-between border-b border-gold/20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              {language === 'kn' ? 'ಅಕ್ಕಿ ಆಯ್ಕೆ ಮಾರ್ಗದರ್ಶಿ' : 'Rice Selection Guide'}
            </span>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">
              {language === 'kn' ? 'ನಿಮಗೆ ಯಾವ ಅಕ್ಕಿ ಸೂಕ್ತ?' : 'Which Rice Should You Buy?'}
            </h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm">
            ✕
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!goal ? (
            <div>
              <p className="text-xs font-semibold text-emerald-950 mb-4">
                {language === 'kn' ? 'ನಿಮ್ಮ ಪ್ರಮುಖ ಆರೋಗ್ಯ ಅಥವಾ ಆಹಾರದ ಗುರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:' : 'Select your primary health requirement or cooking preference:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setGoal('diabetic')}
                  className="p-4 rounded-2xl bg-white border border-amber-950/10 hover:border-emerald-800 text-left transition-all shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">🥗</span>
                  <p className="font-bold text-emerald-950 text-xs group-hover:text-emerald-800">
                    {language === 'kn' ? 'ಮಧುಮೇಹ ಮತ್ತು ತೂಕ ಇಳಿಕೆ (Low GI)' : 'Diabetic Care & Weight Loss'}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">GI 54 certified low glycemic rice</p>
                </button>

                <button
                  onClick={() => setGoal('fitness')}
                  className="p-4 rounded-2xl bg-white border border-amber-950/10 hover:border-emerald-800 text-left transition-all shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">💪</span>
                  <p className="font-bold text-emerald-950 text-xs group-hover:text-emerald-800">
                    {language === 'kn' ? 'ಫಿಟ್ನೆಸ್ ಮತ್ತು ಹೆಚ್ಚು ಪ್ರೋಟೀನ್' : 'Fitness & High Protein (8.9g)'}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">5-grain blend for gym & macros</p>
                </button>

                <button
                  onClick={() => setGoal('everyday')}
                  className="p-4 rounded-2xl bg-white border border-amber-950/10 hover:border-emerald-800 text-left transition-all shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">🌾</span>
                  <p className="font-bold text-emerald-950 text-xs group-hover:text-emerald-800">
                    {language === 'kn' ? 'ದೈನಂದಿನ ಊಟದ ಸೋನಾ ಮಸೂರಿ' : 'Everyday Household Meals'}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Aged 12–24m raw Sona Masoori</p>
                </button>

                <button
                  onClick={() => setGoal('biryani')}
                  className="p-4 rounded-2xl bg-white border border-amber-950/10 hover:border-emerald-800 text-left transition-all shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">⭐</span>
                  <p className="font-bold text-emerald-950 text-xs group-hover:text-emerald-800">
                    {language === 'kn' ? 'ಬಿರಿಯಾನಿ ಮತ್ತು ಫ್ರೈಡ್ ರೈಸ್' : 'Biryani & Fluffy Separated Rice'}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Aged 18m RNR Jeera Sona</p>
                </button>

                <button
                  onClick={() => setGoal('idli')}
                  className="p-4 rounded-2xl bg-white border border-amber-950/10 hover:border-emerald-800 text-left transition-all shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">🫓</span>
                  <p className="font-bold text-emerald-950 text-xs group-hover:text-emerald-800">
                    {language === 'kn' ? 'ಇಡ್ಲಿ ಮತ್ತು ದೋಸೆ ಹಿಟ್ಟು' : 'Idli & Soft Dosa Batter'}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">High amylopectin short-grain rice</p>
                </button>

                <button
                  onClick={() => setGoal('ancient')}
                  className="p-4 rounded-2xl bg-white border border-amber-950/10 hover:border-emerald-800 text-left transition-all shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span className="text-2xl block mb-1">🏺</span>
                  <p className="font-bold text-emerald-950 text-xs group-hover:text-emerald-800">
                    {language === 'kn' ? 'ಪ್ರಾಚೀನ ಆಂಟಿಆಕ್ಸಿಡೆಂಟ್ ಕೆಂಪು ಅಕ್ಕಿ' : 'Antioxidant Heritage Red Rice'}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">145mg Anthocyanins per 100g</p>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onClick={() => setGoal(null)}
                className="text-xs font-semibold text-emerald-800 hover:underline mb-2 flex items-center gap-1 cursor-pointer"
              >
                ← {language === 'kn' ? 'ಮತ್ತೆ ಆಯ್ಕೆ ಮಾಡಿ' : 'Change Goal'}
              </button>

              {recommendedProduct && (
                <div className="p-5 rounded-2xl bg-white border border-emerald-900/20 shadow-md">
                  <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold text-[10px] uppercase tracking-wider block mb-2 w-max">
                    Recommended Match
                  </span>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl p-2 rounded-xl bg-amber-900/5">{recommendedProduct.emoji}</span>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-emerald-950 text-lg">{recommendedProduct.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{recommendedProduct.tagline}</p>
                      <p className="text-xs text-emerald-900 font-medium bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                        {recommendedProduct.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-500 block">Starting from</span>
                          <span className="text-lg font-bold text-emerald-950">₹{recommendedProduct.pricePerKg}/kg</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              addItem({
                                productId: recommendedProduct.id,
                                name: recommendedProduct.name,
                                slug: recommendedProduct.slug,
                                pricePerKg: recommendedProduct.pricePerKg,
                                sizeKg: 5,
                                qty: 1,
                                bagColor: recommendedProduct.bagColor,
                                emoji: recommendedProduct.emoji,
                              })
                              onClose()
                            }}
                            className="px-4 py-2 rounded-xl bg-emerald-950 text-amber-300 font-display font-bold text-xs hover:bg-emerald-900 transition-colors shadow-sm"
                          >
                            + Add 5kg Pack
                          </button>
                          <Link
                            href={`/products/${recommendedProduct.slug}`}
                            onClick={onClose}
                            className="px-3 py-2 rounded-xl bg-gray-100 text-gray-800 font-bold text-xs no-underline hover:bg-gray-200"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white/80 border-t border-amber-950/10 flex items-center justify-between text-[11px] text-gray-500">
          <span>Grainary Smart Rice Matchmaker</span>
          <button onClick={onClose} className="font-semibold text-emerald-900 hover:underline">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
