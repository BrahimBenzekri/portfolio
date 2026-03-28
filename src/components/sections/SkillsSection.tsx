"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { skills } from "@/data"

const categoryOrder = [
  "Language",
  "Framework",
  "State Management",
  "Backend",
  "Tool",
  "OS",
  "Other",
]

const categoryColors: Record<string, string> = {
  Language: "text-blue-400",
  Framework: "text-purple-400",
  "State Management": "text-green-400",
  Backend: "text-orange-400",
  Tool: "text-yellow-400",
  OS: "text-red-400",
  Other: "text-text-muted",
}

const levelDots: Record<string, number> = {
  Advanced: 3,
  Intermediate: 2,
  Beginner: 1,
}

export function SkillsSection() {
  const grouped = categoryOrder.reduce(
    (acc, cat) => {
      const catSkills = skills.filter((s) => s.category === cat)
      if (catSkills.length > 0) acc[cat] = catSkills
      return acc
    },
    {} as Record<string, typeof skills>
  )

  return (
    <section className="section-padding">
      <div className="content-width">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(grouped).map(([category, catSkills], groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08, ease: "easeOut" }}
              className="bg-bg-secondary border border-border rounded-xl p-6 space-y-4"
            >
              <p className={`text-xs font-mono font-semibold uppercase tracking-widest ${categoryColors[category] ?? "text-text-muted"}`}>
                {category}
              </p>
              <div className="space-y-3">
                {catSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">{skill.name}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dot <= levelDots[skill.level]
                              ? "bg-accent"
                              : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
