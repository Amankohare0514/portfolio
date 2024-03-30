"use client"
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className="py-8 font-sans">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="flex justify-between items-center mt-4 border-t pt-8">
          <div className="flex flex-col font-semibold space-y-2">
            <a href="/" className="text-gray-500 hover:text-gray-700"> Home</a>
            <a href='/about'  className="text-gray-500 hover:text-gray-700"> About</a>
            <a href="/projects" className="text-gray-500 hover:text-gray-700"> Project</a>
            <a href="/experience" className="text-gray-500 hover:text-gray-700"> Experience</a>
          </div>
          <div className="flex flex-col font-semibold space-y-2">
            <a href="/skills" className="text-gray-500 hover:text-gray-700"> Skills</a>
            <a href="/blogs" className="text-gray-500 hover:text-gray-700"> Blogs</a>
            <a href="/guest" className="text-gray-500 hover:text-gray-700"> Guest</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-700"> Contact</a>
          </div>
          <div className="flex flex-col font-semibold space-y-2">
            <a className="text-gray-500 hover:text-gray-700" href="https://github.com/Amankohare0514/Portfolio-2024">
              Code
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://tailwindcss.com/docs/installation">
              Tailwind
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://react.dev/">
              React
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://mui.com/material-ui/">
              UI
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center border-t  py-4 mt-4">
          <span className="text-gray-500 hover:text-white"><a href='#'>© 2024 aman kohare</a></span>
          <div className="flex space-x-4">
            <a className="text-gray-500 hover:text-gray-700" href="https://github.com/Amankohare0514">
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://www.instagram.com/aman__0514/">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://twitter.com/Aman__0514">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://www.linkedin.com/in/aman-kohare-3a0678235/">
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

