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
    <section
      className="relative h-[480px] w-full"
      id="home"
      aria-label="Hero Section de Serviços de Reparos e Instalações"
    >
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <Image
          src={bgHero}
          alt="Imagem de fundo representando serviços de reparo e instalações"
          layout="fill"
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/60 md:flex-row">
        <header className="mb-4 md:mb-0 flex flex-col items-center absolute top-[60%] transform -translate-y-1/2 text-center">
          <Image
            src={logo}
            alt="Logotipo de Anderson - Serviços de pequenos reparos e instalações"
            width={80}
            height={80}
            className="cursor-pointer"
            priority
          />
          <h1
            className={clsx("text-white text-3xl md:text-5xl font-extrabold")}
          >
            ANDERSON
          </h1>
          <h2 className="text-secondary text-base md:text-lg font-lora tracking-widest">
            Pequenos Reparos e Instalações
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para agendar um serviço pelo WhatsApp"
          >
            <Button className="px-9 py-7 mt-4 text-xl text-white bg-indigo-500 rounded-full hover:bg-indigo-700 focus:outline-none">
              Agendar Serviço
            </Button>
          </Link>
        </header>
      </div>
    </section>
  );
};
