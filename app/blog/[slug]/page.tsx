import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getPostBySlug, getRelatedPosts, getPublishedPosts } from "@/lib/actions/blog"
import { siteConfig } from "@/lib/site-config"
import { Calendar, Clock, ArrowLeft, User, ArrowRight, Share2, Facebook, Twitter, Linkedin, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogArticleJsonLd } from "@/components/seo/json-ld"
import { parseMarkdown, extractHeadings } from "@/lib/blog-utils"
import type { BlogPost } from "@/lib/types"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostData(slug: string): Promise<BlogPost | null> {
  return await getPostBySlug(slug);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  if (!post) {
    return {
      title: "Post Not Found"
    }
  }

  return {
    title: `${post.metaTitle || post.title} | ${siteConfig.name}`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.featuredImage ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.category, post.id)
  const htmlContent = await parseMarkdown(post.content)
  const headings = extractHeadings(post.content)

  return (
    <>
      <BlogArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${siteConfig.url}/blog/${post.slug}/`}
        image={post.featuredImage || "/images/blog-placeholder.jpg"}
        datePublished={post.publishedAt || post.createdAt}
        dateModified={post.updatedAt}
        author={post.author}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* --- 1. HERO SECTION --- */}
        <section className="relative pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 bg-secondary overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog/" 
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Articles
              </Link>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime} min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {post.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-background shadow-sm">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground mr-1 uppercase tracking-widest">Share:</span>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. FEATURED IMAGE --- */}
        {post.featuredImage && (
          <section className="relative -mt-12 md:-mt-16 lg:-mt-20 z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl border-4 border-background">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- 3. MAIN ARTICLE LAYOUT --- */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 relative">
              
              {/* Sidebar / Table of Contents (Desktop) */}
              <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-32 space-y-8">
                  {headings.length > 0 && (
                    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                        <List className="h-4 w-4 text-primary" />
                        <h3 className="font-serif font-bold text-foreground">In this article</h3>
                      </div>
                      <nav className="space-y-1">
                        {headings.map((heading) => (
                          <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className={`block text-sm py-1.5 transition-colors hover:text-primary ${
                              heading.level === 3 ? 'pl-4 text-muted-foreground' : 'font-medium text-foreground/80'
                            }`}
                          >
                            {heading.text}
                          </a>
                        ))}
                      </nav>
                    </div>
                  )}
                  
                  {/* Local Relevance / CTA Card */}
                  <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg shadow-primary/10 overflow-hidden relative">
                    <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-background/10 rounded-full blur-2xl" />
                    <h3 className="font-serif font-bold text-xl mb-3 relative z-10">Chandler&apos;s #1 Remodeler</h3>
                    <p className="text-sm text-primary-foreground/90 mb-6 relative z-10">
                      Licensed experts serving Chandler, Ocotillo, and all East Valley communities.
                    </p>
                    <Button asChild variant="secondary" className="w-full bg-background text-primary hover:bg-background/90 relative z-10">
                      <Link href="/contact/">Get Free Quote</Link>
                    </Button>
                  </div>
                </div>
              </aside>

              {/* Main Article Body */}
              <div className="flex-1 max-w-none">
                <article className="max-w-3xl">
                  {/* Article content with proper parsing */}
                  <div 
                    className="prose prose-lg md:prose-xl max-w-none 
                      prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-32
                      prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
                      prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8
                      prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-6
                      prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                      prose-strong:text-foreground prose-strong:font-bold
                      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:text-foreground prose-blockquote:italic
                      prose-li:text-muted-foreground prose-li:mb-2
                      prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-border/50
                      prose-hr:border-border/50"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap gap-2">
                      <span className="text-sm text-muted-foreground mr-2 self-center">Tags:</span>
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author Bio Section */}
                  <div className="mt-16 bg-card border border-border/50 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-20 h-20 rounded-full bg-primary/10 shrink-0 flex items-center justify-center border-2 border-background shadow-md">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-serif font-bold text-xl text-foreground">About the Author: {post.author}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.author} is a bathroom design specialist with over a decade of experience helping Chandler homeowners transform their spaces. 
                        With a deep understanding of Arizona&apos;s unique remodeling needs, {post.author} focuses on blending style with practical, long-lasting solutions.
                      </p>
                      <div className="flex gap-4">
                        <a href="#" className="text-primary text-xs font-bold hover:underline">View Profile</a>
                        <a href="#" className="text-primary text-xs font-bold hover:underline">Follow on Twitter</a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. CTA BANNER SECTION --- */}
        <section className="py-20 bg-foreground text-background overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 Q50,0 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Transform Your Home</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-background">
                Start Your Chandler Bathroom Journey Today
              </h2>
              <p className="text-background/70 text-lg mb-10 leading-relaxed">
                We handle everything from initial design to final walkthrough. 
                Get a written estimate for your project with zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20">
                  <Link href="/contact/">Get Your Free Estimate</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-background/20 hover:bg-background/10 text-background font-bold px-10 h-14 rounded-full transition-all">
                  <Link href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. RELATED POSTS --- */}
        {relatedPosts.length > 0 && (
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                  <div>
                    <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">Keep Reading</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">You might also like</h2>
                  </div>
                  <Button asChild variant="ghost" className="hidden md:flex items-center gap-2 hover:bg-secondary">
                    <Link href="/blog/">View All <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {relatedPosts.map((relatedPost) => (
                    <article 
                      key={relatedPost.id} 
                      className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={`/blog/${relatedPost.slug}/`} className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage || "/images/blog-placeholder.jpg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <span className="text-white text-xs font-bold uppercase tracking-widest">Read Article</span>
                        </div>
                      </Link>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                          <Link href={`/blog/${relatedPost.slug}/`}>{relatedPost.title}</Link>
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <div className="pt-6 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                            <span>{relatedPost.readTime} min read</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(relatedPost.publishedAt || relatedPost.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
                <Button asChild variant="outline" className="w-full mt-12 md:hidden">
                  <Link href="/blog/">View All Articles</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

