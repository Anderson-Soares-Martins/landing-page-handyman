"use client";

// components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import logo from "@/assets/logo_construtor.webp";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [navbarOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed flex top-0 w-full items-center justify-center bg-background/80 backdrop-blur-sm z-50  border-b-[1px] border-b-primary/10 shadow-md h-[60px]">
      <div className="flex flex-row w-full items-center justify-between px-5">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={logo.src}
            alt="Logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="w-1/2 md:ml-auto md:mr-auto font-4 pt-1 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <nav>
              <Button variant="ghost" asChild>
                <Link href="/">HOME</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/servicos">SERVIÇOS</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/about">SOBRE</Link>
              </Button>
            </nav>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
