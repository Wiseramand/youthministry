"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, LoaderCircle } from "lucide-react"
import { createTeevoClubRequest, type TeevoClubFormState } from "@/app/actions/teevo-club-action"

interface TeevoClubModalProps {
  children: React.ReactNode
}

const provinces = [
  "Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte",
  "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte",
  "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire",
]

const initialState: TeevoClubFormState = {
  message: "",
  isSuccess: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          A Enviar...
        </>
      ) : (
        "Enviar Pedido"
      )}
    </Button>
  )
}

export function TeevoClubModal({ children }: TeevoClubModalProps) {
  const [open, setOpen] = useState(false)
  const [formState, formAction] = useFormState(createTeevoClubRequest, initialState)

  useEffect(() => {
    if (formState.isSuccess) {
      // Don't auto-close, let the user read the message and close manually.
      // Or we could close after a delay:
      // const timer = setTimeout(() => handleClose(), 5000);
      // return () => clearTimeout(timer);
    }
  }, [formState.isSuccess])
  
  const handleClose = () => {
    setOpen(false)
  }

  // We need a way to reset the form state when the dialog is closed.
  // The onOpenChange is a good place for this, but useFormState doesn't have a reset function.
  // The simplest way is to remount the form component when the dialog opens.
  // However, for this modal, we can just close it and when it re-opens, the state will be fresh.
  // The logic inside `onOpenChange` will handle closing.

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        {formState.isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Pedido Enviado!</h3>
            <p className="text-muted-foreground mb-6">{formState.message}</p>
            <Button onClick={handleClose} className="bg-primary hover:bg-primary/90">
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Começar um Clube TeeVo</DialogTitle>
              <p className="text-muted-foreground text-center text-sm">
                Preencha o formulário abaixo para iniciar um clube na sua escola
              </p>
            </DialogHeader>
            <form action={formAction} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                  <Input id="nomeCompleto" name="nomeCompleto" required placeholder="Ex: João Silva" />
                  {formState.errors?.nomeCompleto && <p className="text-red-500 text-xs mt-1">{formState.errors.nomeCompleto[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="joao@email.com" />
                  {formState.errors?.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" name="telefone" required placeholder="+244 923 456 789" />
                  {formState.errors?.telefone && <p className="text-red-500 text-xs mt-1">{formState.errors.telefone[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="idade">Idade *</Label>
                  <Input id="idade" name="idade" type="number" required placeholder="16" min="10" max="25" />
                  {formState.errors?.idade && <p className="text-red-500 text-xs mt-1">{formState.errors.idade[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="anoEscolar">Ano Escolar *</Label>
                  <Select name="anoEscolar" required>
                    <SelectTrigger id="anoEscolar">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7ª Classe</SelectItem>
                      <SelectItem value="8">8ª Classe</SelectItem>
                      <SelectItem value="9">9ª Classe</SelectItem>
                      <SelectItem value="10">10ª Classe</SelectItem>
                      <SelectItem value="11">11ª Classe</SelectItem>
                      <SelectItem value="12">12ª Classe</SelectItem>
                      <SelectItem value="universidade">Universidade</SelectItem>
                    </SelectContent>
                  </Select>
                   {formState.errors?.anoEscolar && <p className="text-red-500 text-xs mt-1">{formState.errors.anoEscolar[0]}</p>}
                </div>
                <div className="col-span-2">
                  <Label htmlFor="escola">Nome da Escola / Universidade *</Label>
                  <Input id="escola" name="escola" required placeholder="Ex: Colégio Angolano" />
                  {formState.errors?.escola && <p className="text-red-500 text-xs mt-1">{formState.errors.escola[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="provincia">Província *</Label>
                  <Select name="provincia" required>
                    <SelectTrigger id="provincia">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map((province) => (
                        <SelectItem key={province} value={province}>
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formState.errors?.provincia && <p className="text-red-500 text-xs mt-1">{formState.errors.provincia[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input id="cidade" name="cidade" required placeholder="Ex: Luanda" />
                  {formState.errors?.cidade && <p className="text-red-500 text-xs mt-1">{formState.errors.cidade[0]}</p>}
                </div>
                <div className="col-span-2">
                  <Label htmlFor="quantidadeMembros">Quantos membros espera ter inicialmente?</Label>
                  <Select name="quantidadeMembros">
                    <SelectTrigger id="quantidadeMembros">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 membros</SelectItem>
                      <SelectItem value="6-10">6-10 membros</SelectItem>
                      <SelectItem value="11-20">11-20 membros</SelectItem>
                      <SelectItem value="21-50">21-50 membros</SelectItem>
                      <SelectItem value="50+">Mais de 50 membros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2">
                  <Label htmlFor="descricao">Por que deseja começar um Clube TeeVo?</Label>
                  <Textarea
                    id="descricao"
                    name="descricao"
                    placeholder="Conte-nos um pouco sobre a sua motivação..."
                    rows={3}
                  />
                </div>
              </div>
              
              {!formState.isSuccess && formState.message && (
                 <p className="text-red-500 text-sm">{formState.message}</p>
              )}

              <SubmitButton />
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
