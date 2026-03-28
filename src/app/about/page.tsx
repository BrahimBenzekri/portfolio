import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AboutFull } from "@/components/sections/AboutFull"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Brahim Benzekri — Flutter developer, CS student at ESTIN, and 2x hackathon participant.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="content-width">
          <AboutFull />
        </div>
      </main>
      <Footer />
    </>
  )
}
