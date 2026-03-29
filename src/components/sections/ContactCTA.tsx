"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { meta } from "@/data"

const tickerText = "LET'S WORK · GET IN TOUCH · OPEN TO OPPORTUNITIES · HIRE ME · "

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-bg-secondary border border-border rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--glow)" }}
        >
          {/* Scrolling ticker */}
          <div className="border-b border-border/60 bg-accent/5 py-3 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap gap-0 select-none">
              {/* duplicate for seamless loop */}
              {[...Array(2)].map((_, i) => (
                <span
                  key={i}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-accent/70 pr-0"
                  aria-hidden={i === 1}
                >
                  {tickerText.repeat(6)}
                </span>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="p-10 md:p-14 text-center space-y-6">
            <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              Open to opportunities
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary leading-tight">
              Got something
              <br />
              <span className="text-accent">in mind?</span>
            </h2>
            <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
              Looking for internships, part-time roles, and interesting collaborations.
              I build fast and I care about quality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary px-7 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${meta.email}`}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 font-mono"
              >
                {meta.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
