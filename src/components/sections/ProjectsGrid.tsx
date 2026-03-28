"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { projects } from "@/data"

type Filter = "All" | "Done" | "In Development"

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All")

  const filtered = projects.filter((p) =>
    filter === "All" ? true : p.status === filter
  )

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-text-primary">Projects</h1>
        <p className="mt-2 text-text-secondary">
          Everything I&apos;ve built — from hackathon sprints to long-term personal projects.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2">
        {(["All", "Done", "In Development"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
              filter === f
                ? "border-accent text-accent bg-accent/10"
                : "border-border text-text-muted hover:text-text-secondary hover:border-border-hover"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-text-muted text-sm">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, index) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
