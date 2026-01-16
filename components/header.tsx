"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { Menu, X, ChevronDown, LogOut, User as UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoginModal } from "@/components/login-modal"
import { MembershipModal } from "@/components/membership-modal"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"

function AuthButtons({ onLoginClick, onMembershipClick, t, isMobile = false }: any) {
  const commonButtonProps = isMobile ? { className: "w-full" } : {};
  return (
    <>
      <Button
        variant="outline"
        onClick={onLoginClick}
        {...commonButtonProps}
        className={`${commonButtonProps.className || ''} border-primary text-primary hover:bg-primary hover:text-primary-foreground`}
      >
        {t("nav.login")}
      </Button>
      <Button
        onClick={onMembershipClick}
        {...commonButtonProps}
        className={`${commonButtonProps.className || ''} bg-primary text-primary-foreground hover:bg-primary/90`}
      >
        {t("nav.membership")}
      </Button>
    </>
  )
}

function UserMenu({ session, t }: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-muted-foreground" />
          <span className="hidden sm:inline">{session.user?.name || session.user?.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("nav.myAccount")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("nav.logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false)
  
  const { t, language } = useLanguage()
  const { data: session, status } = useSession()

  const navItems = [ { name: t("nav.home"), href: "/" }, { name: t("nav.projects"), href: "/projetos" }, { name: t("nav.partnerships"), href: "/parcerias" }, { name: t("nav.tv"), href: "/tv" }, ]
  const sobreItems = [ { name: t("nav.aboutUs"), href: "/sobre" }, { name: t("nav.founder"), href: "/fundador" }, ]

  const renderAuthSection = (isMobile = false) => {
    if (status === "loading") {
      return isMobile ? <Skeleton className="h-10 w-full" /> : <Skeleton className="h-10 w-24" />;
    }
    if (status === "authenticated") {
      return <UserMenu session={session} t={t} />;
    }
    return (
      <AuthButtons
        onLoginClick={() => { setLoginOpen(true); if (isMobile) setMobileMenuOpen(false); }}
        onMembershipClick={() => { setMembershipOpen(true); if (isMobile) setMobileMenuOpen(false); }}
        t={t}
        isMobile={isMobile}
      />
    );
  };


  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="LoveWorld Logo" width={50} height={50} className="h-12 w-auto" />
              <span className="hidden sm:block font-bold text-foreground">Jovens & Adolescentes</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t("nav.home")}</Link>
              <div className="relative" onMouseEnter={() => setSobreDropdownOpen(true)} onMouseLeave={() => setSobreDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")} <ChevronDown className="h-4 w-4" />
                </button>
                {sobreDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-44 bg-background border border-border rounded-lg shadow-lg py-2">
                    {sobreItems.map((item) => (<Link key={item.name} href={item.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors">{item.name}</Link>))}
                  </div>
                )}
              </div>
              {navItems.slice(1).map((item) => (<Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{item.name}</Link>))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              {renderAuthSection()}
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <div className="flex justify-center pb-3 border-b border-border mb-2"><LanguageSwitcher /></div>
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("nav.home")}</Link>
              <div className="border-l-2 border-primary/20 pl-4 space-y-1">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide py-1">{t("nav.about")}</p>
                {sobreItems.map((item) => (<Link key={item.name} href={item.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>))}
              </div>
              {navItems.slice(1).map((item) => (<Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">{renderAuthSection(true)}</div>
            </nav>
          </div>
        )}
      </header>

      {/* Render modals only if user is not authenticated */}
      {status !== 'authenticated' && (
        <>
          <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
          <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
        </>
      )}
    </>
  )
}
