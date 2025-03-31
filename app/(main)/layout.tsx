import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

import type React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
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
      </ThemeProvider>{" "}
    </body>
  );
}
