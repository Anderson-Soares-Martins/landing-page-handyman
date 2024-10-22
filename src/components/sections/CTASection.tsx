"use client";

import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export const CTASection = () => {
  return (
    <section className="h-[40rem] rounded-md dark:bg-indigo-900 bg-blue-200 flex flex-col items-center justify-center relative w-full">
      <div className="relative flex flex-col items-center justify-center text-center z-10 dark:text-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Resolva Seus Problemas Domésticos Hoje Mesmo
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Entre em contato e receba um orçamento gratuito para o seu serviço.
        </p>
        <motion.button
          className="px-6 py-3 bg-white text-black hover:text-white text-lg font-semibold rounded-md hover:bg-secondary transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar Orçamento
        </motion.button>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
};
