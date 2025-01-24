"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="container mx-auto flex min-h-screen items-center justify-center py-24 section-bg">
      <div className="flex flex-col items-center space-y-4 text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="animated-gradient-text text-shadow">I'm Prasad Harbare</span>
          <motion.span
            className="block text-primary dark:text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>
        <motion.p
          className="max-w-[700px] text-muted-foreground md:text-xl dark:text-secondary-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Building innovative web solutions with modern technologies
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

