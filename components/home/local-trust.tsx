import Image from "next/image";
import Link from "next/link";

interface LocalTrustProps {
  cityName?: string;
}

export default function LocalTrust({ cityName = "Chandler" }: LocalTrustProps) {
  const trustLinks = [
    {
      name: "Better Business Bureau",
      href: "https://www.bbb.org/search?find_text=ARZ+Home+Remodeling&find_loc=Chandler%2C+AZ",
      img: "/images/badges/bbb-badges.avif",
      label: "Accredited Business",
    },
    {
      name: "Yelp Ratings",
      href: "https://www.yelp.com/search?find_desc=ARZ+Home+Remodeling&find_loc=Chandler%2C+AZ",
      img: "/images/badges/yelp-badges.avif",
      label: "5-Star Rated",
    },
    {
      name: "Nextdoor",
      href: "https://nextdoor.com/pages/arz-home-remodeling-chandler-az/",
      img: "/images/badges/nextdoor-badges.avif",
      label: "Neighborhood Favorite",
    },
    {
      name: "Chamber",
      href: "https://www.chandlerchamber.com/",
      img: "/images/badges/chamber-badges.avif",
      label: `${cityName} Chamber`,
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="flex text-amber-500 mb-3 drop-shadow-sm">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Verified, Rated, & Trusted Across {cityName}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch justify-center">
          {trustLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(234,88,12,0.15)] hover:border-orange-200 transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-12 md:h-16 w-full mb-3">
                <Image
                  alt={link.name}
                  src={link.img}
                  fill
                  className="object-contain drop-shadow-sm"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase text-center">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
