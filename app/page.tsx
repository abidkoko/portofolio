"use client"

import { useEffect, useState } from "react"
import { PageLoader, MouseFollower, ScrollProgress } from "@/components/effects/global-effects"
import { ParticlesBackground, FloatingBlobs } from "@/components/effects/particles-background"
import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { VideosSection } from "@/components/sections/videos-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#050816] overflow-x-hidden">
      {/* Page loader */}
      <PageLoader />

      {/* Global effects */}
      <ScrollProgress />
      <MouseFollower />
      <FloatingBlobs />
      
      {/* Particles background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <VideosSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
