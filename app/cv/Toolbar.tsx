"use client";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Toolbar = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const isEnglish = lang === "en";
  const isSwedish = lang === "sv";
  const router = useRouter();

  return (
    <div className="print:hidden  top-2 right-10 flex space-x-2 fixed">
      <Button variant={"outline"} onClick={() => window.print()}>
        <Printer />
      </Button>
      <button
        onClick={() => router.push("/cv?lang=sv")}
        className={`rounded-md overflow-hidden ${
          isSwedish ? "border border-primary" : ""
        }  `}
      >
        <Image
          width={40}
          height={30}
          alt="sv"
          src={"/se.svg"}
          className="w-10 h-auto object-contain"
        />
      </button>
      <button
        className={`rounded-md overflow-hidden ${
          isEnglish ? "border border-primary" : ""
        }  `}
        onClick={() => router.push("/cv?lang=en")}
      >
        {" "}
        <Image width={40} height={20} alt="sv" src={"/gb.svg"} />
      </button>{" "}
    </div>
  );
};

export default Toolbar;
