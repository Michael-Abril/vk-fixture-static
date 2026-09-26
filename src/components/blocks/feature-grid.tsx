import * as React from "react"
import { BarChart3, Clock, Globe, Shield, Sparkles, Zap, type LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Feature = { icon: LucideIcon; title: string; description: string }

/**
 * A heading and a grid of features: 1 column on a phone, 2 at sm, 3 at lg.
 *
 *   <FeatureGrid id="features" title="Why Bean & Brew" features={[{ icon: Leaf, title: "Organic", description: "…" }]} />
 */
export function FeatureGrid({
  id = "features",
  title = "Everything you need",
  description = "The three to six things that make this worth choosing.",
  features = [
    { icon: Zap, title: "Fast", description: "Pages load instantly on any device." },
    { icon: Shield, title: "Secure", description: "Your data is protected by default." },
    { icon: BarChart3, title: "Insightful", description: "See what is working at a glance." },
    { icon: Globe, title: "Global", description: "Served close to every visitor." },
    { icon: Sparkles, title: "Delightful", description: "Details that make people smile." },
    { icon: Clock, title: "Always on", description: "Built to stay up around the clock." },
  ],
}: {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  features?: Feature[]
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2>{title}</h2>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title: name, description: text }) => (
          <Card key={name} className="transition-colors hover:border-primary/40">
            <CardHeader>
              <span className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
