export interface TestimonialType {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  service: string;
  content: string;
  image: string;
  verified: boolean;
}

export const testimonialsData: Record<string, TestimonialType[]> = {
  "default": [
    {
      id: "def-1",
      name: "Sarah Mitchell",
      initials: "SM",
      location: "Dobson Ranch, Chandler",
      rating: 5,
      service: "Full Bathroom Remodel",
      content: "Alex and his team at ARZ were fantastic. Our old bathroom in Dobson Ranch was just collecting dust. They converted it into a beautiful modern space. Truly the best bathroom remodeling contractor in Chandler.",
      image: "/images/testimonials/t1.avif",
      verified: true,
    },
    {
      id: "def-2",
      name: "James Peterson",
      initials: "JP",
      location: "Ocotillo, Chandler",
      rating: 5,
      service: "Master Bath Renovation",
      content: "A full master bath remodel is usually a nightmare, but ARZ made it easy. They handled everything from the permits with the City of Chandler to the final tile grout. The project stayed right on budget.",
      image: "/images/testimonials/t2.avif",
      verified: true,
    },
    {
      id: "def-3",
      name: "Maria Hernandez",
      initials: "MH",
      location: "Fulton Ranch, Chandler",
      rating: 5,
      service: "Bathroom Upgrade",
      content: "I was worried about the Arizona heat affecting the grout, but Alex explained their process and materials in detail. The tile work is flawless. It's rare to find a contractor who actually shows up when they say they will!",
      image: "/images/testimonials/t7.avif",
      verified: true,
    }
  ],
  "bathroom-remodeling": [
    {
      id: "br-1",
      name: "Rebecca Larson",
      initials: "RL",
      location: "Cooper Commons, Chandler",
      rating: 5,
      service: "Master Bathroom Remodeling",
      content: "The transformation of our master bathroom is unbelievable. ARZ completely gutted the old space and installed a stunning double vanity and a massive walk-in shower. Their crew was professional, kept the house clean, and finished right on schedule.",
      image: "/images/testimonials/t3.avif",
      verified: true,
    },
    {
      id: "br-2",
      name: "David & Lisa Chen",
      initials: "DC",
      location: "Sun Lakes, AZ",
      rating: 5,
      service: "Complete Renovation",
      content: "We hired ARZ for a complete overhaul of our 1990s bathroom. From the 3D design phase to the final plumbing fixtures, everything was top-notch. They really listened to what we wanted and delivered a luxurious, modern bathroom.",
      image: "/images/testimonials/t12.avif",
      verified: true,
    },
    {
      id: "br-3",
      name: "Michael Thompson",
      initials: "MT",
      location: "Downtown Chandler",
      rating: 5,
      service: "Bathroom Renovation",
      content: "Excellent communication from start to finish. They handled all the plumbing relocation and electrical upgrades without a hitch. The new lighting and custom tile work added so much value to our home. Highly recommended!",
      image: "/images/testimonials/t4.avif",
      verified: true,
    }
  ],
  "shower-remodeling": [
    {
      id: "sr-1",
      name: "Jessica Alvarez",
      initials: "JA",
      location: "Ahwatukee, Phoenix",
      rating: 5,
      service: "Walk-in Shower Remodel",
      content: "We wanted to rip out our unused fiberglass tub and replace it with a sleek walk-in shower. ARZ used Schluter waterproofing and frameless glass, and the result is like a spa. Best shower remodeling company we've worked with.",
      image: "/images/testimonials/t5.avif",
      verified: true,
    },
    {
      id: "sr-2",
      name: "Thomas Wright",
      initials: "TW",
      location: "Gilbert, AZ",
      rating: 5,
      service: "Shower Expansion & Tile",
      content: "Alex's team expanded our tiny shower into a huge double-head shower enclosure. The tile work is absolutely perfect, down to the custom niches. They were respectful of our home and the dust was kept to an absolute minimum.",
      image: "/images/testimonials/t6.avif",
      verified: true,
    },
    {
      id: "sr-3",
      name: "Emily Davies",
      initials: "ED",
      location: "Ocotillo, Chandler",
      rating: 5,
      service: "Custom Shower Design",
      content: "Our old shower was leaking behind the walls. Alex caught the structural damage and fixed it properly before tiling. Now we have a beautiful, leak-proof shower with premium fixtures. Very honest and professional team.",
      image: "/images/testimonials/t9.avif",
      verified: true,
    },
    {
      id: "sr-4",
      name: "Patricia Gonzalez",
      initials: "PG",
      location: "Fulton Ranch, Chandler",
      rating: 5,
      service: "Master Shower Remodel",
      content: "I had the hardest time finding someone to handle our master shower properly. ARZ understood our vision immediately—we wanted a spa-like feel with Schluter waterproofing and rainfall showerhead. The execution was flawless. They really know their craft.",
      image: "/images/testimonials/t11.avif",
      verified: true,
    },
    {
      id: "sr-5",
      name: "Richard Foster",
      initials: "RF",
      location: "Sun Lakes, Chandler",
      rating: 5,
      service: "Frameless Glass & Tile Installation",
      content: "We upgraded from a builder-grade shower to a frameless glass enclosure with porcelain tile. The attention to detail was incredible—every edge is perfect, every seal is tight. My wife keeps saying it feels like we're at a hotel every morning.",
      image: "/images/testimonials/t8.avif",
      verified: true,
    }
  ],
  "bathtub-remodeling": [
    {
      id: "bt-1",
      name: "Robert Hughes",
      initials: "RH",
      location: "Mesa, AZ",
      rating: 5,
      service: "Bathtub Replacement",
      content: "We needed our old, stained bathtub replaced quickly before family arrived. ARZ gave us a fair price and swapped it out for a beautiful acrylic soaking tub in just a couple of days. The new surround looks amazing.",
      image: "/images/testimonials/t10.avif",
      verified: true,
    },
    {
      id: "bt-2",
      name: "Samantha Brooks",
      initials: "SB",
      location: "San Marcos, Chandler",
      rating: 5,
      service: "Tub & Surround Upgrade",
      content: "I love my new deep soaking tub! The installers were so polite and made sure everything was perfectly caulked and sealed. It completely updated the look of our guest bathroom without breaking the bank.",
      image: "/images/testimonials/t1.avif",
      verified: true,
    },
    {
      id: "bt-3",
      name: "Kevin Patel",
      initials: "KP",
      location: "South Tempe, AZ",
      rating: 5,
      service: "Bathtub Remodel",
      content: "The quality of work on our bathtub remodel exceeded my expectations. They removed the cast iron tub carefully without damaging the floor, and the new installation is sturdy and gorgeous. Great attention to detail.",
      image: "/images/testimonials/t8.avif",
      verified: true,
    }
  ],
  "tub-to-shower-conversion": [
    {
      id: "tsc-1",
      name: "William Foster",
      initials: "WF",
      location: "Sun Lakes, Chandler",
      rating: 5,
      service: "Tub to Walk-in Shower",
      content: "As we get older, stepping over the tub was becoming dangerous. ARZ converted our tub into a low-threshold walk-in shower with grab bars and a bench. We feel so much safer now. Highly recommend for seniors.",
      image: "/images/testimonials/t2.avif",
      verified: true,
    },
    {
      id: "tsc-2",
      name: "Amanda Jenkins",
      initials: "AJ",
      location: "Queen Creek, AZ",
      rating: 5,
      service: "Tub-to-Shower Conversion",
      content: "Our garden tub was a massive waste of space. The team removed it and built a stunning frameless glass shower in its place. The whole process was smooth, and the bathroom feels twice as big now!",
      image: "/images/testimonials/t7.avif",
      verified: true,
    },
    {
      id: "tsc-3",
      name: "Christopher Lee",
      initials: "CL",
      location: "Fulton Ranch, Chandler",
      rating: 5,
      service: "Tub Conversion",
      content: "I received three quotes, and ARZ was the most knowledgeable about proper waterproofing techniques. The tub-to-shower conversion took exactly as long as they promised, and there were no hidden fees. Fantastic experience.",
      image: "/images/testimonials/t11.avif",
      verified: true,
    }
  ],
  "bathroom-tile-installation": [
    {
      id: "ti-1",
      name: "Olivia Martinez",
      initials: "OM",
      location: "Dobson Ranch, Chandler",
      rating: 5,
      service: "Bathroom Floor & Wall Tile",
      content: "The tile installation in our bathroom is a work of art. They aligned every grout line perfectly and helped us choose a non-slip porcelain tile that looks like natural stone. You can tell they are true craftsmen.",
      image: "/images/testimonials/t5.avif",
      verified: true,
    },
    {
      id: "ti-2",
      name: "Daniel Harris",
      initials: "DH",
      location: "Ahwatukee, AZ",
      rating: 5,
      service: "Custom Tile Shower",
      content: "We had a complex mosaic tile design in mind, and the ARZ team executed it flawlessly. They used high-quality epoxy grout so we don't have to worry about stains. The attention to detail is just incredible.",
      image: "/images/testimonials/t4.avif",
      verified: true,
    },
    {
      id: "ti-3",
      name: "Sophia Nguyen",
      initials: "SN",
      location: "Gilbert, AZ",
      rating: 5,
      service: "Tile Flooring Upgrade",
      content: "They ripped out our old linoleum and installed beautiful large-format tile. The floors are perfectly level and it completely changed the feel of the bathroom. The crew cleaned up thoroughly every single day.",
      image: "/images/testimonials/t9.avif",
      verified: true,
    }
  ],
  "walk-in-showers": [
    {
      id: "wis-1",
      name: "Richard & Mary Stone",
      initials: "RS",
      location: "Sun Lakes, AZ",
      rating: 5,
      service: "Curbless Walk-in Shower",
      content: "We needed an accessible solution for my husband's wheelchair. ARZ built a beautiful curbless walk-in shower that looks like it belongs in a luxury hotel, not a hospital. The drainage works perfectly and it's given us our independence back.",
      image: "/images/testimonials/t12.avif",
      verified: true,
    },
    {
      id: "wis-2",
      name: "Brian Cooper",
      initials: "BC",
      location: "Ocotillo, Chandler",
      rating: 5,
      service: "Walk-in Shower Remodel",
      content: "I wanted a modern, minimalist walk-in shower with no door to clean. Alex designed a layout that keeps the water completely contained. The rainfall showerhead and custom bench make every morning feel like a spa visit.",
      image: "/images/testimonials/t6.avif",
      verified: true,
    },
    {
      id: "wis-3",
      name: "Laura Bennett",
      initials: "LB",
      location: "Mesa, AZ",
      rating: 5,
      service: "Walk-in Shower Installation",
      content: "From the initial consultation to the final polish of the glass, ARZ was professional and communicative. The new walk-in shower is gorgeous and so much easier to maintain than our old tub. Highly recommend!",
      image: "/images/testimonials/t1.avif",
      verified: true,
    }
  ]
};

export function getTestimonials(category?: string): TestimonialType[] {
  if (category && testimonialsData[category]) {
    return testimonialsData[category];
  }
  return testimonialsData["default"];
}
