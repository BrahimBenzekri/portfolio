"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { testimonials, showTestimonials } from "@/data"

export function TestimonialsSection() {
  if (!showTestimonials) return null

  return (
    <section className="section-padding">
      <div className="content-width">
        <SectionHeader
          title="What People Say"
          subtitle="Feedback from teammates and collaborators"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4"
            >
              <Quote size={20} className="text-accent/40" />
              <p className="text-text-secondary leading-relaxed text-sm">{t.text}</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-bg-tertiary border border-border shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
