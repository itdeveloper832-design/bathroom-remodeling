"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { bathroomServices } from "@/lib/bathroom-services";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (wordCount < 20) {
      setError(`Message must be at least 20 words. Current: ${wordCount} words.`);
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      zip: formData.get("zip") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      type: "quote",
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "quotes"), data);
      setSuccess(true);
      e.currentTarget.reset();
      setWordCount(0);
      setError("");
    } catch (error: any) {
      console.error("Error submitting quote:", error);
      if (error.code === "permission-denied") {
        setError("Unable to submit at this time. Please try again or call us directly.");
      } else if (error.code === "failed-precondition") {
        setError("Service temporarily unavailable. Please try again later.");
      } else {
        setError("Failed to submit quote. Please try again or call us directly.");
      }
    }
    
    setIsSubmitting(false);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.trim();
    const count = text ? text.split(/\s+/).filter(w => w).length : 0;
    setWordCount(count);
    if (count < 20 && text.length > 0) {
      setError(`Message must be at least 20 words. Current: ${count} words.`);
    } else {
      setError("");
    }
  };

  if (!mounted) {
    return null;
  }

  if (success) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-lg p-5 lg:p-6 text-center max-w-sm mx-auto lg:ml-auto lg:mr-0" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
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
      
      <form onSubmit={handleSubmit} className="space-y-3" aria-label="Free bathroom remodel quote request">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="zip" className="sr-only">ZIP Code</label>
          <Input
            id="zip"
            type="text"
            name="zip"
            placeholder="ZIP Code"
            required
            aria-required="true"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="sr-only">Select Service</label>
          <select
            id="service"
            name="service"
            required
            aria-required="true"
            aria-label="Select bathroom remodeling service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select Service</option>
            {bathroomServices.map((service) => (
              <option key={service.href} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="sr-only">Project Description</label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your project in detail (minimum 20 words required)"
            rows={3}
            className="resize-none"
            required
            aria-required="true"
            aria-describedby={error ? "message-error" : undefined}
            onChange={handleMessageChange}
          />
          {error && (
            <p id="message-error" className="text-sm text-destructive mt-1" role="alert">
              {error}
            </p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting || wordCount < 20}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={isSubmitting ? "Sending quote request" : "Submit free bathroom remodel quote request"}
        >
          {isSubmitting ? "Sending..." : "Get Free Quote"}
        </Button>
      </form>
    </div>
  );
}
