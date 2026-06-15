"use client";

import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ObscuredEmail } from "@/components/ui/obscured-email";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Get in touch with our licensed team to schedule your free in-home consultation. We&apos;ll discuss your vision, answer your questions, and provide a detailed estimate with no obligation.
          </p>
        </div>

        {/* 3-Column Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {/* Card 1: Phone */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 shrink-0">
              <Phone className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Call Us Directly</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-xs">
              Speak with a project supervisor. We answer calls and return voicemails within 2 hours.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-auto w-full bg-primary hover:bg-primary/95 text-white font-bold h-12"
            >
              <a href={`tel:${siteConfig.phoneClean}`} aria-label={`Call us at ${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </Button>
          </div>

          {/* Card 2: Email */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 shrink-0">
              <Mail className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Email Inquiry</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-xs">
              Send us your project details, sketches, or photos. We reply within 24 hours.
            </p>
            <div className="mt-auto w-full flex justify-center">
              <ObscuredEmail className="w-full inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent hover:bg-accent/90 text-accent-foreground h-12" />
            </div>
          </div>

          {/* Card 3: Hours & Licensing */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 shrink-0">
              <Clock className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Hours & Location</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-xs">
              Serving Chandler, Gilbert, Mesa, Tempe, Phoenix, and surrounding East Valley communities.
            </p>
            <div className="text-sm font-semibold text-foreground space-y-1 mb-6">
              <div>Mon-Fri: {siteConfig.hours.weekdays}</div>
              <div>Sat: {siteConfig.hours.saturday}</div>
            </div>
            <div className="mt-auto pt-4 border-t border-border w-full flex items-center justify-center gap-2 text-xs font-semibold text-primary">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>ROC Licensed #338304 · Bonded & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
