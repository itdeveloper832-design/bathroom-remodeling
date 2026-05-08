import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Best Bathroom Remodel Company Near Me in Chandler, Arizona | Expert Renovation Services",
  description:
    "Looking for bathroom remodelers near me? Transform your bathroom with our expert remodeling services in Chandler, Arizona. Bathroom remodel financing near me available. Custom showers, bathtub installation, vanities, tile, and more. Free estimates!",
  openGraph: {
    title: "Best Bathroom Remodel Company Near Me in Chandler, Arizona",
    description:
      "Looking for bathroom remodelers near me? Transform your bathroom with our expert remodeling services in Chandler, Arizona. Financing available.",
    url: `${siteConfig.url}/bathroom-remodeling`,
  },
};

export default function BathroomRemodelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

