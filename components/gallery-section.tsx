"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function GallerySection() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "Nossos Momentos",
      subtitle: "Confira alguns registros especiais das nossas atividades e encontros",
      images: [
        { src: "/images/teens.jpg", alt: "Teens Ministry - Encontro YES" },
        { src: "/images/youth.jpg", alt: "Youth Ministry - Adoração em massa" },
        { src: "/images/hero-home.webp", alt: "Jovens em oração e adoração" },
        { src: "/youth-community-service-helping-others.jpg", alt: "Serviço comunitário" },
        { src: "/young-people-at-church-conference-event.jpg", alt: "Conferência de jovens" },
        { src: "/diverse-youth-group-smiling-together.jpg", alt: "Nossa comunidade" },
      ],
    },
    en: {
      title: "Our Moments",
      subtitle: "Check out some special captures from our activities and gatherings",
      images: [
        { src: "/images/teens.jpg", alt: "Teens Ministry - YES Meeting" },
        { src: "/images/youth.jpg", alt: "Youth Ministry - Mass Worship" },
        { src: "/images/hero-home.webp", alt: "Youth in prayer and worship" },
        { src: "/youth-community-service-helping-others.jpg", alt: "Community service" },
        { src: "/young-people-at-church-conference-event.jpg", alt: "Youth conference" },
        { src: "/diverse-youth-group-smiling-together.jpg", alt: "Our community" },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.images.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-background text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
