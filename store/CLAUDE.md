@AGENTS.md

# CLAUDE.md — Grainary Premium Rice E-Commerce
## Complete Development Reference — v1.0

> Read this entire file before writing a single line of code.
> This is the single source of truth. Nothing overrides it.

---

## 1. PROJECT OVERVIEW

**Grainary** is South India's first premium rice brand with a health story.
Stack: Next.js 16 (Turbopack) · TypeScript · Tailwind CSS 4 · shadcn/ui · Zustand

Core URL: `store/` subdirectory of `graniry/graniry/`

### Key USP
Aged Sona Masoori has a Glycemic Index of 54 (vs 72 for fresh rice). No competitor communicates this. Grainary owns that narrative — on every bag, every page, every listing.

---

## 2. DESIGN SYSTEM TOKENS

All tokens are defined as CSS variables in `app/globals.css`.

### Colors
```css
--forest:    #0D2E1A   /* primary dark background */
--moss:      #1C5C2E   /* secondary green */
--sage:      #2E8B4A   /* mid green, icons */
--gold:      #C8960A   /* primary accent */
--amber:     #E8A800   /* brighter gold, hover states */
--cream:     #FDF6E3   /* light section background */
--parchment: #F5EDD0   /* card background on cream */
--sand:      #EDE0C4   /* dividers on cream */
--g-dark:    #111111   /* body text */
--g-mid:     #555555   /* secondary text */
--g-light:   #888888   /* muted text */
```

### Product category bag colors
| Category   | bg gradient start | accent    |
|------------|-------------------|-----------|
| everyday   | #0D2E1A           | #C8960A   |
| diet       | #0A2E14           | #4ADE80   |
| premium    | #2E1A0D           | #E8A800   |
| multigrain | #4A2210           | #FB923C   |
| ancient    | #3D0A0A           | #FCA5A5   |
| brown      | #5C4A28           | #D4B483   |

### Typography
```
Font display:  Playfair Display — headings, prices, stats (CSS var: --font-playfair)
Font body:     Inter — body copy, labels, UI (CSS var: --font-inter)
```

Font loading: always `next/font/google` (eliminates CLS). Variables injected on `<html>`.

### Spacing scale
Sections: `padding: 100px 24px` (desktop) → `padding: 64px 20px` (mobile)
Max content width: `1320px` with `margin: 0 auto`
Card gap: `20px` desktop → `16px` mobile
Card border-radius: `18px` standard, `20px` hero cards

### Ease curves
```css
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)   /* bounce, bag hover */
--ease-out:    cubic-bezier(0.16, 1, 0.30, 1)        /* slide-in, fade-up */
```

---

## 3. RESPONSIVENESS — MANDATORY RULES

### Mobile-first always
Tailwind classes written WITHOUT a breakpoint prefix ARE the mobile style.
Only `md:` / `lg:` progressively enhance for larger screens.

```tsx
// WRONG — desktop-first
className="grid grid-cols-3 sm:grid-cols-1"

// CORRECT — mobile-first
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Breakpoints in use
| Prefix | Width    | Target                 |
|--------|----------|------------------------|
| (none) | 0px+     | Mobile phones (375px+) |
| `sm:`  | 640px+   | Large phones / phablet |
| `md:`  | 768px+   | Tablets                |
| `lg:`  | 1024px+  | Laptops                |
| `xl:`  | 1280px+  | Desktop                |

### Touch targets
- Every tappable element: `min-height: 44px`, `min-width: 44px` (Apple HIG minimum)
- Nav links on mobile: `min-height: 48px`
- Form inputs: `min-height: 48px`
- Buttons: `min-height: 44px`, prefer `52px` for primary CTAs

### Typography minimums
- Body text: `font-size: 14px` minimum (prevents iOS zoom on inputs)
- Input fields: `font-size: 16px` (prevents iOS auto-zoom on focus)
- Labels / captions: `font-size: 12px` minimum

### Layout rules per page
| Page        | Mobile (< 768px)               | Desktop (≥ 768px)             |
|-------------|-------------------------------|-------------------------------|
| `/`         | Single column sections        | 2-column hero, 4-col products |
| `/products` | 1-col grid                    | 4-col grid                    |
| `/products/[slug]` | Stack: bag top, info below | 2-col side by side      |
| `/packaging` | 2-col bag grid              | 4-col bag grid                |
| Navbar      | Logo + cart icon only         | Full nav links visible        |
| CartDrawer  | Full-width slide from right   | 420px max-width               |

### Horizontal scroll — never except explicit carousels
```tsx
// Carousels use snap scrolling:
className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4"
// Each child:
className="snap-start flex-shrink-0"
// Parent must NOT have overflow-hidden
```

### Safe area insets (iPhone notch + home bar)
```css
.safe-top    { padding-top: env(safe-area-inset-top); }
.safe-bottom { padding-bottom: env(safe-area-inset-bottom); }
```
Fixed Navbar inner container uses `.safe-top`.
Any fixed bottom bar uses `.safe-bottom`.

### Tap highlight removal
```css
/* in globals.css — already applied */
* { -webkit-tap-highlight-color: transparent; }
button, a, [role="button"] { touch-action: manipulation; }
```

---

## 4. PERFORMANCE — 60 FPS RULES

### Device tiers
| Tier | RAM  | Cores | Examples             | Target FPS |
|------|------|-------|----------------------|-----------|
| Low  | ≤2GB | ≤4    | Redmi 9A, Realme C21 | 60 fps    |
| Mid  | ≤4GB | ≤6    | Redmi Note, Moto G   | 60 fps    |
| High | >4GB | >6    | iPhone, Pixel, Galaxy S | 120 fps |

### GPU-composited properties only
Animate ONLY these — they run on the GPU, never trigger layout or paint:
```
SAFE:    transform (translate, scale, rotate), opacity
UNSAFE:  width, height, top, left, margin, padding,
         background-color, box-shadow, border-width
```

### Animation durations
| Context         | Duration |
|-----------------|----------|
| Instant (hover) | 100–150ms |
| Fast (slide in) | 200–250ms |
| Normal          | 300–350ms |
| Slow (page)     | 400–500ms |
| Never above     | 600ms    |

### Bag hover animation — correct implementation
```tsx
// Use CSS transform + filter only — GPU composited
className="group-hover:-translate-y-4 group-hover:scale-[1.03] group-hover:drop-shadow-2xl"
style={{ transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)", willChange: "transform" }}
```

### CSS animations — use `will-change` on animated elements
```css
.animate-float { will-change: transform; }
.animate-ticker { will-change: transform; }
.bag-body-wrap  { will-change: transform; }
```

### No layout thrashing
Never read then write DOM layout properties in the same JS frame.
Never use `getBoundingClientRect()` inside animation loops.

### Reduced motion — always respect
```tsx
// Check at component level for heavy animations
const prefersReduced = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

// Apply in CSS:
@media (prefers-reduced-motion: reduce) {
  .animate-ticker, .animate-float, .animate-fade-up {
    animation: none;
  }
}
```

### Image optimisation
- Always use `next/image` with `width` + `height` or `fill`
- Lazy load all below-fold images: `loading="lazy"`
- Use `priority` only on LCP image (hero section)
- No unoptimised SVGs as `<img>` — inline SVG or `next/image`

### Bundle targets
| Asset              | Max gzipped |
|--------------------|-------------|
| Home page JS       | < 100KB     |
| Products page JS   | < 120KB     |
| Per-route JS       | < 50KB      |

---

## 5. HYDRATION — SSR RULES

### `suppressHydrationWarning` on `<html>`
Required — browser extensions inject attributes on the root element.
```tsx
<html lang="en" suppressHydrationWarning className={...}>
```

### Zustand persist + SSR pattern (MANDATORY)
Zustand stores persisted to localStorage will mismatch on SSR.
Every component that READS from a persisted store must use the mounted pattern:

```tsx
const [mounted, setMounted] = useState(false)
// eslint-disable-next-line react-hooks/set-state-in-effect
useEffect(() => setMounted(true), [])

// Show placeholder / null until mounted:
const count = mounted ? itemCount() : 0
// OR: if (!mounted) return null  — but ONLY after ALL hooks are called
```

**Critical rule:** All hooks must be declared before any conditional `return`.
Placing `return null` between hook declarations causes "Rules of Hooks" violations.

### `"use client"` requirement
Any component using:
- `useState`, `useEffect`, `useRef`, `useCallback`
- Event handlers (`onClick`, `onMouseEnter`, etc.)
- Browser APIs (`window`, `document`, `localStorage`)
- Zustand stores

MUST have `"use client"` as the first line.

---

## 6. FILE STRUCTURE

```
store/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Navbar, CartDrawer, Footer
│   ├── page.tsx                # Home — all sections
│   ├── products/
│   │   ├── page.tsx            # Catalog — filters + sort ("use client")
│   │   └── [slug]/page.tsx     # Detail — bag, nutrition, cart ("use client")
│   ├── packaging/page.tsx      # Packaging showcase ("use client")
│   └── globals.css             # All CSS tokens + animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav, logo, cart icon ("use client")
│   │   ├── CartDrawer.tsx      # Slide-out cart ("use client")
│   │   └── Footer.tsx          # Site footer ("use client" for hover)
│   ├── home/
│   │   ├── HeroSection.tsx     # Full-viewport hero ("use client")
│   │   ├── TickerBar.tsx       # Animated ticker (server ok)
│   │   ├── HealthScienceSection.tsx  # GI/protein charts (server ok)
│   │   ├── ProductShowcase.tsx # Filtered grid ("use client")
│   │   ├── PackagingBags.tsx   # CSS bags showcase (server ok)
│   │   ├── WhyGrainary.tsx     # 6 reasons ("use client")
│   │   ├── Subscription.tsx    # Subscribe section (server ok)
│   │   ├── Reviews.tsx         # Testimonials ("use client")
│   │   ├── FAQ.tsx             # Accordion ("use client")
│   │   └── FinalCTA.tsx        # Bottom CTA (server ok)
│   └── product/
│       ├── ProductCard.tsx     # Card + add-to-cart ("use client")
│       └── BagMockup.tsx       # CSS bag render (server ok)
├── lib/
│   ├── products.ts             # Product data (8 products, types)
│   ├── store/cart.ts           # Zustand cart (persisted)
│   └── utils.ts                # cn(), formatPrice(), whatsappOrderLink()
```

---

## 7. PRODUCT DATA

8 products in `lib/products.ts`. Each has:
```ts
id, slug, name, shortName, tagline, description, longDescription,
pricePerKg, category, badges, bagColor, bagGradient, bagAccent, bagTextColor,
emoji, aging?, origin, nutrition (calories/protein/carbs/fibre/fat/gi),
healthClaims[], cookTime, bestFor[], featured?, popular?
```

Pack sizes: `[1, 5, 10, 25]` kg. Price = `pricePerKg × sizeKg`.

---

## 8. CART SYSTEM

Zustand store at `lib/store/cart.ts` — persisted to `localStorage` key `grainary-cart`.

```ts
addItem({ productId, name, slug, pricePerKg, sizeKg, qty, bagColor, emoji })
removeItem(id)      // id = `${productId}-${sizeKg}kg`
updateQty(id, qty)
clearCart()
openCart() / closeCart()
total()             // sum of pricePerKg × sizeKg × qty
itemCount()         // sum of qty
```

WhatsApp checkout link: `lib/utils.ts → whatsappOrderLink(items)`.
Replace placeholder `919900000000` with real number before going live.

---

## 9. RESPONSIVENESS CHECKLIST — ENFORCE ON EVERY COMPONENT

Before marking any component complete, verify:

- [ ] Renders correctly at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1280px (desktop)
- [ ] No horizontal overflow at any breakpoint
- [ ] All tap targets ≥ 44×44px
- [ ] Font sizes ≥ 14px body, ≥ 16px inputs
- [ ] Grid switches to 1 column on mobile
- [ ] Section padding reduces on mobile (`px-5` not `px-24`)
- [ ] Images use `next/image`, not `<img>`
- [ ] Heading font sizes use `clamp()` for fluid type
- [ ] No `hover:` interactions as sole means of accessing content

---

## 10. PERFORMANCE CHECKLIST — ENFORCE ON EVERY ANIMATION

- [ ] Only `transform` and `opacity` animated
- [ ] `will-change: transform` on elements with continuous animation
- [ ] Animation duration ≤ 400ms for interactions, ≤ 600ms for page-level
- [ ] `transition: all` avoided — specify only the property being animated
- [ ] Reduced motion media query respected
- [ ] No inline JS in animation loops that reads layout

---

## 11. CODING STANDARDS

- TypeScript strict — no `any`, no `!` assertions except post-`notFound()`
- `cn()` from `lib/utils` for conditional class merging
- `formatPrice()` for all `₹` amounts
- Prefer inline `style={{}}` for brand-specific colors (keeps design system visible)
- Tailwind for spacing, layout, and responsive utilities
- No `useLayoutEffect` — SSR incompatible
- No direct DOM queries (`document.querySelector`) — use `useRef`
- All `Link` from `next/link`, all `Image` from `next/image`
