import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const QuoteForm = dynamic(() => import("@/components/forms/quote-form").then(mod => mod.QuoteForm), {
  loading: () => <div className="h-[500px] bg-card/50 animate-pulse rounded-xl" />
});

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  breadcrumbs: { name: string; url: string }[];
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  image,
  breadcrumbs,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-primary/40">
        <Image
          src={image}
          alt={`${title} - Professional bathroom remodeling in Chandler Arizona`}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-10 pb-20 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-2">
            {/* Breadcrumbs */}
            <nav className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-background/60">
                {breadcrumbs.map((item, index) => (
                  <li key={item.url} className="flex items-center gap-2">
                    {index > 0 && <span>/</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-background">{item.name}</span>
                    ) : (
                      <Link href={item.url} className="hover:text-background transition-colors">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Subtitle */}
            <span className="text-primary text-sm font-medium tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {subtitle}
            </span>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mt-4 mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-background/80 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6"
              >
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-black text-white border-black hover:bg-black text-base px-8 py-6"
              >
                <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:block">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
