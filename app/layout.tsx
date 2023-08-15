"use client";

import "./globals.css";
import type { Metadata } from "next";
import Lenis from "@studio-freight/lenis";
import SiteHeader from "@/components/site-header";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Blake Zajac",
  description: "Front End Developer and UX Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     smoothWheel: true,
  //     duration: 2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   });

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <html lang="en">
      <body className="bg-light">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
