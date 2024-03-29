"use client"
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from './home/page';
import About from './about/page';
import Blogs from './blogs/page';
import Skills from './skills/page';
import Projects from './projects/page';
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        {/* <Hero/>
        <About/>
        <Blogs/>
        <Skills/> */}
        <Projects/>
      </NextUIProvider>
      <Footer />
    </>
  );
}
