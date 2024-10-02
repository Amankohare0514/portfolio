// "use client";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { Spotlight } from "@/components/ui/Spotlight";
// import Link from "next/link";
// function Hero() {
//   const words = [
//     {
//       text: "👋 Hey",
//     },
//     {
//       text: "there",
//     },
//     {
//       text: "this",
//     },
//     {
//       text: "is",
//     },
//     {
//       text: "Aman Kohare.",
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];
//   return (
//     <>
//       <div className="flex flex-col text-4xl items-center justify-center h-[28rem]">
//         <div className="circleposition bg-[#902db4] rounded-[100%] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-120%] blur-[120px] h-[300px] w-[200px]"></div>
//         <div className="circleposition bg-[#ee8340] rounded-[100%] absolute  top-[50%] left-[65%] translate-x-[-50%]  translate-y-[-50%] blur-[100px] h-[300px] w-[100px]"></div>
//         <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-3xl  ">
//           Web developer in India.
//         </p>
//         <TypewriterEffectSmooth words={words} />
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//           <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
//           <a href="/resume.pdf" download> Resume</a>
//           </button>
//           <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//           <Link href="/contact">Contact</Link>
//           </button>
//         </div>
//       </div>
//       <div className="mt-6  w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
//         <Spotlight
//           className="-top-40 left-0 md:left-60 md:-top-20"
//           fill="white"
//         />
//         <div className="p-4 max-w-[800px]  mx-auto relative w-full">
//           <h1 className="text-2xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
//             About me
//           </h1>
//           <p className="mt-4 font-normal text-lg font-sans  text-neutral-600 dark:text-neutral-300 max-w-[800px] text-start mx-auto">
//           I am a passionate dev with 9 months of work experience and love learning new technologies since I discovered programming,
//            I am currently learning full stack development.
//           </p>
//         </div>
//        </div>
//     </>
//   );
// }

// export default Hero

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="min-h-[500px] flex items-center justify-center bg-transparent text-black dark:text-white p-4">
      <div className="circleposition bg-[#902db4] rounded-[100%] absolute top-[50%] left-[60%] translate-x-[-50%]  translate-y-[-120%] blur-[120px] h-[400px] w-[250px]"></div>
      <div className="circleposition bg-[#ee8340] rounded-[100%] absolute  top-[50%] left-[70%] translate-x-[-50%]  translate-y-[-50%] blur-[100px] h-[300px] w-[100px]"></div>
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          variants={item}
        >
          <span className="inline-block">
            <motion.span
              className="inline-block"
              animate={{ rotateX: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              Aman
            </motion.span>
          </span>{' '}
          <span className="inline-block">
            <motion.span
              className="inline-block"
              animate={{ rotateX: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Kohare
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-300"
          variants={item}
        >
          <motion.span
            className="inline-block"
            animate={{
              color: isHovered ? ['#0357FA', '#FA0303', '#F2C916'] : '#3A0BF8'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Web Developer
          </motion.span>
          {'  '}
          <motion.span
            className="inline-block"
            animate={{
              color: isHovered ? ['#FA0303', '#0357FA', '#4C431D'] : '#3A0BF8'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
             In India.
          </motion.span>
        </motion.p>
        <motion.div variants={item}>
          <Link
            href="/resume.pdf" download
            className="group relative inline-block px-8 py-3 text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">My Resume</span>
            <motion.span
              className="absolute inset-0 dark:bg-black bg-gray-50 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border-2 dark:border-white border-gray-900"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 flex items-center justify-center dark:text-gray-800 text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              My Resume
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero;