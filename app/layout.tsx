import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";

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
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-light">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
