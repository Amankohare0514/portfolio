"use client"
import { NextUIProvider } from '@nextui-org/react';
import Hero from './home/page';
import About from './about/page';
import Education from './education/page';
import Contact from './contact/page';
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Hero />
        <About />
        <Education />
        {/* <Contact/> */}
      </NextUIProvider>
    </>
  );
}
