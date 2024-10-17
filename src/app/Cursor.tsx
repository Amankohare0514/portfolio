"use client";
import { useEffect } from "react";
import useFluidCursor from "@/hooks/fluidCursor";
const FluidCursor = () => {
  useEffect(() => {
    FluidCursor();
  }, []);
  return (
    <div className="fixed top-0 left-0 z-">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};
export default FluidCursor;