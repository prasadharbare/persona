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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="overflow-hidden">
          <div className="bg-primary p-1">
            <div className="bg-background dark:bg-secondary">
              <CardHeader>
                <CardTitle className="text-primary dark:text-white">Passionate Developer</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 pb-6">
                <p className="text-muted-foreground dark:text-secondary-foreground">
                  Hi! I&apos;m Prasad Harbare, a BSc Computer Science Graduate and Full Stack Developer with expertise in building modern web applications.
                  I specialize in JavaScript/TypeScript, React, Node.js, and various database technologies.
                </p>
                <p className="text-muted-foreground dark:text-secondary-foreground">
                  With a strong foundation in both frontend and backend development,
                  I enjoy creating efficient, scalable, and user-friendly applications
                  that solve real-world problems.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

