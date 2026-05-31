"use client";

import { useState } from "react";
import { Play, Sparkles, Clock, CheckCircle } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  location: string;
  duration: string;
  specs: string[];
  embedUrl: string;
  previewImage: string;
}

const videos: VideoItem[] = [
  {
    id: "vid-1",
    title: "Ocotillo Luxury Master Suite Tour",
    location: "Ocotillo, Chandler",
    duration: "2:45 min",
    specs: ["Zero-threshold curbless entry", "Quartz double vanity", "Epoxy scale-free grout"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // High performance placeholder
    previewImage: "/images/services/chandler-bathroom-remodel.webp",
  },
  {
    id: "vid-2",
    title: "Fulton Ranch Tub-to-Shower Conversion",
    location: "Fulton Ranch, Chandler",
    duration: "1:55 min",
    specs: ["5-day garden tub removal", "Schluter-KERDI waterproofing", "Hydrophobic frameless glass"],
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // High performance placeholder
    previewImage: "/images/hero/luxury-shower-remodel-chandler.webp",
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-secondary border-t border-border" aria-label="Project Video Tours">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Video Tours
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground text-balance">
            Go Inside Our Chandler Transformations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Watch real, raw smartphone walkthroughs of our completed bathroom renovations. See the precision of our custom tiling, curbless entries, and flawless waterproofing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-card border border-border rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-6 group border border-border">
                {activeVideo === video.id ? (
                  <iframe
                    src={`${video.embedUrl}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 absolute inset-0"
                  />
                ) : (
                  <>
                    {/* Background Preview */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${video.previewImage}')` }}
                    />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300" />
                    
                    {/* Play Trigger */}
                    <button
                      onClick={() => setActiveVideo(video.id)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 hover:shadow-primary/35"
                      aria-label={`Play walkthrough of ${video.title}`}
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </button>
                    
                    {/* Visual Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                        {video.location}
                      </span>
                      <span className="bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {video.title}
                </h3>
                <ul className="space-y-2 mt-4">
                  {video.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
