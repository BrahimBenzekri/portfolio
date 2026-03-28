"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { hackathons } from "@/data"

export function HackathonStrip() {
  return (
    <section className="py-16 px-6 border-y border-accent/20 bg-accent/5">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <p className="text-accent text-xs font-mono tracking-widest uppercase">
            Hackathon Experience
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {hackathons.map((h, index) => (
              <motion.div
                key={h.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
              >
                <Link
                  href={`/projects/${h.slug}`}
                  className="group flex items-center gap-3 bg-bg-secondary border border-border hover:border-accent/40 rounded-xl px-6 py-4 transition-all duration-200"
                >
                  <Trophy size={18} className="text-accent shrink-0" />
                  <div className="text-left">
                    <p className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors duration-200">
                      {h.project}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5">
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
