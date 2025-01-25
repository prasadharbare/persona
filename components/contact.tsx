"use client"
import { IoMdMailUnread } from "react-icons/io"
import { FaReact, FaNodeJs, FaBoxOpen, FaGitAlt, FaFigma, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary py-20 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold underline">Contact</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.a
            href="mailto:prasad@phleebs.tech"
            className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoMdMailUnread className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">prasad@phleebs.tech</p>
            </div>
          </motion.a>
          <motion.a
            href="tel:+918657693758"
            className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhoneAlt className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground">+91 8657693758</p>
            </div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prasad-harbare-622a18319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">LinkedIn</h3>
              <p className="text-muted-foreground hover:text-primary">Connect with me</p>
            </div>
          </motion.a>
          <motion.a
            href="https://github.com/prasadharbare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 rounded-lg border-2 bg-background p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">GitHub</h3>
              <p className="text-muted-foreground hover:text-primary">View my projects</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

