"use client"
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from './home/page';
import About from './about/page';
import Blogs from './blogs/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Experience from './experience/page';
import Education from './education/page';
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Hero />
        <About />
        <Skills/>
        <Education />
        {/* <Experience /> */}
        {/* <Blogs /> */}
        {/* <Projects/> */}
      </NextUIProvider>
    </>
  );
}
