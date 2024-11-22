"use client"
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import SkillsData from "./SkillData";

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
  const skillList = Array.isArray(SkillsData) ? SkillsData : [];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-6 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="max-w-[800px] mx-auto relative w-full">
        <div className="max-w-[800px] mx-auto py-6 md:py-10 px-4">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-3xl">
            Skills
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Equipped with the best tools to craft extraordinary code.
          </p>
        </div>
        <div className="mx-auto p-4 mt-4 w-full">
          <motion.div className="flex flex-wrap justify-start" variants={containerVariants}>
            {skillList.map((skill, index) => (
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
