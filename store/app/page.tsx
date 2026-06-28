import { HeroSection } from "@/components/home/HeroSection"
import { TickerBar } from "@/components/home/TickerBar"
import { HealthScienceSection } from "@/components/home/HealthScienceSection"
import { ProductShowcase } from "@/components/home/ProductShowcase"
import { PackagingBags } from "@/components/home/PackagingBags"
import { WhyGrainary } from "@/components/home/WhyGrainary"
import { Subscription } from "@/components/home/Subscription"
import { Reviews } from "@/components/home/Reviews"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <HealthScienceSection />
      <ProductShowcase />
      <PackagingBags />
      <WhyGrainary />
      <Subscription />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  )
}
