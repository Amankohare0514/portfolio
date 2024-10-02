import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import skills from "./SkillData";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skill() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-6 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-[800px] mx-auto relative w-full">
        <h1 className="text-xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
          Skill
        </h1>
        <div className="mx-auto mt-4 w-full">
          <motion.div
            className="flex flex-wrap justify-start"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }} // Hover effect
                className="m-1 py-1 px-3 font-sans bg-transparent dark:hover:text-white hover:text-black text-gray-500 dark:text-gray-300 font-semibold border hover:border-gray-900 border-gray-800 rounded-lg"
              >
                {skill}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
