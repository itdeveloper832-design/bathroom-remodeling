import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

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
  backgroundImage = "/images/optimized/photo-1620626011761-996317b8d101.webp"
}: ServiceHeroProps) {
  const heroImage = image ?? backgroundImage;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 md:pt-40 lg:pt-48" aria-label={title}>
      {/* Background Image - LCP Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center py-16 lg:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              aria-label="Call our bathroom remodeling team"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white text-primary hover:bg-white/90 hover:text-primary min-w-[200px]"
              aria-label="Request a free estimate for your project"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
