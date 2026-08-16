import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CartItem } from "./store/cart"

export const DEFAULT_WHATSAPP_NUMBER = '919900000000'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function calcPrice(pricePerKg: number, sizeKg: number): number {
  return pricePerKg * sizeKg
}

export function whatsappOrderLink(items: CartItem[], whatsappNumber = DEFAULT_WHATSAPP_NUMBER): string {
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
    'Please confirm availability and delivery to Bangalore. Thank you!',
  ].join('\n')
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function whatsappDirectInquiryLink(topic: string, whatsappNumber = DEFAULT_WHATSAPP_NUMBER): string {
  const text = `Hi Grainary! I would like to inquire about: ${topic}`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}
