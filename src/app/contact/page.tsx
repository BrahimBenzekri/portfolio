import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Brahim Benzekri — open to internships, part-time roles, and collaborations.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="content-width">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
