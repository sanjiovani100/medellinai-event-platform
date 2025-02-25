import {
  RiCommunityLine,
  RiLightbulbLine,
  RiTeamLine,
} from "@remixicon/react"
import { cx } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cx("flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md", className)}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section
      aria-label="About Medellin AI"
      id="about"
      className="relative mx-auto max-w-6xl scroll-my-24 py-16"
    >
      <div className="mb-12 text-center">
        <h2 className="relative inline-block text-lg font-semibold tracking-tight text-orange-500">
          About Medellin AI
          <div className="absolute -bottom-1 left-0 h-[3px] w-full rounded-sm bg-orange-500" />
        </h2>
        <p className="mt-4 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Building the Future of AI Together
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-balance text-gray-700">
          Medellin AI is a vibrant community dedicated to advancing artificial intelligence 
          through collaboration, education, and networking. We bring together AI enthusiasts, 
          professionals, researchers, and businesses to foster innovation and growth in the AI ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureCard
          icon={<RiCommunityLine className="size-6" />}
          title="Community Focus"
          description="Join a supportive network of AI professionals and enthusiasts who share knowledge, experiences, and opportunities in a collaborative environment."
        />
        <FeatureCard
          icon={<RiLightbulbLine className="size-6" />}
          title="Knowledge Sharing"
          description="Access workshops, talks, and resources led by industry experts to stay at the forefront of AI advancements and best practices."
        />
        <FeatureCard
          icon={<RiTeamLine className="size-6" />}
          title="Networking"
          description="Connect with like-minded individuals and organizations to build meaningful relationships that can lead to collaborations and career growth."
        />
      </div>
    </section>
  )
}
