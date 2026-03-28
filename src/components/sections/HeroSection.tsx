"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import { meta } from "@/data"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="content-width">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-6"
        >
          {/* Greeting */}
          <motion.p variants={item} className="text-accent text-sm font-mono tracking-widest uppercase">
            Hey, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
            {meta.name}
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-text-secondary">
            {meta.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={item} className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            {meta.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            <a
              href={meta.cvUrl}
              download
              className="inline-flex items-center gap-2 border border-border hover:border-border-hover text-text-secondary hover:text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-border to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
