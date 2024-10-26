import Image from "next/image";
import logo from "@/assets/logo_construtor.webp";
import bgHero from "@/assets/bg-hero.webp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import clsx from "clsx";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateWhatsappLink } from "@/utils";

export const HeroSection = () => {
  return (
    <div className="relative h-[480px] w-full" id="home">
      <div className="absolute inset-0 opacity-70">
        <img
          src={bgHero.src}
          alt="Background Image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/60 md:flex-row">
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
          <Link
            href={generateWhatsappLink(
              "Opa amigo, tudo bem? Gostaria de agendar um serviço!"
            )}
          >
            <Button className="px-9 py-7 mt-4 text-xl text-white bg-indigo-500 dark:bg-indigo-300 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-400 focus:outline-none ">
              Agendar Serviço
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
