import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blog'
import { PRODUCTS } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Grainary Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedProduct = PRODUCTS.find((p) => p.slug === post.relatedProductSlug)

  return (
    <div style={{ background: 'var(--cream)' }} className="min-h-screen pb-24">
      {/* Back Header */}
      <div className="bg-emerald-950 text-white py-12 px-6 border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-amber-400 text-xs font-bold uppercase tracking-widest no-underline hover:underline mb-4 block">
            ← Back to All Articles
          </Link>
          <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base text-white/70 italic mb-6">{post.subtitle}</p>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10 text-xs text-white/60">
            <span className="text-2xl">{post.author.avatar}</span>
            <div>
              <p className="font-bold text-white text-sm">{post.author.name}</p>
              <p>{post.author.role}</p>
            </div>
            <div className="ml-auto text-right">
              <p>{post.date}</p>
              <p className="text-amber-400 font-semibold">{post.readTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Container */}
      <div className="max-w-4xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-amber-950/10 shadow-sm">
          <div
            className="prose prose-emerald max-w-none text-gray-800 text-sm md:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-950 text-xs font-semibold">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Related Product */}
        <div className="space-y-6">
          {relatedProduct && (
            <div className="sticky top-24">
              <div className="bg-amber-900/5 p-4 rounded-2xl border border-amber-950/10 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                  Featured Product in Article
                </span>
                <p className="text-xs text-gray-600">
                  Taste the benefits discussed in this research paper.
                </p>
              </div>
              <ProductCard product={relatedProduct} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
