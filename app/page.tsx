import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <nav className="flex gap-4 w-full items-center justify-end bg-[color:var(--geist-background)]">
        <ThemeToggle />
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
      </main>
    </div>
  );
}
