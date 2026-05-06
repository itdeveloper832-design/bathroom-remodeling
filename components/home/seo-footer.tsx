import React from 'react';

export default function SEOFooter() {
  const keywords = [
    "bathroom remodel chandler",
    "tub to shower conversion companies near me",
    "bathroom remodeling services chandler",
    "bathroom remodeling chandler",
    "bathroom remodel chandler az",
    "accessible shower remodeling chandler",
    "shower remodeling services chandler",
    "tub to shower conversion chandler",
    "shower to tub conversions near me",
    "bathroom remodeling contractor chandler",
    "tub to shower conversion near me",
    "bathroom refinishers near me",
    "shower renovation near me",
    "bath to shower conversion near me",
    "bathroom remodeling chandler az",
    "shower remodel near me",
    "bathroom remodel chandler az cost",
    "cheap bathroom remodeling chandler az",
    "shower remodeling",
    "chandler shower remodeling",
    "affordable bathroom remodeling chandler az",
    "tile shower installation chandler",
    "walk-in shower company services",
    "walk-in shower installation services",
    "countertop installation chandler",
    "tile shower installation services chandler",
    "bath remodel near me",
    "bathroom remodel chandler az prices",
    "bathroom remodelers chandler az",
    "bathroom contractor chandler az",
    "bath remodeling services chandler az",
    "bath remodeling contractor chandler az",
    "bathroom remodeler chandler az",
    "shower remodeling company chandler",
    "bath remodeler chandler az",
    "bath remodeling contractors chandler az",
    "tub to shower conversion arizona",
    "chandler arizona bathroom remodeling",
    "chandler bathroom remodeling",
    "shower remodeling chandler",
    "tile installation chandler"
  ];

  return (
    <section className="py-12 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif font-semibold mb-6 text-foreground/80">Local Bathroom Services in Chandler, AZ</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            As your premier <strong>bathroom remodeling contractor chandler</strong>, we specialize in high-quality 
            renovations tailored to your needs. From <strong>bathroom remodel chandler az</strong> to specialized 
            <strong>shower remodeling services chandler</strong>, our team provides exceptional craftsmanship. 
            Whether you are searching for <strong>bath remodel near me</strong> or need a 
            <strong>bathroom contractor chandler az</strong>, we are here to help.
          </p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground/60 italic">
            {keywords.map((keyword, index) => (
              <span key={index} className="hover:text-primary transition-colors cursor-default">
                {keyword}
                {index < keywords.length - 1 && <span className="ml-4 text-border">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
