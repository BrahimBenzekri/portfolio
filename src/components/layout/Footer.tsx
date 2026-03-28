import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { meta } from "@/data"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="content-width flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} {meta.name} · Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <Link
            href="/contact"
            aria-label="Email"
            className="text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
