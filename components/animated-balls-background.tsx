"use client"

import type React from "react"
import { motion } from "framer-motion"

const AnimatedBallsBackground: React.FC = () => {
  const balls = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full animated-balls">
        {balls.map((ball) => (
          <motion.circle
            key={ball}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={Math.random() * 2 + 2}
            fill={`hsl(${Math.random() * 360}, 70%, 70%)`}
            animate={{
              x: [0, `${Math.random() * 100}vw`, 0],
              y: [0, `${Math.random() * 100}vh`, 0],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default AnimatedBallsBackground

