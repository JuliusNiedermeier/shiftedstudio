"use client";

import "./globals.css";
import { novar, switzer, syne, tiemposHeadline } from "@/fonts";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import { SiteLogo } from "@/components/site-logo";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { NavigationLinkIndicator } from "@/components/navigation-link-indicator";
import { motion, useScroll, useTransform } from "framer-motion";

interface NavigationLink {
  label: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { label: "Studio", href: "/" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [footerSize, setFooterSize] = useState({ width: 0, height: 0 });

  const footerTopOffset = useMemo(
    () => windowSize.height - footerSize.height,
    [windowSize, footerSize]
  );

  const minScale = useMemo(() => {
    if (windowSize.width <= 0) return 1;
    // (window-width - page-padding * 2) / window-width
    return (windowSize.width - 32 * 2) / windowSize.width;
  }, [windowSize, footerSize]);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    axis: "y",
    offset: ["end end", `end ${footerTopOffset}px`],
  });

  useEffect(() => console.log(minScale), [minScale]);

  const contentScale = useTransform(scrollYProgress, [0.75, 1], [1, minScale]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Track Footer size
  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new ResizeObserver(([{ borderBoxSize }]) => {
      setFooterSize({
        height: borderBoxSize[0].blockSize,
        width: borderBoxSize[0].inlineSize,
      });
    });

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  // Track window size
  const handleWindowResize = useCallback(() => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);

  return (
    <html lang="en">
      <body
        className={`${switzer.variable} ${tiemposHeadline.variable} ${novar.variable} ${syne.variable} font-sans text-body antialiased bg-background-primary text-foreground-primary overflow-y-visible`}
      >
        <header className="flex fixed top-0 p-8 justify-between w-full items-start z-50">
          <div className="flex gap-4 items-center">
            <SiteLogo />
            <div className="flex gap-4 items-end">
              <div className="text-heading-md">
                Shifted
                <div className="font-serif text-foreground-secondary font-regular inline-block ml-2">
                  Studio
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex gap-4 items-center"
              >
                <span
                  className={cn({
                    "text-label-primary": index == 0,
                    "text-label-secondary text-foreground-secondary": index > 0,
                  })}
                >
                  {link.label}
                </span>
                <NavigationLinkIndicator className="group-hover:opacity-100 opacity-0" />
              </Link>
            ))}
          </div>
        </header>

        <motion.div
          ref={contentRef}
          className="bg-background-primary origin-bottom"
          style={{ scale: contentScale }}
        >
          {children}
        </motion.div>

        <footer
          ref={footerRef}
          className="px-8 pt-8 sticky bottom-0 -z-10 bg-background-secondary"
        >
          <div className="bg-gradient-to-t from-background-secondary to-background-primary absolute top-0 w-full h-64 left-0 -translate-y-full" />
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-8">
              <div>© 2025</div>
              <div className="text-label-primary">Impressum</div>
            </div>
            <div className="flex flex-col gap-4 items-end text-right">
              <div>
                <div>Mail</div>
                <div className="text-label-secondary text-foreground-secondary">
                  info@shiftedstudio.com
                </div>
              </div>
              <div>
                <div>Instagram</div>
                <div className="text-label-secondary text-foreground-secondary">
                  shiftedstudiocom
                </div>
              </div>
            </div>
          </div>
          <div className="text-display-lg h-72 overflow-hidden mt-40">
            Shifted
          </div>
        </footer>
      </body>
    </html>
  );
}
