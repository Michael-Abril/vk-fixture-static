import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type NavLink = { label: string; href: string }

/**
 * Sticky site header: brand, links and one call to action. Below md (a 390 px
 * phone) the links move into a Sheet behind a menu button, so nothing wraps or
 * overflows.
 *
 *   <SiteHeader brand="Bean & Brew" links={[{ label: "Menu", href: "#menu" }]} cta={{ label: "Order", href: "#order" }} />
 */
export function SiteHeader({
  brand = "Acme",
  links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  cta = { label: "Get started", href: "#pricing" },
}: {
  brand?: React.ReactNode
  links?: NavLink[]
  cta?: NavLink | null
}) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#" className="font-heading text-xl tracking-tight text-foreground">
          {brand}
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
          {cta ? (
            <Button asChild size="sm">
              <a href={cta.href}>{cta.label}</a>
            </Button>
          ) : null}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{brand}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a href={link.href} className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              {cta ? (
                <SheetClose asChild>
                  <Button asChild className="mt-2">
                    <a href={cta.href}>{cta.label}</a>
                  </Button>
                </SheetClose>
              ) : null}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
