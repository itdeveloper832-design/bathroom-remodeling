import InteractiveMap from "@/components/seo/interactive-map";

export default function MapSection() {
  return (
    <section className="py-12 bg-background border-t border-border" aria-label="Our Location Map">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="sr-only">ARZ Home Remodeling Location Map</h2>
        <div className="rounded-2xl overflow-hidden border border-border shadow-md">
          <InteractiveMap
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3334.6838369776056!2d-111.9605964!3d33.3009334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0403f517282b%3A0x64f0a47ba733e83e!2s6710%20W%20Chicago%20St%2C%20Chandler%2C%20AZ%2085226%2C%20USA!5e0!3m2!1sen!2s!4v1777130880103!5m2!1sen!2s"
            height={450}
            title="ARZ Home Remodeling bathroom contractor location in Chandler Arizona"
          />
        </div>
      </div>
    </section>
  );
}
