"use client"
import "./globals.css";
import { NextUIProvider } from '@nextui-org/react';
import Hero from './home/page';
import Skill from './skills/page';
import { Toaster } from 'sonner';
import Experience from "./experience/page";
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Toaster />
        <Hero />
        <Skill />
        <Experience />
      </NextUIProvider>
    </>
  );
}
