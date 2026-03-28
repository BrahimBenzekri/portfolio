import { cn } from "@/lib/utils"

type BadgeProps = {
  children: React.ReactNode
  variant?: "accent" | "green" | "yellow" | "muted"
  className?: string
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-accent/10 text-accent": variant === "accent",
          "bg-green-500/10 text-green-400": variant === "green",
          "bg-yellow-500/10 text-yellow-400": variant === "yellow",
          "bg-border text-text-muted": variant === "muted",
        },
        className
      )}
    >
      {children}
    </span>
  )
}
