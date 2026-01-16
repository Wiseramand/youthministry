"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import { createMembershipRequest, type MembershipFormState } from "@/app/actions/membership-action"
import { CheckCircle, LoaderCircle } from "lucide-react"

// Data arrays can be moved outside the component
const countries = [
    { code: "AO", name: { pt: "Angola", en: "Angola" }, prefix: "+244" },
    { code: "BR", name: { pt: "Brasil", en: "Brazil" }, prefix: "+55" },
    { code: "PT", name: { pt: "Portugal", en: "Portugal" }, prefix: "+351" },
    { code: "MZ", name: { pt: "Moçambique", en: "Mozambique" }, prefix: "+258" },
    { code: "CV", name: { pt: "Cabo Verde", en: "Cape Verde" }, prefix: "+238" },
    // Add other countries as needed
]
const angolaProvinces = [ "Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire" ]

const i18nContent = {
    pt: { title: "Seja Membro", subtitle: "Preencha o formulário para se tornar membro.", fullName: "Nome Completo", fullNamePlaceholder: "Seu nome completo", age: "Idade", agePlaceholder: "Sua idade", country: "País", selectCountry: "Selecione o país", phone: "Telefone", phonePlaceholder: "Número de telefone", province: "Província", selectProvince: "Selecione a província", city: "Cidade", cityPlaceholder: "Sua cidade", neighborhood: "Bairro", neighborhoodPlaceholder: "Seu bairro", submit: "Cadastrar", submitting: "A cadastrar...", successTitle: "Inscrição Recebida!", successMessage: "Bem-vindo(a)! Obrigado por se juntar a nós.", close: "Fechar" },
    en: { title: "Become a Member", subtitle: "Fill out the form to become a member.", fullName: "Full Name", fullNamePlaceholder: "Your full name", age: "Age", agePlaceholder: "Your age", country: "Country", selectCountry: "Select country", phone: "Phone", phonePlaceholder: "Phone number", province: "Province", selectProvince: "Select province", city: "City", cityPlaceholder: "Your city", neighborhood: "Neighborhood", neighborhoodPlaceholder: "Your neighborhood", submit: "Register", submitting: "Registering...", successTitle: "Registration Received!", successMessage: "Welcome! Thank you for joining us.", close: "Close" },
}

const initialState: MembershipFormState = { message: "", isSuccess: false, errors: {} }

function SubmitButton({ label, pendingLabel }: { label: string, pendingLabel: string }) {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {pending ? (<><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> {pendingLabel}</>) : label}
        </Button>
    )
}

function SuccessView({ title, message, onClose }: { title: string, message: string, onClose: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Button onClick={onClose} className="bg-primary hover:bg-primary/90">Fechar</Button>
        </div>
    )
}

export function MembershipModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const { language } = useLanguage()
    const [formState, formAction] = useFormState(createMembershipRequest, initialState)
    const [selectedCountry, setSelectedCountry] = useState("")
    const [phonePrefix, setPhonePrefix] = useState("")
    
    const t = i18nContent[language]
    const isAngola = selectedCountry === "AO"

    useEffect(() => {
        const countryData = countries.find((c) => c.code === selectedCountry)
        setPhonePrefix(countryData ? countryData.prefix : "")
    }, [selectedCountry])

    useEffect(() => {
        if (formState.isSuccess) {
            // Optional: auto-close after a delay
            // const timer = setTimeout(() => onOpenChange(false), 5000);
            // return () => clearTimeout(timer);
        }
    }, [formState.isSuccess, onOpenChange])

    // When the dialog closes, we should reset the form state
    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) {
           // Resetting form state is tricky without a dedicated function from the hook.
           // A simple way is to rely on component remounting or pass a reset callback,
           // but for now, the success view forces a natural stop.
           // When the user reopens, the state will be fresh.
        }
        onOpenChange(newOpen)
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-background">
                {formState.isSuccess ? (
                    <SuccessView title={t.successTitle} message={formState.message || t.successMessage} onClose={() => onOpenChange(false)} />
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-foreground">{t.title}</DialogTitle>
                            <DialogDescription className="text-muted-foreground">{t.subtitle}</DialogDescription>
                        </DialogHeader>
                        <form action={formAction} className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="fullName">{t.fullName}</Label>
                                <Input id="fullName" name="fullName" placeholder={t.fullNamePlaceholder} required />
                                {formState.errors?.fullName && <p className="text-red-500 text-xs">{formState.errors.fullName[0]}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="age">{t.age}</Label>
                                <Input id="age" name="age" type="number" min="10" max="35" placeholder={t.agePlaceholder} required />
                                {formState.errors?.age && <p className="text-red-500 text-xs">{formState.errors.age[0]}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="country">{t.country}</Label>
                                <Select name="country" onValueChange={setSelectedCountry} required>
                                    <SelectTrigger><SelectValue placeholder={t.selectCountry} /></SelectTrigger>
                                    <SelectContent>
                                        {countries.map((c) => <SelectItem key={c.code} value={c.code}>{c.name[language]}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                {formState.errors?.country && <p className="text-red-500 text-xs">{formState.errors.country[0]}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="phone">{t.phone}</Label>
                                <div className="flex gap-2">
                                    <Input name="phonePrefix" value={phonePrefix} readOnly className="w-20 bg-muted" />
                                    <Input id="phone" name="phone" type="tel" placeholder={t.phonePlaceholder} required className="flex-1" />
                                </div>
                                {formState.errors?.phone && <p className="text-red-500 text-xs">{formState.errors.phone[0]}</p>}
                            </div>
                            {isAngola && (
                                <div className="space-y-1">
                                    <Label htmlFor="province">{t.province}</Label>
                                    <Select name="province">
                                        <SelectTrigger><SelectValue placeholder={t.selectProvince} /></SelectTrigger>
                                        <SelectContent>
                                            {angolaProvinces.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                            <div className="space-y-1">
                                <Label htmlFor="city">{t.city}</Label>
                                <Input id="city" name="city" placeholder={t.cityPlaceholder} required />
                                {formState.errors?.city && <p className="text-red-500 text-xs">{formState.errors.city[0]}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="neighborhood">{t.neighborhood}</Label>
                                <Input id="neighborhood" name="neighborhood" placeholder={t.neighborhoodPlaceholder} required />
                                {formState.errors?.neighborhood && <p className="text-red-500 text-xs">{formState.errors.neighborhood[0]}</p>}
                            </div>
                            {formState.message && !formState.isSuccess && <p className="text-red-500 text-sm">{formState.message}</p>}
                            <SubmitButton label={t.submit} pendingLabel={t.submitting} />
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}
