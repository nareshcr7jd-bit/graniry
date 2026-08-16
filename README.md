# 🌾 Grainary — South India's Premium Aged & Low GI Rice Brand

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/FSSAI_Lic.-11224999000123-emerald?style=flat-square)](https://graniry-tawny.vercel.app)

> **Grainary** (A Brand by **JDP Enterprises**) is South India's first D2C and B2B e-commerce platform positioned around Glycemic Index (GI), 18-month aged Sona Masoori, batch-level NABL lab disclosures, and same-day Bangalore delivery.

---

## 🌟 Core Brand USPs

- **Certified Glycemic Index 54**: 18–24 month aged Sona Masoori raw rice has naturally lower starch retrogradation, reducing GI from 72 (fresh rice) to 54.
- **Data-Forward Packaging**: Every bag publishes moisture % (<9.8%), broken grain % (<0.8%), purity %, and NABL lab audit references.
- **Bilingual Localization (en/kn)**: Full reactive site-wide language toggle switching between English and Kannada (*ಧಾನ್ಯರಿ — ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರೀಮಿಯಂ ಅಕ್ಕಿ*).
- **Bangalore Hyperlocal Delivery**: 6-digit postal code validator (`560xxx`) verifying same-day express delivery availability.
- **WhatsApp-First Ordering**: Direct pre-filled cart & inquiry links integrating seamlessly with WhatsApp.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router + Turbopack) |
| **UI Library** | React 19, Tailwind CSS 4, Base UI, Lucide Icons |
| **State Management** | Zustand (Cart, Language, Toast Notifications) |
| **Database & ORM** | PostgreSQL, Drizzle ORM, Drizzle Kit |
| **Localization** | Custom Zustand-backed Bilingual i18n Engine |
| **SEO & Schema** | Google JSON-LD (`LocalBusiness`, `Product`, `FAQPage`) |
| **Deployment** | Vercel (`graniry-tawny.vercel.app`) |

---

## 📁 Scalable Monorepo Directory Structure

```
grainysite/
├── app/                        # Next.js 16 App Router Pages & Layouts
│   ├── b2b/                    # Commercial Restaurant Wholesale Portal
│   ├── blog/                   # Rice Science & Health Content Hub
│   ├── blog/[slug]/            # SSG Dynamic Blog Posts
│   ├── diabetes-diet-rice/     # Diabetic Care Landing Page (GI 54)
│   ├── fitness-multigrain/     # Fitness & Protein Macro Landing Page
│   ├── packaging/              # Packaging QC & Transparency Page
│   ├── pcos-brown-rice/        # PCOS & Gut Health Landing Page
│   ├── products/               # Product Catalogue Grid
│   ├── products/[slug]/        # Dynamic Product Detail Page (PDP)
│   ├── layout.tsx              # Root Layout (Navbar, Footer, JSON-LD)
│   └── page.tsx                # Homepage
├── components/                 # Organized Domain Components
│   ├── home/                   # Hero, HealthScience, Showcase, Reviews, FAQ
│   ├── layout/                 # Navbar, Footer, MobileNav, SearchModal
│   ├── product/                # ProductCard, QuizModal, QuickView, LabCert
│   └── ui/                     # PincodeChecker, ToastContainer, TrustBadges
├── lib/                        # Core Application Logic
│   ├── config/                 # Brand & Site Configuration Constants
│   ├── data/                   # Product & Blog Datasets
│   ├── store/                  # Zustand Global Stores (Cart, Language, Toast)
│   ├── types/                  # Centralized TypeScript Interfaces
│   ├── translations.ts         # English & Kannada Dictionaries
│   └── utils.ts                # General Helper Utilities
├── public/                     # Static Media Assets (Logos, Hero Video)
├── next.config.ts              # Next.js Config
├── package.json                # Single Unified Root Manifest
├── tailwind.config.ts          # Tailwind CSS Configuration
└── vercel.json                 # Deployment Configuration
```

---

## ⚡ Feature Highlights

### 1. 💡 "Which Rice Should I Buy?" Decision Wizard
An interactive 2-step decision quiz ([`RiceDecisionQuizModal.tsx`](file:///Users/rajkishores/Workspace/Naresh_works/grainysite/components/product/RiceDecisionQuizModal.tsx)) guiding first-time visitors based on health goals (Diabetic care, Fitness macros, Fluffy biryani, Tiffin idli, or Ancient grains) to their ideal SKU.

### 2. 🔬 NABL ISO/IEC 17025 Lab Certificate Inspection
Interactive modal overlay ([`LabCertificateModal.tsx`](file:///Users/rajkishores/Workspace/Naresh_works/grainysite/components/product/LabCertificateModal.tsx)) allowing buyers to inspect simulated NABL laboratory test certificates verifying GI 54 ratings, moisture levels, and zero pesticide residues.

### 3. 🏥 Persona & B2B Landing Pages
- **`/diabetes-diet-rice`**: Clinical low-GI 54 diet rice landing page.
- **`/pcos-brown-rice`**: High-fibre (3.5g/100g) gut health landing page.
- **`/fitness-multigrain`**: Protein-rich (8.9g/100g) 5-grain blend landing page.
- **`/b2b`**: Restaurant wholesale portal featuring 25kg, 100kg, and 500kg+ volume tiers.
- **`/packaging`**: Packaging transparency guide explaining on-bag batch QC metrics.

### 4. 🏷️ Bulk Tier Savings & Raw vs. Steam Chips
- **Tiered Volume Discounts**: `5kg: Save 5%`, `10kg: Save 10%`, `25kg: Best Value (Save 15%)`.
- **Raw vs. Steam Chips**: Quick buyer guide chips on Sona Masoori product cards.
- **Category Stripes**: Color-coded top category bands (Gold for Everyday, Green for Diet, Maroon for Premium, Orange for Multigrain).

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nareshcr7jd-bit/graniry.git
   cd graniry
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm run start
   ```

---

## 📐 Search Engine Optimization (SEO)

- **JSON-LD `LocalBusiness`**: Embedded in `layout.tsx` registering `JDP Enterprises` with Bangalore coordinates (`12.9352`, `77.6245`).
- **JSON-LD `Product`**: Embedded on product detail pages with SKU pricing, offers, and INR currency.
- **JSON-LD `FAQPage`**: Embedded in `FAQ.tsx` marking up questions and answers for Google search accordions.

---

## 📜 Legal & Compliance

- **Brand Entity**: Grainary — A Brand by **JDP Enterprises**
- **FSSAI License**: `11224999000123`
- **Location**: Koramangala 4th Block & HSR Layout, Bangalore, KA, India

---

© 2026 Grainary (JDP Enterprises) · All rights reserved.
