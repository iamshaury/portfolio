"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";

interface TimelineEntry {
  title: string;
  description: string;
  content: React.ReactNode;
  githubUrl?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // Smoother fade-in

  return (
    <div className="w-full text-left relative font-sans p-4 md:p-8 z-10 overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto pb-20 z-20">
      <div className="text-center mb-20">
      <h2 className="relative inline-block px-8 sm:px-16 py-2 text-4xl lg:text-6xl p-2 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            My Projects
            <div className="absolute left-0 top-1/2 w-40 sm:w-60 md:w-80 h-24 border-t-2 border-l-2 border-purple-500 rounded-tl-full transform -translate-x-full -translate-y-2 -z-10"></div>
            <div className="absolute right-0 top-1/2 w-40 sm:w-60 md:w-80 h-24 border-t-2 border-r-2 border-purple-500 rounded-tr-full transform translate-x-full -translate-y-2 -z-10"></div>
          </h2>
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
        <div className="relative z-10" ref={ref}>
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pt-10 md:pt-40 md:grid md:grid-cols-2 md:gap-10"
            >
              {/* Left-hand side description (sticky on desktop) */}
              <div className="sticky top-40 self-start hidden md:block">
                <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <div className="pl-20">
                  <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-4 text-base leading-relaxed">
                    {item.description}
                  </p>
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800/50 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right-hand side content (iframe, etc.) */}
              <div className="relative pl-20 pr-4 md:pl-0 md:pr-0">
                <div className="h-10 absolute left-3 -top-10 md:hidden w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                <p className="md:hidden block text-gray-400 mb-4">
                  {item.description}
                </p>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-white bg-gray-800/50 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Source Code</span>
                  </a>
                )}
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
