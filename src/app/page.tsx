"use client"
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Navbar />
      </NextUIProvider>
      <Footer />
    </>
  );
}
