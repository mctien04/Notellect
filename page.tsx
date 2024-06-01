/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8ug9rOiHMFN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react"
import Link from "next/link"
import TypewriterTitle from "@/components/ui/TypewriterTitle"

export default function Component() {
  
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-6 grainy bg-repeat">
      <div className="max-w-3xl text-center space-y-6 relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#7928CA] via-[#FF0080] to-[#00B4D8] rounded-full blur-3xl opacity-50 animate-gradient-move" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#FF0080] via-[#00B4D8] to-[#7928CA] rounded-full blur-3xl opacity-50 animate-gradient-move-reverse" />
        <h1 className="text-5xl font-bold text-blue-400 sm:text-7xl md:text-8xl">
        Note<span className="text-5xl font-bold text-pink-500 sm:text-7xl md:text-8xl">llect</span>
</h1>

        <TypewriterTitle/>
        <Link
          className="inline-flex items-center justify-center rounded-md bg-[#FF0080] px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#e6006f] focus:outline-none focus:ring-2 focus:ring-[#FF0080] focus:ring-offset-2"
          href="/sign-in"
        >
          Start Taking Notes
        </Link>
      </div>
    </div>
  )
}