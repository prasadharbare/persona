import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Nav from "@/components/nav"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Full Stack Developer portfolio showcasing skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} px-4 sm:px-6 lg:px-8`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Nav />
            <ModeToggle className="fixed bottom-4 right-4 z-50" />
            <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
