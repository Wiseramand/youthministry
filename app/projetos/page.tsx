import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Acampamento de Jovens 2025",
    description:
      "Um encontro anual de três dias para jovens de todas as províncias, com momentos de adoração, ensino e comunhão.",
    image: "/youth-camp-outdoor-activities.jpg",
    date: "Julho 2025",
    location: "Huambo",
    participants: "500+",
    category: "Evento",
  },
  {
    title: "Projeto Esperança",
    description:
      "Programa de mentoria e apoio escolar para jovens em comunidades carentes, oferecendo aulas de reforço e orientação vocacional.",
    image: "/youth-education-tutoring-program.jpg",
    date: "Em andamento",
    location: "Luanda",
    participants: "200+",
    category: "Social",
  },
  {
    title: "Louvor nas Ruas",
    description:
      "Evangelismo criativo através da música e artes, levando a mensagem do Evangelho às praças e espaços públicos.",
    image: "/street-worship-youth-music.jpg",
    date: "Mensal",
    location: "Todas as Províncias",
    participants: "100+",
    category: "Evangelismo",
  },
  {
    title: "Conferência Anual",
    description:
      "Grande conferência reunindo jovens de todo o país para três dias de transformação espiritual e capacitação.",
    image: "/large-youth-conference-stage.jpg",
    date: "Dezembro 2025",
    location: "Luanda",
    participants: "3000+",
    category: "Evento",
  },
  {
    title: "Células de Jovens",
    description:
      "Encontros semanais em pequenos grupos para estudo bíblico, oração e comunhão, fortalecendo os laços de amizade.",
    image: "/small-group-bible-study-youth.jpg",
    date: "Semanal",
    location: "Todas as Províncias",
    participants: "2000+",
    category: "Discipulado",
  },
  {
    title: "Missões Rurais",
    description:
      "Expedições missionárias para comunidades rurais, oferecendo assistência social e compartilhando o amor de Cristo.",
    image: "/rural-mission-trip-youth.jpg",
    date: "Trimestral",
    location: "Interior de Angola",
    participants: "50+",
    category: "Missões",
  },
]

const categories = ["Todos", "Evento", "Social", "Evangelismo", "Discipulado", "Missões"]

export default function ProjetosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nossos Projetos</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça as iniciativas e programas que desenvolvemos para impactar a vida dos jovens e adolescentes em
                Angola.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "Todos"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{project.participants} participantes</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Saber Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quer participar de um projeto?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Junte-se a nós e faça parte desta transformação. Seja como voluntário ou participante, há sempre uma forma
              de contribuir.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/membro">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Seja Membro
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Contactar-nos
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
