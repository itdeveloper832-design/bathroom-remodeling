import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {title: {
    absolute: "Kitchen Remodel Services | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore kitchen remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
  robots: { index: false, follow: false },
  openGraph: {title: "Kitchen Remodel Services | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore kitchen remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/kitchen-remodeling`,
  },
};

export default function LegacyServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

