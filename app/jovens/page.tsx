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

function YouthMinistryForm() {
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


export default function JovensPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Purple Section - Youth Ministry intro */}
        <section className="grid md:grid-cols-2 min-h-[70vh]">
          <div className="bg-primary p-12 md:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Loveworld Youth Ministry</h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              O Ministério de Jovens é dedicado a guiar os jovens respondendo às perguntas da vida com base na Palavra de Deus. É um lugar onde os jovens podem crescer espiritualmente, construir um relacionamento com o Espírito Santo e encontrar seu propósito através do evangelho.
            </p>
            <div className="w-full h-px bg-white/30" />
          </div>
          <div className="relative min-h-[400px]">
            <Image src="/images/youth.jpg" alt="Jovens em adoração" fill className="object-cover" />
          </div>
        </section>

        {/* Hero banner - Join The Youth Ministry */}
        <section className="relative py-24" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/large-church-auditorium-with-crowd-worship.jpg')", backgroundSize: "cover", backgroundPosition: "center", }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Junta-te ao Ministério de Jovens</h2>
            <p className="text-white/80 text-lg">
              Junta-te ao ministério de jovens hoje preenchendo o formulário abaixo.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="grid md:grid-cols-2">
          <div className="relative min-h-[600px] hidden md:block">
            <Image src="/young-people-kneeling-in-prayer-at-church-altar.jpg" alt="Jovens em oração" fill className="object-cover" />
          </div>
          <YouthMinistryForm />
        </section>

        {/* Orange footer bar */}
        <div className="h-16 bg-secondary" />
      </main>
      <Footer />
    </div>
  )
}
