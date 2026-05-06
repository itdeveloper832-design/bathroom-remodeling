import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "5-Star Reviews" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/optimized/photo-1581578731548-c64695cc6952.webp"
                alt="Experienced bathroom remodeling team at work in Chandler AZ"
                fill
                className="object-cover"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="Play video about our company">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="absolute -bottom-10 left-4 right-4 lg:-bottom-12 lg:left-8 lg:right-8 animate-in fade-in slide-in-from-bottom-4 delay-300">
              <div className="grid grid-cols-4 gap-2 lg:gap-4 bg-card border border-border rounded-xl p-4 lg:p-6 shadow-xl">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block font-serif text-xl lg:text-2xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs lg:text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="pt-12 lg:pt-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Crafting Dream Spaces Since 2010
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling was founded with a simple mission: to transform ordinary 
              spaces into extraordinary ones. What started as a small family business has 
              grown into one of the most trusted <strong>bathroom remodeling services in Chandler</strong> and the premier choice for <strong>chandler arizona bathroom remodeling</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team of skilled designers and craftsmen brings together creativity, 
              technical expertise, and an unwavering commitment to quality. We treat every 
              project as if it were our own home, ensuring exceptional results every time.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Link href="/about/">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
