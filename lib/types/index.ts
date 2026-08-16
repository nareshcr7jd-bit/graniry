export type ProductCategory = 'everyday' | 'diet' | 'premium' | 'multigrain' | 'ancient'

export interface NutritionPer100g {
  calories: number
  protein: number
  carbs: number
  fibre: number
  fat: number
  gi: number
}

export interface ProductQCSpecs {
  moisturePercent: string
  brokenGrainPercent: string
  purityPercent: string
  labCertificateNo: string
  labName: string
  sourcingBelt: string
  shelfLife: string
}

export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  longDescription: string
  pricePerKg: number
  category: ProductCategory
  badges: string[]
  bagColor: string
  bagGradient: string
  bagAccent: string
  bagTextColor: string
  emoji: string
  aging?: string
  origin: string
  qcSpecs: ProductQCSpecs
  nutrition: NutritionPer100g
  healthClaims: string[]
  cookTime: string
  waterRatio: string
  bestFor: string[]
  recipeNotes?: string
  featured?: boolean
  popular?: boolean
}

export interface BlogAuthor {
  name: string
  role: string
  avatar: string
}

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  author: BlogAuthor
  excerpt: string
  content: string
  relatedProductSlug: string
  tags: string[]
}

export type Language = 'en' | 'kn'
