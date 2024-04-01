"use client"
import * as React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import Blog from './Blog';
const Blogs = () => {
  return (
    <>
      <div>
        <h1 className="text-xl  md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
          Blogs
        </h1>
        <div className="flex font-sans justify-center mb-6  items-center mt-8">
          <div className="w-full  max-w-[800px] md:w-[800px] rounded-lg bg-slate-50  dark:bg-gray-900 text-white  p-4 shadow-md mx-4 md:mx-0">
            <div className="flex items-center space-x-2">
              <PushPinIcon className="text-gray-800 dark:text-gray-700" />
              <span className="font-semibold">Pinned</span>
            </div>
            <p className="mt-2 text-gray-800 dark:text-gray-400">
              Hey there! You can check out more blog created by me by visiting my Medium profile. Thanks and here is {" "}
              <a target='_blank' className="text-sky-500 hover:underline" href="https://medium.com/@amankohare">
                Medium
              </a>
            </p>
          </div>
        </div>

        <Blog />
      </div>
    </>
  );
};

export default Blogs;