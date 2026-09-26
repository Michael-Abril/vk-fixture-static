import * as React from "react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

/**
 * A chart in a card, drawn with the seed chart component: every series colour
 * is a theme token (`var(--chart-1)` … `var(--chart-5)`) set in `config`, and
 * the chart reads it as `var(--color-<key>)`. `kind` is "area" or "bar";
 * `data` rows have the `xKey` field plus one number per `config` key.
 *
 *   <ChartCard title="Sales" xKey="month" data={rows} config={{ sales: { label: "Sales", color: "var(--chart-1)" } }} />
 */
export function ChartCard({
  title = "Revenue",
  description = "Last 6 months",
  kind = "area",
  xKey = "month",
  data = [
    { month: "Jan", revenue: 1860, expenses: 800 },
    { month: "Feb", revenue: 3050, expenses: 2000 },
    { month: "Mar", revenue: 2370, expenses: 1200 },
    { month: "Apr", revenue: 2730, expenses: 1900 },
    { month: "May", revenue: 2090, expenses: 1300 },
    { month: "Jun", revenue: 3140, expenses: 1400 },
  ],
  config = {
    revenue: { label: "Revenue", color: "var(--chart-1)" },
    expenses: { label: "Expenses", color: "var(--chart-2)" },
  },
}: {
  title?: React.ReactNode
  description?: React.ReactNode
  kind?: "area" | "bar"
  xKey?: string
  data?: Record<string, string | number>[]
  config?: ChartConfig
}) {
  const keys = Object.keys(config)
  const axis = <XAxis dataKey={xKey} tickLine={false} axisLine={false} tickMargin={8} />
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="aspect-auto h-64 w-full">
          {kind === "bar" ? (
            <BarChart data={data} accessibilityLayer>
              <CartesianGrid vertical={false} />
              {axis}
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              {keys.map((key) => (
                <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
              ))}
            </BarChart>
          ) : (
            <AreaChart data={data} accessibilityLayer>
              <CartesianGrid vertical={false} />
              {axis}
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              {keys.map((key) => (
                <Area key={key} dataKey={key} type="natural" fill={`var(--color-${key})`} fillOpacity={0.2} stroke={`var(--color-${key})`} strokeWidth={2} />
              ))}
            </AreaChart>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
