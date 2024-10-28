import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center flex flex-col justify-center items-center p-6 bg-background border-t-[1px] border-t-primary/10 shadow-md">
      {/* Nome da empresa e direitos autorais */}
      <p className="font-semibold">
        &copy; {new Date().getFullYear()} Anderson - Pequenos Reparos e
        Instalações.
      </p>

      {/* Descrição SEO-friendly */}
      <p className="mt-2 text-sm text-secondary-foreground max-w-xl">
        Especializado em reparos e instalações na região de Palhoça e arredores,
        incluindo Florianópolis, São José e Biguaçu. Oferecemos serviços de
        manutenção residencial e comercial com rapidez, segurança e garantia de
        qualidade.
      </p>

      {/* Informações de contato e redes sociais */}
      <div className="flex space-x-4 mt-4">
        <Link
          href="https://wa.me/5548996084908"
          className="text-black dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </Link>
        <Link
          href="https://www.instagram.com/andersonsilveirafernandes?igsh=MTN0c2kzcXpzc3AwMw=="
          className="text-black dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </Link>
      </div>
    </footer>
  );
}
