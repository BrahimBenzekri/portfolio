import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="text-8xl font-bold text-border">404</p>
        <h1 className="text-2xl font-bold text-text-primary">Page not found</h1>
        <p className="text-text-secondary">
          Looks like this page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg transition-colors duration-200"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}
