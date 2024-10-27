import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/app/ui/fonts";
import { FaWhatsapp } from "react-icons/fa";
import { PulsatingButton } from "@/components/ui/PulsationButton";
import Link from "next/link";
import { generateWhatsappLink } from "@/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://andersonreparos.com.br"),
  title: "Anderson Reparos - Serviços Domésticos em Palhoça e Região",
  description:
    "Serviços rápidos e de qualidade em elétrica, hidráulica e manutenções gerais para sua casa em Palhoça, SC e arredores.",
  openGraph: {
    siteName: "Anderson Reparos",
    type: "website",
    locale: "pt_BR",
    url: "https://andersonreparos.com.br",
    title: "Anderson Reparos - Serviços Domésticos em Palhoça e Região",
    description:
      "Especialistas em pequenos reparos e instalações para sua casa, do encanamento à elétrica.",
    images: [
      {
        url: "/og-image.jpg",
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
    "troca de fechadura em Palhoça"
  ],
  applicationName: "Anderson Reparos",
  appleWebApp: {
    title: "Anderson Reparos",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
      "facebook-domain-verification": "YOUR_FACEBOOK_VERIFICATION_CODE"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen custom-scroll`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Analytics />
          <Footer />
          <div className="fixed bottom-12 right-4 z-50">
            <Link
              href={generateWhatsappLink(
                "Opa amigo, tudo bem? Gostaria de agendar um serviço!"
              )}
              target="_blank"
            >
              <PulsatingButton>
                <FaWhatsapp size={32} />
              </PulsatingButton>
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
