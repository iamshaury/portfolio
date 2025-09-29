// components/floating_navbar.tsx
"use client";
import React, { useState, useEffect, JSX } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element; onClick?: () => void }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollY.getPrevious();

      if (scrollY.get() < 50) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.link)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActive(navItems[i].link);
          break;
        }
      }
    };

    onScroll(); // Set active link on initial load

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-6 inset-x-0 mx-auto z-[5000]",
        "flex max-w-fit p-2 items-center justify-center space-x-2",
        "rounded-full bg-black/80 backdrop-blur-sm border border-white/20",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        className
      )}
    >
      {navItems.map((navItem, idx: number) => {
        const Tag = navItem.onClick ? 'button' : 'a';
        return (
          <Tag
            key={`link-${idx}`}
            href={navItem.onClick ? undefined : navItem.link}
            onClick={navItem.onClick}
            className={cn(
              "group relative text-white items-center flex space-x-1 px-4 py-2 rounded-full text-sm font-medium",
              "border transition-colors duration-300",
              active === navItem.link
                ? "border-white/20"
                : "border-transparent hover:border-white/20"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            <span
              className={cn(
                "absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent",
                "transition-opacity duration-300",
                active === navItem.link
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              )}
            />
          </Tag>
        );
      })}
    </motion.div>
  );
};
