"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Users, Heart, Globe, LoaderCircle } from "lucide-react"
import { createMembershipRequest, type MembershipFormState } from "@/app/actions/membership-action"

// Data can be defined outside the component
const countries = [ { code: "AO", name: "Angola", prefix: "+244" }, { code: "BR", name: "Brasil", prefix: "+55" }, { code: "PT", name: "Portugal", prefix: "+351" }, { code: "MZ", name: "Moçambique", prefix: "+258" }, { code: "CV", name: "Cabo Verde", prefix: "+238" }, { code: "US", name: "Estados Unidos", prefix: "+1" }, { code: "GB", name: "Reino Unido", prefix: "+44" }, ]
const angolaProvinces = [ "Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire", ]
const benefits = [ { icon: Users, title: "Comunidade", description: "Faça parte de uma família de jovens comprometidos com a fé", }, { icon: Heart, title: "Crescimento", description: "Desenvolva seu potencial espiritual e pessoal", }, { icon: Globe, title: "Impacto", description: "Faça a diferença na sua comunidade e no mundo", }, ]

const initialState: MembershipFormState = { message: "", isSuccess: false };

function SuccessView({ name, onReset }: { name: string | undefined; onReset: () => void }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Cadastro Realizado!</h1>
            <p className="text-muted-foreground mb-8">
              Obrigado por se cadastrar, {name}! Em breve entraremos em contacto com mais informações.
            </p>
            <Button onClick={onReset} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Cadastrar Outra Pessoa
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="lg" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {pending ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> A Cadastrar...</> : "Cadastrar"}
        </Button>
    )
}

export default function MembroPage() {
  const [formState, formAction] = useFormState(createMembershipRequest, initialState)
  const [selectedCountry, setSelectedCountry] = useState("")
  const [phonePrefix, setPhonePrefix] = useState("")

  const isAngola = selectedCountry === "AO"

  useEffect(() => {
    const countryData = countries.find((c) => c.code === selectedCountry)
    setPhonePrefix(countryData ? countryData.prefix : "")
  }, [selectedCountry])

  const resetPage = () => {
    window.location.reload();
  }

  if (formState.isSuccess) {
    // A bit of a hack to get the submitted name. Ideally, the action would return it.
    // Let's assume the action will be modified to return the submitted data.
    // For now, let's just show a generic message.
    // I will modify the action to return the name.
    const submittedName = (formState as any).submittedData?.fullName || ""
    return <SuccessView name={submittedName} onReset={resetPage} />
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center"><h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Seja Membro</h1><p className="text-lg text-muted-foreground leading-relaxed">Junte-se ao Ministério de Jovens e Adolescentes e faça parte de uma comunidade que transforma vidas.</p></div></div>
        </section>

        {/* Benefits */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4"><div className="grid md:grid-cols-3 gap-6">{benefits.map((benefit, index) => (<div key={index} className="flex items-start gap-4"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0"><benefit.icon className="w-6 h-6 text-primary" /></div><div><h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3><p className="text-muted-foreground text-sm">{benefit.description}</p></div></div>))}</div></div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Formulário de Cadastro</h2>
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nome Completo <span className="text-destructive">*</span></Label>
                    <Input id="fullName" name="fullName" placeholder="Digite seu nome completo" required />
                    {formState.errors?.fullName && <p className="text-red-500 text-xs mt-1">{formState.errors.fullName[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Idade <span className="text-destructive">*</span></Label>
                    <Input id="age" name="age" type="number" min="10" max="35" placeholder="Digite sua idade" required />
                     {formState.errors?.age && <p className="text-red-500 text-xs mt-1">{formState.errors.age[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">País <span className="text-destructive">*</span></Label>
                    <Select name="country" onValueChange={setSelectedCountry} required>
                      <SelectTrigger><SelectValue placeholder="Selecione o seu país" /></SelectTrigger>
                      <SelectContent>{countries.map((country) => (<SelectItem key={country.code} value={country.code}>{country.name} ({country.prefix})</SelectItem>))}</SelectContent>
                    </Select>
                    {formState.errors?.country && <p className="text-red-500 text-xs mt-1">{formState.errors.country[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone <span className="text-destructive">*</span></Label>
                    <div className="flex gap-2">
                      <Input name="phonePrefix" value={phonePrefix} readOnly className="w-24 bg-muted" placeholder="+___" />
                      <Input id="phone" name="phone" type="tel" placeholder="Número de telefone" required className="flex-1" />
                    </div>
                     {formState.errors?.phone && <p className="text-red-500 text-xs mt-1">{formState.errors.phone[0]}</p>}
                  </div>
                  
                  {isAngola && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Label htmlFor="province">Província <span className="text-destructive">*</span></Label>
                      <Select name="province">
                        <SelectTrigger><SelectValue placeholder="Selecione a sua província" /></SelectTrigger>
                        <SelectContent>{angolaProvinces.map((province) => (<SelectItem key={province} value={province}>{province}</SelectItem>))}</SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade <span className="text-destructive">*</span></Label>
                    <Input id="city" name="city" placeholder="Digite a sua cidade" required />
                    {formState.errors?.city && <p className="text-red-500 text-xs mt-1">{formState.errors.city[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Bairro <span className="text-destructive">*</span></Label>
                    <Input id="neighborhood" name="neighborhood" placeholder="Digite o seu bairro" required />
                    {formState.errors?.neighborhood && <p className="text-red-500 text-xs mt-1">{formState.errors.neighborhood[0]}</p>}
                  </div>

                  {formState.message && !formState.isSuccess && (<p className="text-red-500 text-sm">{formState.message}</p>)}
                  
                  <SubmitButton />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
