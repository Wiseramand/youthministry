"use client"

import { Heart, Users, Tv, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "O que oferecemos",
      subtitle: "Descubra as diversas formas de se conectar e crescer conosco",
      features: [
        {
          icon: Heart,
          title: "Comunidade Unida",
          description: "Faça parte de uma família que se apoia e cresce junta na fé e no amor.",
        },
        {
          icon: Users,
          title: "Grupos de Células",
          description: "Participe de encontros semanais em pequenos grupos para comunhão e estudo.",
        },
        {
          icon: Tv,
          title: "TV ao Vivo",
          description: "Assista aos nossos cultos e programas especiais em tempo real, de qualquer lugar.",
        },
        {
          icon: BookOpen,
          title: "Estudo da Palavra",
          description: "Aprofunde seu conhecimento bíblico através de materiais e estudos direcionados.",
        },
      ],
    },
    en: {
      title: "What We Offer",
      subtitle: "Discover the many ways to connect and grow with us",
      features: [
        {
          icon: Heart,
          title: "United Community",
          description: "Be part of a family that supports each other and grows together in faith and love.",
        },
        {
          icon: Users,
          title: "Cell Groups",
          description: "Participate in weekly meetings in small groups for fellowship and study.",
        },
        {
          icon: Tv,
          title: "Live TV",
          description: "Watch our services and special programs in real time, from anywhere.",
        },
        {
          icon: BookOpen,
          title: "Word Study",
          description: "Deepen your biblical knowledge through targeted materials and studies.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
