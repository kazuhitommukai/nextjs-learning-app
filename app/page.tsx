import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { FlowSection } from "@/components/flow-section"
import { AccessSection } from "@/components/access-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FlowSection />
      <CTASection />
      <AccessSection />
      <Footer />
    </main>
  )
}
