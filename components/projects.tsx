"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team communication features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard providing real-time forecasts and historical weather data visualization.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "CSS Modules"],
  },
  {
    title: "Social Media Analytics Tool",
    description: "A comprehensive analytics tool for social media managers to track engagement and campaign performance.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Python", "Flask", "SQLAlchemy"],
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

