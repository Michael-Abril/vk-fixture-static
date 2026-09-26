import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Stat = { label: string; value: string; change: string; trend: "up" | "down"; note?: string }

/**
 * The KPI row a dashboard opens with: 1 column on a phone, 2 at sm, 4 at lg.
 *
 *   <StatCards stats={[{ label: "Revenue", value: "$12,480", change: "+8.2%", trend: "up", note: "vs last month" }]} />
 */
export function StatCards({
  stats = [
    { label: "Revenue", value: "$45,231", change: "+20.1%", trend: "up", note: "vs last month" },
    { label: "Customers", value: "2,350", change: "+180", trend: "up", note: "new this month" },
    { label: "Orders", value: "12,234", change: "+19%", trend: "up", note: "vs last month" },
    { label: "Churn", value: "2.4%", change: "-0.3%", trend: "down", note: "vs last month" },
  ],
}: {
  stats?: Stat[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Trend = stat.trend === "up" ? TrendingUp : TrendingDown
        return (
          <Card key={stat.label} className="gap-2">
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">{stat.value}</CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <Trend aria-hidden="true" />
                  {stat.change}
                </Badge>
              </CardAction>
            </CardHeader>
            {stat.note ? <CardFooter className="text-sm text-muted-foreground">{stat.note}</CardFooter> : null}
          </Card>
        )
      })}
    </div>
  )
}
