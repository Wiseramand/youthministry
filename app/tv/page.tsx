"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Play, Calendar, Clock, Radio, Video, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const schedule = [
  {
    day: "Domingo",
    programs: [
      { time: "09:00", name: "Culto de Celebração", type: "Ao Vivo" },
      { time: "15:00", name: "Programa Jovem", type: "Ao Vivo" },
      { time: "19:00", name: "Culto da Noite", type: "Ao Vivo" },
    ],
  },
  {
    day: "Quarta-feira",
    programs: [{ time: "19:00", name: "Estudo Bíblico", type: "Ao Vivo" }],
  },
  {
    day: "Sexta-feira",
    programs: [{ time: "19:00", name: "Vigília de Jovens", type: "Ao Vivo" }],
  },
  {
    day: "Sábado",
    programs: [
      { time: "14:00", name: "Encontro de Adolescentes", type: "Ao Vivo" },
      { time: "17:00", name: "Louvor & Adoração", type: "Gravado" },
    ],
  },
]

const pastPrograms = [
  {
    title: "Conferência de Jovens 2024",
    date: "15 Dezembro 2024",
    thumbnail: "/youth-conference-video-thumbnail.jpg",
    duration: "2:30:00",
  },
  {
    title: "Testemunhos de Transformação",
    date: "10 Dezembro 2024",
    thumbnail: "/testimony-video-thumbnail.jpg",
    duration: "45:00",
  },
  {
    title: "Louvor Especial de Natal",
    date: "25 Dezembro 2024",
    thumbnail: "/christmas-worship-video-thumbnail.jpg",
    duration: "1:15:00",
  },
  {
    title: "Mensagem: O Propósito de Deus",
    date: "1 Janeiro 2025",
    thumbnail: "/sermon-video-thumbnail.jpg",
    duration: "55:00",
  },
]

export default function TVPage() {
  const [isLive, setIsLive] = useState(true)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Live Player */}
        <section className="bg-foreground text-background py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Video Player */}
              <div className="lg:col-span-2">
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden">
                  {isLive && (
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      <Radio className="w-4 h-4 animate-pulse" />
                      AO VIVO
                    </div>
                  )}
                  <Image
                    src="/live-stream-church-service.jpg"
                    alt="Transmissão ao vivo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                    <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-bold">
                    {isLive ? "Culto de Celebração - Ao Vivo" : "Próxima Transmissão em Breve"}
                  </h1>
                  <p className="text-background/70 mt-2">
                    Assista às nossas transmissões ao vivo e participe conosco onde quer que esteja.
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-background/10 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Programação
                </h2>
                <div className="space-y-4">
                  {schedule.map((day, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-primary mb-2">{day.day}</h3>
                      <div className="space-y-2">
                        {day.programs.map((program, pIndex) => (
                          <div key={pIndex} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-background/60" />
                              <span className="text-background/80">{program.time}</span>
                            </div>
                            <span className="text-background/90">{program.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Transmissão ao Vivo</h3>
                <p className="text-muted-foreground text-sm">
                  Assista aos cultos e eventos em tempo real, de qualquer lugar do mundo.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Arquivo de Programas</h3>
                <p className="text-muted-foreground text-sm">Acesse programas anteriores e assista quando quiser.</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Programação Semanal</h3>
                <p className="text-muted-foreground text-sm">
                  Confira a programação e não perca nenhum evento importante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Past Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Programas Anteriores</h2>
                <p className="text-muted-foreground">Reveja os melhores momentos</p>
              </div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Ver Todos
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastPrograms.map((program, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                    <Image
                      src={program.thumbnail || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-foreground/80 text-background text-xs px-2 py-1 rounded">
                      {program.duration}
                    </div>
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{program.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-background mb-4">Não perca nenhuma transmissão</h2>
            <p className="text-background/90 max-w-2xl mx-auto mb-8">
              Cadastre-se para receber notificações sobre novas transmissões e eventos especiais.
            </p>
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Ativar Notificações
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
