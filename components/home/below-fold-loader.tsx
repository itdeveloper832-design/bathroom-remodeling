"use client";

import LocalTrust from "@/components/home/local-trust";
import AboutPreview from "@/components/home/about-preview";
import ServicesGrid from "@/components/home/services-grid";
import ChandlerProjects from "@/components/home/chandler-projects";
import DesignBuildShowcase from "@/components/home/design-build-showcase";
import WhyChooseUs from "@/components/home/why-choose-us";
import PricingTable from "@/components/home/pricing-table";
import BathroomSection from "@/components/home/bathroom-section";
import ProcessSection from "@/components/home/process-section";
import ChandlerExpertise from "@/components/home/chandler-expertise";
import PopularProjects from "@/components/home/popular-projects";
import ServiceAreas from "@/components/home/service-areas";
import Financing from "@/components/home/financing";
import ComparisonBenefits from "@/components/home/comparison-benefits";
import FAQ from "@/components/home/faq";
import BlogPreview from "@/components/home/blog-preview";
import GalleryPreview from "@/components/home/gallery-preview";
import FinalCTA from "@/components/home/final-cta";
import VideoShowcase from "@/components/home/video-showcase";
import { HomeBelowFold } from "@/components/home/home-below-fold";

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
