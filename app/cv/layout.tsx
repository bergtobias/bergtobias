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
  return <body className={cn(geistSans, geistMono)}>{children}</body>;
}
