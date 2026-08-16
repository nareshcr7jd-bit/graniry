'use client'

import { useState } from 'react'

export function KannadaToggle() {
  const [lang, setLang] = useState<'en' | 'kn'>('en')

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'kn' : 'en'
    setLang(nextLang)
    if (typeof window !== 'undefined') {
      const tag = document.getElementById('kannada-banner')
      if (tag) {
        tag.style.display = nextLang === 'kn' ? 'block' : 'none'
      }
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all cursor-pointer"
      title="Switch Language / ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ"
    >
      <span className="text-amber-300 font-bold">{lang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
    </button>
  )
}
