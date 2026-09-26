import * as React from "react"
import { ImageIcon, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * A picture slot that needs no network: a gradient in the theme's chart
 * colours, an icon and a label, at a fixed aspect ratio. Use it wherever a
 * photo would go (hero, product card, project thumbnail, cover). The preview
 * and the deployed app load no remote images, so an https:// photo is a
 * broken box. `seed` (default: the label) picks the colours, so a grid of
 * placeholders varies but stays on theme.
 *
 *   <PlaceholderImage label="Ethiopia Yirgacheffe" ratio="4/3" />
 *   <PlaceholderImage label="Team" icon={Users} ratio="16/9" className="rounded-xl" />
 */
function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  ratio = "4/3",
  seed,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  label?: string
  icon?: LucideIcon
  ratio?: string
  seed?: string
}) {
  const id = React.useId().replace(/:/g, "")
  let hash = 0
  for (const char of seed ?? label ?? "") hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  const from = `var(--chart-${(hash % 5) + 1})`
  const to = `var(--chart-${((hash >>> 3) % 5) + 1 === (hash % 5) + 1 ? ((hash % 5) + 1) % 5 + 1 : ((hash >>> 3) % 5) + 1})`

  return (
    <div
      role="img"
      aria-label={label ?? "Image"}
      data-slot="placeholder-image"
      className={cn("relative isolate flex items-center justify-center overflow-hidden rounded-lg bg-muted", className)}
      style={{ aspectRatio: ratio }}
      {...props}
    >
      <svg aria-hidden="true" className="absolute inset-0 -z-10 size-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: from, stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: to, stopOpacity: 0.75 }} />
          </linearGradient>
          <radialGradient id={`${id}-r`} cx="0.25" cy="0.2" r="0.8">
            <stop offset="0%" style={{ stopColor: "var(--background)", stopOpacity: 0.45 }} />
            <stop offset="100%" style={{ stopColor: "var(--background)", stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${id}-g)`} />
        <circle cx={60 + (hash % 280)} cy="250" r="140" style={{ fill: to, opacity: 0.35 }} />
        <rect width="400" height="300" fill={`url(#${id}-r)`} />
      </svg>
      <span className="flex size-12 items-center justify-center rounded-full bg-background/70 text-foreground shadow-sm backdrop-blur-sm">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      {label ? (
        <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-md bg-background/75 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  )
}

export { PlaceholderImage }
