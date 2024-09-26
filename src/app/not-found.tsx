'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

const Particle = ({ index }: { index: number }) => {
  const randomX = Math.random() * 100 - 50
  const randomY = Math.random() * 100 - 50
  const randomDelay = Math.random() * 0.5

  return (
    <motion.div
      className="absolute w-2 h-2 bg-primary rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, randomX],
        y: [0, randomY],
      }}
      transition={{
        duration: 2,
        delay: randomDelay,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  )
}

export default function NotFound() {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 50 }, (_, i) => i))
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {particles.map((index) => (
        <Particle key={index} index={index} />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 ease-in-out"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}