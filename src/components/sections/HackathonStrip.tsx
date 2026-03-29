"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { hackathons } from "@/data"

export function HackathonStrip() {
  return (
    <section className="py-20 px-6 border-y border-accent/20 bg-accent/[0.03]">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <div className="space-y-2">
            <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              // hackathons
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              2× Hackathon Participant
            </h2>
            <p className="text-text-muted text-sm">
              Built and shipped under pressure — real problems, real deadlines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {hackathons.map((h, index) => (
              <motion.div
                key={h.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/projects/${h.slug}`}
                  className="group flex items-center gap-4 bg-bg-secondary border border-border hover:border-accent/40 rounded-xl px-8 py-5 transition-all duration-200"
                  style={{ boxShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "var(--glow)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 0 transparent"
                  }}
                >
                  <div className="shrink-0" style={{ filter: "drop-shadow(0 0 8px rgba(45,212,191,0.5))" }}>
                    <Trophy size={26} className="text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-text-primary font-bold text-base group-hover:text-accent transition-colors duration-200">
                      {h.project}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5 font-mono">
                      {h.name} · {h.year}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
