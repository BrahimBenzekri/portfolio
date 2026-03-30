"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { meta } from "@/data"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="content-width">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-7"
        >
          {/* Label */}
          <motion.p
            variants={item}
            className="text-xs font-mono uppercase tracking-[0.25em] text-accent"
          >
            Hey, I&apos;m
          </motion.p>

          {/* Name — huge */}
          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-text-primary leading-none tracking-tight"
          >
            {meta.name}
          </motion.h1>

          {/* Title with blinking cursor */}
          <motion.div variants={item} className="flex items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary">
              <span className="text-accent">Flutter</span> Developer
            </h2>
            <span className="cursor-blink text-accent text-2xl md:text-3xl font-thin leading-none select-none">
              |
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-text-secondary text-lg leading-relaxed max-w-xl"
          >
            {meta.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            <a
              href={meta.cvUrl}
              download
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 text-text-secondary hover:text-accent px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="flex items-center gap-5 pt-1"
          >
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-accent transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${meta.email}`}
              aria-label="Email"
              className="text-text-muted hover:text-accent transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
