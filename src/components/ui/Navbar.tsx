"use client"
import { useState } from 'react';
import { ModeToggle } from '../TogleButton';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-4 mt-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full p-5 max-w-[800px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <Link href="/" className="text-gray-800 dark:text-gray-200  text-lg font-bold">Aman();</Link>
            </div>
            <div className="hidden md:flex">
              <div className='flex items-center justify-center'>
              <Link href="/about" className="text-gray-800 dark:text-white mr-4">About</Link>
              <Link href="/projects" className="text-gray-800 dark:text-white mr-4">Projects</Link>
              <Link href="/experience" className="text-gray-800 dark:text-white mr-4">Experience</Link>
              <Link href="/blogs" className="text-gray-800 dark:text-white mr-4">Blog</Link>
              <ModeToggle />
              </div>
            </div>
            <div className="md:hidden flex justify-center">
              <ModeToggle />
              <button
                onClick={toggleMenu}
                className="text-gray-800 rounded-sm dark:text-gray-200 border py-1 px-2 ml-2" >
                <MenuTwoToneIcon />
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
        <div className="flex fixed right-6  bg-transparent justify-end backdrop-blur-xl">
            <div className="md:hidden py-3 bg-transparent px-4  dark:bg-transparent border rounded-md ">
              <Link href="/about" className="block text-gray-800 dark:text-gray-300 py-2">About</Link>
              <Link href="/projects" className="block text-gray-800 dark:text-gray-300 py-1">Projects</Link>
              <Link href="/experience" className="block text-gray-800 dark:text-gray-300 py-1">Experience</Link>
              <Link href="/blogs" className="block text-gray-800 dark:text-gray-300 py-1">Blogs</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
