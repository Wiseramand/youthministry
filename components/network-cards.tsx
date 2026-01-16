"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function NetworkCards() {
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "Junte-se à Nossa Rede",
      subtitle: "Faça parte de uma comunidade global de jovens transformando o mundo através da Palavra de Deus",
      joinNetwork: "JUNTA-TE A NOSSA REDE",
      networks: [
        {
          id: "teenagers",
          title: "Adolescentes",
          description: "Impactando seu mundo",
          image: "/images/teens.jpg",
          href: "/adolescentes",
          color: "bg-cyan-400",
        },
        {
          id: "youths",
          title: "Jovens",
          description: "Impactando seu mundo",
          image: "/images/youth.jpg",
          href: "/jovens",
          color: "bg-cyan-500",
        },
        {
          id: "teevo",
          title: "Clubes TeeVo",
          description: "Adolescentes impactando suas escolas ao redor do mundo",
          image: "/teenagers-with-teevo-magazines-at-school.jpg",
          href: "/teevo-clubs",
          color: "bg-green-500",
        },
      ],
    },
    en: {
      title: "Join Our Network",
      subtitle: "Be part of a global community of young people transforming the world through God's Word",
      joinNetwork: "JOIN OUR NETWORK",
      networks: [
        {
          id: "teenagers",
          title: "Teenagers",
          description: "Impacting their world",
          image: "/images/teens.jpg",
          href: "/adolescentes",
          color: "bg-cyan-400",
        },
        {
          id: "youths",
          title: "Youths",
          description: "Impacting their world",
          image: "/images/youth.jpg",
          href: "/jovens",
          color: "bg-cyan-500",
        },
        {
          id: "teevo",
          title: "TeeVo Clubs",
          description: "Teenagers impacting their schools around the world",
          image: "/teenagers-with-teevo-magazines-at-school.jpg",
          href: "/teevo-clubs",
          color: "bg-green-500",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.networks.map((network) => (
            <Link key={network.id} href={network.href} className="group block">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`h-3 ${network.color}`} />
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={network.image || "/placeholder.svg"}
                    alt={network.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${network.color} mb-3`}
                  >
                    {t.joinNetwork}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{network.title}</h3>
                  <div className={`w-12 h-1 ${network.color} mb-3`} />
                  <p className="text-muted-foreground text-sm">{network.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
