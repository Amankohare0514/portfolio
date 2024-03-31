"use client"
import { NextUIProvider } from '@nextui-org/react';
import Hero from './home/page';
import Education from './education/page';
import Skill from './skills/page';
import Contact from './contact/page';
import { Toaster } from 'sonner';
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Toaster/>
        <Hero />
        <Skill />
        <Education />
        <Contact />
      </NextUIProvider>
    </>
  );
}
