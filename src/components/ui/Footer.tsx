"use client"
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import CallIcon from '@mui/icons-material/Call';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
export default function Footer() {
  return (
    <footer className="py-8 font-sans">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="flex justify-between items-center mt-4 border-t pt-8">
          <div className="flex justify-center flex-col space-y-2">
            <a href="/" className="text-gray-900 justify-center  dark:text-gray-200"><HomeIcon /> Home</a>
            <a href='/about' className="text-gray-900 justify-center  dark:text-gray-200"><Person2Icon /> About</a>
            <a href="/projects" className="text-gray-900 justify-center  dark:text-gray-200"> <AddBoxIcon /> Project</a>
            <a href="/experience" className="text-gray-900 justify-center  dark:text-gray-200"><BarChartIcon /> Experience</a>
          </div>
          <div className="flex flex-col  space-y-2">
            <a href="/blogs" className="text-gray-900 dark:text-gray-200 "><MenuBookIcon /> Blog</a>
            <a href="/skills" className="text-gray-900 dark:text-gray-200"><BatteryCharging60Icon/> Skills</a>
            <a href="/contact" className="text-gray-900 dark:text-gray-200"> <CallIcon/> Contact</a>
            <a href="/resume.pdf" download className="text-gray-900 dark:text-gray-200"><LibraryBooksIcon /> My resume</a>
          </div>
          <div className="flex flex-col  space-y-2">
          <a className="text-gray-900 dark:text-gray-200" href="https://github.com/Amankohare0514">
              <GitHubIcon className="h-6 w-6" /> Github
            </a>
            <a className="text-gray-900 dark:text-gray-200" href="https://www.instagram.com/aman__0514/">
              <InstagramIcon className="h-6 w-6" /> Instagram
            </a>
            <a className="text-gray-900 dark:text-gray-200" href="https://twitter.com/Aman__0514">
              <TwitterIcon className="h-6 w-6" /> Twitter
            </a>
            <a className="text-gray-900 dark:text-gray-200" href="https://www.linkedin.com/in/aman-kohare-3a0678235/">
              <LinkedInIcon className="h-6 w-6" /> Linkedin
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center border-t  py-4 mt-4">
          <span className="text-gray-900 dark:text-gray-200"><a href='#'>© 2024 aman kohare</a></span>
        </div>
      </div>
    </footer>
  );
}

