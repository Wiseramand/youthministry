"use client"

import type React from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Calendar, CheckCircle, LoaderCircle } from "lucide-react"
import { createYouthMinistryRequest, type YouthMinistryFormState } from "@/app/actions/youth-ministry-action"

// Reusable components from the "jovens" page refactoring
const initialState: YouthMinistryFormState = { message: "", isSuccess: false }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 mt-6">
      {pending ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> A Submeter...</> : "Submeter Inscrição"}
    </Button>
  )
}

function SuccessView() {
    return (
        <div className="bg-white p-8 md:p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Inscrição Enviada!</h3>
            <p className="text-muted-foreground">Obrigado por se juntar a nós. Entraremos em contacto em breve.</p>
        </div>
    )
}

// The form component, now reusable and self-contained
function TeensMinistryForm() {
  const [formState, formAction] = useFormState(createYouthMinistryRequest, initialState)

  if (formState.isSuccess) {
    return <SuccessView />
  }

  return (
    <div className="bg-white p-8 md:p-12">
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-xs text-muted-foreground">Nome</Label>
            <Input id="name" name="name" placeholder="Ex. João Silva" className="mt-1" />
            {formState.errors?.name && <p className="text-red-500 text-xs mt-1">{formState.errors.name[0]}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-xs text-muted-foreground">Email <span className="text-red-500">*</span></Label>
            <Input id="email" name="email" type="email" placeholder="Ex. joao@email.com" className="mt-1" required />
            {formState.errors?.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email[0]}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs text-muted-foreground">Telefone</Label>
          <Input id="phone" name="phone" placeholder="Ex. +244 923 456 789" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="address" className="text-xs text-muted-foreground">Endereço</Label>
          <Input id="address" name="address" placeholder="Ex. Rua Principal 123" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="apartment" className="text-xs text-muted-foreground">Apartamento, suite, etc</Label>
          <Input id="apartment" name="apartment" className="mt-1" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="text-xs text-muted-foreground">Cidade</Label>
            <Input id="city" name="city" placeholder="Ex. Luanda" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="province" className="text-xs text-muted-foreground">Província</Label>
            <Input id="province" name="province" placeholder="Ex. Luanda" className="mt-1" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="postalCode" className="text-xs text-muted-foreground">Código Postal</Label>
            <Input id="postalCode" name="postalCode" placeholder="Ex. 1234" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="country" className="text-xs text-muted-foreground">País</Label>
            <Select name="country">
              <SelectTrigger className="mt-1"><SelectValue placeholder="Selecionar país" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="angola">Angola</SelectItem>
                <SelectItem value="brasil">Brasil</SelectItem>
                <SelectItem value="portugal">Portugal</SelectItem>
                <SelectItem value="mocambique">Moçambique</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="birthDate" className="text-xs text-muted-foreground">Data de Nascimento</Label>
          <div className="relative mt-1">
            <Input id="birthDate" name="birthDate" type="date" className="pl-10" />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        {formState.message && !formState.isSuccess && <p className="text-red-500 text-sm">{formState.message}</p>}
        <SubmitButton />
      </form>
    </div>
  )
}

export default function AdolescentesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-start" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/sunset-over-mountains-silhouette-orange-sky.jpg')", backgroundSize: "cover", backgroundPosition: "center", }}>
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl">
              <p className="text-white/80 text-sm tracking-widest mb-4">BEM-VINDO AO LOVEWORLD TEENS MINISTRY</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "cursive" }}>HEYY</h1>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "cursive" }}>JUNTA-TE A NÓS</h2>
              <p className="text-white/90 text-lg mb-8 max-w-lg">O Ministério de Adolescentes é projetado para ajudar os adolescentes a descobrir sua identidade através da verdade da Palavra de Deus.</p>
              <Button variant="secondary" className="bg-gray-500/80 hover:bg-gray-600 text-white px-8 py-3" onClick={() => document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" })}>Descer</Button>
            </div>
          </div>
        </section>

        {/* Purple Section */}
        <section className="grid md:grid-cols-2">
          <div className="bg-primary p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Dando sentido à sua vida</h2>
            <p className="text-white/90 text-lg leading-relaxed">Cada adolescente merece uma oportunidade de ser a melhor versão de si mesmo e viver a vida que o Mestre planejou para ele.</p>
          </div>
          <div className="relative min-h-[400px]">
            <Image src="/images/hero-home.webp" alt="Adolescentes em adoração" fill className="object-cover" />
            <div className="absolute bottom-0 right-0 bg-primary/90 p-8 max-w-xs">
              <h3 className="text-xl font-bold text-white mb-2">Junta-te a Nós</h3>
              <p className="text-white/80 text-sm">Junta-te ao ministério de adolescentes hoje.</p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="join-form" className="grid md:grid-cols-2">
          <div className="bg-white p-8 flex flex-col gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/images/teens.jpg" alt="Evento de adolescentes YES" fill className="object-cover" /></div>
            <div className="relative h-48 rounded-lg overflow-hidden"><Image src="/christian-teens-event-stage-performance.jpg" alt="Performance de adolescentes" fill className="object-cover" /></div>
          </div>
          <TeensMinistryForm />
        </section>

        {/* Orange footer bar */}
        <div className="h-16 bg-secondary" />
      </main>
      <Footer />
    </div>
  )
}
