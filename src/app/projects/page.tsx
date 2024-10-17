"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import AllProjects from "./projects";
import { motion } from 'framer-motion'

function Project() {
  return (
    <div className="max-w-[800px] mx-auto px-8">
      <section className="w-full py-12 bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
        >
          List of my all Projects with github link.
        </motion.p>
        
        <motion.hr 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 border-t-2 border-gray-300 dark:border-gray-700 w-1/4"
        />
      </motion.div>
    </section>
      <HoverEffect items={AllProjects} />
    </div>
  );
}

export default Project;


