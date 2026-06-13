import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-downtown-chandler/";
const SLUG = "downtown-chandler";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {title: {
    absolute: "Downtown Chandler Bath | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore downtown chandler bath, custom showers, tile, vanities, clear pricing, and free estimates.",
  alternates: { canonical: meta.canonical },
  openGraph: {title: "Downtown Chandler Bath | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore downtown chandler bath, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: meta.canonical,
    type: "website",
  },
};

export default function DowntownChandlerPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
