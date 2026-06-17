"use client";

import { useEffect, useState, ComponentType, useRef } from "react";

export default function LazyWrapper() {
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Load when within 300px of viewport
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && !Comp) {
      import("@/components/home/below-fold-loader").then((m) => {
        setComp(() => m.default);
      });
    }
  }, [shouldLoad, Comp]);

  return (
    <div ref={containerRef} style={{ minHeight: "300px" }}>
      {Comp ? <Comp /> : <div style={{ minHeight: "300px" }} />}
    </div>
  );
}
