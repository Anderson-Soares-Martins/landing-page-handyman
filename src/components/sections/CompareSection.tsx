import { Compare } from "@/components/ui/compare";
import antes from "@/assets/antes.webp";
import depois from "@/assets/depois.webp";

export const CompareSection = () => {
  return (
    <section className="flex pb-20 flex-col w-full items-center text-secondary-foreground px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Antes e Depois
      </h2>
      <p className="text-center mt-4">Veja nossos serviços realizados.</p>
      <Compare
        slideMode="drag"
        firstImage={antes.src}
        secondImage={depois.src}
        className="mt-12 w-full max-w-xl rounded-lg shadow-2xl opacity-80"
      />
    </section>
  );
};
