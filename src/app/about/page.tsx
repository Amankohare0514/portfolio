"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect"
function About() {
  const words = `I'm a Mern Stack developer in India. I am creative and passionate about design and technology so I always try to craft great-looking software products. Pursuing a Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology. My creative spirit is matched only by my dedication to design and technology. This combination of skills and enthusiasm makes me a valuable asset in the dynamic field of web development. When not coding, I like to watch TV shows and movies, play some games with friends or hang out with them. I'm also listening to music most of the time. According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. And last but not least, please don't hesitate to contact me! A keen interest in playing Cricket.`
  return (
    <>
      <div className="font-sans mt-8  w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 0" fill="white" />
        <div className="p-4 max-w-[800px]  mx-auto relative z-10  w-full md:pt-0">
          <h1 className="text-xl font-bold md:text-3xl  text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
            About me
          </h1>
          <div className="w-full mt-4 h-auto mx-auto max-h-300 border lg:max-w-[800px]">
            <img
              src="https://heyaman.vercel.app/static/media/aman.842c793b15d3d928b477.jpg"
              alt="Aman Koahre"
              className="w-full h-auto mx-auto mt-2 mb-2 max-h-300  lg:max-w-[500px]"
            />
          </div>
          <div className="mt-6">
            <span className="text-xl font-bold md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
              Who I Am
            </span>
            <div className="mt-4 font-normal text-base text-neutral-600 dark:text-neutral-300 max-w-[1024px] text-start mx-auto">
              <TextGenerateEffect words={words} />
            </div>
            <div className="flex justify-start flex-col mt-8  text-lg">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aman__0514/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Instagram
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/Aman__0514"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Amankohare0514"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}  

export default About

