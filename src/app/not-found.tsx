import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 max-w-md">
        <div className="space-y-2">
          <p className="text-[10rem] font-black leading-none text-border/40 select-none font-mono">
            404
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Lost in the stack?
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Trouble at runtime. The page you&apos;re looking for has been garbage collected or never existed.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-bg-primary font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/10"
          >
            Return to Root
          </Link>
        </div>
      </div>
    </div>
  )
}
