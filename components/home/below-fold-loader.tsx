"use client";

import dynamic from "next/dynamic";

const LocalTrust = dynamic(() => import("@/components/home/local-trust"), { ssr: false });
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { ssr: false });
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { ssr: false });
const ChandlerProjects = dynamic(() => import("@/components/home/chandler-projects"), { ssr: false });
const DesignBuildShowcase = dynamic(() => import("@/components/home/design-build-showcase"), { ssr: false });
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { ssr: false });
const PricingTable = dynamic(() => import("@/components/home/pricing-table"), { ssr: false });
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { ssr: false });
const ChandlerExpertise = dynamic(() => import("@/components/home/chandler-expertise"), { ssr: false });
const PopularProjects = dynamic(() => import("@/components/home/popular-projects"), { ssr: false });
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { ssr: false });
const Financing = dynamic(() => import("@/components/home/financing"), { ssr: false });
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"), { ssr: false });
const FAQ = dynamic(() => import("@/components/home/faq"), { ssr: false });
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { ssr: false });
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { ssr: false });
const VideoShowcase = dynamic(() => import("@/components/home/video-showcase"), { ssr: false });
const HomeBelowFold = dynamic(() => import("@/components/home/home-below-fold").then((m) => m.HomeBelowFold), { ssr: false });

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
