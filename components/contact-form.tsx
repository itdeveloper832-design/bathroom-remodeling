"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createLead } from "@/lib/actions/leads";
import { getFormMetadata } from "@/lib/form-metadata";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const result = await createLead(
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: "General inquiry",
          message: formData.message,
          type: "contact",
        },
        getFormMetadata()
      );

      if (!result.success || !result.id) {
        throw new Error(result.error || "Submission failed.");
      }

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      console.error("[ContactForm] Submit error:", err);
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
        required
        disabled={isSubmitting}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
        required
        disabled={isSubmitting}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950"
        required
        disabled={isSubmitting}
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-4 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-950 resize-none h-32"
        required
        disabled={isSubmitting}
      />
      {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      {submitted && (
        <p className="text-green-600 text-center font-semibold" role="status">
          Message sent! We&apos;ll contact you soon.
        </p>
      )}
    </form>
  );
}
