import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { EmailCaptureCTA } from "@/components/email-capture-cta"
import { Footer } from "@/components/footer"
import { SectionFade } from "@/components/section-fade"

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <HeroSection />
      <SectionFade><HowItWorks /></SectionFade>
      <SectionFade><FeaturesSection /></SectionFade>
      <SectionFade><TestimonialsSection /></SectionFade>
      <SectionFade><PricingSection /></SectionFade>
      <SectionFade><EmailCaptureCTA /></SectionFade>
      <Footer />
    </main>
  )
}
