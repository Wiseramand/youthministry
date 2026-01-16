"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TeevoClubModal } from "@/components/teevo-club-modal"

const teevoImages = [
  {
    src: "/teenagers-at-school-with-teevo-magazine-discussing.jpg",
    alt: "Adolescentes com revista Teevo",
  },
  {
    src: "/young-people-at-school-hallway-sharing-gospel.jpg",
    alt: "Jovens compartilhando o evangelho",
  },
  {
    src: "/teenagers-smiling-with-teevo-materials-school.jpg",
    alt: "Adolescentes com materiais Teevo",
  },
  {
    src: "/students-at-university-campus-christian-fellowship.jpg",
    alt: "Estudantes em comunhão",
  },
]

export default function TeevoClubsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Turquoise/Cyan background */}
        <section className="bg-cyan-400 py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <p className="text-cyan-900 font-semibold tracking-widest mb-4">SOBRE</p>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-8">Teevo Clubs</h1>
            <p className="text-cyan-800 text-lg leading-relaxed max-w-3xl mx-auto">
              Os TeeVo Clubs são comunhões estrategicamente colocadas em cada escola para a propagação do evangelho
              através de vários meios. Através destes clubes TeeVo, cada escola é penetrada com a verdade à medida que a
              mensagem é pregada através do estabelecimento de cada comunhão. Assim, criando uma plataforma para os
              adolescentes crescerem espiritualmente e influenciarem positivamente os seus colegas. Muitas vidas são
              transformadas devido à poderosa mensagem na Rapsódia de Realidades TeeVo, trazendo clareza, propósito e
              direção para mentes jovens.
            </p>
          </div>
        </section>

        {/* Images Gallery Section */}
        <section className="bg-cyan-400 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {teevoImages.map((image, index) => (
                <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is TeeVo Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              O Que é o Rapsódia de Realidades TeeVo?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
              O Rapsódia de Realidades TeeVo é uma versão especial do devocional diário Rapsódia de Realidades,
              projetada especificamente para adolescentes. Ele apresenta a Palavra de Deus de uma forma envolvente e
              relevante para os jovens, ajudando-os a desenvolver uma relação profunda com Deus e a entender seu
              propósito na vida.
            </p>
            <div className="flex justify-center">
              <TeevoClubModal>
                <Button className="bg-primary hover:bg-primary/90 px-8 py-3">Começar um Clube TeeVo</Button>
              </TeevoClubModal>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-cyan-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Benefícios de Juntar-se a um Clube TeeVo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-900">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Crescimento Espiritual</h3>
                <p className="text-muted-foreground">
                  Desenvolva uma fé forte e um relacionamento profundo com Deus através do estudo diário da Palavra.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-900">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Comunidade</h3>
                <p className="text-muted-foreground">
                  Conecte-se com outros jovens que compartilham a mesma fé e valores cristãos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-900">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Impacto</h3>
                <p className="text-muted-foreground">
                  Torne-se um agente de transformação na sua escola e comunidade através do evangelho.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para Começar?</h2>
            <p className="text-white/80 text-lg mb-8">
              Junte-se a milhares de adolescentes ao redor do mundo que estão impactando suas escolas através dos Clubes
              TeeVo.
            </p>
            <TeevoClubModal>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-3">
                Inscrever-se Agora
              </Button>
            </TeevoClubModal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
