"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Example University",
    year: "2018-2022",
    description: "Studied core computer science concepts, data structures, algorithms, and software engineering principles",
  },
  {
    degree: "Full Stack Development Bootcamp",
    institution: "Tech Academy",
    year: "2022",
    description: "Intensive program covering modern web development technologies and best practices",
  },
]

export default function Education() {
  return (
    <section id="education" className="container mx-auto py-24 sm:py-32">
      <motion.h2 
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <div className="grid gap-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="text-lg font-semibold">{edu.institution}</div>
                  <div className="text-sm text-muted-foreground">{edu.year}</div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

