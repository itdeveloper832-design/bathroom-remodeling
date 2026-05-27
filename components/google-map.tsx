"use client";

import InteractiveMap from "@/components/seo/interactive-map";

export default function GoogleMap() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.673840811549!2d-111.96065982555466!3d33.30119485701623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0403f517282b%3A0x64f0a47ba733e83e!2s6710%20W%20Chicago%20St%2C%20Chandler%2C%20AZ%2085226%2C%20USA!5e0!3m2!1sen!2s!4v1779700233898!5m2!1sen!2s";

  return (
    <div className="mt-8">
      <InteractiveMap 
        src={mapEmbedUrl}
        height={220}
        title="ARZ Home Remodeling showroom location in Chandler Arizona"
      />
    </div>
  );
}
