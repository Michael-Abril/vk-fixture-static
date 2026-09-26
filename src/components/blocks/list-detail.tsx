import * as React from "react"
import { FileText, Plus, Search, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Item = { id: string; title: string; notes: string; status: string }

/**
 * Create, read, update and delete in one screen: a searchable list, and the
 * selected item's editable detail beside it (below it on a phone). Empty states
 * for no items and no match. Rename the fields to the app's own record.
 *
 *   <ListDetail title="Recipes" initialItems={[{ id: "1", title: "Pancakes", notes: "…", status: "Draft" }]} />
 */
export function ListDetail({
  title = "Notes",
  initialItems = [
    { id: "1", title: "Launch checklist", notes: "Domain, analytics, announcement post.", status: "In progress" },
    { id: "2", title: "Customer interviews", notes: "Five calls booked for next week.", status: "Planned" },
    { id: "3", title: "Pricing page copy", notes: "Tighten the Pro tier description.", status: "Done" },
  ],
}: {
  title?: React.ReactNode
  initialItems?: Item[]
}) {
  const [items, setItems] = React.useState(initialItems)
  const [selectedId, setSelectedId] = React.useState(initialItems[0]?.id ?? null)
  const [query, setQuery] = React.useState("")
  const visible = items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
  const selected = items.find((item) => item.id === selectedId) ?? null
  const update = (patch: Partial<Item>) => setItems(items.map((item) => (item.id === selectedId ? { ...item, ...patch } : item)))
  const add = () => {
    const item = { id: String(Date.now()), title: "Untitled", notes: "", status: "Planned" }
    setItems([item, ...items])
    setSelectedId(item.id)
    setQuery("")
  }
  const remove = () => {
    const rest = items.filter((item) => item.id !== selectedId)
    setItems(rest)
    setSelectedId(rest[0]?.id ?? null)
  }

  return (
    <div className="grid gap-4 md:grid-cols-[18rem_1fr]">
      <Card className="gap-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Button size="sm" onClick={add}>
            <Plus /> New
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" aria-label="Search" className="pl-8" />
          </div>
          {visible.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">{items.length ? "No match." : "No items yet."}</p>
          ) : (
            <ul className="flex flex-col gap-1">
              {visible.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      item.id === selectedId && "bg-accent text-accent-foreground"
                    )}
                  >
                    <span className="truncate">{item.title}</span>
                    <Badge variant="secondary">{item.status}</Badge>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <Card>
        {selected ? (
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="detail-title">Title</FieldLabel>
                <Input id="detail-title" value={selected.title} onChange={(event) => update({ title: event.target.value })} />
              </Field>
              <Field>
                <FieldLabel htmlFor="detail-status">Status</FieldLabel>
                <Input id="detail-status" value={selected.status} onChange={(event) => update({ status: event.target.value })} />
              </Field>
              <Field>
                <FieldLabel htmlFor="detail-notes">Notes</FieldLabel>
                <Textarea id="detail-notes" rows={6} value={selected.notes} onChange={(event) => update({ notes: event.target.value })} />
              </Field>
              <div>
                <Button variant="outline" onClick={remove}>
                  <Trash2 /> Delete
                </Button>
              </div>
            </FieldGroup>
          </CardContent>
        ) : (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileText />
              </EmptyMedia>
              <EmptyTitle>Nothing selected</EmptyTitle>
              <EmptyDescription>Create an item to get started.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button onClick={add}>
                <Plus /> New
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </Card>
    </div>
  )
}
