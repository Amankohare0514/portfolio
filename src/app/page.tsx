"use client"
import "./globals.css";
import { NextUIProvider } from '@nextui-org/react';
import Hero from './home/page';
import Skill from './skills/page';
import { Toaster } from 'sonner';
import Experience from "./experience/page";
import Gears from "./gears/page";
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Toaster />
        <Hero />
        <Skill />
        <Gears />
        <Experience />
      </NextUIProvider>
    </>
  );
}
