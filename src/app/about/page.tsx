// "use client"
// import React from "react";
// import { cn } from "@/lib/utils";
// import { Spotlight } from "@/components/ui/Spotlight";
// import {TextGenerateEffect} from "@/components/ui/text-generate-effect"
// function About() {
//   const words = `I'm a Mern Stack developer in India. I am creative and passionate about design and technology so I always try to craft great-looking software products.I done my Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology. My creative spirit is matched only by my dedication to design and technology. This combination of skills and enthusiasm makes me a valuable asset in the dynamic field of web development. When not coding, I like to watch TV shows and movies, play some games with friends or hang out with them. I'm also listening to music most of the time. According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. And last but not least, please don't hesitate to contact me! A keen interest in playing Cricket.`
//   return (
//     <>
//       <div className="font-sans mt-8  w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
//         <Spotlight className="-top-40 left-0 md:left-60 0" fill="white" />
//         <div className="p-4 max-w-[800px]  mx-auto relative z-10  w-full md:pt-0">
//           <h1 className="text-xl font-bold md:text-3xl  text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
//             About me
//           </h1>
//           <div className="w-full mt-4 h-auto mx-auto max-h-300 border lg:max-w-[800px]">
//             <img
//               src="https://heyaman.vercel.app/static/media/aman.842c793b15d3d928b477.jpg"
//               alt="Aman Koahre"
//               className="w-full h-auto mx-auto mt-2 mb-2 max-h-300  lg:max-w-[500px]"
//             />
//           </div>
//           <div className="mt-6">
//             <span className="text-xl font-bold md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
//               Who I Am
//             </span>
//             <div className="mt-4 font-normal text-base text-neutral-600 dark:text-neutral-300 max-w-[1024px] text-start mx-auto">
//               <TextGenerateEffect words={words} />
//             </div>
//             <div className="flex justify-start flex-col mt-8  text-lg">
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/aman__0514/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 Instagram
//               </a>
//               {/* Twitter */}
//               <a
//                 href="https://twitter.com/Aman__0514"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 Twitter
//               </a>
//               {/* GitHub */}
//               <a
//                 href="https://github.com/Amankohare0514"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }  

// export default About

import Image from 'next/image';
import { Github, Instagram, Linkedin, Mail, Briefcase, MapPin, Calendar } from 'lucide-react';

function About() {
  return (
    <>
      <h1 className="text-xl mt-8  md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        About
      </h1>
      <div className="min-h-screen bg-transparent px-8 sm:px-10 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-transparentg mt-6  overflow-hidden">
            <div className="flex flex-col item-center">
              {/* Image Section */}
              <div className="relative w-full md:w-auto flex justify-center">
                <Image
                  className="w-full object-cover max-w-xs md:max-w-xl"
                  src="https://heyaman.vercel.app/static/media/aman.842c793b15d3d928b477.jpg"
                  alt="Profile picture"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0  md:hidden"></div>
              </div>

              {/* Content Section */}
              <div className="w-full text-start mt-6">
                <p className="mt-2 text-xl text-gray-600 dark:text-gray-200 font-medium">
                  Frontend Developer & Designer
                </p>
                <div className="flex flex-wrap  gap-4 text-sm text-gray-400 dark:text-gray-200">
                  <div className="flex items-start ">
                    <Briefcase className="h-5 w-5 mr-2 text-indigo-500" />
                    1+ Years Experience
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                    Indore, India
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-500" />
                    Available for Freelance
                  </div>
                </div>
                <p className="mt-6 text-gray-600 dark:text-gray-200 leading-relaxed">
                  Hello! I'm Aman, a passionate web developer and designer with over 1 year of experience in creating beautiful, functional websites. I specialize in React, Next.js, and Tailwind CSS, and I love bringing ideas to life through code.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
                  I completed my Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
                  When not coding, I enjoy watching TV shows and movies, playing games with friends, or hanging out. I'm also constantly listening to music. According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. I also have a keen interest in playing cricket.
                </p>
                <div className="mt-8 flex  space-x-4">
                  <a href="https://github.com/Amankohare0514" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/aman__0514/" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="mailto:amankohare@gmail.com" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
