"use client"
import "./globals.css";
import { NextUIProvider } from '@nextui-org/react';
import Hero from './home/page';
import Skill from './skills/page';
import Contact from './contact/page';
import { Toaster } from 'sonner';
import TopProject from './projects/topproject';
import Experience from "./experience/page";
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Toaster />
        <Hero />
        <Skill />
        <TopProject />
        <Experience />
      </NextUIProvider>
    </>
  );
}
