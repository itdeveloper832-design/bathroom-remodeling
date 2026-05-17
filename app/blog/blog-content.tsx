"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getPublishedPosts, getCategories } from "@/lib/actions/blog"
import { siteConfig } from "@/lib/site-config"
import type { BlogPost, Category } from "@/lib/types"
import { Calendar, Clock, ArrowRight, Search, ChevronRight, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  defaultBlogPost, 
  secondBlogPost, 
  thirdBlogPost, 
  kitchenCostPost, 
  flooringTipsPost, 
  remodelingRoiPost,
  hardWaterPost
} from "@/lib/seed-blog";

export default function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const [postsData, categoriesData] = await Promise.all([
        getPublishedPosts(),
        getCategories()
      ])
      if (postsData.length === 0) {
        const defaultPosts: BlogPost[] = [
          { ...defaultBlogPost, id: "default-post-1", readTime: 12 },
          { ...secondBlogPost, id: "default-post-2", readTime: 8 },
          { ...thirdBlogPost, id: "default-post-3", readTime: 5 },
          { ...kitchenCostPost as any, id: "default-post-4", readTime: 10 },
          { ...flooringTipsPost as any, id: "default-post-5", readTime: 7 },
          { ...remodelingRoiPost as any, id: "default-post-6", readTime: 9 },
          { ...hardWaterPost as any, id: "default-post-7", readTime: 6 }
        ]
        setPosts(defaultPosts)
      } else {
        setPosts(postsData)
      }
      setCategories(categoriesData)
      setLoading(false)
    }
    fetchData()
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-50 -skew-y-3 origin-top-right pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
                Editorial & Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-8 text-balance">
                The Bathroom <br className="hidden md:block" /> Remodeling Journal
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Expert guides, design inspiration, and local Chandler remodeling advice to help you build your dream home.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" aria-hidden="true" />
                <Input
                  placeholder="Search expert articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 bg-background border-border/50 rounded-full shadow-xl shadow-primary/5 focus-visible:ring-primary focus-visible:border-primary text-base"
                  aria-label="Search blog articles"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CATEGORY FILTERS --- */}
        <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1 md:pb-0 justify-center">
              <div className="flex items-center gap-2 pr-4 border-r border-border/50 shrink-0 hidden md:flex">
                <Filter className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Topics:</span>
              </div>
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === "all" 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === category.slug 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. FEATURED POST --- */}
        {!loading && featuredPost && selectedCategory === "all" && searchQuery === "" && (
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Link href={`/blog/${featuredPost.slug}/`} className="group block relative">
                  <div className="grid lg:grid-cols-12 gap-0 bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto">
                      <Image
                        src={featuredPost.featuredImage || "/images/blog-placeholder.jpg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                          Featured Story
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                      <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 mb-10 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5" />
                          {featuredPost.readTime} min read
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                        Read the Full Guide <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* --- 4. ARTICLE GRID --- */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Grid Header */}
              <div className="flex items-center justify-between mb-12 border-b border-border/50 pb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {selectedCategory === "all" ? "Latest Stories" : `${selectedCategory} Articles`}
                </h2>
                <p className="text-sm text-muted-foreground font-medium">
                  Showing {filteredPosts.length} articles
                </p>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-4">
                      <div className="aspect-[16/10] bg-muted rounded-2xl animate-pulse" />
                      <div className="h-4 bg-muted rounded w-1/4 animate-pulse" />
                      <div className="h-8 bg-muted rounded w-3/4 animate-pulse" />
                    </div>
                  ))}
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-32 bg-secondary/30 rounded-3xl border border-dashed border-border/50">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
                  <Button 
                    variant="outline" 
                    className="mt-8 rounded-full"
                    onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                  >
                    Reset all filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                  {filteredPosts.map((post, index) => (
                    <article 
                      key={post.id}
                      className="group flex flex-col animate-in fade-in slide-in-from-bottom-4"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Link href={`/blog/${post.slug}/`} className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-sm">
                        <Image
                          src={post.featuredImage || "/images/blog-placeholder.jpg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <span className="text-white text-xs font-bold uppercase tracking-widest">Read Article</span>
                        </div>
                      </Link>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-bold text-primary uppercase tracking-widest">
                            {post.category}
                          </span>
                          <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                          <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                            {post.readTime} min read
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-border/50">
                          <Link 
                            href={`/blog/${post.slug}/`} 
                            className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest"
                          >
                            Keep Reading <ChevronRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- 5. NEWSLETTER / CTA --- */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary rounded-[32px] p-8 md:p-16 relative overflow-hidden text-center text-primary-foreground">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block opacity-80">Join Our Community</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Expert Remodeling Tips in Your Inbox</h2>
                <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
                  Subscribe to our seasonal journal for the latest design trends, cost guides, and homeowner tips from Chandler&apos;s pros.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-14 rounded-full bg-background border-none text-foreground px-6"
                    required
                  />
                  <Button className="h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold px-8 shadow-xl">
                    Subscribe
                  </Button>
                </form>
                <p className="mt-6 text-[10px] opacity-60 uppercase tracking-widest font-medium">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
