import AboutSection from "@/components/ui/AboutSection"
import { EventsSection } from "@/components/ui/EventsSection"
import FeatureDivider from "@/components/ui/FeatureDivider"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div>
        <Hero />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <AboutSection />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <EventsSection />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <Map />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
    </main>
  )
}
