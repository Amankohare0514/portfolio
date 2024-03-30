"use client"
import React from 'react'
import BlogData from './BlogData'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
    Card,
    Typography,
  } from "@material-tailwind/react";
const Blog = () => {
  return (
    <div>
        <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mx-auto max-w-[800px]">
        {BlogData.map((item, index) => (
          <Card className="bg-transparent border font-sans  p-4 max-w-xl transition-transform transform hover:scale-95 cursor-pointer w-full rounded-2xl">
            <CardMedia
              component="img"
              alt="blog"
              height="140"
              image={item.image}
            />
            <CardContent>
              <Typography  variant="h6"  sx={{ fontWeight: 'bold' }} className='text-lg pb-2 font-sans text-gray-800 dark:text-gray-300 font-bold'>
                {item.title}
              </Typography>
              <Typography variant="h6"  sx={{ fontSize: '1rem' }}  className='font-sans text-gray-500'>
                {item.description}
              </Typography>
            </CardContent>
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              className="flex items-center mb-1 justify-center text-sky-500 border h-10 w-32 rounded-full mt-1 mx-auto hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-black"
            >
              Read More
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog