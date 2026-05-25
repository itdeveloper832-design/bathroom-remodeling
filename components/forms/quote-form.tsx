"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { bathroomServices } from "@/lib/bathroom-services";
import { createLead } from "@/lib/actions/leads";
import { getFormMetadata } from "@/lib/form-metadata";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
        zip: formData.get("zip") as string,
        service: formData.get("service") as string,
        message: (formData.get("message") as string) || "",
        type: "quote" as const,
      };

      const result = await createLead(data, getFormMetadata());

      if (!result.success || !result.id) {
        throw new Error(result.error || "Submission failed. Please call us directly.");
      }

      setSuccess(true);
      form.reset();
      setWordCount(0);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to submit quote. Please try again or call us directly.";
      console.error("[QuoteForm] Submit error:", err);
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    
    // Performance optimization: Using a non-capturing regex for faster matching
    // and avoiding .split() which creates a new array every keystroke.
    const match = text.match(/\b\S+\b/g);
    const count = match ? match.length : 0;
    
    // Only update state if count has changed to minimize re-renders
    if (count !== wordCount) {
      setWordCount(count);
      
      // Error state update removed for 20 words limit
      setError("");
    }
  };


  if (success) {
    return (
      <div
        className="bg-card border border-border rounded-xl shadow-lg p-5 lg:p-6 text-center max-w-sm mx-auto lg:ml-auto lg:mr-0"
        role="status"
        aria-live="polite"
      >
        <div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
          aria-hidden="true"
        >
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          Quote Request Sent!
        </h3>
        <p className="text-muted-foreground mb-4">
          Thank you for your interest. We&apos;ll contact you within 24 hours with your free quote.
        </p>
        <Button
          onClick={() => setSuccess(false)}
          variant="outline"
          className="mt-2 focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Submit another bathroom remodel quote request"
        >
          Submit Another Quote
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-lg p-5 lg:p-6 max-w-sm mx-auto lg:ml-auto lg:mr-0">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
        Get Free Quote
      </h3>
      <p className="text-muted-foreground text-sm mb-5">
        Fill out the form and we&apos;ll contact you within 24 hours
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-3"
        aria-label="Free bathroom remodel quote request"
      >
        <div>
          <Label htmlFor="quote-name">Your Name</Label>
          <Input
            id="quote-name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            aria-required="true"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="quote-phone">Phone Number</Label>
          <Input
            id="quote-phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            aria-required="true"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="quote-email">Email Address</Label>
          <Input
            id="quote-email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            aria-required="true"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="quote-zip">ZIP Code</Label>
          <Input
            id="quote-zip"
            type="text"
            name="zip"
            placeholder="ZIP Code"
            required
            aria-required="true"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="quote-service">Select Service</Label>
          <select
            id="quote-service"
            name="service"
            required
            aria-required="true"
            aria-label="Select bathroom remodeling service"
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 mt-1.5 cursor-pointer"
          >
            <option value="">Select Service</option>
            {bathroomServices.map((service) => (
              <option key={service.href} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <Label htmlFor="quote-message">Project Description</Label>
          <Textarea
            id="quote-message"
            name="message"
            placeholder="Describe your project goals, timeline, or any specific requirements (Optional)."
            rows={3}
            className="resize-none mt-1.5"
            aria-describedby={error ? "quote-message-error" : undefined}
            onChange={handleMessageChange}
          />
          {error && (
            <p
              id="quote-message-error"
              className="text-sm text-destructive mt-1"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
          aria-label={
            isSubmitting
              ? "Sending quote request"
              : "Submit free bathroom remodel quote request"
          }
        >
          {isSubmitting ? "Sending..." : "Get Free Quote"}
        </Button>
      </form>
    </div>
  );
}
