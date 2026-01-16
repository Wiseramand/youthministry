"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MembershipModal } from "@/components/membership-modal"
import { useLanguage } from "@/contexts/language-context"

export function CtaSection() {
  const [membershipOpen, setMembershipOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    pt: {
      title: "Pronto para fazer parte?",
      subtitle:
        "Junte-se a milhares de jovens que estão transformando suas vidas e comunidades através da fé e do amor.",
      button: "Seja Membro Agora",
    },
    en: {
      title: "Ready to be part?",
      subtitle:
        "Join thousands of young people who are transforming their lives and communities through faith and love.",
      button: "Become a Member Now",
    },
  }

  const t = content[language]

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">{t.title}</h2>
          <p className="text-background/90 max-w-2xl mx-auto mb-8 text-lg">{t.subtitle}</p>
          <Button
            size="lg"
            onClick={() => setMembershipOpen(true)}
            className="bg-background text-primary hover:bg-background/90"
          >
            {t.button}
          </Button>
        </div>
      </section>

      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </>
  )
}
