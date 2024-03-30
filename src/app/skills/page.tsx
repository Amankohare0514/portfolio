"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import skills from "./SkillData";
function Education() {
  return (
    <div className="mt-6  w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-[800px]  mx-auto relative w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-500 bg-opacity-50">
          Skill
        </h1>
        <div className="mx-auto mt-4 w-full">
          <div className="flex flex-wrap justify-start">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="m-1 py-2 px-4 bg-transparent dark:hover:text-white hover:text-black text-gray-400 font-semibold border hover:border-gray-900 border-gray-800 rounded-lg"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education