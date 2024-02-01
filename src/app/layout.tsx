import Typography from "@/components/common/Typography";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
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
      <body className={inter.className}>
        <main className="flex h-screen flex-col items-center justify-center lg:p-24 py-12 px-8 bg-light-gray">
          {children}
          <Typography
            variant="xsmall"
            as="div"
            className="mt-8 text-light-gray-variant"
          >
            by{" "}
            <Link
              className="hover:text-light-blue"
              href={"https://github.com/diegoblaer"}
            >
              @diegoblaer
            </Link>
          </Typography>
        </main>
      </body>
    </html>
  );
}
