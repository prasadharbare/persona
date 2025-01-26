"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="container mx-auto py-24 sm:py-32">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="overflow-hidden bg-transparent border border-primary/20">
          <div className="bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary">Hello Developer</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 pb-6">
              <p className="text-foreground/80">
                HII! I am a BSc Computer Science graduate and a Full Stack Developer with expertise in building modern,
                scalable, and efficient web applications. My skills encompass both frontend and backend development,
                allowing me to create comprehensive solutions for complex problems.
              </p>
              <p className="text-foreground/80">
                On the frontend, I specialize in JavaScript, TypeScript, and React, enabling me to build interactive and
                responsive user interfaces. My backend expertise includes Node.js, which I use to develop robust
                server-side applications.
              </p>
              <p className="text-foreground/80">
              With a strong foundation in both frontend and backend development, I specialize in creating user-friendly applications that address real-world problems while ensuring efficiency and scalability. I am passionate about leveraging technology to deliver impactful solutions.
              </p>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

