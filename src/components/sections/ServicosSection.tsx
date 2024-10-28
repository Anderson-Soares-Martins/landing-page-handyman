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
      hash: "hidraulica",
      descricao: "Pequeno reparos e instalações hidráulicas",
      icon: <Wrench size={32} />,
      img: imgHidraulica,
      link: "/servicos",
      servicos: [
        "Reparo de vazamentos em torneiras e canos",
        "Instalação de torneiras e chuveiros",
        "Reparo em bombas d'água",
        "Reparo em registro",
        "Aquecedor de água"
      ]
    },
    {
      nome: "Elétrica",
      hash: "eletrica",
      descricao: "Pequenos reparos e instalações elétricas",
      icon: <Zap size={32} />,
      img: imgEletrica,
      link: "/servicos",
      servicos: [
        "Instalação de tomadas e interruptores",
        "Reparo de fiação elétrica",
        "Troca de disjuntores",
        "Instalação de luminárias e lustres",
        "Instalação de ventiladores de teto"
      ]
    },
    {
      nome: "Instalação",
      hash: "instalacao",
      descricao: "Instalação de aparelhos eletrônicos e eletrodomésticos",
      icon: <Gamepad2 size={32} />,
      img: imgInstalacao,
      link: "/servicos",
      servicos: [
        "Fechadura digital",
        "Instalação de TV",
        "Máquina de lavar roupa",
        "Máquina de lavar louça",
        "Suportes e prateleiras",
        "Purificadores de água",
        "Cabo de rede"
      ]
    },
    {
      nome: "Manutenção",
      hash: "manutencao",
      descricao: "Pequenos reparos e manutenção residencial",
      icon: <Drill size={32} />,
      img: imgManutencao,
      link: "/servicos",
      servicos: [
        "Reparo de móveis e objetos domésticos",
        "Fixação de quadros e prateleiras",
        "Troca de fechaduras e maçanetas",
        "Reparo de vazamentos em telhados"
      ]
    }
  ];
  return (
    <Spotlight className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-7 items-start lg:max-w-none group">
      {servicos.map((servico, index) => (
        <SpotlightCard key={index}>
          <div className="relative h-full dark:bg-indigo-950 bg-white p-8 pb-10 rounded-[inherit] z-20 overflow-hidden shadow-lg dark:shadow-2xl">
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
                href={`${servico.link}/#${servico.hash.toLowerCase()}`}
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
