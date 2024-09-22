"use client"
import * as React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import Blog from './Blog';
const Blogs = () => {
  return (
    <>
      <div>
        <h1 className="text-xl mt-8  md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
          Blogs
        </h1>
        <Blog />
      </div>
    </>
  );
};

export default Blogs;