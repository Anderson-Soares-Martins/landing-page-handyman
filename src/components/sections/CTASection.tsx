"use client";

import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { generateWhatsappLink } from "@/utils";
import Link from "next/link";

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
        <Link
          href={generateWhatsappLink(
            "Opa amigo, tudo bem? Gostaria de fazer um orçamento"
          )}
          target="_blank"
        >
          <motion.button
            className="px-8 py-5 text-xl font-bold text-white bg-indigo-500 dark:bg-indigo-300 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Orçamento
          </motion.button>
        </Link>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
};
