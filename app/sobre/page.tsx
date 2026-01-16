import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Target, Eye, Heart, Users, Globe, BookOpen, Sparkles, Star } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Amor",
    description: "Amar a Deus e ao próximo é o fundamento de tudo o que fazemos.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Crescemos juntos em unidade, apoiando uns aos outros em todas as circunstâncias.",
  },
  {
    icon: Globe,
    title: "Missão",
    description: "Levamos a mensagem de esperança e transformação a todas as nações.",
  },
  {
    icon: BookOpen,
    title: "Palavra",
    description: "A Bíblia é nossa fonte de sabedoria e guia para todas as decisões.",
  },
]

const leadership = [
  {
    name: "Pastor Chris Oyakhilome",
    role: "Fundador - Christ Embassy",
    image: "/images/fundador.jpg",
  },
  {
    name: "Pastor Regional",
    role: "Líder - Grupo Angola",
    image: "/church-leader-smiling-portrait.jpg",
  },
  {
    name: "Coordenador de Jovens",
    role: "MJA Angola",
    image: "/young-church-leader-portrait.jpg",
  },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre Nós</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça o Ministério de Jovens e Adolescentes do Grupo Angola, Christ Embassy. Uma comunidade vibrante
                dedicada a transformar vidas através da fé, amor e serviço.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/nossa-historia.png"
                  alt="Nossa história"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Nossa História</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Ministério de Jovens e Adolescentes do Grupo Angola faz parte da família LoveWorld (Christ Embassy),
                  fundada pelo Pastor Chris Oyakhilome. Nossa missão é alcançar jovens e adolescentes com a mensagem
                  transformadora do Evangelho.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde a nossa fundação, temos impactado milhares de jovens em todas as 18 províncias de Angola,
                  capacitando-os para serem líderes em suas comunidades e agentes de mudança positiva na sociedade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Através de programas educacionais, eventos de adoração, serviço comunitário e mentoria espiritual,
                  continuamos a expandir nosso alcance e impacto na vida dos jovens angolanos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Visão, Missão e Propósito</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os pilares que guiam o ministério LoveWorld em todo o mundo
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <ul className="text-muted-foreground leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Levar a presença divina de Deus às nações e povos do mundo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Demonstrar o carácter do Espírito Santo.</span>
                  </li>
                </ul>
              </div>

              {/* Mission */}
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <ul className="text-muted-foreground leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Levantar gerações de homens e mulheres que entrarão na sua herança para cumprir o sonho de Deus.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Fazer discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo
                      (Mateus 28:19).
                    </span>
                  </li>
                </ul>
              </div>

              {/* Purpose */}
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Propósito</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trazer as pessoas à sua herança divina em Cristo, capacitando cada crente a viver uma vida de
                  propósito, poder e impacto no mundo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam todas as nossas ações e decisões
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Liderança</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça os líderes que guiam e inspiram nossa comunidade
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{leader.name}</h3>
                  <p className="text-muted-foreground text-sm">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
