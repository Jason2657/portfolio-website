// app/page.tsx
"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto min-h-[calc(100vh-200px)] flex items-center relative">
  
      {/* Decorative Squares */}
      {/*<div className="hidden md:block absolute top-24 -left-4 w-12 h-12 bg-blue-500 rounded-sm opacity-80" />*/}
      <div className="hidden md:block absolute bottom-40 -left-6 w-8 h-8 bg-emerald-500 rounded-sm opacity-80" />
      <div className="hidden md:block absolute top-32 -right-4 w-10 h-10 bg-purple-500 rounded-sm opacity-80" />
      <div className="hidden md:block absolute bottom-24 -right-2 w-6 h-6 bg-blue-500 rounded-sm opacity-80" />
      <div className="hidden md:block absolute top-[55%] left-[58%] w-8 h-8 bg-amber-500 rounded-sm opacity-80" />

      <div className="flex items-center justify-between gap-4 md:gap-8 w-full">

        {/* Left Column */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <TypeAnimation
              sequence={[
                "Hey, I'm Jason!",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <div className="mt-2 md:mt-4 space-y-3">
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300">
              I'm a CS + Psychology senior at Columbia. I love solving complex problems and building AI products from zero to one.
            </p>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300">
              Trilingual (EN · DE · CN), most curious about consumer AI and multi-agent systems, and at my best when I get to combine technical depth with deep user understanding.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-6">
            <Link
              href="/projects"
              className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white text-sm md:text-base rounded-lg hover:bg-blue-600 transition"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="px-4 md:px-6 py-2 md:py-3 border border-gray-300 text-sm md:text-base rounded-lg hover:bg-gray-100 transition dark:border-gray-600 dark:hover:bg-gray-800"
            >
              Resume
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Jason2657"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jasonagxie"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right: Emoji */}
        <div className="w-40 h-40 md:w-80 md:h-80 relative flex-shrink-0">
          <Image
            src="/memoji.png"
            alt="Jason's memoji"
            fill
            quality={100}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}