import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-background py-6 md:py-8", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mt-8  pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tobias Berg. All rights reserved.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/bergtobias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="h-5 w-5"
                  src="/github.svg"
                  alt="github logo"
                  width={5}
                  height={5}
                />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/tobias-berg-ab987a183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="h-5 w-5"
                  src="/linkedin.svg"
                  alt="linkedin logo"
                  width={5}
                  height={5}
                />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
