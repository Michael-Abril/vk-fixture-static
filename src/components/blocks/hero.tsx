import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

type Action = { label: string; href: string }

/**
 * The first section of a landing page. `variant="centered"` for a product or
 * statement, `variant="split"` for text beside a picture (`media`, default a
 * PlaceholderImage). One h1, one lead paragraph, at most two actions.
 *
 *   <Hero variant="split" eyebrow="New roast" title="Coffee roasted this week" description="…" media={<PlaceholderImage label="Espresso" ratio="1/1" />} />
 */
export function Hero({
  variant = "centered",
  eyebrow = "Now in beta",
  title = "Build something people love",
  description = "A short sentence that says who this is for and what they get. Keep it under two lines.",
  primary = { label: "Get started", href: "#pricing" },
  secondary = { label: "Learn more", href: "#features" },
  media,
}: {
  variant?: "centered" | "split"
  eyebrow?: string | null
  title?: React.ReactNode
  description?: React.ReactNode
  primary?: Action | null
  secondary?: Action | null
  media?: React.ReactNode
}) {
  const actions = (
    <div className={variant === "centered" ? "flex flex-wrap justify-center gap-3" : "flex flex-wrap gap-3"}>
      {primary ? (
        <Button asChild size="lg">
          <a href={primary.href}>
            {primary.label}
            <ArrowRight />
          </a>
        </Button>
      ) : null}
      {secondary ? (
        <Button asChild size="lg" variant="outline">
          <a href={secondary.href}>{secondary.label}</a>
        </Button>
      ) : null}
    </div>
  )
  const text = (
    <>
      {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
      <h1 className="text-4xl md:text-6xl">{title}</h1>
      <p className="max-w-prose text-lg text-muted-foreground">{description}</p>
      {actions}
    </>
  )

  if (variant === "split") {
    return (
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 motion-safe:animate-in motion-safe:fade-in md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col items-start gap-6">{text}</div>
        {media ?? <PlaceholderImage label="Product" ratio="4/3" className="rounded-xl" />}
      </section>
    )
  }
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-20 text-center motion-safe:animate-in motion-safe:fade-in md:py-28">
      {text}
    </section>
  )
}
