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
import VideoShowcase from "@/components/home/video-showcase";
import ServiceAreas from "@/components/home/service-areas";
import Financing from "@/components/home/financing";
import ComparisonBenefits from "@/components/home/comparison-benefits";
import FAQ from "@/components/home/faq";
import BlogPreview from "@/components/home/blog-preview";
import GalleryPreview from "@/components/home/gallery-preview";
import { HomeBelowFold } from "@/components/home/home-below-fold";
import FinalCTA from "@/components/home/final-cta";

export default function BelowFoldLoader() {
  return (
    <>
      <LocalTrust cityName="Chandler" />
      <AboutPreview />
      <ServicesGrid />
      <ChandlerProjects />
      <DesignBuildShowcase />
      <WhyChooseUs />
      <PricingTable />
      <BathroomSection />
      <ProcessSection />
      <ChandlerExpertise />
      <PopularProjects />
      <VideoShowcase />
      <ServiceAreas />
      <Financing />
      <ComparisonBenefits />
      <FAQ />
      <BlogPreview />
      <GalleryPreview />
      <HomeBelowFold />
      <FinalCTA />
    </>
  );
}

