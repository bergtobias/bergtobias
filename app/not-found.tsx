import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="relative mb-8">
        {/* 404 with decorative elements */}
        <h1 className="text-9xl font-bold text-primary/10">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <Search className="h-24 w-24 text-primary/50" strokeWidth={1.5} />
        </div>
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-2">Page not found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Sorry, we couldn&#39;t find the page you&#39;re looking for. It might
        have been moved, deleted, or never existed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      </div>

      {/* Suggested links */}
      <div className="mt-12 border-t pt-8 w-full max-w-md">
        <h3 className="text-sm font-medium mb-4">You might be looking for:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <li>
            <Link href="/features" className="text-primary hover:underline">
              Features
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-primary hover:underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-primary hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-primary hover:underline">
              About us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
