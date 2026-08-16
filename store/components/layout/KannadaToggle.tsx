'use client'

import { useLanguageStore } from '@/lib/store/language'
import { useEffect, useState } from 'react'

export function KannadaToggle() {
  const { language, toggleLanguage } = useLanguageStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold transition-all cursor-pointer shadow-sm border border-amber-500"
      title="Switch Language / ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ"
    >
      <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
    </button>
  )
}
