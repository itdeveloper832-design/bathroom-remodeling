"use client";

import dynamic from "next/dynamic";

const LocalTrust = dynamic(() => import("@/components/home/local-trust"));
const AboutPreview = dynamic(() => import("@/components/home/about-preview"));
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"));
const ChandlerProjects = dynamic(() => import("@/components/home/chandler-projects"));
const DesignBuildShowcase = dynamic(() => import("@/components/home/design-build-showcase"));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"));
const PricingTable = dynamic(() => import("@/components/home/pricing-table"));
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"));
const ProcessSection = dynamic(() => import("@/components/home/process-section"));
const ChandlerExpertise = dynamic(() => import("@/components/home/chandler-expertise"));
const PopularProjects = dynamic(() => import("@/components/home/popular-projects"));
const VideoShowcase = dynamic(() => import("@/components/home/video-showcase"));
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"));
const Financing = dynamic(() => import("@/components/home/financing"));
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"));
const FAQ = dynamic(() => import("@/components/home/faq"));
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"));
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"));
const HomeBelowFold = dynamic(() => import("@/components/home/home-below-fold").then((mod) => mod.HomeBelowFold));
const FinalCTA = dynamic(() => import("@/components/home/final-cta"));

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
