import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Careers at ARZ Home Remodeling Chandler AZ",
  description: "Join our growing team in Chandler, AZ. We're hiring experienced bathroom remodelers and tile installers. Apply today!",
  keywords: ["careers", "jobs chandler", "bathroom remodeler jobs", "employment"],
  openGraph: {
    title: "Careers - Join Our Team",
    description: "Join our growing team in Chandler, Arizona. We're hiring experienced contractors.",
    url: `${siteConfig.url}/careers`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Careers at ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Our Team",
    description: "Join our growing team in Chandler, Arizona.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/careers`,
  },
};

const jobs = [
  {
    title: "Bathroom Remodeling Specialist",
    location: "Chandler, AZ",
    type: "Full-time",
    salary: "$50,000 - $70,000/year",
    description: "Experienced bathroom remodeler needed for residential projects in Chandler and surrounding areas. Must have 3+ years experience in tile work, plumbing, and general remodeling.",
    requirements: [
      "3+ years bathroom remodeling experience",
      "Knowledge of tile installation and waterproofing",
      "Valid driver's license",
      "Own tools preferred",
      "Excellent customer service skills",
    ],
  },
  {
    title: "Tile Installation Technician",
    location: "Chandler, AZ",
    type: "Full-time",
    salary: "$45,000 - $65,000/year",
    description: "Skilled tile installer needed for bathroom and shower projects. Must be detail-oriented with excellent craftsmanship and ability to work independently.",
    requirements: [
      "2+ years tile installation experience",
      "Experience with bathroom tile and waterproofing",
      "Ability to read blueprints",
      "Reliable transportation",
      "Team player with strong work ethic",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Join Our Team</h1>
              <p className="text-lg text-muted-foreground">
                We're looking for skilled professionals to join our growing bathroom remodeling team in Chandler, Arizona.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {jobs.map((job, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold mb-3">{job.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Briefcase className="w-12 h-12 text-primary hidden md:block" />
                  </div>

                  <p className="text-muted-foreground mb-6">{job.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Requirements:</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
