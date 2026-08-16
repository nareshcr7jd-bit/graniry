'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useToastStore } from './toast'

export interface CartItem {
  id: string          // productId + sizeKg
  productId: string
  name: string
  slug: string
  pricePerKg: number
  sizeKg: number
  qty: number
  bagColor: string
  emoji: string
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: () => number
  itemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const id = `${item.productId}-${item.sizeKg}kg`
        const existing = get().items.find(i => i.id === id)
        if (existing) {
          set(state => ({
            items: state.items.map(i => i.id === id ? { ...i, qty: i.qty + item.qty } : i),
            isOpen: true,
          }))
        } else {
          set(state => ({ items: [...state.items, { ...item, id }], isOpen: true }))
        }
        useToastStore.getState().addToast({
          title: `Added ${item.name}`,
          description: `${item.sizeKg}kg pack added to your cart.`,
          type: 'gold'
        })
      },

      removeItem: (id) => {
        set(state => ({ items: state.items.filter(i => i.id !== id) }))
      },

      updateQty: (id, qty) => {
        if (qty <= 0) {
          get().removeItem(id)
          return
        }
        set(state => ({
          items: state.items.map(i => i.id === id ? { ...i, qty } : i),
        }))
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () => get().items.reduce((sum, i) => sum + i.pricePerKg * i.sizeKg * i.qty, 0),

      itemCount: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),
    {
      name: 'grainary-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
