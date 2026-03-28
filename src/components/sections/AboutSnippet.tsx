"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { meta, education } from "@/data"

export function AboutSnippet() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">About me</p>
              <h2 className="text-3xl font-bold text-text-primary">
                Building things that matter
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed">
              I&apos;m a second-year CS student at{" "}
              <span className="text-text-primary font-medium">{education.school}</span> in{" "}
              {education.location}, specializing in Flutter mobile development.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I&apos;ve shipped apps across two national hackathons and I&apos;m always building
              something on the side — from AI-powered tools to full-stack mobile platforms.
              I care about clean code, good UX, and solving real problems.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200 font-medium"
            >
              More about me
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-border bg-bg-secondary">
              <Image
                src={meta.avatar}
                alt={meta.name}
                fill
                className="object-cover"
              />
              {/* Fallback initials if no avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-border">BB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
