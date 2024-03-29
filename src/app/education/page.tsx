
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

function Education() {
    return (
        <div className="mt-6  w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-[1024px]  mx-auto relative w-full">
                <h1 className="text-2xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-500 bg-opacity-50">
                    Education
                </h1>
                <p className="mt-4 font-normal font-sans text-base  text-neutral-600 dark:text-neutral-300 max-w-[1024px] text-start mx-auto">
                    <span className="text-md md:text-2xl font-sans">Barkatullah University Institute of Technology</span> <br />
                    <span className="text-md md:text-xl">Bachelor of Technology | Information Technology</span> <br /> <br />
                    Barkatullah University Institute of Technology is a public engineering college located in Bhopal.
                    It is one of the 15 government engineering colleges in Madhya Pradesh.
                </p>
            </div>
        </div>
    );
}

export default Education