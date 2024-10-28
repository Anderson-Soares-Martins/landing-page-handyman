import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://andersonreparos.com.br"),
  title: "Anderson Reparos - Serviços Domésticos em Palhoça e Região",
  description:
    "Serviços rápidos e de qualidade em elétrica, hidráulica e manutenções gerais para sua casa em Palhoça, SC e arredores.",
  category: "Serviços de Reparos e Instalações",
  icons: [
    {
      url: "../assets/logo.webp",
      sizes: "192x192",
      type: "image/webp"
    },
    {
      url: "../assets/logo.webp",
      sizes: "192x192",
      type: "image/webp"
    }
  ],
  openGraph: {
    siteName: "Anderson Pequenos Reparos e Instalações",
    type: "website",
    locale: "pt_BR",
    countryName: "Brasil",
    phoneNumbers: ["+5548999652972"],
    url: "https://andersonreparos.com.br",
    title: "Anderson Reparos - Serviços Domésticos em Palhoça e Região",
    description:
      "Especialistas em pequenos reparos e instalações para sua casa.",
    images: [
      {
        url: "../assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "Anderson Reparos - Confiável e eficiente"
      }
    ]
  },
  keywords: [
    "reparos",
    "manutenção",
    "elétrica",
    "hidráulica",
    "instalações",
    "serviços domésticos",
    "Palhoça",
    "SC",
    "Instalação de",
    "conserto de móveis",
    "troca de disjuntores",
    "reparo de fiação elétrica",
    "instalação de ventilador de teto",
    "instalação de TV",
    "instalação de fechadura digital",
    "reparo de vazamentos",
    "instalação de torneira",
    "instalação de chuveiro",
    "instalação de luminária",
    "instalação de suporte de prateleira",
    "manutenção de telhado",
    "reparos elétricos em residência",
    "serviços hidráulicos em casa",
    "conserto e manutenção residencial",
    "instalação de eletrodomésticos",
    "serviços de instalação de purificador de água",
    "reparos em telhado",
    "instalação de aparelhos eletrônicos",
    "pequenos reparos em móveis",
    "conserto de bomba d'água",
    "troca de maçanetas e fechaduras",
    "instalação de cabo de rede",
    "instalação de chuveiro em Palhoça",
    "conserto de bomba d'água em Palhoça",
    "reparos hidráulicos em Palhoça",
    "instalação de TV na parede em Palhoça",
    "manutenção de telhado em Palhoça",
    "instalação de suporte para prateleira em Palhoça",
    "reparo de fiação elétrica em Palhoça",
    "instalação de luminárias em Palhoça",
    "conserto de móveis em Palhoça",
    "serviços de eletricista em Palhoça",
    "troca de fechadura em Palhoça",
    "manutenção preventiva",
    "serviços de reparo",
    "serviços de instalação rápida",
    "conserto de eletrodomésticos",
    "manutenção de eletrodomésticos",
    "serviços de jardinagem",
    "reparo de encanamento",
    "serviços de limpeza de calhas",
    "instalação de ar-condicionado",
    "reparo de piso",
    "serviços de pintura residencial",
    "instalação de cerca",
    "manutenção de janelas",
    "reparos em paredes",
    "instalação de cortinas e persianas",
    "serviços de carpintaria",
    "manutenção de aquecedor",
    "instalação de sistemas de segurança",
    "conserto de telhados",
    "troca de lâmpadas e lampadas LED",
    "instalação de alarme",
    "serviços de montagem de móveis",
    "instalação de sistemas de irrigação",
    "manutenção de piscina",
    "serviços de desentupimento",
    "reparos em eletroeletrônicos",
    "instalação de cabos de antena",
    "serviços de consultoria em eficiência energética",
    "manutenção de exaustores"
  ],
  applicationName: "Anderson Reparos",
  appleWebApp: {
    title: "Anderson Reparos",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "Ut7pBPdX9A7dzb75s6eUrM6mKTwxoQOcjWhAumvP7ZU"
  }
};

export default function ServicesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center flex-1 sm:mx-12 py-20 pb-10 space-y-10">
      {children}
    </div>
  );
}
