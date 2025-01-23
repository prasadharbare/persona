"use client"

import type React from "react"
import { motion } from "framer-motion"

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900"
        animate={{
          background: [
            "linear-gradient(to right, #e0f2fe, #f3e8ff, #fce7f3)",
            "linear-gradient(to right, #fce7f3, #e0f2fe, #f3e8ff)",
            "linear-gradient(to right, #f3e8ff, #fce7f3, #e0f2fe)",
          ],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </div>
  )
}

