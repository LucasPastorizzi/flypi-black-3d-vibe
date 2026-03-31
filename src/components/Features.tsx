import { Rocket, Zap, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Rocket,
    title: "Performance e Velocidade Excepcionais",
    description:
      "Entregamos tempo de carregamento ultrarrápido através de um clean code meticulosamente otimizado e arquiteturas de sistema de baixa latência. Sua aplicação ou site alcançará o mais alto nível de desempenho no mercado.",
  },
  {
    icon: Zap,
    title: "Arquitetura Sólida e Robusta",
    description:
      "Nossas soluções são fundamentadas em um motor de processamento construído com tecnologias de última geração. Garantimos a estabilidade inabalável e a capacidade de suportar os requisitos mais exigentes e complexos do seu ecossistema digital.",
  },
  {
    icon: Shield,
    title: "Cibersegurança com Padrão Corporativo",
    description:
      "Aplicamos rigorosas medidas de segurança de nível Enterprise, comparáveis aos padrões de instituições financeiras. Implementamos defesas proativas, criptografia avançada e governança robusta para assegurar a total proteção e privacidade dos seus ativos críticos.",
  },
  {
    icon: Sparkles,
    title: "Interfaces Intuitivas e Design de Alto Nível",
    description:
      "Desenvolvemos produtos com uma estética visualmente sofisticada e design centrado no usuário. O resultado é uma experiência fluida e adaptável, onde a elegância da interface melhora diretamente a sua produtividade e fluxo de trabalho.",
  },
];

export const Features = () => {
  return (
    <section id="diferenciais" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-32 max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Excelência Técnica <br />
            <span className="text-yellow-300">e Estratégia</span>
          </h2>

          <p className="text-xl text-muted-foreground">
            Entregamos mais do que código; criamos experiências digitais de alto
            nível, pensadas para performance, segurança e escala.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="space-y-40">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Ícone gigante no fundo */}
                <Icon className="absolute -top-10 right-0 w-40 h-40 text-yellow-300/5 pointer-events-none" />

                {/* Número gigante */}
                <span className="text-[120px] md:text-[180px] font-bold text-white/5 absolute -left-6 -top-16">
                  {`0${index + 1}`}
                </span>

                {/* Conteúdo */}
                <div className="max-w-2xl relative z-10">
                  <h3 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};