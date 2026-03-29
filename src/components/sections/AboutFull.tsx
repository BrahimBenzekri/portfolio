"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Download, Trophy, GraduationCap } from "lucide-react"
import { meta, skills, education, hackathons, languages } from "@/data"

const categoryOrder = [
  "Language",
  "Framework",
  "State Management",
  "Backend",
  "Tool",
  "OS",
  "Other",
]

export function AboutFull() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-12 items-start"
      >
        <div className="md:col-span-2 space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// about</p>
          <h1 className="text-5xl md:text-6xl font-black text-text-primary leading-tight">
            About Me
          </h1>
          <p className="text-text-secondary leading-relaxed text-lg">{meta.subtitle}</p>
          <p className="text-text-secondary leading-relaxed">
            I started coding during high school and fell in love with building things for mobile. Flutter clicked
            immediately — one codebase, beautiful UIs, and Dart is genuinely a great language. Since then
            I&apos;ve been obsessing over state management patterns, clean architecture, and shipping things that
            actually work for real people.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Outside of code, I&apos;m into design, following the Flutter and open source communities, and
            occasionally breaking my Arch Linux setup at 2am.
          </p>
          <a
            href={meta.cvUrl}
            download
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 rounded-2xl overflow-hidden border border-border bg-bg-secondary"
            style={{ boxShadow: "var(--glow)" }}>
            <Image src={meta.avatar} alt={meta.name} fill className="object-cover" />
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// education</p>
        <h2 className="text-2xl font-bold text-text-primary">Education</h2>
        <div className="flex items-start gap-4 bg-bg-secondary border border-border rounded-xl p-6">
          <GraduationCap size={20} className="text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-text-primary font-semibold">{education.degree}</p>
            <p className="text-text-secondary text-sm mt-1">
              {education.school} · {education.location} · {education.year}
            </p>
            <p className="text-text-muted text-sm mt-0.5 font-mono">{education.graduation}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {education.coursework.map((c) => (
                <span key={c} className="text-xs font-mono bg-accent/5 border border-accent/15 text-accent/70 px-2 py-1 rounded">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hackathons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// hackathons</p>
        <h2 className="text-2xl font-bold text-text-primary">Hackathon History</h2>
        <div className="space-y-4">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.slug}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-bg-secondary border border-border rounded-xl p-6"
            >
              <div style={{ filter: "drop-shadow(0 0 6px rgba(45,212,191,0.4))" }}>
                <Trophy size={18} className="text-accent mt-0.5 shrink-0" />
              </div>
              <div>
                <p className="text-text-primary font-semibold">{h.project}</p>
                <p className="text-text-secondary text-sm mt-1">{h.description}</p>
                <p className="text-text-muted text-xs mt-1 font-mono">{h.name} · {h.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// skills</p>
        <h2 className="text-2xl font-bold text-text-primary">Skills</h2>
        <div className="space-y-4">
          {categoryOrder.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat)
            if (catSkills.length === 0) return null
            return (
              <div key={cat}>
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {catSkills.map((s) => (
                    <span
                      key={s.name}
                      className="text-sm font-mono px-3 py-1.5 bg-accent/5 border border-accent/15 text-accent/80 rounded-lg"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// languages</p>
        <h2 className="text-2xl font-bold text-text-primary">Languages</h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((l) => (
            <div key={l.name} className="bg-bg-secondary border border-border rounded-xl px-6 py-4 text-center">
              <p className="text-text-primary font-semibold">{l.name}</p>
              <p className="text-accent text-xs mt-0.5 font-mono">{l.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
