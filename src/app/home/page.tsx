"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Spotlight } from "@/components/ui/Spotlight";
function Hero() {
  const words = [
    {
      text: "👋 Hey",
    },
    {
      text: "there",
    },
    {
      text: "this",
    },
    {
      text: "is",
    },
    {
      text: "Aman Kohare.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="flex flex-col text-4xl items-center justify-center h-[25rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-3xl  ">
          Mern stack developer in India.
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Resume
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Contact
          </button>
        </div>
      </div>
      <div className="mt-6  w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-[800px]  mx-auto relative w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
            About me
          </h1>
          <p className="mt-4 font-normal text-lg font-sans  text-neutral-600 dark:text-neutral-300 max-w-[800px] text-start mx-auto">
          I am a passionate dev with 9 months of work experience and love learning new technologies since I discovered programming,
           I am currently learning full stack development.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero