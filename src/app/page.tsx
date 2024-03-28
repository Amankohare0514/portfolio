"use client"
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <NextUIProvider>
      <Navbar />
    </NextUIProvider>
  );
}
