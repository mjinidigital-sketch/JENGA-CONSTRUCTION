"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // Whenever the path or query parameters change, complete and reset the loader
  useEffect(() => {
    setProgress(100);
    const timeout = setTimeout(() => {
      setIsNavigating(false);
      setProgress(0);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  // Intercept clicks on links that trigger internal navigation
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore hash links, external links, mailto, tel, target="_blank", modified clicks
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      // Check if it's the exact same pathname + hash
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(href, window.location.href);

      if (
        currentUrl.origin === targetUrl.origin &&
        currentUrl.pathname === targetUrl.pathname &&
        currentUrl.search === targetUrl.search &&
        targetUrl.hash
      ) {
        // Just an anchor link on the same page, let smooth scroll handle it
        return;
      }

      if (currentUrl.origin === targetUrl.origin) {
        setIsNavigating(true);
        setProgress(25);

        // Advance progress smoothly in increments
        const t1 = setTimeout(() => setProgress(55), 100);
        const t2 = setTimeout(() => setProgress(78), 280);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  if (!isNavigating && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none overflow-hidden bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-primary to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "200ms" : "400ms",
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
