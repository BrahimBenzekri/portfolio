"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { getAdjacentProjects, type Project } from "@/data"

export function ProjectDetail({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <article className="space-y-16">

      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-200 text-sm"
      >
        <ArrowLeft size={14} />
        All projects
      </Link>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex flex-wrap items-center gap-3">
          {project.badge && (
            <Badge variant={project.status === "In Development" ? "yellow" : "accent"}>
              {project.badge}
            </Badge>
          )}
          {project.status === "In Development" && !project.badge && (
            <Badge variant="yellow">In Development</Badge>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">{project.title}</h1>
        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Github size={15} />
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-border-hover text-text-secondary hover:text-text-primary px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video w-full rounded-2xl overflow-hidden bg-bg-secondary border border-border"
        >
          <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
        </motion.div>
      )}

      {/* Overview + Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-10"
      >
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-text-primary">Overview</h2>
          <p className="text-text-secondary leading-relaxed">{project.fullDesc}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-mono text-text-secondary bg-bg-tertiary border border-border px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-xl font-bold text-text-primary">Key Features</h2>
        <ul className="space-y-3">
          {project.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="flex items-start gap-3 text-text-secondary"
            >
              <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* My Role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-bg-secondary border border-border rounded-xl p-8 space-y-3"
      >
        <h2 className="text-xl font-bold text-text-primary">My Role</h2>
        <p className="text-text-secondary leading-relaxed">{project.role}</p>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-xl font-bold text-text-primary">Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.challenges.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4"
            >
              <div className="space-y-2">
                <p className="text-xs font-mono text-accent uppercase tracking-widest">Challenge</p>
                <p className="text-text-primary font-medium leading-relaxed">{c.challenge}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono text-green-400 uppercase tracking-widest">Solution</p>
                <p className="text-text-secondary leading-relaxed">{c.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Screenshots */}
      {project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-bold text-text-primary">Screenshots</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-bg-secondary border border-border">
                <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Prev / Next navigation */}
      <div className="border-t border-border pt-10 grid sm:grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex items-center gap-3 text-left p-4 rounded-xl border border-border hover:border-border-hover transition-all duration-200"
          >
            <ArrowLeft size={16} className="text-text-muted group-hover:text-accent transition-colors duration-200 shrink-0" />
            <div>
              <p className="text-xs text-text-muted mb-1">Previous</p>
              <p className="text-text-primary font-medium group-hover:text-accent transition-colors duration-200">{prev.title}</p>
            </div>
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-end gap-3 text-right p-4 rounded-xl border border-border hover:border-border-hover transition-all duration-200"
          >
            <div>
              <p className="text-xs text-text-muted mb-1">Next</p>
              <p className="text-text-primary font-medium group-hover:text-accent transition-colors duration-200">{next.title}</p>
            </div>
            <ArrowRight size={16} className="text-text-muted group-hover:text-accent transition-colors duration-200 shrink-0" />
          </Link>
        ) : <div />}
      </div>
    </article>
  )
}
