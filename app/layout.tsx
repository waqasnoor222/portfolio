import type React from "react"
import type { Metadata } from "next"
import { Sora, Russo_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeToggle from "@/components/theme-toggle"
import Preloader from "@/components/preloader"
import { Toaster } from "@/components/ui/sonner"

const sora = Sora({ subsets: ["latin"] })
const russo = Russo_One({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-russo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Muhammad Waqas | Frontend Developer & Angular Specialist",
  description:
    "Muhammad Waqas – Frontend Developer specializing in Angular, TypeScript, JavaScript, and responsive UI development. Explore clean, fast, and user-friendly web experiences.",
  keywords: [
    "Muhammad Waqas",
    "Frontend Developer",
    "Angular Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Portfolio",
    "Responsive Web Design",
    "UI Developer",
  ],
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.className} ${russo.variable} font-sans antialiased`}>
        <Preloader />
        <ThemeProvider>
          {children}
          <Toaster position="bottom-left" richColors/>
          <ThemeToggle />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
