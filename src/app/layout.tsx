import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { meta } from "@/data"

export const metadata: Metadata = {
  title: {
    default: `${meta.name} — ${meta.title}`,
    template: `%s | ${meta.name}`,
  },
  description: meta.subtitle,
  keywords: ["Flutter developer", "mobile developer", "CS student", "ESTIN", "Algeria", "Dart"],
  authors: [{ name: meta.name }],
  openGraph: {
    title: `${meta.name} — ${meta.title}`,
    description: meta.subtitle,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
