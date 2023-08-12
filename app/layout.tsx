"use client";

import "./globals.css";
import type { Metadata } from "next";

import SiteHeader from "@/components/site-header";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Blake Zajac",
  description: "Front End Developer and UX Designer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSanity = pathname.includes("/sanity");

  return (
    <html lang="en">
      <body className="bg-light">
        {!isSanity && <SiteHeader />}
        {children}
      </body>
    </html>
  );
}
