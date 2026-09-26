import * as React from "react"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

type Tier = { name: string; monthly: number; annual: number; description: string; features: string[]; cta: string; featured?: boolean }

/**
 * Three pricing tiers with a Monthly / Annual toggle; the `featured` tier is
 * outlined in the primary colour and marked "Most popular". `annual` is the
 * per-month price when billed yearly. Stacks to one column on a phone.
 *
 *   <PricingTiers currency="€" tiers={[{ name: "Starter", monthly: 9, annual: 7, … }]} />
 */
export function PricingTiers({
  id = "pricing",
  title = "Simple, transparent pricing",
  description = "Start free, upgrade when you grow.",
  currency = "$",
  tiers = [
    { name: "Starter", monthly: 0, annual: 0, description: "For trying it out.", features: ["1 project", "Community support", "Basic analytics"], cta: "Start free" },
    { name: "Pro", monthly: 19, annual: 15, description: "For growing teams.", features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom domain"], cta: "Choose Pro", featured: true },
    { name: "Business", monthly: 49, annual: 39, description: "For organisations.", features: ["Everything in Pro", "SSO", "Audit log", "Dedicated manager"], cta: "Contact sales" },
  ],
}: {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  currency?: string
  tiers?: Tier[]
}) {
  const [billing, setBilling] = React.useState<"monthly" | "annual">("monthly")
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2>{title}</h2>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>
      <div className="mb-10 flex justify-center">
        <ToggleGroup type="single" variant="outline" value={billing} onValueChange={(value) => value && setBilling(value as "monthly" | "annual")}>
          <ToggleGroupItem value="monthly" className="px-4">Monthly</ToggleGroupItem>
          <ToggleGroupItem value="annual" className="px-4">Annual</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className={cn("relative flex flex-col", tier.featured && "border-primary shadow-lg ring-1 ring-primary")}>
            {tier.featured ? <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most popular</Badge> : null}
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight tabular-nums">
                  {currency}
                  {billing === "monthly" ? tier.monthly : tier.annual}
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={tier.featured ? "default" : "outline"}>
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
