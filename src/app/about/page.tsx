"use client"
import Image from 'next/image';
import { Github, Instagram, Linkedin, Mail, Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion'

function About() {
  return (
    <>
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
            About Me
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
          >
            Hi, I'm Aman Kohare.
          </motion.p>
          
          <motion.hr 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 border-t-2 border-gray-300 dark:border-gray-700 w-1/4"
          />
        </motion.div>
      </section>
      <div className="min-h-screen bg-transparent px-8 sm:px-10 lg:px-8">
        <div className="max-w-[760px] mx-auto">
          <div className="bg-transparentg mt-6 overflow-hidden">
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
                <div className="absolute inset-0 md:hidden"></div>
              </div>

              {/* Content Section */}
              <div className="w-full text-start mt-6">
                <p className="mt-2 text-xl text-gray-600 dark:text-gray-200 font-medium">
                  Full stack Developer & Designer
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 dark:text-gray-200">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-2 text-indigo-500" />
                    3+ Years Experience
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                    Indore, India
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-500" />
                    Freelance & Remote Projects
                  </div>
                </div>
                <p className="mt-6 text-gray-600 dark:text-gray-200 leading-relaxed">
                  I'm Aman, a web developer and designer with over 3 years of experience building modern, responsive websites and web apps. My main stack is React, Next.js, and Tailwind CSS. I enjoy solving problems and turning ideas into digital products.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
                  I graduated with a B.Tech in Information Technology from Barkatullah University, Bhopal. My journey in programming is self-driven, and I keep learning new technologies to stay up-to-date.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
                  Outside of coding, I love watching movies and TV shows, gaming with friends, and listening to music. In 2024, I've already spent hundreds of hours on Spotify. I also enjoy playing cricket and exploring new places.
                </p>
                <div className="mt-8 flex space-x-4">
                  <a target="_blank" href="https://github.com/Amankohare0514" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/aman__0514/" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a target="_blank" href="mailto:amankohare@gmail.com" className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 transition-colors duration-300">
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
