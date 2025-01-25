import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Nav from "@/components/nav";
import { motion } from "framer-motion"; // Correct import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prasad-Full Stack Developer",
  description: "Full Stack Developer portfolio showcasing skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} px-4 sm:px-6 lg:px-8`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="sparkles">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="sparkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div
            initial={{ opacity: 0 }} // Motion properties applied here
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-screen flex-col"
          >
            <Nav />
            <ModeToggle className="fixed bottom-4 right-4 z-50" />
            <main className="flex-1 relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
