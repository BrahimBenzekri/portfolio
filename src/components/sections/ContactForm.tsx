"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { meta } from "@/data"

type FormState = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setState("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || "Something went wrong.")
        setState("error")
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.")
      setState("error")
    }
  }

  const inputClass =
    "w-full bg-bg-secondary border border-border hover:border-border-hover focus:border-accent rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted text-sm outline-none transition-all duration-200"

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            // contact
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-text-primary">
            Get in touch
          </h1>
          <p className="text-text-secondary leading-relaxed">
            I&apos;m open to internships, part-time roles, and interesting collaborations.
            Drop me a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <a
            href={`mailto:${meta.email}`}
            className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
          >
            <Mail size={16} className="text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
            {meta.email}
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
          >
            <Github size={16} className="text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
            github.com/BrahimBenzekri
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-200 group"
          >
            <Linkedin size={16} className="text-accent shrink-0 group-hover:scale-110 transition-transform duration-200" />
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Right — Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Success state */}
        {state === "success" && (
          <div className="flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4 text-accent">
            <CheckCircle size={18} className="shrink-0" />
            <p className="text-sm">Message sent! I&apos;ll get back to you soon.</p>
          </div>
        )}

        {/* Error state */}
        {state === "error" && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400">
            <AlertCircle size={18} className="shrink-0" />
            <p className="text-sm">{errorMsg}</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs text-text-muted font-mono uppercase tracking-wider">Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-text-muted font-mono uppercase tracking-wider">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-text-muted font-mono uppercase tracking-wider">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-text-muted font-mono uppercase tracking-wider">Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me what you have in mind..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={state === "loading" || !form.name || !form.email || !form.message}
          className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-bg-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          <Send size={15} />
          {state === "loading" ? "Sending..." : "Send Message"}
        </button>
      </motion.div>
    </div>
  )
}
