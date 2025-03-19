import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";

import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={cn(geistSans, geistMono)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar className="border-b" />
          <main className="flex-1 container mx-auto px-4 py-6 md:px-6 md:py-8 ">
            {children}
          </main>
          <Footer className="border-t" />
        </ThemeProvider>
      </body>
    </html>
  );
}
