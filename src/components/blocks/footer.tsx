import * as React from "react"
import { Separator } from "@/components/ui/separator"

type Column = { title: string; links: { label: string; href: string }[] }

/**
 * Site footer: brand and tagline, link columns, copyright line.
 *
 *   <Footer brand="Bean & Brew" tagline="Roasted in Portland." columns={[…]} />
 */
export function Footer({
  brand = "Acme",
  tagline = "Made with care.",
  columns = [
    { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
    { title: "Company", links: [{ label: "About", href: "#about" }, { label: "Contact", href: "#contact" }] },
  ],
}: {
  brand?: React.ReactNode
  tagline?: React.ReactNode
  columns?: Column[]
}) {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        <div className="sm:col-span-2">
          <div className="font-heading text-xl">{brand}</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{tagline}</p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="text-sm">
            <div className="mb-3 font-medium">{column.title}</div>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <Separator />
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </div>
    </footer>
  )
}
