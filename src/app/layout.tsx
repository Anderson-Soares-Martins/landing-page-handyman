import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/app/ui/fonts";
import { FaWhatsapp } from "react-icons/fa";
import { PulsatingButton } from "@/components/ui/PulsationButton";
import Link from "next/link";
import { generateWhatsappLink } from "@/utils";

export const metadata: Metadata = {
  title: "Anderson - PEQUENOS REPAROS E INSTALAÇÕES",
  description:
    " Resolvemos qualquer problema na sua casa com rapidez e qualidade. Do encanamento à elétrica!"
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
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
