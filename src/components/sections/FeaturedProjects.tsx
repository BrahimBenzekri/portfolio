"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { getFeaturedProjects } from "@/data"

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="section-padding">
      <div className="content-width">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of things I've built"
          />
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium shrink-0 mb-1"
          >
            All projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Mobile "all projects" link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
          >
            See all projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
