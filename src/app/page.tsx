"use client";

import { Compare } from "@/components/ui/compare";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo_construtor.webp";
import { Drill, Gamepad2, Pointer, Wrench, Zap } from "lucide-react";

import imgEletrica from "@/assets/img-eletrica.webp";
import imgHidraulica from "@/assets/img-hidraulica.webp";
import imgInstalacao from "@/assets/img-instalacao.webp";
import imgManutencao from "@/assets/img-manutencao.webp";

import antes from "@/assets/antes.png";
import depois from "@/assets/depois.png";
import clsx from "clsx";
import bgHero from "@/assets/bg-hero.webp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Spotlight, { SpotlightCard } from "@/components/SpotLightCard";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const features = [
    {
      title: "Experiência Comprovada",
      description: "Experiência e qualidade em vários tipos de reparo"
    },
    {
      title: "Atendimento Rápido",
      description:
        "Sempre pronto para atender sua emergência. Chega rapidamente para resolver seu problema."
    },
    {
      title: "Preço Justo",
      description:
        "Oferece orçamento transparente e preço competitivo, sem surpresas desagradáveis no final do serviço."
    }
  ];

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
      descricao: "Pequeno reparos e instalações hidráulicas",
      icon: <Wrench size={32} />,
      img: imgHidraulica,
      link: "/servicos/hidraulica"
    },
    {
      nome: "Elétrica",
      descricao: "Pequenos reparos e instalações elétricas",
      icon: <Zap size={32} />,
      img: imgEletrica,
      link: "/servicos/eletrica"
    },
    {
      nome: "Intalação",
      descricao: "Instalação de aparelhos eletrônicos e eletrodomésticos",
      icon: <Gamepad2 size={32} />,
      img: imgInstalacao,
      link: "/servicos/instacoes"
    },
    {
      nome: "Manutenção",
      descricao: "Pequenos reparos e manutenção residencial",
      icon: <Drill size={32} />,
      img: imgManutencao,
      link: "/servicos/manutencao"
    }
  ];

  return (
    <main className="bg-background transition-bg">
      <div className="relative h-[480px] w-full" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src={bgHero.src}
            alt="Background Image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center dark:bg-black/60 bg-black/50 md:flex-row">
          <div className="mb-4 md:mb-0 flex flex-col items-center absolute top-[60%] transform -translate-y-1/2">
            <Image
              src={logo.src}
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
            <h1
              className={clsx("text-white text-3xl md:text-5xl font-extrabold")}
            >
              ANDERSON
            </h1>
            <h2 className="text-secondary text-base md:text-lg font-lora tracking-widest">
              PEQUENOS REPAROS E INSTALAÇÕES
            </h2>

            <TextGenerateEffect
              duration={1.5}
              filter={false}
              className="mx-7 text-center"
              words={"Agende agora mesmo o melhor serviço da região!"}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col flex-1 items-center pt-10 mt">
        <Spotlight className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-7 items-start lg:max-w-none group">
          {servicos.map((servico, index) => (
            <SpotlightCard key={index}>
              <div className="relative h-full dark:bg-indigo-950 bg-white p-8 pb-10 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}

                <div className="absolute top-0 left-0 w-full h-[35%]">
                  <div
                    className="absolute inset-0 dark:bg-slate-900 bg-gray-100 rounded-t-lg z-10 dark:opacity-50 opacity-30"
                    aria-hidden="true"
                  ></div>
                  <Image
                    src={servico.img}
                    alt="Imagem de Eletrica"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 dark:bg-indigo-800 bg-gray-200 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col gap-14 h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[10%] blur-2xl -z-10 rounded-full dark:bg-indigo-300 bg-indigo-400"
                      aria-hidden="true"
                    ></div>
                    <div className="rounded-full dark:bg-indigo-950 bg-gray-100 dark:text-white text-black p-4 shadow-lg z-20">
                      {servico.icon}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl dark:text-slate-200 text-gray-800 font-bold mb-1">
                      {servico.nome}
                    </h2>
                    <p className="text-sm dark:text-slate-400 text-gray-600">
                      {servico.descricao}
                    </p>
                  </div>
                  <Link
                    className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-gray-800 transition-colors duration-150 bg-gray-200 rounded-full hover:bg-gray-400 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-900 focus:outline-none focus:ring focus:ring-indigo-300"
                    href={servico.link}
                  >
                    <Pointer size={16} className="mr-2" />
                    <span>Conheça os serviços</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </Spotlight>

        {/* Grade de Serviços */}
        <section className="flex pb-20 flex-col w-full items-center text-secondary-foreground px-6 mt-14">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
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
            Qualidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-card text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                }}
              >
                <h3 className="text-gray-800 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-800 mt-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Seção CTA */}
        <section className="h-[40rem] rounded-md dark:bg-indigo-900 bg-indigo-500 flex flex-col items-center justify-center relative w-full my-20">
          <div className="relative flex flex-col items-center justify-center text-center z-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
              Resolva Seus Problemas Domésticos Hoje Mesmo
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Entre em contato e receba um orçamento gratuito para o seu
              serviço.
            </p>
            <motion.button
              className="px-6 py-3 bg-white text-black text-lg font-semibold rounded-md hover:bg-secondary transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento
            </motion.button>
          </div>
          <ShootingStars />
          <StarsBackground />
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
            className="md:mx-10"
          />
        </section>
      </div>
    </main>
  );
}
