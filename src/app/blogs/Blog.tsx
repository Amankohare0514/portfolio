"use client"
import React from 'react'
import BlogData from './BlogData'
const Blog = () => {
  return (
    <div>
<div className="grid mt-6 md:p-0 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto max-w-[800px]">
  {BlogData.map((item, index) => (
    <div key={index} className="max-w-sm p-4 border hover:bg-slate-100 dark:hover:bg-gray-900 rounded-xl overflow-hidden ">
      <img className="w-full" src={item.image} alt="blog image" />
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-base">
          {item.description}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener"
          className="flex mt-4 items-center justify-center text-sky-500 border h-10 w-32 rounded-full mx-auto hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-black"
        >
          Read More
        </a>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default Blog