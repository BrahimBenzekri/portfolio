import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects by Brahim Benzekri — Flutter apps, hackathon builds, and personal tools.",
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="content-width">
          <ProjectsGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
