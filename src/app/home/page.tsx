'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = "Hello! I'm Aman, a passionate web developer and designer with over 1 year of experience in creating beautiful, functional websites. I specialize in React, Next.js, and Tailwind CSS."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <>
      <div className="min-h-[600px] mt-16 md:mt-14 lg:mt-0 flex items-center justify-center relative overflow-hidden p-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 32 32%22%3E%3Cpath fill=%22%23fff%22 d=%22M0 4c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4h-24c-2.2 0-4-1.8-4-4v-24z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:64px_64px] opacity-10 animate-[move-background_20s_linear_infinite]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10 max-w-[760px] w-full bg-transparent backdrop-blur-md rounded-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                  Keep calm, I make <span className='font-bold text-sky-500'> websites work.</span></h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-md lg:text-md text-gray-600 dark:text-gray-400 mb-8">{typedText}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex space-x-4 mb-8"
              >
                <a href="https://github.com/Amankohare0514" className="text-gray-600 dark:text-gray-500 hover:text-gray-500 transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://x.com/Aman__0514" className="text-gray-600 dark:text-gray-500 hover:text-gray-500 transition-colors transform hover:scale-110">
                  <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-gray-600 dark:text-gray-500 hover:text-gray-500 transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/aman__0514/" className="text-gray-600 dark:text-gray-500 hover:text-gray-500 transition-colors transform hover:scale-110">
                  <Instagram size={24} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-full lg:w-1/2 p-8 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, 0, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative w-60 h-60 lg:w-72 lg:h-72"
              >
                <Image
                  src="/aman.jpg"
                  alt="John Doe"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-1"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
