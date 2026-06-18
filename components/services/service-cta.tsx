import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export default function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary-foreground text-balance">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 group"
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                Speak to a Project Supervisor
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-black text-white border-black hover:bg-black text-base px-8 py-6"
            >
              <a href={`tel:${siteConfig.phoneClean}`}>
                <Phone className="mr-2 w-4 h-4" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
