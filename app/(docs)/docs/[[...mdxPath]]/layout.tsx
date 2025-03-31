import { Footer, LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

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

const navbar = (
  <Navbar
    logo={<b>TBerg</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © TBerg.</Footer>;

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap("/docs")}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      footer={footer}
      lastUpdated={<LastUpdated locale="sv-SE">Uppdaterades den</LastUpdated>}
      editLink={"Redigera denna sida"}
      search={
        <Search
          emptyResult="Inga resultat"
          errorText="Något gick fel"
          loading="Laddar..."
          placeholder="Sök..."
        />
      }
      themeSwitch={{ dark: "Mörkt", light: "Ljust", system: "System" }}
      feedback={{ content: "Lämna Feedback" }}
      toc={{
        backToTop: "Tillbaka till toppen",
        title: "Innehållsförteckning",
      }}
      sidebar={{ defaultMenuCollapseLevel: 2 }}

      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
}
