import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Locale } from "@/types"
import MotionSection from "@/components/animations/motion-section"
import FadeIn from "@/components/animations/fade-in"
import FAQSection from "@/components/faq-section"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: "Contact Us",
    description: "Get in touch with Samael Consulting for expert business advice.",
  }
}

export default async function Contact({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">{dict.contact.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose max-w-none">
          <p>{dict.contact.description}</p>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-navy-900">{dict.contact.formTitle}</h2>
          <ContactForm dictionary={dict.contact.form} lang={params.lang} />
        </div>
      </div>
    </div>
  )
}
