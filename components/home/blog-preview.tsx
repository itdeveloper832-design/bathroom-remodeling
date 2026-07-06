import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPublishedPosts } from "@/lib/actions/blog";

export default async function BlogPreview() {
  const posts = await getPublishedPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
              Our Blog
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-foreground text-balance">
              Remodeling Tips & Inspiration
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert advice, design ideas, and industry insights to help you plan 
              your perfect bathroom remodel.
            </p>
          </div>
          <div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8"
            >
              <Link href="/blog/">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article
              key={post.slug}
              className="animate-in fade-in slide-in-from-bottom-4 group flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <Link href={`/blog/${post.slug}/`} className="group flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.featuredImage || "/images/blog-placeholder.jpg"}
                    alt={post.title}
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full uppercase tracking-wider shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3 font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    }) : 'July 3, 2026'}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-border/50 flex items-center text-primary text-xs font-bold uppercase tracking-wider">
                    Read Article
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
