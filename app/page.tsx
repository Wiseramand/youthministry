import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NetworkCards } from "@/components/network-cards"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NetworkCards />
        <FeaturesSection />
        <GallerySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
