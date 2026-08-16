'use client'

import { useToastStore } from '@/lib/store/toast'
import { useEffect, useState } from 'react'

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start justify-between gap-3 p-4 rounded-xl shadow-2xl backdrop-blur-md border transition-all duration-300 animate-fade-up"
          style={{
            background: toast.type === 'gold' ? 'rgba(13,46,26,0.96)' : 'rgba(255,255,255,0.96)',
            borderColor: toast.type === 'gold' ? 'rgba(200,150,10,0.4)' : 'rgba(13,46,26,0.15)',
            color: toast.type === 'gold' ? '#FDF6E3' : '#111111',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
              style={{
                background: toast.type === 'gold' ? 'var(--gold)' : 'rgba(13,46,26,0.1)',
                color: toast.type === 'gold' ? '#0D2E1A' : 'var(--sage)',
              }}
            >
              ✓
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                {toast.title}
              </p>
              {toast.description && (
                <p
                  className="text-xs mt-1"
                  style={{ color: toast.type === 'gold' ? 'rgba(255,255,255,0.75)' : '#555555' }}
                >
                  {toast.description}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-xs opacity-50 hover:opacity-100 transition-opacity p-1"
            aria-label="Dismiss toast"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}
