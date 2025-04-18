import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import Image from "next/image"
import type { Locale } from "@/types"
import MotionSection from "@/components/animations/motion-section"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: "About Us",
    description: "Learn more about Samael Consulting and our team of experts.",
  }
}

export default async function About({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <MotionSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">{dict.about.title}</h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">{dict.about.intro}</p>
            <p className="text-lg text-gray-700">{dict.about.mission}</p>
            <p className="text-lg text-gray-700">{dict.about.vision}</p>
          </div>
        </FadeIn>
        <FadeIn direction="left" className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/collaborative-office-discussion.png"
            alt={dict.about.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </FadeIn>
      </MotionSection>

      <MotionSection className="mt-20" delay={0.2}>
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-900">{dict.about.teamTitle}</h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {dict.about.team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/strategic-planning-session.png`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
              <p className="text-gold-600 mb-3">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </StaggerChildren>
      </MotionSection>
    </div>
  )
}
