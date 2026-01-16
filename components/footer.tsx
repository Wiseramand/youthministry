"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    pt: {
      description: "Ministério de Jovens e Adolescentes do Grupo Angola, Christ Embassy.",
      quickLinks: "Links Rápidos",
      aboutUs: "Sobre Nós",
      projects: "Projetos",
      liveTv: "TV ao Vivo",
      contact: "Contacto",
      followUs: "Siga-nos",
      rights: "Todos os direitos reservados.",
    },
    en: {
      description: "Youth and Teens Ministry of Angola Group, Christ Embassy.",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      projects: "Projects",
      liveTv: "Live TV",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="LoveWorld Logo" width={50} height={50} className="h-12 w-auto" />
              <span className="font-bold">MJA Angola</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">{t.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/sobre" className="hover:text-primary transition-colors">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:text-primary transition-colors">
                  {t.projects}
                </Link>
              </li>
              <li>
                <Link href="/tv" className="hover:text-primary transition-colors">
                  {t.liveTv}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                mja@christembassy.ao
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +244 923 456 789
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.followUs}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>
            © {new Date().getFullYear()}{" "}
            {language === "pt"
              ? "Ministério de Jovens e Adolescentes - Christ Embassy Angola."
              : "Youth and Teens Ministry - Christ Embassy Angola."}{" "}
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
