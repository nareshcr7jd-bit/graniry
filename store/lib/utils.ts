import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CartItem } from "./store/cart"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function calcPrice(pricePerKg: number, sizeKg: number): number {
  return pricePerKg * sizeKg
}

export function whatsappOrderLink(items: CartItem[], whatsappNumber = '919900000000'): string {
  const lines = items.map(i =>
    `• ${i.name} ${i.sizeKg}kg × ${i.qty} = ₹${(i.pricePerKg * i.sizeKg * i.qty).toLocaleString('en-IN')}`
  )
  const total = items.reduce((sum, i) => sum + i.pricePerKg * i.sizeKg * i.qty, 0)
  const text = [
    'Hi Grainary! I would like to place an order:',
    '',
    ...lines,
    '',
    `Total: ₹${total.toLocaleString('en-IN')}`,
    '',
    'Please confirm availability and delivery. Thank you!',
  ].join('\n')
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}
