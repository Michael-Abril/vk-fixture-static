import * as React from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

type Quote = { quote: string; name: string; role: string }

/**
 * Customer quotes in cards with initials avatars (no photos: nothing remote).
 *
 *   <Testimonials quotes={[{ quote: "…", name: "Ana Ruiz", role: "Owner, Café Sol" }]} />
 */
export function Testimonials({
  id = "testimonials",
  title = "Loved by customers",
  quotes = [
    { quote: "It took us an afternoon to launch. Our customers noticed the difference right away.", name: "Maya Chen", role: "Founder, Northwind" },
    { quote: "The clearest tool we have used. Everyone on the team picked it up without training.", name: "Luis Ortega", role: "Operations lead, Brightside" },
    { quote: "Support answered in minutes and the product just keeps getting better.", name: "Priya Nair", role: "Designer, Loop Studio" },
  ],
}: {
  id?: string
  title?: React.ReactNode
  quotes?: Quote[]
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <h2 className="mb-10 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((item) => (
          <Card key={item.name} className="justify-between">
            <CardContent>
              <blockquote className="text-pretty">&ldquo;{item.quote}&rdquo;</blockquote>
            </CardContent>
            <CardFooter className="gap-3">
              <Avatar>
                <AvatarFallback>{item.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">{item.name}</div>
                <div className="text-muted-foreground">{item.role}</div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
