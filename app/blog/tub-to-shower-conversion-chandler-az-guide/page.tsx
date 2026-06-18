import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { Calendar, Clock, ArrowLeft, User, ArrowRight, Share2, Facebook, Twitter, Linkedin, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogArticleJsonLd, BreadcrumbSchema } from "@/components/seo/json-ld"
import "@/app/prose.css";

export const metadata: Metadata = {title: {
    absolute: "Bathroom Remodel Guide | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel guide, custom showers, tile, vanities, clear pricing, and free estimates.",
  alternates: {
    canonical: `${siteConfig.url}/blog/tub-to-shower-conversion-chandler-az-guide/`,
  },
  openGraph: {title: "Bathroom Remodel Guide | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel guide, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/blog/tub-to-shower-conversion-chandler-az-guide/`,
    type: "article",
    publishedTime: "2026-06-07T08:00:00Z",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`,
        width: 1200,
        height: 630,
        alt: "Tub-to-Shower Conversion in Chandler, AZ"
      }
    ]
  }
}

const headings = [
  { id: "why-convert", text: "Why Convert Your Bathtub to a Walk-In Shower?", level: 2 },
  { id: "costs", text: "Real Cost Ranges for Tub-to-Shower Conversions in Chandler, AZ", level: 2 },
  { id: "technical", text: "Technical and Code Requirements for Chandler Conversions", level: 2 },
  { id: "hard-water", text: "Designing for Chandler's Hard Water Challenges", level: 2 },
  { id: "vetting", text: "Contractor Vetting Checklist", level: 2 },
  { id: "faqs", text: "5 Frequently Asked Questions (People Also Ask)", level: 2 },
  { id: "estimate", text: "Schedule Your Free In-Home Estimate", level: 2 }
]

export default function StandaloneBlogPost() {
  const publishedDateStr = "June 7, 2026";
  const author = "Alex Rivers";
  const readTime = 10;
  const category = "Bathroom Remodeling";

  return (
    <>
      <BlogArticleJsonLd
        title="Tub-to-Shower Conversion in Chandler, AZ: Everything You Need to Know Before You Start"
        description="Thinking about converting your bathtub to a walk-in shower? Read our complete Chandler guide covering design choices, waterproofing, permits, costs, and contractor vetting."
        url={`${siteConfig.url}/blog/tub-to-shower-conversion-chandler-az-guide/`}
        image="/images/services/chandler-bathroom-remodel.webp"
        datePublished="2026-06-07T08:00:00Z"
        author={author}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
          { name: "Tub-to-Shower Conversion Chandler AZ Guide", url: `${siteConfig.url}/blog/tub-to-shower-conversion-chandler-az-guide/` }
        ]}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* --- 1. HERO SECTION --- */}
        <section className="relative pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 bg-secondary overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog/" 
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Articles
              </Link>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {category}
                </span>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {readTime} min read
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                Tub-to-Shower Conversion in Chandler, AZ: Everything You Need to Know Before You Start
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-background shadow-sm">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{author}</p>
                    <p className="text-xs text-muted-foreground">{publishedDateStr}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground mr-1 uppercase tracking-widest">Share:</span>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. FEATURED IMAGE --- */}
        <section className="relative -mt-12 md:-mt-16 lg:-mt-20 z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl border-4 border-background">
                <Image
                  src="/images/services/chandler-bathroom-remodel.webp"
                  alt="Tub to Shower Conversion in Chandler AZ"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. MAIN ARTICLE LAYOUT --- */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 relative">
              
              {/* Sidebar / Table of Contents (Desktop) */}
              <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-32 space-y-8">
                  {headings.length > 0 && (
                    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                        <List className="h-4 w-4 text-primary" />
                        <h3 className="font-serif font-bold text-foreground">In this article</h3>
                      </div>
                      <nav className="space-y-1">
                        {headings.map((heading) => (
                          <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className="block text-sm py-1.5 transition-colors hover:text-primary text-foreground/80 font-medium"
                          >
                            {heading.text}
                          </a>
                        ))}
                      </nav>
                    </div>
                  )}
                  
                  {/* Local Relevance / CTA Card */}
                  <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg shadow-primary/10 overflow-hidden relative">
                    <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-background/10 rounded-full blur-2xl" />
                    <h3 className="font-serif font-bold text-xl mb-3 relative z-10">Chandler&apos;s #1 Remodeler</h3>
                    <p className="text-sm text-primary-foreground/90 mb-6 relative z-10">
                      Licensed experts serving Chandler, Ocotillo, and all East Valley communities.
                    </p>
                    <Button asChild variant="secondary" className="w-full bg-background text-primary hover:bg-background/90 relative z-10">
                      <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
                    </Button>
                  </div>
                </div>
              </aside>

              {/* Main Article Body */}
              <div className="flex-1 max-w-none">
                <article className="max-w-3xl">
                  {/* Article content in JSX */}
                  <div className="prose prose-lg md:prose-xl max-w-none 
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-32
                    prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
                    prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8
                    prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-6
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-strong:text-foreground prose-strong:font-bold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:text-foreground prose-blockquote:italic
                    prose-li:text-muted-foreground prose-li:mb-2
                    prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-border/50
                    prose-hr:border-border/50"
                  >
                    <p>
                      If you have an old, rarely used garden tub or an outdated alcove bathtub cluttering your bathroom, you are not alone. Across Chandler, Arizona, homeowners are increasingly choosing to convert their old tubs into modern, spacious walk-in showers. This project is one of the most effective ways to optimize bathroom space, improve accessibility, and modernize your home&apos;s design.
                    </p>
                    <p>
                      However, a successful tub-to-shower conversion requires careful planning, budgeting, and technical execution. From navigating City of Chandler building permits to selecting waterproofing systems that withstand the shifting desert soils, there is a lot to consider before demolition starts. In this comprehensive guide, we cover everything you need to know to plan a successful tub-to-shower conversion in your Chandler home.
                    </p>

                    <hr />

                    <h2 id="why-convert">Why Convert Your Bathtub to a Walk-In Shower?</h2>
                    <p>
                      For many households, the traditional bathtub-shower combination is no longer practical. Tubs can be difficult to step into, hard to clean, and take up valuable square footage. Here are the primary reasons Chandler homeowners are making the switch:
                    </p>
                    <ol>
                      <li>
                        <strong>Enhanced Spatial Efficiency:</strong> A standard alcove bathtub occupies a footprint of 30 inches by 60 inches. By replacing this tub with a walk-in shower, you instantly gain a spacious, open showering area. If you remove a larger corner garden tub, you can create a luxury double shower or gain enough room to install a double vanity.
                      </li>
                      <li>
                        <strong>Improved Safety and Accessibility:</strong> Stepping over a 15-inch tub wall can be a slipping hazard, particularly for seniors or individuals with limited mobility. A walk-in shower with a low-profile curb (or a zero-threshold curbless entry) offers a much safer transition. This is highly popular in active adult communities like Sun Lakes, where universal design is a priority.
                      </li>
                      <li>
                        <strong>Elevated Modern Aesthetics:</strong> Replacing an acrylic tub surround with custom porcelain tile, frameless glass panels, and modern fixtures instantly upgrades your bathroom from standard builder-grade to a spa-like retreat.
                      </li>
                      <li>
                        <strong>Reduced Cleaning and Maintenance:</strong> Acrylic tubs tend to yellow, scratch, and collect soap scum over time. A modern tiled shower with resin-based epoxy grout is much easier to maintain, especially when dealing with the heavy mineral content of Chandler&apos;s municipal water supply.
                      </li>
                    </ol>

                    <hr />

                    <h2 id="costs">Real Cost Ranges for Tub-to-Shower Conversions in Chandler, AZ</h2>
                    <p>
                      A tub-to-shower conversion is a highly customized project, and the total cost depends on the scope of plumbing changes, structural modifications, and material selections. In the East Valley, a professional conversion typically ranges from <strong>$4,500 to over $25,000</strong>.
                    </p>
                    <p>
                      Here is a realistic breakdown of project scopes and their associated cost ranges:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse border border-border/50 text-sm">
                        <thead>
                          <tr className="bg-secondary">
                            <th className="p-3 border border-border/50 font-bold">Conversion Level</th>
                            <th className="p-3 border border-border/50 font-bold">Average Cost Range</th>
                            <th className="p-3 border border-border/50 font-bold">Typical Project Specifications</th>
                            <th className="p-3 border border-border/50 font-bold">Estimated Timeline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-border/50 font-bold">Budget-Friendly Refresh</td>
                            <td className="p-3 border border-border/50">$4,500 – $8,500</td>
                            <td className="p-3 border border-border/50">Acrylic or fiberglass shower pan, solid surface wall panels, and semi-frameless sliding glass door. Plumbing remains in place.</td>
                            <td className="p-3 border border-border/50">3 to 5 Days</td>
                          </tr>
                          <tr className="bg-secondary/20">
                            <td className="p-3 border border-border/50 font-bold">Standard Custom Tile Conversion</td>
                            <td className="p-3 border border-border/50">$8,500 – $16,000</td>
                            <td className="p-3 border border-border/50">Demolition to studs, pre-sloped mortar bed, custom porcelain tile walls, built-in recessed niche, and 3/8-inch frameless glass panel. Includes expanding the drain line.</td>
                            <td className="p-3 border border-border/50">7 to 10 Days</td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-border/50 font-bold">Luxury Wet Room / Master Suite</td>
                            <td className="p-3 border border-border/50">$16,000 – $25,000+</td>
                            <td className="p-3 border border-border/50">Zero-threshold (curbless) entry, high-flow linear drain, custom tile shower pan, dual rain shower heads, bench seat, premium tile, and hydrophobic coated glass.</td>
                            <td className="p-3 border border-border/50">2 to 3 Weeks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      If you are budgeting for a broader renovation, you can also view our <Link href="/bathroom-remodel-cost-chandler/">bathroom remodel cost Chandler</Link> guide for additional tables and pricing factors.
                    </p>

                    <blockquote>
                      <p>
                        <strong>Need a quick estimate for your Chandler home?</strong> Contact Mike Hernandez and our team of expert local remodelers today at <strong>(520) 569-3339</strong> to schedule your free, detailed in-home estimate.
                      </p>
                    </blockquote>

                    <hr />

                    <h2 id="technical">Technical and Code Requirements for Chandler Conversions</h2>
                    <p>
                      Converting a tub to a shower is not a simple cosmetic swap. It involves critical plumbing and structural adjustments that must comply with local building codes.
                    </p>

                    <h3>1. Expanding the Drain Line (The 2-Inch Rule)</h3>
                    <p>
                      Under the International Residential Code (IRC) enforced by the City of Chandler, a bathtub is allowed to drain through a 1.5-inch pipe. However, a shower requires a minimum <strong>2-inch drain pipe</strong> to prevent water from backing up and overflowing. During demolition, a professional contractor must saw-cut the concrete slab (or access the subfloor) to expand the drain line and trap to 2 inches. Attempting to drain a shower through a 1.5-inch tub drain is a code violation and a recipe for standing water.
                    </p>

                    <h3>2. Relocating and Upgrading Valves</h3>
                    <p>
                      Bathtub valves are set lower (around 12 to 15 inches from the tub floor) than shower valves (typically 45 to 48 inches). A conversion requires extending the copper or PEX supply lines upward. This is also the perfect time to replace your old mixing valve with a pressure-balancing shower valve to prevent sudden temperature drops when someone flushes a toilet elsewhere in the house.
                    </p>

                    <h3>3. Shower Pan Slope and Waterproofing</h3>
                    <p>
                      To prevent leaks, a shower floor must slope toward the drain at a rate of 1/4 inch per foot. The substrate must be completely waterproofed. Traditional cement board and plastic sheeting are prone to mold and leaks. At ARZ Home Remodeling, we use the advanced <Link href="/blog/schluter-kerdi-vs-redgard-arizona/">Schluter-KERDI waterproofing system</Link> on all custom shower builds. The bonded sheet membrane creates a vapor-tight seal, protecting your home&apos;s framing from dry rot and water damage.
                    </p>

                    <hr />

                    <h2 id="hard-water">Designing for Chandler&apos;s Hard Water Challenges</h2>
                    <p>
                      Chandler&apos;s municipal water is exceptionally hard, averaging <strong>18+ grains of minerals per gallon</strong>. When hard water evaporates on shower walls, it leaves behind tough calcium scale. Protect your investment by designing with these materials in mind:
                    </p>
                    <ul>
                      <li>
                        <strong>Epoxy Grout:</strong> Upgrade from cement-based grout to resin-based epoxy grout. It is non-porous and waterproof, preventing hard water minerals from staining your grout lines. Learn more about our tiling methods in our <Link href="/bathroom-tile-installation/">bathroom tile installation</Link> guide.
                      </li>
                      <li>
                        <strong>Large-Format Porcelain Tile:</strong> Porcelain is extremely dense and absorbs almost no water. Large-format tiles (like 12&quot; x 24&quot; or 24&quot; x 24&quot;) minimize the number of grout lines you have to scrub.
                      </li>
                      <li>
                        <strong>Hydrophobic Glass Coating:</strong> Ensure your frameless shower glass has a factory-applied hydrophobic coating to repel water and prevent clouding. Read more about glass choices in our guide: <Link href="/blog/frameless-shower-glass-worth-it-chandler/">is frameless shower glass worth it in Chandler</Link>.
                      </li>
                    </ul>

                    <hr />

                    <h2 id="vetting">Contractor Vetting Checklist</h2>
                    <p>
                      Hiring the right team is the single most important decision you will make for your project. A poorly installed shower pan can leak behind your walls, causing thousands of dollars in structural damage before you notice it. Use this checklist to vet your remodeling contractors:
                    </p>
                    <ul className="space-y-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-primary rounded text-primary font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <strong>Active Arizona ROC License:</strong> Ensure the contractor holds an active license with the Arizona Registrar of Contractors. Unlicensed handymen cannot legally perform plumbing modifications or pull city permits. ARZ Home Remodeling is licensed under <strong>ROC #ROC338304</strong>. You can verify any contractor at the <a href="https://roc.az.gov" target="_blank" rel="noopener noreferrer">Arizona ROC Website</a>.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-primary rounded text-primary font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <strong>Comprehensive Insurance Coverage:</strong> Ask for proof of general liability and workers&apos; compensation insurance to protect your property and workers on site.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-primary rounded text-primary font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <strong>City Permits and Inspections:</strong> Verify that the contractor will submit plans and pull the required plumbing and building permits through the <strong>City of Chandler Development Services Dept</strong> (located at 215 E Buffalo St). Never pull permits yourself as an &quot;owner-builder.&quot;
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-primary rounded text-primary font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <strong>Waterproofing Standards:</strong> Confirm they use a modern waterproofing system (like Schluter-KERDI) rather than outdated methods.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-primary rounded text-primary font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <strong>Detailed, Fixed-Price Contract:</strong> Do not accept vague estimates. Insist on an itemized contract listing exact materials, labor, and a clear payment schedule tied to construction milestones.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 border-2 border-primary rounded text-primary font-bold text-xs shrink-0 mt-1">✓</span>
                        <div>
                          <strong>Written Workmanship Warranty:</strong> Choose a contractor who stands behind their work. We back all of our custom bathroom renovations with a <strong>2-year written workmanship warranty</strong>.
                        </div>
                      </li>
                    </ul>

                    <hr />

                    <h2 id="faqs">5 Frequently Asked Questions (People Also Ask)</h2>
                    
                    <h3 className="font-bold text-foreground">1. Will removing my bathtub hurt my home&apos;s resale value?</h3>
                    <p>
                      As long as your home retains at least one bathtub (typically in a guest or hall bathroom), converting an underutilized tub into a custom walk-in shower will not hurt your resale value. In fact, replacing an old garden tub in the master suite with a large, luxury walk-in shower is highly sought after by modern homebuyers and typically yields a strong return on investment.
                    </p>

                    <h3 className="font-bold text-foreground">2. How long does a tub-to-shower conversion take?</h3>
                    <p>
                      A standard alcove tub-to-shower conversion takes between <strong>5 to 10 working days</strong>. This includes demolition, plumbing rough-in, city inspections, waterproofing, tile setting, grouting, and installing glass panels. A luxury curbless master conversion with layout changes can take 2 to 3 weeks. You can review a typical day-by-day breakdown in our <Link href="/bathroom-remodeling-timeline/">bathroom remodeling timeline</Link> guide.
                    </p>

                    <h3 className="font-bold text-foreground">3. Can I convert a tub to a shower without tearing out the walls?</h3>
                    <p>
                      No, a professional tub-to-shower conversion requires removing the wall materials surrounding the tub down to the bare wood studs. This is necessary to access and adjust the plumbing valves, expand the drain line, inspect the framing for water damage or dry rot, and install a continuous, leak-proof waterproofing barrier.
                    </p>

                    <h3 className="font-bold text-foreground">4. What is the difference between a curbed and a curbless walk-in shower?</h3>
                    <p>
                      A curbed shower has a raised threshold (usually 3 to 5 inches high) that holds water inside the shower pan. A curbless shower has a flush, flat entry with no threshold, requiring the subfloor to be recessed and sloped toward a high-capacity drain. Curbless entries provide seamless aesthetics and excellent accessibility for aging-in-place but require more labor and structural modification.
                    </p>

                    <h3 className="font-bold text-foreground">5. Do I need to get HOA approval for a bathroom remodel in Chandler?</h3>
                    <p>
                      If you are only remodeling the interior of your home, you do not need architectural approval from your Homeowners Association (HOA). However, many master-planned communities in Chandler (like Fulton Ranch, Ocotillo, and Warner Ranch) have strict regulations regarding construction dumpsters, working hours, and contractor parking. Your contractor must coordinate with these rules to avoid fines.
                    </p>

                    <hr />

                    <h2 id="estimate">Schedule Your Free In-Home Estimate</h2>
                    <p>
                      Are you ready to replace your outdated tub with a beautiful, modern walk-in shower? At ARZ Home Remodeling, we specialize in high-end bathroom conversions, custom tiling, and layout transformations across Chandler, Ocotillo, Fulton Ranch, and Sun Lakes.
                    </p>
                    <p>
                      Contact Mike Hernandez and our team of expert local remodelers today at <strong>(520) 569-3339</strong> to discuss your ideas and schedule your free, itemized project estimate.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20">
                        <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5 text-foreground font-bold px-10 h-14 rounded-full transition-all">
                        <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
                      </Button>
                    </div>

                    <p className="mt-12 text-sm text-muted-foreground flex gap-4 border-t border-border/50 pt-6">
                      <Link href="/" className="hover:underline">Back to Homepage</Link>
                      <span>|</span>
                      <Link href="/shower-remodeling/" className="hover:underline">Shower Remodeling Services</Link>
                    </p>
                  </div>
                </article>
              </div>

            </div>
          </div>
        </section>

        {/* --- 4. CTA BANNER SECTION --- */}
        <section className="py-20 bg-foreground text-background overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 Q50,0 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Transform Your Home</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-background">
                Start Your Chandler Bathroom Journey Today
              </h2>
              <p className="text-background/70 text-lg mb-10 leading-relaxed">
                We handle everything from initial design to final walkthrough. 
                Get a written estimate for your project with zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full shadow-lg shadow-primary/20">
                  <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-background/20 hover:bg-background/10 text-background font-bold px-10 h-14 rounded-full transition-all">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
