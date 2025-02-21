"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Layout,
  Server,
  Zap,
  FileCode2,
  FileIcon as FileHtml,
  FileType,
  Github,
  FileText,
  Hexagon,
  Figma,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: Layout, description: "Building interactive UIs" },
      { name: "HTML", icon: FileHtml, description: "Structure and content of web pages" },
      { name: "CSS", icon: FileType, description: "Styling and layout of web pages" },
      { name: "TypeScript", icon: Code2, description: "Type-safe JavaScript development" },
    ],
    gradient: "bg-gradient-to-br from-purple-300 to blue-100",
    textColor:  "text-white-800",
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server, description: "Server-side JavaScript runtime" },
      { name: "Express", icon: Zap, description: "Web application framework" },
      { name: "MongoDB", icon: Database, description: "NoSQL database" },
      { name: "Next.js", icon: FileCode2, description: "React framework for production" },
    ],
    gradient: "bg-gradient-to-br from-red-300 to white-100",
    textColor:  "text-white-800",
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "GitHub", icon: Github, description: "Version control and collaboration" },
      { name: "Notion", icon: FileText, description: "Project management and documentation" },
      { name: "Vite", icon: Hexagon, description: "Next generation frontend tooling" },
      { name: "Figma", icon: Figma, description: "UI design and prototyping" },
    ],
    gradient: "bg-gradient-to-br from-yellow-200 to orange-300",
    textColor:  "text-white-800",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-24 sm:py-32">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className={`text-2xl font-semibold mb-6 ${category.textColor}`}>{category.name}</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="transform transition-all duration-300 hover:shadow-xl"
              >
                <Card
                  className={`overflow-hidden ${category.gradient} transition-all duration-300 hover:shadow-lg h-full flex flex-col`}
                >
                  <CardHeader className="pb-2">
                    <skill.icon className={`h-8 w-8 mb-2 ${category.textColor}`} />
                    <CardTitle className={`text-lg ${category.textColor}`}>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className={`text-sm ${category.textColor} opacity-90`}>{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  )
}

