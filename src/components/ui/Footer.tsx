"use client"
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 font-sans">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="flex justify-between items-center mt-4 border-t pt-8">
          <div className="flex justify-center flex-col space-y-2">
            <a href="/" className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300"> Home</a>
            <a href='/about' className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300">About</a>
            <a href="/projects" className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300"> Project</a>
            <a href="/experience" className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300">Experience</a>
          </div>
          <div className="flex flex-col  space-y-2">
            <a href="/blogs" className="text-gray-900 hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300"> Blog</a>
            <a href="/skills" className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300"> Skills</a>
            <a href="/contact" className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300">  Contact</a>
            <a href="/resume" className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300"> My resume</a>
          </div>
          <div className="flex flex-col  space-y-2">
            <a target='_blank' className="text-gray-900  justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300" href="https://github.com/Amankohare0514">
              Github
            </a>
            <a target='_blank' className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300" href="https://www.instagram.com/aman__0514/">
              Instagram
            </a>
            <a target='_blank' className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300" href="https://twitter.com/Aman__0514">
              Twitter
            </a>
            <a target='_blank' className="text-gray-900 justify-center hover:text-gray-500 hover:dark:text-gray-200 dark:text-gray-300" href="https://www.linkedin.com/in/aman-kohare-3a0678235/">
              Linkedin
            </a>
          </div>
        </div>
        <div className="circleposition bg-[#902db4] rounded-[100%] absolute  left-[50%] translate-x-[-80%]  translate-y-[0%] blur-[70px] h-[90px] w-[350px]"></div>
        <div className="circleposition bg-[#ee8340] rounded-[100%] absolute   left-[60%] translate-x-[-40%]  translate-y-[0%] blur-[70px] h-[90px] w-[200px]"></div>
        <div className="flex justify-between items-center border-t  py-4 mt-4">
          <span className="text-gray-900 dark:text-gray-200">© 2024 aman kohare</span>
        </div>
      </div>
    </footer>
  );
}

