"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
  address?: string;
}

export function GoogleMap({ lat, lng, zoom = 15, title = "Our Location", address }: GoogleMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (mapContainer.current && !map.current) {
      // Using free Google Maps Embed URL (no API key required)
      const mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.673840811549!2d-111.96065982555466!3d33.30119485701623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0403f517282b%3A0x64f0a47ba733e83e!2s6710%20W%20Chicago%20St%2C%20Chandler%2C%20AZ%2085226%2C%20USA!5e0!3m2!1sen!2s!4v1779700233898!5m2!1sen!2s";
      
      mapContainer.current.innerHTML = `
        <iframe 
          width="100%" 
          height="400" 
          frameborder="0" 
          src="${mapEmbed}"
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"
          loading="lazy"
          style="border: 0; border-radius: 12px;"
        ></iframe>
      `;
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-lg overflow-hidden shadow-md bg-muted min-h-[400px] relative">
        {!map.current && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary animate-pulse">
            <span className="text-muted-foreground text-sm font-medium">Loading Map...</span>
          </div>
        )}
        <div ref={mapContainer} className="relative z-10" />
      </div>
    </div>
  );
}
