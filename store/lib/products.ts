export type ProductCategory = 'everyday' | 'diet' | 'premium' | 'multigrain' | 'ancient'

export interface NutritionPer100g {
  calories: number
  protein: number
  carbs: number
  fibre: number
  fat: number
  gi: number
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
  nutrition: NutritionPer100g
  healthClaims: string[]
  cookTime: string
  bestFor: string[]
  featured?: boolean
  popular?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'sona-masoori-old-raw',
    slug: 'sona-masoori-old-raw',
    name: 'Sona Masoori Old Raw',
    shortName: 'Sona Masoori Old Raw',
    tagline: 'Aged 12–24 months · Diet-safe · Hero product',
    description: 'Our flagship. Aged 12–24 months to reduce starch and lower the glycemic index. The rice South Indian households trust — now with a story.',
    longDescription: 'Aged Sona Masoori raw rice loses moisture over 12–24 months, dropping starch content by up to 30%. The glycemic index falls from 72 to around 56 — clinically lower than fresh rice. Every grain is sorted by our Sortex colour-sorter, moisture-tested to below 11%, and batch-coded on the bag.',
    pricePerKg: 75,
    category: 'everyday',
    badges: ['HERO', 'DIET-SAFE', 'LOW GI'],
    bagColor: '#0D2E1A',
    bagGradient: 'linear-gradient(168deg, #0D2E1A 0%, #143B22 60%, #0A2215 100%)',
    bagAccent: '#C8960A',
    bagTextColor: '#C8960A',
    emoji: '🌾',
    aging: '12–24 months',
    origin: 'Andhra Pradesh & Karnataka',
    nutrition: { calories: 345, protein: 6.8, carbs: 78, fibre: 0.6, fat: 0.5, gi: 56 },
    healthClaims: ['Lower GI than fresh rice', 'Reduced starch content', 'Easier on digestion', 'Safe for weight-watchers'],
    cookTime: '18–22 min',
    bestFor: ['Daily meals', 'Curd rice', 'Lemon rice', 'Pongal'],
    featured: true,
    popular: true,
  },
  {
    id: 'sona-masoori-steam',
    slug: 'sona-masoori-steam',
    name: 'Sona Masoori Steam',
    shortName: 'Steam Rice',
    tagline: 'Parboiled · Fast cook · Easier digestion',
    description: 'Parboiled Sona Masoori for faster cooking. The steam process locks nutrients inside the grain before milling.',
    longDescription: 'Steam (parboiled) rice undergoes partial boiling before milling. This drives nutrients from the bran into the grain — making it more nutritious than polished raw rice. It cooks faster, has a firmer texture, and is easier on digestion.',
    pricePerKg: 68,
    category: 'everyday',
    badges: ['FAST COOK', 'NUTRIENT-RICH'],
    bagColor: '#3D2B1A',
    bagGradient: 'linear-gradient(168deg, #3D2B1A 0%, #5C4028 60%, #2E1E0E 100%)',
    bagAccent: '#F5DEB3',
    bagTextColor: '#F5DEB3',
    emoji: '♨️',
    origin: 'Andhra Pradesh',
    nutrition: { calories: 357, protein: 7.4, carbs: 79, fibre: 0.9, fat: 0.4, gi: 63 },
    healthClaims: ['Nutrient-locked via steam process', 'Firmer grain texture', 'Faster cook time', 'Better shelf stability'],
    cookTime: '14–18 min',
    bestFor: ['Quick meals', 'Sambar rice', 'Rasam rice'],
    popular: true,
  },
  {
    id: 'idli-dosa-rice',
    slug: 'idli-dosa-rice',
    name: 'Idli / Dosa Rice',
    shortName: 'Idli Dosa Rice',
    tagline: 'Short grain · High starch · Perfect batter',
    description: 'Short-grain raw rice with the high starch content needed for an airy, fermented batter. Ground smooth for a silky texture.',
    longDescription: 'Not all rice makes great idli. This short-grain variety has elevated amylopectin starch — the type that ferments well and gives idli its signature softness. Our lot is cleaned, sorted, and packed within days of milling for maximum freshness.',
    pricePerKg: 58,
    category: 'everyday',
    badges: ['BATTER GRADE', 'IDLI SPECIALIST'],
    bagColor: '#1A2E3D',
    bagGradient: 'linear-gradient(168deg, #1A2E3D 0%, #243F54 60%, #131E28 100%)',
    bagAccent: '#7BB3D4',
    bagTextColor: '#7BB3D4',
    emoji: '🫓',
    origin: 'Tamil Nadu',
    nutrition: { calories: 349, protein: 6.2, carbs: 80, fibre: 0.4, fat: 0.5, gi: 68 },
    healthClaims: ['Optimised amylopectin ratio for fermentation', 'Freshly packed for best ferment', 'No additives'],
    cookTime: 'Batter: soak 4h · Ferment 8h',
    bestFor: ['Idli', 'Dosa', 'Uttapam', 'Appam'],
  },
  {
    id: 'rnr-jeera-sona',
    slug: 'rnr-jeera-sona',
    name: 'RNR / Jeera Sona',
    shortName: 'Jeera Sona',
    tagline: '18+ months aged · Aromatic · Restaurant grade',
    description: 'Aged 18+ months. Slender grain with a natural mild aroma. The choice of Bangalore\'s best cloud kitchens and hotels.',
    longDescription: 'RNR rice — also called Jeera Sona for its cumin-seed like shape — is the longest-aged variety we carry. At 18+ months, moisture drops below 10%, the starch crystallises, and the grain cooks non-sticky with a beautiful separated texture. This is what your favourite biryani restaurant uses.',
    pricePerKg: 90,
    category: 'premium',
    badges: ['RESTAURANT GRADE', 'PREMIUM', '18+ MONTHS'],
    bagColor: '#2E1A0D',
    bagGradient: 'linear-gradient(168deg, #2E1A0D 0%, #4A2E15 60%, #1E0F05 100%)',
    bagAccent: '#E8A800',
    bagTextColor: '#E8A800',
    emoji: '⭐',
    aging: '18+ months',
    origin: 'Telangana',
    nutrition: { calories: 343, protein: 7.1, carbs: 77, fibre: 0.5, fat: 0.4, gi: 52 },
    healthClaims: ['Lowest GI in our lineup', 'Maximum starch reduction from aging', 'Non-sticky separated grains'],
    cookTime: '16–20 min',
    bestFor: ['Biryani', 'Pulao', 'Fried rice', 'Restaurant service'],
    featured: true,
  },
  {
    id: 'diet-rice-low-gi',
    slug: 'diet-rice-low-gi',
    name: 'Diet Rice — Low GI',
    shortName: 'Diet Rice',
    tagline: 'Aged 18–24 months · GI 54 · Weight-management',
    description: 'Our most scientifically positioned product. Aged 18–24 months, batch-tested GI of 54. Eat rice on your diet — guilt-free.',
    longDescription: 'Most people avoid rice while dieting because of generic advice about carbs. That advice was written about fresh, high-starch rice. Diet Rice is aged 18–24 months — starch crystallises, moisture drops to 9.2%, and the glycemic index falls to 54 (low GI). We test every batch. The result is on the bag.',
    pricePerKg: 89,
    category: 'diet',
    badges: ['LOW GI · 54', 'DIET-SAFE', 'BATCH-TESTED'],
    bagColor: '#0A2E14',
    bagGradient: 'linear-gradient(168deg, #0A2E14 0%, #0F3D1A 60%, #071F0D 100%)',
    bagAccent: '#4ADE80',
    bagTextColor: '#4ADE80',
    emoji: '🥗',
    aging: '18–24 months',
    origin: 'Andhra Pradesh',
    nutrition: { calories: 338, protein: 6.9, carbs: 75, fibre: 0.8, fat: 0.4, gi: 54 },
    healthClaims: ['GI 54 — clinically low glycemic', 'Starch reduced by 32% vs fresh', 'Safe for diabetics (Type 2)', 'Batch-level GI testing certificate'],
    cookTime: '18–22 min',
    bestFor: ['Weight management', 'Diabetic-friendly meals', 'Calorie-tracked diets', 'PCOS-friendly eating'],
    featured: true,
    popular: true,
  },
  {
    id: 'multigrain-power-rice',
    slug: 'multigrain-power-rice',
    name: 'Multigrain Power Rice',
    shortName: 'Multigrain Rice',
    tagline: '5-grain blend · 8.9g protein · Fitness crowd',
    description: 'A precision blend of Sona Masoori + Red Rice + Brown Rice + Foxtail Millet + Barnyard Millet. More protein, more fibre, more flavour.',
    longDescription: 'Built for gym-goers, athletes, and anyone who wants more from their rice. Our 5-grain formula — 50% Sona Masoori, 20% Red Rice, 15% Brown Rice, 10% Foxtail Millet, 5% Barnyard Millet — hits 8.9g protein per 100g cooked (vs 6.8g for white rice). Earthy, nutty, and satisfying.',
    pricePerKg: 110,
    category: 'multigrain',
    badges: ['8.9g PROTEIN', 'MULTIGRAIN', '5-GRAIN BLEND'],
    bagColor: '#4A2210',
    bagGradient: 'linear-gradient(168deg, #4A2210 0%, #6B3318 60%, #331508 100%)',
    bagAccent: '#FB923C',
    bagTextColor: '#FB923C',
    emoji: '💪',
    origin: 'Multi-origin blend',
    nutrition: { calories: 352, protein: 8.9, carbs: 72, fibre: 3.2, fat: 1.8, gi: 58 },
    healthClaims: ['31% more protein than white rice', 'High fibre for gut health', 'Complex carbs for sustained energy', 'Iron-rich from red rice'],
    cookTime: '22–26 min',
    bestFor: ['Post-workout meals', 'High-protein diets', 'Fitness meal prep', 'Muscle gain diets'],
    featured: true,
  },
  {
    id: 'red-rice-kavuni',
    slug: 'red-rice-kavuni',
    name: 'Red Rice — Kavuni',
    shortName: 'Red Rice',
    tagline: 'Ancient grain · High anthocyanins · Heirloom variety',
    description: 'Tamil Nadu\'s heirloom Kavuni rice. Deep red-black colour from anthocyanin pigments — the same antioxidants in blueberries.',
    longDescription: 'Mappillai Samba and Kavuni are ancient Tamil rice varieties grown for over 2,000 years. The deep red-black colour is natural anthocyanin — powerful antioxidants linked to heart health and anti-inflammation. Higher protein than white rice, nutty flavour, and a slightly chewy texture. A premium conversation starter at any table.',
    pricePerKg: 130,
    category: 'ancient',
    badges: ['ANCIENT GRAIN', 'ANTIOXIDANT-RICH', 'HEIRLOOM'],
    bagColor: '#3D0A0A',
    bagGradient: 'linear-gradient(168deg, #3D0A0A 0%, #5C1515 60%, #260505 100%)',
    bagAccent: '#FCA5A5',
    bagTextColor: '#FCA5A5',
    emoji: '🏺',
    origin: 'Tamil Nadu (Kavuni variety)',
    nutrition: { calories: 356, protein: 8.2, carbs: 74, fibre: 2.8, fat: 1.2, gi: 55 },
    healthClaims: ['High anthocyanins — natural antioxidant', 'GI 55 — moderate-low', 'Rich in iron and zinc', '2,000+ year heritage grain'],
    cookTime: '28–35 min (soak 2h for best results)',
    bestFor: ['Antioxidant-rich meals', 'Chettinad cuisine', 'Desserts (payasam)', 'Wellness diets'],
  },
  {
    id: 'brown-rice-whole-grain',
    slug: 'brown-rice-whole-grain',
    name: 'Brown Rice — Whole Grain',
    shortName: 'Brown Rice',
    tagline: 'Unpolished · Maximum fibre · Nutty flavour',
    description: 'Unpolished Sona Masoori with the bran intact. Maximum fibre, B-vitamins, and magnesium. The nutritional benchmark.',
    longDescription: 'Brown rice is white rice before the bran is stripped away. By keeping the bran intact, we preserve 3.5g fibre per 100g (vs 0.4g for polished white), plus significant B-vitamins, magnesium, and phosphorus. The nutty, chewy texture is distinct. Cook with slightly more water and a longer time for perfect results.',
    pricePerKg: 80,
    category: 'diet',
    badges: ['WHOLE GRAIN', 'HIGH FIBRE', 'UNPOLISHED'],
    bagColor: '#5C4A28',
    bagGradient: 'linear-gradient(168deg, #5C4A28 0%, #7A6035 60%, #3E3018 100%)',
    bagAccent: '#D4B483',
    bagTextColor: '#D4B483',
    emoji: '🌰',
    origin: 'Karnataka',
    nutrition: { calories: 362, protein: 7.6, carbs: 73, fibre: 3.5, fat: 2.2, gi: 50 },
    healthClaims: ['3.5g fibre — highest in lineup', 'GI 50 — lowest on our menu', 'Retains natural B-vitamins', 'Magnesium for muscle recovery'],
    cookTime: '30–40 min (or pressure cooker 3 whistles)',
    bestFor: ['Fibre-rich diets', 'Diabetic meal plans', 'Clean eating', 'Gut health protocols'],
    popular: true,
  },
]

export const PACK_SIZES = [1, 5, 10, 25]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured)
}
