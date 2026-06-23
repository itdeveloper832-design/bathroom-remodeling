"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="py-20 lg:py-32 bg-secondary" aria-labelledby="contact-form-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-xl">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Estimate Request</span>
          <h2 id="contact-form-heading" className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
            Get Your Free In-Home Estimate
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Fill out the form below. A local project supervisor will call you within two business hours to discuss your layout, design goals, and pricing.
          </p>
        </div>

        {submitted ? (
          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-md">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Thank You!</h3>
            <p className="text-muted-foreground text-sm">
              Your request was received. A project supervisor will contact you shortly at the phone number provided.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
            <div>
              <label htmlFor="form-name" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="form-phone" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  id="form-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(480) 555-0199"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="form-zip" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  ZIP Code
                </label>
                <input
                  id="form-zip"
                  type="text"
                  required
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  placeholder="85226"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="form-project" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Project Type
              </label>
              <select
                id="form-project"
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="">Select a project type...</option>
                <option value="Shower Remodeling">Custom Shower Remodeling</option>
                <option value="Tub to Shower Conversion">Tub-to-Shower Conversion</option>
                <option value="Master Bathroom Remodel">Master Bathroom Remodeling</option>
                <option value="Guest Bathroom Remodel">Small & Guest Bathroom Remodeling</option>
                <option value="ADA Handicap Accessible Bathroom">Accessible & ADA Bathroom</option>
                <option value="Custom Tile Installation">Custom Bathroom Tile</option>
                <option value="Other">Other Remodeling Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="form-message" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Message & Layout Goals
              </label>
              <textarea
                id="form-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your bathroom layout, design ideas, or select timing..."
                rows={4}
                className="w-full p-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-bold text-base rounded-xl transition-all shadow-md"
            >
              Get My Free Estimate
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
