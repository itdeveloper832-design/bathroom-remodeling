"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  height?: string;
  className?: string;
}

export function LazySection({ children, height = "300px", className = "" }: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setShouldRender(true), 200);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // Load section 300px before scrolling it into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`content-visibility-auto ${className}`}
      style={{
        minHeight: shouldRender ? "auto" : height,
      }}
    >
      {shouldRender ? children : null}
    </div>
  );
}
