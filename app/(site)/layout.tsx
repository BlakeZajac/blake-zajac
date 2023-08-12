import "../../app/globals.css";
import type { Metadata } from "next";

import { MainNav } from "@/components/main-nav";

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
      <body className="bg-light">
        <MainNav />
        {children}
      </body>
    </html>
  );
}
