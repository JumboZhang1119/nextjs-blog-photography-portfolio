"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

interface ScrollableNavProps {
  adjacentProjects: any[];
  slug: string;
}

export default function ScrollableNav({ adjacentProjects, slug }: ScrollableNavProps) {

  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "category";
  const activeTag = searchParams.get("activeTag") || "";

  const currentProject = adjacentProjects.find(p => p.slug === slug);
  const currentTitle = currentProject?.content?.title || "";


  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, [slug]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md z-50 px-6 py-3 border-b border-gray-300 flex justify-between items-center">
      <Link
        href={`/projects?mode=${mode}&activeTag=${encodeURIComponent(activeTag)}`}
        className="inline-flex items-center text-sm sm:text-lg font-semibold text-black hover:underline whitespace-nowrap"
      >
        <FaArrowLeft />
        <span className="hidden sm:inline ml-1 sm:text-sm">All Projects</span>
      </Link>


      <div
        className={`flex-1 text-center text-lg sm:text-lg md:text-lg font-bold text-black overflow-hidden whitespace-nowrap
          transition-transform duration-700 ease-out
          ${animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {currentTitle}
      </div>


      
    <div
        className="text-xs sm:text-sm font-semibold text-gray-800 invisible"
        >
        ◀ <span className="hidden invisible sm:inline ">All Projects</span>
    </div>
    </div>
  );
}
