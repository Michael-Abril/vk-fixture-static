import * as React from "react"
import { BarChart3, Home, Settings, ShoppingCart, Users, type LucideIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

type NavItem = { label: string; icon: LucideIcon; href: string }

/**
 * A dashboard page frame: a sidebar (a Sheet behind the trigger on a phone),
 * a top bar with the page title and `actions`, and the page body. The active
 * item is `active` (a label); switch pages with React state or the URL hash.
 *
 *   <DashboardShell brand="Shopline" title="Overview" active="Overview" onNavigate={setPage}>
 *     <StatCards /> <ChartCard /> <DataTableCard />
 *   </DashboardShell>
 */
export function DashboardShell({
  brand = "Acme",
  title = "Overview",
  nav = [
    { label: "Overview", icon: Home, href: "#/" },
    { label: "Orders", icon: ShoppingCart, href: "#/orders" },
    { label: "Customers", icon: Users, href: "#/customers" },
    { label: "Reports", icon: BarChart3, href: "#/reports" },
    { label: "Settings", icon: Settings, href: "#/settings" },
  ],
  active = "Overview",
  onNavigate,
  actions,
  children,
}: {
  brand?: React.ReactNode
  title?: React.ReactNode
  nav?: NavItem[]
  active?: string
  onNavigate?: (label: string) => void
  actions?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="px-2 py-1 font-heading text-lg">{brand}</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={item.label === active}>
                      <a href={item.href} onClick={() => onNavigate?.(item.label)}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <div className="flex-1 truncate font-medium">{title}</div>
          {actions}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
