"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-accent hover:bg-accent-hover text-white": variant === "primary",
          "border border-border hover:border-border-hover text-text-secondary hover:text-text-primary":
            variant === "ghost",
          "text-sm px-4 py-2": size === "sm",
          "text-sm px-6 py-2.5": size === "md",
          "text-base px-8 py-3": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
