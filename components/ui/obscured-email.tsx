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

  const emailStr = siteConfig.email;
  const hrefVal = mounted ? `mailto:${emailStr}` : "#";
  const labelVal = mounted ? `Email us at ${emailStr}` : undefined;

  return (
    <a 
      href={hrefVal} 
      className={className} 
      aria-label={labelVal}
      onClick={!mounted ? (e) => e.preventDefault() : undefined}
      suppressHydrationWarning
    >
      {mounted ? (children || emailStr) : (children || "sales [at] arzhomeremodeling.com")}
    </a>
  );
}
