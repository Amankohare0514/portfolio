import React from 'react';
import BlogData from './BlogData';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
    Card,
    Typography,
} from "@material-tailwind/react";

const TopBlog = () => {
    // Get only the first two blog items
    const limitedBlogData = BlogData.slice(0, 2);

    return (
        <div className="p-0 md:p-4 max-w-[800px]  mx-auto relative w-full">
            <h1 className="text-xl mb-4 md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
                Top blogs
            </h1>
            <div className="grid md:p-0 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto max-w-[800px]">
                {limitedBlogData.map((item, index) => (
                    <div key={index} className="max-w-sm p-4 border rounded-xl overflow-hidden  transition-transform duration-300 hover:scale-95">
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
                                className="flex mt-4 items-center justify-center  border h-10 w-32 rounded-full mx-auto hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-black"
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

export default TopBlog;
