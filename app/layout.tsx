import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import NextAuthProvider from "@/components/session-provider" // Import the new provider
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Youth & Teens - Ministério de Jovens e Adolescentes",
  description:
    "Ministério de Jovens e Adolescentes do Grupo Angola, Christ Embassy. Transformando vidas, impactando gerações.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans antialiased`}>
        <NextAuthProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </NextAuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
