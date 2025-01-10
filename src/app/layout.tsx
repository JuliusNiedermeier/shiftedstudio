"use client";

import "./globals.css";
import { novar, switzer, syne, tiemposHeadline } from "@/fonts";
import { useEffect } from "react";
import Lenis from "lenis";
import { SiteLogo } from "@/components/site-logo";

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
        <header className="flex sticky top-0 p-8">
          <div>
            <SiteLogo />
            <div className="mt-4 flex gap-4 items-end">
              <div className="text-heading-lg" style={{ lineHeight: "100%" }}>
                Shifted
              </div>
              <div className="font-serif text-foreground-secondary">Studio</div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
