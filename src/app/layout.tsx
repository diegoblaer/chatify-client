import Footer from "@/components/layouts/Footer";
import Main from "@/components/layouts/Main";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatify",
  description: "Created by Diego Blaer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex flex-col h-screen bg-light-gray"
        )}
      >
        <Main>{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
