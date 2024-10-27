"use client";

// components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import logo from "@/assets/logo_construtor.webp";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [navbarOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed flex top-0 w-full items-center justify-center bg-background/80 backdrop-blur-sm z-50 border-b-[1px] border-b-primary/10 shadow-md h-[60px]">
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

        {/* Menu Button for Mobile */}
        <button
          className="sm:hidden text-primary"
          onClick={() => setNavOpen(!navbarOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Navigation Links */}
        <div
          className={
            "sm:flex flex-grow items-center sm:static absolute top-16 left-0 w-full sm:w-auto sm:bg-transparent bg-background sm:shadow-none shadow-lg" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="w-full sm:w-auto sm:ml-auto sm:mr-auto font-4 pt-2 sm:pt-0 px-5 sm:px-0 flex flex-col sm:flex-row items-center sm:text-base text-1xl sm:justify-center justify-start">
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <Button variant="ghost" asChild>
                <Link href="/">HOME</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/servicos">SERVIÇOS</Link>
              </Button>
              {/* <Button variant="ghost" asChild>
                <Link href="/about">SOBRE</Link>
              </Button> */}
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
