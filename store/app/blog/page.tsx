import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog'
import { PRODUCTS } from '@/lib/products'

export const metadata = {
  title: "Rice Science & Cooking Blog — Grainary",
  description: "Explore the health science of low GI aged rice, ancient Kavuni heirloom grains, and expert South Indian cooking guides.",
}

export default function BlogIndexPage() {
  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Hero Header */}
      <div className="bg-emerald-950 text-white py-16 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">Grainary Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Rice Science, Health & Culinary Guides
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover why 18-month aging lowers glycemic index, how ancient heirloom varieties nourish your body, and how to cook fluffy rice every time.
          </p>
        </div>
      </div>

      {/* Main Blog Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => {
            const product = PRODUCTS.find((p) => p.slug === post.relatedProductSlug)
            return (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-amber-950/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="p-6 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white relative">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-white/60">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-display font-bold leading-snug hover:text-amber-300 transition-colors">
                      <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
                        {post.title}
                      </Link>
                    </h2>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>

                    {/* Author & Tags */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <span className="text-2xl">{post.author.avatar}</span>
                      <div>
                        <p className="text-xs font-bold text-gray-900 leading-none">{post.author.name}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 py-4 bg-amber-900/5 border-t border-amber-950/10 flex items-center justify-between">
                  {product && (
                    <span className="text-[11px] font-semibold text-emerald-900">
                      Pairs with {product.shortName}
                    </span>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-amber-700 hover:text-amber-900 no-underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
