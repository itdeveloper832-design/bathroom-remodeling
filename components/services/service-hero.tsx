import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

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
  const heroImage = image.endsWith('.webp') ? image.replace(/\.webp$/, '.avif') : image;

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-primary/40">
        <Image
          src={heroImage}
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
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-10 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Main Column - Hero Content (Occupies all 3 grid columns now) */}
          <div className="lg:col-span-3 max-w-4xl">
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 font-bold"
              >
                <a href={`tel:${siteConfig.phoneClean}`}>Get a Free Estimate</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-black text-white border-black hover:bg-black text-base px-8 py-6 font-semibold"
              >
                <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
