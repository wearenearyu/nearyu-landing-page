import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { VelocityScroll } from "@/components/sections/velocity-scroll"
import { FeaturesGrid } from "@/components/sections/features"
import { UserToggleSection } from "@/components/sections/user-toggle"
import { BackToTop } from "@/components/ui/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white relative">
      <Navbar />
      <HeroSection />
      <VelocityScroll />
      <FeaturesGrid />
      <UserToggleSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
