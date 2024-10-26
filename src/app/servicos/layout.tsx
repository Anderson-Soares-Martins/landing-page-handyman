"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Tab {
  title: string;
  value: string;
  href: string;
}

export default function TabsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center flex-1 sm:mx-12 py-20 pb-10 space-y-10">
      {children}
    </div>
  );
}
