import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Tv, Heart, Users, Globe, Church, Quote, ArrowRight } from "lucide-react"

const ministryActivities = [
  {
    icon: BookOpen,
    title: "Rhapsody of Realities",
    description:
      "Devocional diário que é uma ferramenta chave para o crescimento espiritual, traduzido em mais de 7.000 línguas.",
  },
  {
    icon: Tv,
    title: "LoveWorld Networks",
    description:
      "Ministério de mídia global (TV, internet) transmitindo conteúdo cristão para bilhões em todo o mundo.",
  },
  {
    icon: Heart,
    title: "Healing School",
    description: "Ministério focado na cura divina, onde milhares experimentam milagres e restauração.",
  },
  {
    icon: Users,
    title: "InnerCity Mission",
    description: "ONG que alcança crianças carentes para quebrar ciclos de pobreza através de educação e cuidado.",
  },
  {
    icon: Church,
    title: "Cultos e Cruzadas",
    description: "Assembleias locais e eventos evangelísticos em grande escala que transformam nações.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Presença em mais de 244 países com milhões de membros e parceiros do ministério.",
  },
]

export default function FundadorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  O Fundador
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Pastor Chris Oyakhilome</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fundador do LoveWorld Incorporated (Christ Embassy), um ministério global que tem impactado bilhões de
                  vidas através da Palavra de Deus.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/parcerias">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Seja Parceiro
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-md mx-auto">
                  <Image
                    src="/images/fundador.jpg"
                    alt="Pastor Chris Oyakhilome"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                    <p className="text-3xl font-bold">40+</p>
                    <p className="text-sm">Anos de Ministério</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Trajetória</h2>

              <div className="space-y-8">
                <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Início do Ministério</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O Pastor Chris Oyakhilome, PhD, é o presidente do LoveWorld Inc., também conhecido como Christ
                    Embassy. Ele começou seu ministério ainda jovem, na Universidade de Ambrose Alli, Ekpoma, na
                    Nigéria, onde fundou o grupo "Believers&apos; LoveWorld Fellowship" que mais tarde se tornaria o
                    ministério global que conhecemos hoje.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Desde o início, o Pastor Chris demonstrou um compromisso inabalável com a propagação do Evangelho e
                    a demonstração do poder do Espírito Santo. Seu ministério é marcado por sinais, maravilhas e
                    milagres que têm transformado milhões de vidas em todo o mundo.
                  </p>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Um Visionário Global</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Com uma visão de levar a presença divina de Deus às nações e povos do mundo, o Pastor Chris
                    estabeleceu uma rede de ministérios que alcança todos os continentes. Através de tecnologia de
                    ponta, televisão, internet e publicações, o ministério LoveWorld toca bilhões de pessoas
                    diariamente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O "Rhapsody of Realities", devocional diário escrito pelo Pastor Chris, é o devocional mais
                    distribuído do mundo, traduzido em mais de 7.000 línguas e dialectos, com mais de bilhões de cópias
                    distribuídas globalmente.
                  </p>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Impacto Humanitário</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Além do ministério espiritual, o Pastor Chris fundou a InnerCity Mission, uma organização que tem
                    transformado a vida de milhões de crianças carentes em todo o mundo, provendo educação, alimentação
                    e cuidados de saúde. Seu compromisso com a humanidade vai além das paredes da igreja, demonstrando o
                    amor de Cristo de forma prática e tangível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 text-balance">
                &ldquo;Quando você conhece a Palavra de Deus e a pratica, sua vida se torna uma expressão extraordinária
                da graça e glória de Deus.&rdquo;
              </blockquote>
              <cite className="text-lg opacity-80">— Pastor Chris Oyakhilome</cite>
            </div>
          </div>
        </section>

        {/* Ministry Activities */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Como o Ministério Actua</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As principais iniciativas e programas do ministério LoveWorld no mundo
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministryActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <activity.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl p-8 md:p-12 text-center text-secondary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Faça Parte Desta Visão</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Junte-se a milhões de parceiros que estão ajudando a levar o Evangelho ao mundo inteiro. Comece a partir
                de apenas 100 Kz.
              </p>
              <Link href="/parcerias">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Seja Parceiro Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
