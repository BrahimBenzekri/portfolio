// Home page — assembles all sections in order.
// Each section is a separate component in /components/sections/
// All content is pulled from @/data — nothing is hardcoded here.

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSnippet } from "@/components/sections/AboutSnippet"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { HackathonStrip } from "@/components/sections/HackathonStrip"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSnippet />
        <SkillsSection />
        <FeaturedProjects />
        <HackathonStrip />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
