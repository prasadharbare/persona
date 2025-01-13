"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Server, Zap, Globe, Lock, Cpu, Palette, Terminal, Cloud, GitBranch } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: Layout, description: "Building interactive UIs" },
      { name: "Next.js", icon: Zap, description: "Server-side rendering and static generation" },
      { name: "TypeScript", icon: Code2, description: "Type-safe JavaScript development" },
      { name: "CSS/Sass", icon: Palette, description: "Styling and animations" },
    ],
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server, description: "Server-side JavaScript runtime" },
      { name: "Express", icon: Zap, description: "Web application framework" },
      { name: "MongoDB", icon: Database, description: "NoSQL database" },
      { name: "GraphQL", icon: Globe, description: "Query language for APIs" },
    ],
    color: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch, description: "Version control" },
      { name: "Docker", icon: Cloud, description: "Containerization" },
      { name: "CI/CD", icon: Cpu, description: "Continuous integration and deployment" },
      { name: "Bash", icon: Terminal, description: "Shell scripting" },
    ],
    color: "bg-purple-500",
    textColor: "text-purple-500",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className={`text-2xl font-semibold mb-6 ${category.textColor}`}>{category.name}</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
              >
                <Card className={`overflow-hidden ${category.color} text-white`}>
                  <CardHeader className="pb-2">
                    <skill.icon className="h-8 w-8 mb-2" />
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90">{skill.description}</p>
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

