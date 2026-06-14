"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyRenderProps {
  children: ReactNode;
  placeholderHeight?: string;
  rootMargin?: string;
}

export function LazyRender({
  children,
  placeholderHeight = "250px",
  rootMargin = "300px",
}: LazyRenderProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isIntersecting, rootMargin]);

  return (
    <div ref={containerRef} style={{ minHeight: isIntersecting ? "auto" : placeholderHeight }}>
      {isIntersecting ? children : null}
    </div>
  );
}
