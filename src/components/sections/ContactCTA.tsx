"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { meta } from "@/data"

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-bg-secondary border border-border rounded-2xl p-12 text-center space-y-6"
        >
          <p className="text-accent text-xs font-mono tracking-widest uppercase">
            Open to opportunities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Let&apos;s work together
          </h2>
          <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
            I&apos;m looking for internships, part-time roles, and interesting collaborations.
            If you have something in mind, let&apos;s talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${meta.email}`}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {meta.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
