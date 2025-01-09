import type { Metadata } from "next";
import "./globals.css";
import { novar, switzer, syne, tiemposHeadline } from "@/fonts";

export const metadata: Metadata = {
  title: "Shifted Studio",
  description: "Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
