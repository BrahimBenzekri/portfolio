"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { experiences } from "@/data"

export function ExperienceSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
        >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// experience</p>
            <h2 className="text-2xl font-bold text-text-primary">Professional Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={`${exp.company}-${i}`}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="group relative bg-bg-secondary border border-border rounded-xl p-6 hover:border-border-hover transition-colors duration-200"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <Briefcase size={18} />
                                </div>
                                <div>
                                    <h3 className="text-text-primary font-bold text-lg leading-tight">
                                        {exp.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                                        <span className="text-accent font-medium">{exp.company}</span>
                                        <div className="flex items-center gap-1.5 text-text-muted text-sm font-mono">
                                            <MapPin size={14} />
                                            {exp.location}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-text-muted text-sm font-mono">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="mt-6 space-y-3">
                            {exp.description.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
