"use client";

import UspBar from "@/components/home/usp-bar";
import AboutPreview from "@/components/home/about-preview";
import ServicesGrid from "@/components/home/services-grid";
import LocalTrust from "@/components/home/local-trust";
import ChandlerProjects from "@/components/home/chandler-projects";
import ProcessSection from "@/components/home/process-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import FAQ from "@/components/home/faq";
import MapSection from "@/components/home/map-section";
import ServiceAreas from "@/components/home/service-areas";
import ContactFormSection from "@/components/home/contact-form-section";

export default function BelowFoldLoader() {
  return (
    <>
      <UspBar />
      <AboutPreview />
      <ServicesGrid />
      <LocalTrust cityName="Chandler" />
      <ChandlerProjects />
      <ProcessSection />
      <WhyChooseUs />
      <FAQ />
      <MapSection />
      <ServiceAreas />
      <ContactFormSection />
    </>
  );
}

