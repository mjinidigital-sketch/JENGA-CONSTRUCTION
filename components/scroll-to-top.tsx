"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    }

    if (window.scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress, { passive: true });
    calculateScrollProgress();

    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, [calculateScrollProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle dimensions for the SVG progress ring
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed bottom-20 right-5 sm:bottom-22 sm:right-6 z-50 transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "translate-y-8 opacity-0 scale-75 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        aria-label={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
        title="Scroll back to top"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xl backdrop-blur-md border border-primary/20 transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* Circular Progress Bar */}
        <svg
          className="absolute inset-0 -rotate-90 pointer-events-none"
          width={size}
          height={size}
        >
          {/* Background track circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted/30"
            fill="none"
          />
          {/* Animated active progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary transition-[stroke-dashoffset] duration-150 ease-out"
            fill="none"
          />
        </svg>

        {/* Arrow Icon with subtle bounce on hover */}
        <div className="relative flex items-center justify-center text-primary group-hover:text-primary transition-colors">
          <ArrowUp className="size-5 transition-transform duration-300 ease-out group-hover:-translate-y-1" />
        </div>

        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 whitespace-nowrap">
          Top {Math.round(scrollProgress)}%
        </span>
      </button>
    </div>
  );
}
