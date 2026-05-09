"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initials: "SM",
    location: "Dobson Ranch, Chandler",
    rating: 5,
    service: "Tub-to-Shower Conversion",
    content:
      "Alex and his team at ARZ were fantastic. Our old garden tub in Dobson Ranch was just collecting dust. They converted it into a beautiful walk-in shower with Schluter waterproofing. It took exactly 12 days as promised. Truly the best bathroom remodeling contractor in Chandler.",
    image: "", // Use initials for realism
    verified: true,
  },
  {
    id: 2,
    name: "James Peterson",
    initials: "JP",
    location: "Ocotillo, Chandler",
    rating: 5,
    service: "Master Bath Renovation",
    content:
      "A full master bath remodel is usually a nightmare, but ARZ made it easy. They handled everything from the permits with the City of Chandler to the final tile grout. The custom vanity is high quality and the project stayed right on budget.",
    image: "",
    verified: true,
  },
  {
    id: 3,
    name: "Maria Hernandez",
    initials: "MH",
    location: "Fulton Ranch, Chandler",
    rating: 5,
    service: "Vanity & Tile Upgrade",
    content:
      "I was worried about the Arizona heat affecting the grout, but Alex explained their process and materials in detail. The tile work in our guest bath is flawless. It's rare to find a contractor who actually shows up when they say they will!",
    image: "",
    verified: true,
  },
  {
    id: 4,
    name: "Linda K.",
    initials: "LK",
    location: "Cooper Commons, Chandler",
    rating: 5,
    service: "Guest Bath Remodel",
    content:
      "We needed a quick refresh for our guest bathroom before family arrived. ARZ gave us a fair price and finished in less than a week. The new walk-in shower looks amazing and the tile work is perfect.",
    image: "",
    verified: true,
  },
  {
    id: 5,
    name: "Robert S.",
    initials: "RS",
    location: "Sun Lakes, Chandler",
    rating: 5,
    service: "ADA Walk-In Shower",
    content:
      "Special thanks to the crew for making our bathroom safe and accessible. The curbless entry and grab bars were installed exactly as discussed. It's much easier for me to get in and out now. Highly recommend for seniors in Sun Lakes.",
    image: "",
    verified: true,
  },
  {
    id: 6,
    name: "Michelle G.",
    initials: "MG",
    location: "Gila Springs, Chandler",
    rating: 5,
    service: "Shower Tile Replacement",
    content:
      "Our old shower was leaking behind the walls. Alex caught it during the inspection and fixed the structural damage properly before tiling. Very honest and professional team.",
    image: "",
    verified: true,
  },
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what homeowners throughout Chandler 
            and the surrounding areas have to say about their experience with our expert bathroom remodeling team.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Avatar Circle / Image */}
              <div className="shrink-0">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/10 flex items-center justify-center">
                  {testimonials[currentIndex].image.startsWith('http') ? (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name} - testimonial`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  ) : (
                    <span className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                      {testimonials[currentIndex].initials}
                    </span>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating & Verified Badge */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-600">
                      Verified Google Review
                    </span>
                  </div>
                </div>


                {/* Quote */}
                <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-6">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center lg:justify-end gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
