"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
  size?: string; // Novo prop para definir o tamanho do círculo
}

export function PulsatingButton({
  className,
  children,
  pulseColor = "#25D366",
  duration = "1.5s",
  size = "70px", // Tamanho padrão do botão circular
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-full text-white dark:text-black bg-[#25D366] dark:bg-[#25D366]",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
          width: size,
          height: size
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
