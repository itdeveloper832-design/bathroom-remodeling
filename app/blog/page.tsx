import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"
import BlogContent from "./blog-content"
import { getPublishedPosts, getCategories } from "@/lib/actions/blog"

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling Blog & Tips | ARZ Home Remodeling"
  },
  description: "Expert bathroom remodeling tips, design trends, and guides from Chandler, AZ contractors. Learn about costs, materials, and master bath layouts.",
  openGraph: {
    title: "Bathroom Remodeling Blog & Tips - ARZ Home Remodeling",
    description: "Expert bathroom remodeling tips, design trends, and guides from Chandler, AZ contractors. Learn about costs, materials, and master bath layouts.",
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
    card: "summary_large_image",
    title: "Bathroom Remodeling Blog & Tips - ARZ Home Remodeling",
    description: "Expert bathroom remodeling tips, design trends, and guides from Chandler, AZ contractors.",
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


