"use client";

import { useState, useEffect, useRef } from "react";

export default function GoogleMap() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load 200px before it enters viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="mt-8 rounded-xl overflow-hidden border border-background/10 grayscale hover:grayscale-0 transition-all duration-500 min-h-[150px] bg-background/5"
    >
      {isVisible ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3334.6838369776056!2d-111.9605964!3d33.3009334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0403f517282b%3A0x64f0a47ba733e83e!2s6710%20W%20Chicago%20St%2C%20Chandler%2C%20AZ%2085226%2C%20USA!5e0!3m2!1sen!2s!4v1777130880103!5m2!1sen!2s"
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location in Chandler AZ"
        ></iframe>
      ) : (
        <div className="flex items-center justify-center h-[150px] text-sm text-background/30 animate-pulse">
          Loading map...
        </div>
      )}
    </div>
  );
}
