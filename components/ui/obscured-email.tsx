"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

interface ObscuredEmailProps {
  className?: string;
  children?: React.ReactNode;
}

export function ObscuredEmail({ className = "", children }: ObscuredEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a safe placeholder in compiled static HTML to prevent scraper indexation
    return <span className={className}>{children || "sales [at] arzhomeremodeling.com"}</span>;
  }

  // Active browser render
  const emailStr = siteConfig.email;
  return (
    <a href={`mailto:${emailStr}`} className={className} aria-label={`Email us at ${emailStr}`}>
      {children || emailStr}
    </a>
  );
}
