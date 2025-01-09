"use client";

import "./globals.css";
import { novar, switzer, syne, tiemposHeadline } from "@/fonts";
import { useEffect } from "react";
import Lenis from "lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${switzer.variable} ${tiemposHeadline.variable} ${novar.variable} ${syne.variable} font-sans text-body antialiased bg-background-primary text-foreground-primary`}
      >
        {children}
      </body>
    </html>
  );
}
