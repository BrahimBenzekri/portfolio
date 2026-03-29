"use client"

import { motion } from "framer-motion"

type SectionHeaderProps = {
  label?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12"
    >
      {label && (
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  )
}
