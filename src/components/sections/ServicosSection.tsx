"use client";

import Image from "next/image";
import Spotlight, { SpotlightCard } from "@/components/SpotLightCard";
import Link from "next/link";
import { Drill, Gamepad2, Pointer, Wrench, Zap } from "lucide-react";

import imgEletrica from "@/assets/img-eletrica.webp";
import imgHidraulica from "@/assets/img-hidraulica.webp";
import imgInstalacao from "@/assets/img-instalacao.webp";
import imgManutencao from "@/assets/img-manutencao.webp";

export const ServicosSection = () => {
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
    <Spotlight className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-7 items-start lg:max-w-none group">
      {servicos.map((servico, index) => (
        <SpotlightCard key={index}>
          <div className="relative h-full dark:bg-indigo-950 bg-white p-8 pb-10 rounded-[inherit] z-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[35%]">
              <div
                className="absolute inset-0 dark:bg-slate-900 bg-gray-100 rounded-t-lg z-10 dark:opacity-50 opacity-30"
                aria-hidden="true"
              ></div>
              <Image
                src={servico.img}
                alt="Imagem de Eletrica"
                className="object-cover object-center"
                fill
              />
            </div>
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 dark:bg-indigo-800 bg-gray-200 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col gap-14 h-full items-center text-center">
              <div className="relative inline-flex">
                <div
                  className="w-[50%] h-[50%] absolute inset-0 m-auto -translate-y-[10%] blur-2xl -z-10 rounded-full dark:bg-indigo-300 bg-indigo-400"
                  aria-hidden="true"
                ></div>
                <div className="rounded-full dark:bg-indigo-950 bg-gray-100 dark:text-white text-black p-4 shadow-lg z-20">
                  {servico.icon}
                </div>
              </div>
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
  );
};
