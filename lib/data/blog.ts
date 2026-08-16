import { BlogPost } from '@/lib/types'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "science-of-aged-rice-glycemic-index",
    title: "The Science of Aged Rice: Why 18 Months Lowers Glycemic Index",
    subtitle: "Understanding starch retrogradation, moisture loss, and diabetic-safe grains.",
    category: "Rice Science",
    date: "August 12, 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Arvind Swaminathan",
      role: "Food Scientist & Nutrition Researcher",
      avatar: "👨‍🔬",
    },
    excerpt: "Freshly harvested rice contains up to 16% moisture and loose amylose chains, leading to rapid digestion and sharp blood glucose spikes. Here is how 18-month aging transforms rice into a low GI staple.",
    content: `
      <h2>Why Fresh Rice Causes Glucose Spikes</h2>
      <p>When rice is freshly harvested, its starch molecules (specifically amylose and amylopectin) are loosely packed and bound with relatively high moisture levels (14–16%). Upon boiling, fresh rice gelatinizes rapidly. When consumed, human salivary and pancreatic alpha-amylase enzymes break down this loose starch into glucose within minutes, causing a sharp spike in post-prandial blood sugar.</p>

      <h2>What Happens During 18 Months of Climate-Controlled Aging?</h2>
      <p>During natural aging in traditional ventilated granaries, two fundamental biochemical changes occur:</p>
      <ul>
        <li><strong>Moisture Reduction:</strong> Grain moisture drops naturally below 10%, causing the kernel structure to harden and shrink.</li>
        <li><strong>Starch Crystallization (Retrogradation):</strong> Amylose molecules align into compact, crystalline structures that resist rapid enzymatic hydrolysis.</li>
      </ul>

      <h2>The Glycemic Index Shift: 72 down to 54</h2>
      <p>Laboratory testing confirms that while fresh Sona Masoori scores between 70–72 on the Glycemic Index, 18-month aged Sona Masoori scores <strong>54 (Low GI)</strong>. A low GI diet prevents rapid insulin surges, reduces fat storage triggers, and provides steady, long-lasting energy throughout the afternoon.</p>

      <h2>Cooking Difference: Non-Sticky & Fluffy</h2>
      <p>Beyond health benefits, aged rice absorbs more water without becoming mushy. Each grain expands lengthwise while remaining completely separate — the hallmark of authentic South Indian meal quality.</p>
    `,
    relatedProductSlug: "sona-masoori-aged",
    tags: ["Aged Rice", "Low GI", "Diabetes Care", "Sona Masoori"],
  },
  {
    slug: "kavuni-black-rice-ancient-superfood",
    title: "Kavuni Red Rice: South India’s Ancient Antioxidant Superfood",
    subtitle: "The 2,000-year-old heirloom grain reserved for Chettinad royalty.",
    category: "Heirloom Grains",
    date: "August 8, 2026",
    readTime: "6 min read",
    author: {
      name: "Meenakshi Sundaram",
      role: "Culinary Historian & Traditional Agronomist",
      avatar: "👵",
    },
    excerpt: "Known as Mappillai Samba and Kavuni Arisi, this deep purple-black heirloom grain packs higher anthocyanin antioxidant levels than blueberries alongside rich protein and fiber.",
    content: `
      <h2>The Legacy of Kavuni Rice in Chettinad</h2>
      <p>For centuries in Tamil Nadu, Kavuni rice was cultivated in small batches and served to bridegrooms ('Mappillai') before weddings for strength, stamina, and vitality. Its intense purple-black pigmentation was prized as a mark of royal nutrition.</p>

      <h2>Anthocyanins: The Superfood Pigment</h2>
      <p>The deep maroon outer bran layer of Kavuni contains concentrated levels of <strong>anthocyanin antioxidants</strong> — the exact same bioflavonoids responsible for the health reputation of wild blueberries and açai berries. Anthocyanins combat cellular oxidative stress and support cardiovascular vascular health.</p>

      <h2>Nutritional Profile Breakdown</h2>
      <p>Compared to polished white rice, 100g of cooked Kavuni Red Rice provides:</p>
      <ul>
        <li><strong>8.2g Protein</strong> (vs 6.8g in white rice)</li>
        <li><strong>2.8g Dietary Fiber</strong> (7× higher than white rice)</li>
        <li><strong>Rich Iron & Zinc</strong> minerals in the unpolished husk</li>
      </ul>

      <h2>How to Prepare Kavuni Rice at Home</h2>
      <p>Because the bran layer is unpolished and robust, Kavuni requires a 4-hour soak in fresh water before pressure cooking (1:3 water ratio, 5 whistles on low flame). Enjoy it with Chettinad coconut curries, as an earthy salad base, or sweetened with palm jaggery for traditional Kavuni Payasam.</p>
    `,
    relatedProductSlug: "kavuni-black-rice",
    tags: ["Kavuni Rice", "Heirloom", "Antioxidants", "Chettinad"],
  },
  {
    slug: "5-cooking-secrets-fluffy-sona-masoori",
    title: "5 Cooking Secrets for Perfect Fluffy Sona Masoori Every Time",
    subtitle: "Master the water ratio, soak duration, and rest time for restaurant-quality grains.",
    category: "Cooking Guides",
    date: "August 4, 2026",
    readTime: "4 min read",
    author: {
      name: "Chef Ravi Prakash",
      role: "Head Chef, Indiranagar Cloud Kitchen",
      avatar: "👨‍🍳",
    },
    excerpt: "Struggling with sticky or undercooked rice? Follow these 5 professional culinary tips to ensure every grain of Grainary Sona Masoori cooks light, aromatic, and separate.",
    content: `
      <h2>Secret 1: Rinse Gently Until Water Runs Clear</h2>
      <p>Rinse raw rice 2–3 times in cold water to remove surface starch dust caused during transport. Stop rinsing as soon as the water runs clear — over-washing strips natural grain minerals.</p>

      <h2>Secret 2: The Mandatory 20-Minute Soak</h2>
      <p>Never skip soaking aged rice! Soaking allows water to penetrate into the dense crystalline core of the aged kernel. This ensures uniform expansion without cracking or splitting the grain tip during boiling.</p>

      <h2>Secret 3: The Golden 1 : 2.0 Water Ratio</h2>
      <p>For Grainary 18-month Aged Sona Masoori, the exact golden ratio is 1 cup raw rice to 2.0 cups water for pressure cooking, or 2.2 cups for open pot boiling.</p>

      <h2>Secret 4: Pressure Cooker Whistle Control</h2>
      <p>Cook for 3 whistles on medium flame. Turn off heat immediately after the 3rd whistle and let the cooker de-pressurize naturally. Never force-release steam!</p>

      <h2>Secret 5: The 5-Minute Rest & Fork Fluff</h2>
      <p>After opening the lid, do not scoop rice immediately with a flat spoon. Let it rest open for 5 minutes to release trapped moisture steam, then gently fluff with a wide fork from the edges inward.</p>
    `,
    relatedProductSlug: "sona-masoori-aged",
    tags: ["Cooking Guide", "Sona Masoori", "Kitchen Tips"],
  },
]
