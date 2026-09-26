import { FolderGit2, Github, Linkedin, Mail } from "lucide-react"

import { FeatureGrid } from "@/components/blocks/feature-grid"
import { Footer } from "@/components/blocks/footer"
import { Hero } from "@/components/blocks/hero"
import { SiteHeader } from "@/components/blocks/site-header"
import { Testimonials } from "@/components/blocks/testimonials"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

const projects = [
  {
    icon: FolderGit2,
    title: "Meridian Dashboard",
    description: "Analytics dashboard for a logistics startup. React, TypeScript and a real-time data pipeline.",
  },
  {
    icon: FolderGit2,
    title: "Kestrel Commerce",
    description: "Headless storefront with a 98 Lighthouse score. Built with Next.js and Stripe.",
  },
  {
    icon: FolderGit2,
    title: "Ledger Mobile",
    description: "Personal finance app with offline-first sync. React Native, 40k monthly users.",
  },
  {
    icon: FolderGit2,
    title: "Atlas Docs",
    description: "Documentation platform with full-text search and versioned releases for an API-first company.",
  },
  {
    icon: FolderGit2,
    title: "Solstice Design System",
    description: "Component library and tokens adopted by five product teams across the company.",
  },
  {
    icon: FolderGit2,
    title: "Northwind Booking",
    description: "Booking flow redesign that cut checkout drop-off by 23% in the first quarter.",
  },
]

const services = [
  { icon: FolderGit2, title: "Frontend engineering", description: "Accessible, fast interfaces in React and TypeScript." },
  { icon: FolderGit2, title: "Product design", description: "Flows, wireframes and design systems that ship." },
  { icon: FolderGit2, title: "Performance", description: "Audits and refactors that make pages load in under a second." },
]

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        brand="Jordan Vale"
        links={[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Hire me", href: "#contact" }}
      />

      <main>
        <Hero
          variant="split"
          eyebrow="Frontend engineer & designer"
          title={
            <>
              Hi, I&rsquo;m Jordan. I build{" "}
              <span className="text-primary">fast, thoughtful</span> products for the web.
            </>
          }
          description="Eight years shipping interfaces people actually enjoy using. I take products from rough idea to polished, performant release — design and code, end to end."
          primary={{ label: "See my work", href: "#work" }}
          secondary={{ label: "Get in touch", href: "#contact" }}
          media={<PlaceholderImage label="Portrait of Jordan Vale" ratio="4/5" className="rounded-xl" />}
        />

        <FeatureGrid
          id="work"
          title="Selected work"
          description="Six projects that show the range: dashboards, storefronts, mobile apps and design systems."
          features={projects}
        />

        <FeatureGrid
          id="services"
          title="What I do"
          description="I work with startups and small teams who need to ship well, quickly."
          features={services}
        />

        <Testimonials
          title="What clients say"
          quotes={[
            {
              quote: "Jordan rebuilt our checkout in three weeks and conversions jumped immediately. The clearest developer we have worked with.",
              name: "Maya Chen",
              role: "Founder, Northwind",
            },
            {
              quote: "Design and engineering in one person is a superpower. Jordan handed us a design system our whole team now builds on.",
              name: "Luis Ortega",
              role: "CTO, Brightside",
            },
            {
              quote: "Fast, communicative, and obsessive about the details. Our app finally feels finished.",
              name: "Priya Nair",
              role: "Product lead, Loop Studio",
            },
          ]}
        />

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <Card className="mx-auto max-w-2xl text-center">
            <CardHeader className="items-center">
              <CardTitle className="text-2xl">Let&rsquo;s work together</CardTitle>
              <CardDescription>
                I take on a small number of projects each year. Tell me what you are building and I will reply within a day.
              </CardDescription>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <a href="mailto:hello@jordanvale.dev">
                    <Mail aria-hidden="true" />
                    hello@jordanvale.dev
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://github.com" aria-label="GitHub">
                    <Github aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://linkedin.com" aria-label="LinkedIn">
                    <Linkedin aria-hidden="true" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>

      <Footer
        brand="Jordan Vale"
        tagline="Frontend engineer and designer. Building on the web since 2017."
        columns={[
          {
            title: "Site",
            links: [
              { label: "Work", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Elsewhere",
            links: [
              { label: "GitHub", href: "https://github.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
            ],
          },
        ]}
      />
    </div>
  )
}
