"use client";
import Image from "next/image";
import React from "react";
import { Carousel , Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full justify-center">
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "Web developement",
    title: "Introducing Next.js",
    src: "https://i.ibb.co/26ZRvGN/Image-Background-Colorful-Minimal-Phone-Wallpaper.png",
    content: "Learn More - https://medium.com/@amankohare/introducing-next-js-unveiling-exciting-new-features-374bb4830b83",
  },
  {
    category: "developer",
    title: "10 tools for developers",
    src: "https://i.ibb.co/3r3cdKD/Image-Background-Colorful-Minimal-Phone-Wallpaper-5.png",
    content: "Learn More - https://medium.com/@amankohare/10-tools-that-developers-across-various-domains-and-technologies-may-find-useful-05c52d5699ee", 
  },
  {
    category: "tech",
    title: "How to deploy website?",
    src: "https://i.ibb.co/hH23MJ2/Image-Background-Colorful-Minimal-Phone-Wallpaper-6.png",
    content: "Learn More - https://medium.com/@amankohare/how-to-deploy-website-on-vercel-da6c54a184d6",
  },
  {
    category: "developer",
    title: "How to become MernStack developer",
    src: "https://i.ibb.co/2P0nct0/Image-Background-Colorful-Minimal-Phone-Wallpaper-7.png",
    content: "Learn More - https://medium.com/@amankohare/how-to-become-mern-stack-developer-b90ff2301cd3",
  },
  {
    category: "Resume",
    title: "How to make Resume For Freshers!",
    src: "https://i.ibb.co/kSFD78Z/Image-Background-Colorful-Minimal-Phone-Wallpaper-8.png",
    content: "Learn More - https://medium.com/@amankohare/how-to-make-a-greate-resume-for-freshers-93913d82263a",   
  },
];
