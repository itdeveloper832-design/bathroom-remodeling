"use client";

import { useState } from "react";
import { MapPin, Phone, Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveMapProps {
  src: string;
  height?: number;
  title?: string;
}

export default function InteractiveMap({ 
  src, 
  height = 400, 
  title = "ARZ Home Remodeling Location" 
}: InteractiveMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMap = () => {
    setIsLoading(true);
    // Add a tiny artificial delay to show a beautiful loader state
    setTimeout(() => {
      setIsLoaded(true);
      setIsLoading(false);
    }, 450);
  };

  if (isLoaded) {
    return (
      <div 
        className="relative overflow-hidden rounded-xl border border-border shadow-md bg-muted transition-all duration-300"
        style={{ height: `${height}px` }}
      >
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div 
      className="relative rounded-xl overflow-hidden border border-border shadow-md bg-slate-900 group select-none flex flex-col justify-between p-6 transition-all duration-500 hover:border-primary/50"
      style={{ height: `${height}px` }}
    >
      {/* Decorative Grid Pattern mimicking a map vector */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Stylized Topographic Map Background Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none scale-75" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full pointer-events-none scale-75" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full pointer-events-none scale-75" />
      
      {/* Red Pulse Map Pin at Center */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </div>
        <MapPin className="w-8 h-8 text-red-500 mt-1 drop-shadow-md animate-bounce duration-1000" aria-hidden="true" />
      </div>

      {/* Top Credentials Row */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-foreground">5.0 · 50+ Google Reviews</span>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
          ROC#338304
        </div>
      </div>

      {/* Bottom Center interactive panel */}
      <div className="relative z-10 flex flex-col items-center text-center mt-auto w-full">
        <h4 className="text-white font-serif text-lg font-bold mb-1 tracking-wide">
          ARZ Home Remodeling
        </h4>
        <p className="text-slate-400 text-xs mb-4 max-w-xs leading-relaxed">
          6710 W Chicago St, Chandler, AZ 85226
        </p>

        <Button 
          onClick={handleLoadMap}
          disabled={isLoading}
          className="relative px-6 py-5 rounded-full font-bold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform group-hover:scale-105 active:scale-95"
          aria-label="Load interactive Google Map location"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading map...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Load Interactive Map
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
