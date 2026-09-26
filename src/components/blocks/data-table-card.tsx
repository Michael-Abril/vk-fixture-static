import * as React from "react"
import { Inbox } from "lucide-react"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Column = { key: string; label: string; align?: "left" | "right" }

/**
 * A table in a card with a title, an optional action, and an empty state when
 * there are no rows. Cells are any React node (a Badge for a status, a Button
 * for an action). Scrolls sideways inside the card on a phone, never the page.
 *
 *   <DataTableCard title="Orders" columns={[{ key: "id", label: "Order" }, { key: "total", label: "Total", align: "right" }]} rows={orders} />
 */
export function DataTableCard({
  title = "Recent orders",
  description = "The latest activity.",
  action,
  columns = [
    { key: "customer", label: "Customer" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", align: "right" },
  ],
  rows = [
    { customer: "Olivia Martin", status: "Paid", date: "Sep 12", amount: "$250.00" },
    { customer: "Jackson Lee", status: "Pending", date: "Sep 11", amount: "$150.00" },
    { customer: "Isabella Nguyen", status: "Paid", date: "Sep 10", amount: "$350.00" },
    { customer: "William Kim", status: "Refunded", date: "Sep 9", amount: "$450.00" },
  ],
  emptyTitle = "Nothing here yet",
  emptyDescription = "New entries will appear here.",
}: {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  columns?: Column[]
  rows?: Record<string, React.ReactNode>[]
  emptyTitle?: React.ReactNode
  emptyDescription?: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {action ? <CardAction>{action}</CardAction> : null}
      </CardHeader>
      <CardContent>
        {rows.length === 0 ? (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>{emptyTitle}</EmptyTitle>
              <EmptyDescription>{emptyDescription}</EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key} className={cn(column.align === "right" && "text-right")}>
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.key} className={cn(column.align === "right" && "text-right tabular-nums")}>
                      {row[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
