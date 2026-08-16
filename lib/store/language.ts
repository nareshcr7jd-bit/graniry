'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'en' | 'kn'

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set({ language: get().language === 'en' ? 'kn' : 'en' }),
    }),
    {
      name: 'grainary-language',
    }
  )
)
