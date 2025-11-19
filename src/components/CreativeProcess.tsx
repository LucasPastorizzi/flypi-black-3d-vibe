import step1 from "@/assets/iPad Pro 2020.png";
import step2 from "@/assets/Coffee Cup.png";
import step3 from "@/assets/Notion-SS.jpg";
import step4 from "@/assets/iPHONE-MOO Img.png";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Briefing & pesquisa",
    description:
      "Estudamos seu negócio para entender o projeto e criar uma marca alinhada à estratégia.",
    image: step1,
    dark: false,
  },
  {
    number: "02",
    title: "Análise de Requisitos Funcionais",
    description:
      "Hora de dar rosto à marca: cores, tipografias e elementos que conectam com o público.",
    image: step2,
    dark: false,
  },
  {
    number: "03",
    title: "Loja virtual",
    description:
      "Sua marca no ar com uma estrutura Shopify pronta para vender pro mundo inteiro.",
    image: step3,
    dark: false,
  },
  {
    number: "04",
    title: "Apresentação",
    description:
      "A entrega completa e oficial do projeto e dos materiais de marca desenvolvidos.",
    image: step4,
    dark: false,
  },
];

// Componente auxiliar para o efeito de tilt (movimento ao seguir o mouse)
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse
    const y = e.clientY - rect.top; // posição Y do mouse
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / 20) * -1; // inverso no eixo X
    const rotateY = (x - midX) / 20;

    setTransform({ rotateX, rotateY });
  };

  const resetTilt = () => setTransform({ rotateX: 0, rotateY: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      animate={{ rotateX: transform.rotateX, rotateY: transform.rotateY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="cursor-pointer perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

export const CreativeProcess = () => {
  return (
    <section id="processo-criativo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Como funciona o desenvolvimento
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Etapas do processo criativo{" "}
            <span className="text-yellow-300">após nos contratar</span>
          </h2>
          <button className="mt-6 px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition">
            Agendar reunião
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <TiltCard key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`rounded-2xl overflow-hidden shadow-md p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  step.dark ? "bg-foreground text-background" : "bg-background"
                }`}
              >
                <div>
                  <span className="text-3xl font-bold block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p
                    className={`${
                      step.dark ? "text-gray-200" : "text-muted-foreground"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* 🧩 Imagem com zoom ao hover */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  className="mt-6 overflow-hidden rounded-lg"
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-[85%] mx-auto rounded-lg transition-transform duration-300"
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
