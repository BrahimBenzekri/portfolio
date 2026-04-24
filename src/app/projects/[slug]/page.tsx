import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProjectDetail } from "@/components/sections/ProjectDetail"
import { projects, getProjectBySlug } from "@/data"

type Props = {
  params: Promise<{ slug: string }>
}

// Pre-generate all project detail pages at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.shortDesc,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="content-width">
          <ProjectDetail project={project} />
        </div>
      </main>
      <Footer />
    </>
  )
}
