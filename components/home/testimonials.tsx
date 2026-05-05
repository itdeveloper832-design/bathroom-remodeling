"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    location: "Chandler, AZ",
    rating: 5,
    service: "Walk-In Shower Installation",
    content:
      "We hired ARZ Home Remodeling for a tub-to-shower conversion in our master bath. The process was incredibly smooth, and the frameless glass looks absolutely stunning. The crew was respectful of our home and cleaned up every day. Highly recommended!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 2,
    name: "James Peterson",
    location: "Gilbert, AZ",
    rating: 5,
    service: "Full Master Bath Remodel",
    content:
      "I was dreading the mess of a full bathroom renovation, but these guys made it painless. They helped us choose the perfect tile and vanity. The craftsmanship is top-notch, and my wife is thrilled with the final result. Worth every penny.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    name: "Maria Hernandez",
    location: "Mesa, AZ",
    rating: 5,
    service: "Bathtub Replacement",
    content:
      "Our old cast-iron tub was peeling and impossible to clean. The team replaced it with a beautiful, deep soaking tub in just two days. The new fixtures and wall surround look completely custom. I can finally relax in my bathroom again!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 4,
    name: "Robert Chang",
    location: "Tempe, AZ",
    rating: 5,
    service: "Accessible Bathroom Remodel",
    content:
      "We needed a safer, more accessible bathroom for my aging parents. ARZ installed a curbless shower with grab bars and a built-in bench. It not only provides peace of mind but actually looks incredibly modern and luxurious.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
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
              {/* Image */}
              <div className="shrink-0">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={`${testimonials[currentIndex].name} - testimonial`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
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
