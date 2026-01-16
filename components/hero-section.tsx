"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { MembershipModal } from "@/components/membership-modal"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    pt: {
      badge: "Ministério de Jovens e Adolescentes",
      title: "Transformando Vidas,",
      titleHighlight: "Impactando",
      titleEnd: " Gerações",
      description:
        "Junte-se ao Ministério de Jovens e Adolescentes do Grupo Angola, Christ Embassy. Uma comunidade vibrante onde jovens são capacitados para fazer a diferença no mundo.",
      cta: "Seja Membro",
      watchTv: "Assistir TV ao Vivo",
      members: "Membros",
      provinces: "Províncias",
    },
    en: {
      badge: "Youth and Teens Ministry",
      title: "Transforming Lives,",
      titleHighlight: "Impacting",
      titleEnd: " Generations",
      description:
        "Join the Youth and Teens Ministry of Angola Group, Christ Embassy. A vibrant community where young people are empowered to make a difference in the world.",
      cta: "Become a Member",
      watchTv: "Watch Live TV",
      members: "Members",
      provinces: "Provinces",
    },
  }

  const t = content[language]

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-sm">{t.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t.title} <span className="text-primary">{t.titleHighlight}</span>
                {t.titleEnd}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">{t.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => setMembershipOpen(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t.cta}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {t.watchTv}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-home.webp"
                  alt="Jovens em adoração"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-primary-foreground">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-xs">{t.members}</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-secondary-foreground">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-xs">{t.provinces}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </>
  )
}
