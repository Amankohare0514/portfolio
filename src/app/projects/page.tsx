"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import AllProjects from "./projects";

function Project() {
  return (
    <div className="max-w-[800px] mx-auto px-8">
      <h1 className="text-xl mt-8 font-bold md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        Projects
      </h1>
      <HoverEffect items={AllProjects} />
    </div>
  );
}

export default Project;


