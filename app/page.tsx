'use client'

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import RecentWorks from "@/components/recent-works"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { useAnalytics } from "@/hooks/useAnalytics";

export default function Home() {

  useAnalytics();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <RecentWorks />
      <Experience />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}
