"use client";

import { useState } from "react";
import { Compare } from "@/components/ui/compare";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_construtor.webp";
import iconEletrica from "@/assets/icon-eletrica.webp";
import iconHidraulica from "@/assets/icon-hidraulica.webp";
import iconInstalacao from "@/assets/icon-instalacao.webp";
import iconManutencao from "@/assets/icon-manutencao.webp";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import antes from "@/assets/antes.png";
import depois from "@/assets/depois.png";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const depoimentos = [
    {
      quote:
        "Ótimo profissional, fez a instalação do suporte super bem! Mesmo com os problemas do próprio produto ele fez a instalação.",
      name: "Fernanda T."
    },
    {
      quote: "Muito atencioso e fez exatamente o que precisávamos!",
      name: "Mirele F."
    },
    {
      quote: "Excelente serviço, muito prestativo, cuidadoso e gente boa!",
      name: "Marcos R."
    },
    {
      quote:
        "Realizou o serviço dentro do horário programado e bem feito. Recomendo!",
      name: "Roger P."
    },
    {
      quote: "Profissional excelente e respeitoso, super indico.",
      name: "Katiely"
    },
    {
      quote: "Excelente serviço prestado, atencioso e educado.",
      name: "Geovani"
    }
  ];

  const servicos = [
    {
      nome: "Hidráulica",
      icon: iconHidraulica.src,
      link: "/servicos/hidraulica"
    },
    { nome: "Elétrica", icon: iconEletrica.src, link: "/servicos/eletrica" },
    {
      nome: "Intalação de aparelhos",
      icon: iconInstalacao.src,
      link: "/servicos/instacoes"
    },
    {
      nome: "Manutenção Residencial",
      icon: iconManutencao.src,
      link: "/servicos/manutencao"
    }
  ];

  return (
    <main className="bg-background transition-bg ">
      <div className="w-full flex flex-col flex-1 mt-[60px] items-center pt-10">
        <section className="min-h-screen w-full flex flex-col items-center text-center text-foreground px-6 relative">
          <div className="shadow-red"></div>
          <div className="shadow-blue"></div>
          {/* Seção Hero */}
          <Image
            src={logo.src}
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
          <h1
            className={clsx(
              "text-3xl md:text-5xl font-extrabold",
              theme !== "dark" && "text-background"
            )}
          >
            ANDERSON
          </h1>
          <h2 className="text-secondary text-base md:text-lg font-lora tracking-widest">
            PEQUENOS REPAROS E INSTALAÇÕES
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 max-w-4xl mx-auto z-10 mb-20">
            {servicos.map((servico, index) => (
              <Link href={servico.link} key={index}>
                <motion.div
                  className="bg-foreground text-primary-foreground flex items-center p-6 rounded-lg shadow-white shadow-sm text-center cursor-pointer gap-x-6"
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex-1 flex items-center">
                    <Image
                      src={servico.icon}
                      alt="Logo"
                      width={40}
                      height={40}
                      className={`cursor-pointer ${
                        theme === "dark" ? "" : "invert"
                      }`}
                    />
                    <Separator
                      orientation="vertical"
                      className="h-[50px] mx-3"
                    />
                    <h3 className="text-lg font-semibold">{servico.nome}</h3>
                  </div>
                  <ArrowRight />
                </motion.div>
              </Link>
            ))}
            <Button className="mt-10 p-10 w-full col-span-1 md:col-span-2">
              Agende um Serviço
            </Button>
          </div>
        </section>

        {/* Grade de Serviços */}
        <section className="flex pb-20 flex-col w-full items-center text-secondary-foreground px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Antes e Depois
          </h2>
          <Compare
            slideMode="drag"
            firstImage={antes.src}
            secondImage={depois.src}
            className="mt-12 w-full max-w-xl rounded-lg shadow-2xl opacity-80"
          />
        </section>

        {/* Seção de Características */}
        <section className="text-foreground px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Por Que Escolher Nosso Marido de Aluguel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              className="bg-card p-6 rounded-lg shadow-sm text-card-foreground text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <h3 className="text-xl font-semibold">Experiência Comprovada</h3>
              <p className="text-muted-foreground mt-4">
                Experiência e qualidade em varios tipos de reparos
              </p>
            </motion.div>
            <motion.div
              className="bg-card p-6 rounded-lg shadow-sm text-card-foreground text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <h3 className="text-xl font-semibold">Atendimento Rápido</h3>
              <p className="text-muted-foreground mt-4">
                Estamos sempre prontos para atender suas emergências. Chegamos
                rapidamente para resolver seu problema.
              </p>
            </motion.div>
            <motion.div
              className="bg-card p-6 rounded-lg shadow-sm text-card-foreground text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <h3 className="text-xl font-semibold">Preço Justo</h3>
              <p className="text-muted-foreground mt-4">
                Oferecemos orçamentos transparentes e preços competitivos, sem
                surpresas desagradáveis no final do serviço.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Seção CTA */}
        <section className="relative overflow-hidden text-white w-full text-center py-96">
          <Vortex>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Resolva Seus Problemas Domésticos Hoje Mesmo
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Entre em contato e receba um orçamento gratuito para o seu
              serviço.
            </p>
            <motion.button
              className="px-6 py-3 bg-background text-foreground text-lg font-semibold rounded-md hover:bg-secondary transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento
            </motion.button>
          </Vortex>
        </section>

        {/* Seção de Depoimentos */}
        <section className="w-full  pb-40 bg-background text-foreground ">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            O Que Nossos Clientes Dizem
          </h2>
          <InfiniteMovingCards
            items={depoimentos}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="mx-10"
          />
        </section>
      </div>
    </main>
  );
}
