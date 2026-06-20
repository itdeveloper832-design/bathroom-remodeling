"use client";

import dynamic from "next/dynamic";

const LocalTrust = dynamic(() => import("@/components/home/local-trust"), { ssr: true });
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { ssr: true });
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { ssr: true });
const ChandlerProjects = dynamic(() => import("@/components/home/chandler-projects"), { ssr: true });
const DesignBuildShowcase = dynamic(() => import("@/components/home/design-build-showcase"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { ssr: true });
const PricingTable = dynamic(() => import("@/components/home/pricing-table"), { ssr: true });
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { ssr: true });
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { ssr: true });
const ChandlerExpertise = dynamic(() => import("@/components/home/chandler-expertise"), { ssr: true });
const PopularProjects = dynamic(() => import("@/components/home/popular-projects"), { ssr: true });
const VideoShowcase = dynamic(() => import("@/components/home/video-showcase"), { ssr: true });
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { ssr: true });
const Financing = dynamic(() => import("@/components/home/financing"), { ssr: true });
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"), { ssr: true });
const FAQ = dynamic(() => import("@/components/home/faq"), { ssr: true });
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { ssr: true });
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { ssr: true });
const HomeBelowFold = dynamic(() => import("@/components/home/home-below-fold").then(mod => mod.HomeBelowFold), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { ssr: true });

export default function BelowFoldLoader() {
  return (
    <>
      <div className="content-visibility-auto"><LocalTrust cityName="Chandler" /></div>
      <div className="content-visibility-auto"><AboutPreview /></div>
      <div className="content-visibility-auto"><ServicesGrid /></div>
      <div className="content-visibility-auto"><ChandlerProjects /></div>
      <div className="content-visibility-auto"><DesignBuildShowcase /></div>
      <div className="content-visibility-auto"><WhyChooseUs /></div>
      <div className="content-visibility-auto"><PricingTable /></div>
      <div className="content-visibility-auto"><BathroomSection /></div>
      <div className="content-visibility-auto"><ProcessSection /></div>
      <div className="content-visibility-auto"><ChandlerExpertise /></div>
      <div className="content-visibility-auto"><PopularProjects /></div>
      <div className="content-visibility-auto"><VideoShowcase /></div>
      <div className="content-visibility-auto"><ServiceAreas /></div>
      <div className="content-visibility-auto"><Financing /></div>
      <div className="content-visibility-auto"><ComparisonBenefits /></div>
      <div className="content-visibility-auto"><FAQ /></div>
      <div className="content-visibility-auto"><BlogPreview /></div>
      <div className="content-visibility-auto"><GalleryPreview /></div>
      <div className="content-visibility-auto"><HomeBelowFold /></div>
      <div className="content-visibility-auto"><FinalCTA /></div>
    </>
  );
}
