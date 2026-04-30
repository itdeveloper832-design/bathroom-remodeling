"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/site-config";
import { bathroomServices } from "@/lib/bathroom-services";
import { createLead } from "@/lib/actions/leads";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      type: "contact" as const,
    };

    try {
      const result = await createLead(data);

      if (!result.success) {
        throw new Error(result.error || "Submission failed");
      }

      console.info("Contact form submission successful", data);
      setIsSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError("Failed to submit form. Please try again or call us directly.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info Side */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-1000">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Contact Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Get in touch with our team to schedule your free consultation. We&apos;ll
              discuss your vision, answer your questions, and provide a detailed estimate.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                    aria-label={`Call us at ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                    aria-label={`Email us at ${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">Mon-Fri: {siteConfig.hours.weekdays}</p>
                  <p className="text-muted-foreground">Sat: {siteConfig.hours.saturday}</p>
                  <p className="text-muted-foreground">Sun: {siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    aria-label="Send another message"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name</Label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="John Smith"
                          required
                          className="bg-background h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="(229) 306-5591"
                          required
                          className="bg-background h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-service">Service Interested In</Label>
                      <Select name="service" required>
                        <SelectTrigger className="bg-background h-11" id="contact-service" aria-label="Select a service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {bathroomServices.map((service) => (
                            <SelectItem key={service.href} value={service.name}>
                              {service.name}
                            </SelectItem>
                          ))}
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Tell Us About Your Project</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Describe your project goals, timeline, and any specific requirements..."
                        rows={4}
                        className="bg-background resize-none min-h-[120px]"
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive" role="alert">{error}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12"
                      disabled={isSubmitting}
                      aria-label="Submit your free estimate request"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Request Free Estimate
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}