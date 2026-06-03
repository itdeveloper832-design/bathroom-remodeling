import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "complete-guide-bathroom-remodeling-chandler-arizona",
    title: "Complete Guide to Bathroom Remodeling in Chandler, Arizona",
    excerpt:
      "The ultimate comprehensive guide to bathroom remodeling in Chandler. Learn planning, design, permits, timelines, and long-term maintenance.",
    image: "/images/services/chandler-bathroom-remodel.avif",
    date: "May 20, 2026",
    category: "Guides",
  },
  {
    slug: "2024-bathroom-design-trends-chandler-arizona",
    title: "2025-2026 Bathroom Design Trends for Chandler, Arizona Homes",
    excerpt:
      "Explore 2025-2026 bathroom design trends. Spa features, sustainable materials, minimalist design, and luxury fixtures trending now.",
    image: "/images/hero/luxury-shower-remodel-chandler.avif",
    date: "May 18, 2026",
    category: "Trends",
  },
  {
    slug: "bathroom-remodel-cost-chandler-az-2025",
    title: "2026 Bathroom Remodel Cost in Chandler, AZ - Local Price Guide",
    excerpt:
      "Complete analysis of bathroom remodeling costs in Chandler, Arizona. Compare prices by project size, materials, labor, and neighborhoods.",
    image: "/images/projects/luxury-bathtub-remodel-az.avif",
    date: "May 15, 2026",
    category: "Pricing",
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
