import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"
import BlogContent from "./blog-content"
import { getPublishedPosts, getCategories } from "@/lib/actions/blog"

export const metadata: Metadata = {title: "Bathroom Remodeling Blog & Design Tips | ARZ",description: "Get expert bathroom design ideas, remodeling tips, and local cost guides from our licensed Chandler, AZ contracting crew. Read our blog!",
  openGraph: {title: "Bathroom Remodel Blog | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel blog, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/blog/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-blog-index.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Bathroom Remodeling Blog & Design Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodel Blog | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel blog, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-blog-index.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/`,
  },
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  const categories = await getCategories();

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Blog", url: `${siteConfig.url}/blog/` }
        ]} 
      />
      <BlogContent initialPosts={posts} initialCategories={categories} />
    </>
  );
}


