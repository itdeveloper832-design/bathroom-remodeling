"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { createNewsletterLead } from "@/lib/actions/leads";
import { getFormMetadata } from "@/lib/form-metadata";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const result = await createNewsletterLead(email, getFormMetadata());
      if (!result.success || !result.id) {
        throw new Error(result.error || "Could not subscribe. Please try again.");
      }
      setSuccess(true);
      setEmail("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Subscription failed.";
      console.error("[NewsletterForm] Submit error:", err);
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <p className="text-center text-primary-foreground font-medium" role="status">
        You&apos;re subscribed. Thank you!
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
    >
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="h-14 rounded-full bg-background border-none text-foreground px-6"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold px-8 shadow-xl cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
      {error && (
        <p className="text-sm text-destructive sm:col-span-2 text-center w-full" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
