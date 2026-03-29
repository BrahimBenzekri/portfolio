"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "./Badge"
import type { Project } from "@/data"

type ProjectCardProps = {
  project: Project
  index?: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null

  // Derive a short category label
  const categoryLabel = project.badge
    ? `${project.badge.split(" ")[0]} · Flutter`
    : project.status === "In Development"
    ? "In Dev · Flutter"
    : "Flutter"

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-bg-secondary border border-border hover:border-border-hover rounded-xl overflow-hidden transition-colors duration-200"
      style={{ boxShadow: "0 0 0 transparent" }}
      whileFocus={{ boxShadow: "var(--glow)" }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = "var(--glow)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 transparent"
      }}
    >
      {/* Editorial number */}
      {num && (
        <span className="absolute top-4 right-4 text-3xl font-black font-mono text-border/60 select-none z-10 group-hover:text-accent/20 transition-colors duration-200">
          {num}
        </span>
      )}

      {/* Thumbnail */}
      <Link href={`/projects/${project.slug}`} className="block relative aspect-video bg-bg-tertiary overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-black text-border/40 font-mono">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category label */}
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted">
          {categoryLabel}
        </p>

        {/* Title + badges */}
        <div className="flex items-start justify-between gap-3">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-lg font-semibold text-text-primary hover:text-accent transition-colors duration-200 leading-tight">
              {project.title}
            </h3>
          </Link>
          <div className="flex items-center gap-2 shrink-0">
            {project.badge && (
              <Badge variant={project.status === "In Development" ? "yellow" : "accent"}>
                {project.badge}
              </Badge>
            )}
            {project.status === "In Development" && !project.badge && (
              <Badge variant="yellow">In Dev</Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
          {project.shortDesc}
        </p>

        {/* Stack — teal-tinted mono */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-accent/70 bg-accent/5 border border-accent/15 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs text-text-muted px-2 py-1">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
          >
            View details →
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="GitHub repository"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
