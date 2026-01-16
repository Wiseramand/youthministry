"use client"

import type React from "react"
import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ArrowRight, Users, MapPin, LoaderCircle } from "lucide-react"
import Image from "next/image"
import { createPartnershipRequest, type PartnershipFormState } from "@/app/actions/partnership-action"

// Data definitions (can be moved to a separate file if needed)
const partnershipArms = [
    { id: "tap", title: "TAP", subtitle: "Teens and Youth Partnership", description: "Apoie o ministério de adolescentes e jovens em Angola e no mundo.", color: "bg-primary", icon: Users, logo: null, },
    { id: "loveworldsat", title: "LoveWorldSAT", subtitle: "Televisão Global", description: "Ajude a transmitir o Evangelho através das ondas de televisão para milhões.", color: "bg-secondary", icon: null, logo: "/images/logo-loveworldsat.jpg", },
    { id: "rhapsody", title: "Rapsódia de Realidades", subtitle: "Devocional Diário", description: "Patrocine a tradução e distribuição do devocional mais lido do mundo.", color: "bg-primary", icon: null, logo: "/images/logo-rapsodia.png", },
    { id: "healing-school", title: "Escola de Cura", subtitle: "Healing School", description: "Apoie o ministério de cura divina que transforma milhares de vidas.", color: "bg-secondary", icon: null, logo: "/images/logo-escoladecura.png", },
    { id: "acolhimento", title: "Ministério de Acolhimento", subtitle: "InnerCity Mission", description: "Contribua para alcançar crianças carentes e quebrar ciclos de pobreza.", color: "bg-primary", icon: null, logo: "/images/logo-ministeriodeacolhimento.png", },
    { id: "parceria-local", title: "Parceria Local", subtitle: "Grupo Angola", description: "Apoie directamente as iniciativas do ministério em Angola.", color: "bg-secondary", icon: MapPin, logo: null, },
]
const amounts = [ { value: 100, label: "100 Kz" }, { value: 500, label: "500 Kz" }, { value: 1000, label: "1.000 Kz" }, { value: 5000, label: "5.000 Kz" }, { value: 10000, label: "10.000 Kz" }, { value: 0, label: "Outro valor" }, ]

// Initial state for the form action
const initialState: PartnershipFormState = { message: "", isSuccess: false }

// A new component for the success view
function SuccessView({ state, onReset }: { state: PartnershipFormState; onReset: () => void }) {
  const armTitle = partnershipArms.find((a) => a.id === state.submittedData?.partnershipArm)?.title
  const amount = state.submittedData?.amount?.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Obrigado pela Sua Parceria!</h1>
            <p className="text-muted-foreground mb-8">
              Sua decisão de ser parceiro do ministério {armTitle} é uma bênção. Entraremos em contacto em breve
              com os detalhes para finalizar sua contribuição de {amount}.
            </p>
            <Button onClick={onReset} variant="outline">
              Fazer Outra Parceria
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function SubmitButton({ disabled }: { disabled: boolean }) {
    const { pending } = useFormStatus()
    return (
        <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={disabled || pending}
        >
            {pending ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <ArrowRight className="mr-2 h-4 w-4" />}
            {pending ? "A Confirmar..." : "Confirmar Parceria"}
        </Button>
    )
}

export default function ParceriasPage() {
  const [formState, formAction] = useFormState(createPartnershipRequest, initialState)
  const [selectedArm, setSelectedArm] = useState<string | null>(null)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const finalAmount = selectedAmount === 0 ? Number(customAmount) : selectedAmount

  const resetForm = () => {
    setSelectedArm(null)
    setSelectedAmount(null)
    setCustomAmount("")
    // A proper reset for useFormState would be ideal, but for now we can just "re-render" by resetting local state.
    // A trick to truly reset form state is to change the `key` of the form component.
    window.location.reload(); // Simple but effective way to reset everything.
  }

  if (formState.isSuccess) {
    return <SuccessView state={formState} onReset={resetForm} />
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Seja Parceiro</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Braços de Parceria</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Junte-se a nós na missão de levar o Evangelho ao mundo. Escolha um braço de parceria e comece a fazer a diferença hoje.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Arms */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Escolha Seu Braço de Parceria</h2>
              <p className="text-muted-foreground">Selecione a área do ministério que deseja apoiar</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {partnershipArms.map((arm) => (
                <button key={arm.id} onClick={() => setSelectedArm(arm.id)} className={`text-left p-6 rounded-2xl border-2 transition-all ${selectedArm === arm.id ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-background hover:border-primary/50"}`}>
                  {arm.logo ? (<div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-white p-2"><Image src={arm.logo} alt={arm.title} width={56} height={56} className="object-contain" /></div>) : arm.icon ? (<div className={`w-14 h-14 ${arm.color} rounded-xl flex items-center justify-center mb-4`}><arm.icon className="w-7 h-7 text-white" /></div>) : null}
                  <h3 className="text-lg font-semibold text-foreground mb-1">{arm.title}</h3>
                  <p className="text-sm text-primary mb-2">{arm.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{arm.description}</p>
                  {selectedArm === arm.id && (<div className="mt-4 flex items-center text-primary text-sm font-medium"><Check className="w-4 h-4 mr-2" />Selecionado</div>)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        {selectedArm && (
          <section className="py-16 bg-muted/50" id="form-section">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
                   <h2 className="text-2xl font-bold text-foreground mb-2">Parceria: {partnershipArms.find((a) => a.id === selectedArm)?.title}</h2>
                   <p className="text-muted-foreground mb-8">Preencha os dados abaixo para completar sua parceria</p>
                   <form action={formAction} className="space-y-6">
                      <input type="hidden" name="partnershipArm" value={selectedArm || ""} />
                      <input type="hidden" name="amount" value={finalAmount || 0} />
                      
                      <div className="space-y-3">
                        <Label className="text-base font-semibold">Valor da Contribuição</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {amounts.map((amount) => (
                            <button key={amount.value} type="button" onClick={() => { setSelectedAmount(amount.value); if (amount.value !== 0) setCustomAmount(""); }} className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all ${selectedAmount === amount.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50"}`}>
                              {amount.label}
                            </button>
                          ))}
                        </div>
                        {formState.errors?.amount && <p className="text-red-500 text-xs mt-1">{formState.errors.amount[0]}</p>}

                        {selectedAmount === 0 && (
                          <div className="mt-3">
                            <Label htmlFor="customAmount">Digite o valor (Kz)</Label>
                            <Input id="customAmount" type="number" min="100" placeholder="Mínimo 100 Kz" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="mt-1" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" name="name" required className="mt-1" />
                          {formState.errors?.name && <p className="text-red-500 text-xs mt-1">{formState.errors.name[0]}</p>}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required className="mt-1" />
                            {formState.errors?.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email[0]}</p>}
                          </div>
                          <div>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" name="phone" type="tel" required className="mt-1" />
                            {formState.errors?.phone && <p className="text-red-500 text-xs mt-1">{formState.errors.phone[0]}</p>}
                          </div>
                        </div>
                      </div>
                      
                      {formState.message && !formState.isSuccess && <p className="text-red-500 text-sm mt-2">{formState.message}</p>}

                      <div className="bg-muted/50 rounded-xl p-4"><p className="text-sm text-muted-foreground">Ao submeter, a equipa de parcerias entrará em contacto consigo para finalizar os detalhes.</p></div>

                      <SubmitButton disabled={!finalAmount || finalAmount < 100} />
                   </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefícios de Ser Parceiro</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {["Participação activa na expansão do Reino de Deus", "Acesso a materiais exclusivos do ministério", "Convites para eventos especiais de parceiros", "Relatórios de impacto das suas contribuições", "Cobertura espiritual e orações especiais", "Certificado de parceria do ministério"].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5"><Check className="w-4 h-4 text-primary" /></div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
