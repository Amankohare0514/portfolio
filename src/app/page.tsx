"use client"
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        <Navbar />
        <Hero/>
        <About/>
        {/* <Blogs/> */}
        {/* <Skills/> */}
        {/* <Projects/> */}
        <Experience/>
        <Education/>
      </NextUIProvider>
      <Footer />
    </>
  );
}
