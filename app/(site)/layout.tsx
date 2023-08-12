import "../../app/globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { getPages } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Blake Zajac",
  description: "Front End Developer and UX Designer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
