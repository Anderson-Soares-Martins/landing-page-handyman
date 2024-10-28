"use client";

import Link from "next/link";
import { Drill, Gamepad2, Pointer, Wrench, Zap } from "lucide-react";
import { useEffect } from "react";
import { generateWhatsappLink } from "@/utils";

export default function Page() {
  useEffect(() => {
    // Check if URL contains a hash (#) and scroll to the target element
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        const offset = 300; // Adjust this value to set the offset
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  }, []);

  const todosServicos = [
    {
      categoria: "Elétrica",
      hash: "eletrica",
      descricao: "Pequenos reparos e instalações elétricas",
      icon: <Zap size={32} />,
      servicos: [
        "Instalação de tomadas e interruptores",
        "Reparo de fiação elétrica",
        "Troca de disjuntores",
        "Instalação de luminárias e lustres",
        "Instalação de ventiladores de teto"
      ]
    },
    {
      categoria: "Hidráulica",
      hash: "hidraulica",
      descricao: "Pequenos reparos e instalações hidráulicas",
      icon: <Wrench size={32} />,
      servicos: [
        "Reparo de vazamentos em torneiras e canos",
        "Instalação de torneiras e chuveiros",
        "Reparo em bombas d'água",
        "Reparo em registro",
        "Aquecedor de água"
      ]
    },
    {
      categoria: "Instalações",
      hash: "instalacao",
      descricao: "Instalação de aparelhos eletrônicos e eletrodomésticos",
      icon: <Gamepad2 size={32} />,
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
      categoria: "Manutenção",
      hash: "manutencao",
      descricao: "Pequenos reparos e manutenção residencial",
      icon: <Drill size={32} />,
      servicos: [
        "Reparo de móveis e objetos domésticos",
        "Fixação de quadros e prateleiras",
        "Troca de fechaduras e maçanetas",
        "Reparo de vazamentos em telhados"
      ]
    }
  ];

  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-center mb-5 text-indigo-600 dark:text-indigo-400">
        Nossos Serviços
      </h1>
      <div className="text-center mb-10">
        <p className="text-gray-700 dark:text-slate-400 text-lg">
          Conheça todos os serviços de reparos e instalações, para a sua casa na
          região de Palhoça, SC.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6">
        {todosServicos.map((servico, index) => (
          <div
            id={servico.hash.toLowerCase()}
            key={index}
            className="flex flex-col pt-6 pb-0 bg-white dark:bg-indigo-950 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4 px-6">
              <div className="p-3 rounded-full bg-indigo-200 dark:bg-indigo-400 text-indigo-800 dark:text-white">
                {servico.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-slate-200">
                  {servico.categoria}
                </h2>
                <h1 className="text-sm text-gray-600 dark:text-slate-400">
                  {servico.descricao}
                </h1>
              </div>
            </div>
            <ul className="list-disc ml-6 text-gray-700 dark:text-slate-300 space-y-2 px-6 flex-1">
              {servico.servicos.map((item, idx) => (
                <li key={idx} className="text-base">
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={generateWhatsappLink(
                "Opa amigo, tudo bem? Gostaria de agendar um serviço!"
              )}
              target="_blank"
            >
              <button className="w-full mt-4 px-6 py-3 rounded-b-lg font-semibold text-white bg-indigo-600 dark:bg-indigo-400  hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                Faça seu orçamento
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-700 dark:text-slate-400 text-lg mb-4">
          Não encontrou o que procurava?
        </p>
        <Link
          href={generateWhatsappLink(
            "Opa amigo, tudo bem? Gostaria de fazer um orçamento"
          )}
          target="_blank"
        >
          <button className="px-6 py-3 text-lg font-bold text-white bg-indigo-600 dark:bg-indigo-400 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Faça seu orçamento sem compromisso
          </button>
        </Link>
      </div>
    </section>
  );
}
