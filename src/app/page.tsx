import React from "react";
import Link from "next/link";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Component() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6"
      style={{
        backgroundImage: 'url("/Background-Notellect.svg")',
        backgroundRepeat: 'repeat', // or 'no-repeat', 'repeat-x', 'repeat-y'
        backgroundSize: 'cover' // or 'contain', 'auto'
      }}
    >
      <div className="max-w-3xl text-center space-y-6 relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#7928CA] via-[#FF0080] to-[#00B4D8] rounded-full blur-3xl opacity-50 animate-gradient-move z-0" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#FF0080] via-[#00B4D8] to-[#7928CA] rounded-full blur-3xl opacity-50 animate-gradient-move-reverse z-0" />
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-400 to-purple-300 sm:text-7xl md:text-8xl z-10 relative">
          Note<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-blue-500">llect</span>
        </h1>

        <TypewriterTitle className="z-10 relative" />

        <div className="mt-8 flex justify-center z-10 relative">
          <Link href="/dashboard">
            <Button variant="gradient">
              Start Taking Notes!
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
