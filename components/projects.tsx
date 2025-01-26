"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    title: "Untitled-Contact",
    description:
      "Features a contact form designed to collect user information, including name and email address. This form is intended for users to reach out or submit inquiries.",
    image: "/untitled-contact.png?height=200&width=300",
    technologies: ["Htnml","CSS","Javascript","DaisyUI","TailWindCSS","Vite"],
    demoLink: "https://untitled-contact-isc.pages.dev/",
    githubLink: "https://github.com/prasadharbare/Untitled-contact",
  },
  {
    title: "AutoPersona",
    description: "This project is an interactive car configurator built with React and Next.js, allowing users to customize and preview various car features including exterior colors, wheels, interior colors, and seat designs.",
    image: "/fisker.png?height=200&width=300",
    technologies: ["Html","CSS","ReactJs","NextJS","TailWindCSS","DaisyUI"],
    demoLink: "",
    githubLink: "https://github.com/prasadharbare/Fisker-nextjs",
  },
  {
    title: "PrioriTask",
    description:
      "A task management application designed to help users organize and prioritize their tasks effectively. The app also supports clearing all tasks at once and stores tasks in the browser's local storage to persist data between sessions.",
    image: "/prioritask.png?height=200&width=300",
    technologies: ["Html","CSS","Javascript","DaisyUI","TailWindCSS","Vite"],
    demoLink: "https://e678a3f1.prioritask-v2.pages.dev/",
    githubLink: "https://github.com/prasadharbare/PRIORITASK-V2",
  },
  {
    title: "Wakati-API",
    description:
      "Wakati API is an advanced text intelligence platform designed to analyze and calculate text scores with AI modules.",
    image: "/wakati-api.png?height=200&width=300",
    technologies: ["Hono","Zod-OpenAPI","Stoker","TypeScript","Vitest","Pino"],
    demoLink: "https://wakati.prasadharbare.workers.dev/",
    githubLink: "https://github.com/tiwakati/wakati",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-24 sm:py-32">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden flex flex-col h-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col justify-start gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="link"
                    asChild
                    size="sm"
                    className="flex-1 border dark:border-zinc-700 dark:bg-black dark:hover:bg-zinc-700"
                  >
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <FiExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                  <Button variant="link" asChild size="sm" className="flex-1 dark:hover:bg-zinc-700">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border dark:border-zinc-700 dark:bg-black"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

