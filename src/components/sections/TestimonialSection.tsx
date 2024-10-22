import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const TestimonialSection = () => {
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

  return (
    <section className="w-full bg-background text-foreground">
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
  );
};
