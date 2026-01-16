"use client"

import type React from "react"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { LoaderCircle } from "lucide-react"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  const { language } = useLanguage()
  const router = useRouter()

  const content = {
    pt: {
      title: "Entrar na sua conta",
      subtitle: "Acesse sua conta do Ministério de Jovens e Adolescentes",
      email: "Email",
      password: "Senha",
      button: "Entrar",
      loading: "A entrar...",
      error: "Email ou senha inválidos. Tente novamente."
    },
    en: {
      title: "Sign in to your account",
      subtitle: "Access your Youth and Teens Ministry account",
      email: "Email",
      password: "Password",
      button: "Sign In",
      loading: "Signing in...",
      error: "Invalid email or password. Please try again."
    },
  }

  const t = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    setLoading(false)

    if (result?.ok) {
      // On success, close the modal and refresh the page to update the session state
      onOpenChange(false)
      router.refresh()
    } else {
      // On failure, show an error message
      setError(t.error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background">
        <DialogHeader>
          <DialogTitle className="text-foreground">{t.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{t.subtitle}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">{t.email}</Label>
            <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-background text-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">{t.password}</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-background text-foreground" />
          </div>
          
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> {t.loading}</> : t.button}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
