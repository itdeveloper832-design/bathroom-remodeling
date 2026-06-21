import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

interface ServiceHeroProps {
  title: string;
  description: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  backgroundImage?: string;
}

export default function ServiceHero({ 
  title, 
  description, 
  subtitle,
  image,
  breadcrumbs,
  backgroundImage = "/images/hero/luxury-shower-remodel-chandler.avif"
}: ServiceHeroProps) {
  const rawImage = image ?? backgroundImage;
  const heroImage = rawImage.endsWith('.webp') ? rawImage.replace(/\.webp$/, '.avif') : rawImage;

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32" aria-label={title}>
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
      {/* Background Image - LCP Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-10 pb-12 lg:pt-14 lg:pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className="text-primary-foreground text-sm uppercase tracking-wider mb-4 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]"
              aria-label={`Call us at ${siteConfig.phone} to speak with our bathroom remodeling team`}
            >
              <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now: {siteConfig.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary hover:bg-white/90 hover:text-primary min-w-[200px]"
              aria-label="Speak to a Project Supervisor"
            >
              <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Speak to a Project Supervisor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
