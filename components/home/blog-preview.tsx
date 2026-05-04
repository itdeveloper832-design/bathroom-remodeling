import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "bathroom-remodeling-trends-2024",
    title: "Top Bathroom Remodeling Trends for 2024",
    excerpt:
      "Discover the latest bathroom design trends transforming homes in Chandler, Arizona, from spa-like showers to smart technology.",
    image: "/images/optimized/photo-1600566752355-35792bedcfea.webp",
    date: "January 15, 2024",
    category: "Trends",
  },
  {
    slug: "how-to-choose-bathroom-tiles",
    title: "How to Choose the Perfect Bathroom Tiles",
    excerpt:
      "A comprehensive guide to selecting tiles that complement your bathroom design, from porcelain to natural stone options.",
    image: "/images/optimized/photo-1552321554-5fefe8c9ef14.webp",
    date: "January 8, 2024",
    category: "Tips",
  },
  {
    slug: "small-bathroom-remodel-ideas",
    title: "10 Small Bathroom Remodel Ideas That Maximize Space",
    excerpt:
      "Creative solutions for making the most of your compact bathroom. Learn design tricks that make small spaces feel larger.",
    image: "/images/optimized/photo-1620626011761-996317b8d101.webp",
    date: "December 28, 2023",
    category: "Ideas",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Blog
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
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
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-cover group-hover:brightness-110 transition-[filter] duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
