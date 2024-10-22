"use client";

import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Experiência Comprovada",
      description: "Experiência e qualidade em vários tipos de reparo"
    },
    {
      title: "Atendimento Rápido",
      description:
        "Sempre pronto para atender sua emergência. Chega rapidamente para resolver seu problema."
    },
    {
      title: "Preço Justo",
      description:
        "Oferece orçamento transparente e preço competitivo, sem surpresas desagradáveis no final do serviço."
    }
  ];

  return (
    <section className="text-foreground px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Qualidades
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm text-card text-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
            }}
          >
            <h3 className="text-gray-800 text-xl font-semibold">
              {feature.title}
            </h3>
            <p className="text-gray-800 mt-4">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
