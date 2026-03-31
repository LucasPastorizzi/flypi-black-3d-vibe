import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Lglg from "../assets/FlypiL.png";

/* =========================
   STEPS
========================= */
const steps = [
  {
    type: "simple",
    title: "Seu negócio ainda é invisível?",
    description: "Se ninguém entende o valor do que você oferece, simplesmente segue direto. No mercado de hoje, não basta ser bom — você precisa ser visto, lembrado e desejado. Porque no fim, quem não aparece… desaparece.",
  },
  {
    type: "simple",
    title: "A internet é um campo de batalha.",
    description: "Ou você se destaca, ou você é ignorado. Todos os dias, milhares de marcas disputam atenção — e só vence quem sabe se posicionar. Não basta estar online, é preciso marcar presença. Porque no digital, visibilidade não é opção… é sobrevivência.",
  },
  {
    type: "simple",
    title: "Design não é estética.",
    description: "É posicionamento. É percepção. É valor. É a forma como sua marca é sentida antes mesmo de ser entendida. É o que transforma curiosidade em interesse — e interesse em decisão. Porque no fim, as pessoas não compram só o que você vende… compram o que sua marca transmite.",
  },
  {
    type: "content",
    title: "O que a Flypi faz diferente?",
    description:
      "Criamos sites que não são só bonitos — são estratégicos, rápidos e feitos para converter.",
    items: [
      "Design pensado para gerar valor",
      "Alta performance e velocidade",
      "Experiência moderna e responsiva",
      "Foco total em conversão",
    ],
  },
  {
    type: "simple",
    title: "Isso é Flypi.",
    description: "E isso muda tudo.",
    highlight: true,
  },
];

/* =========================
   STEP COMPONENT
========================= */
const Step = ({ step, index, total, progress }: any) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(progress, [start, end], [120, -120]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      {/* STEP SIMPLES */}
      {step.type === "simple" && (
        <div className="text-center max-w-3xl">
          <h2
            className={`text-4xl md:text-7xl font-bold ${
              step.highlight ? "text-yellow-300" : ""
            }`}
          >
            {step.title}
          </h2>

          <p className="mt-6 text-lg text-neutral-400">
            {step.description}
          </p>
        </div>
      )}

      {/* STEP COM CONTEÚDO */}
      {step.type === "content" && (
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXTO */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {step.title}
            </h2>

            <p className="text-lg text-neutral-400 mb-6">
              {step.description}
            </p>

            <ul className="space-y-3">
              {step.items.map((item: string, i: number) => (
                <li
                  key={i}
                  className="text-neutral-300 flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-yellow-300 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* BLOCO VISUAL */}
          <div className="h-[300px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center">
            <span className="text-neutral-500">
              <img src={Lglg} alt="" />
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* =========================
   ABOUT
========================= */
export const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      id="about" // 🔥 ESSENCIAL PRA NAV FUNCIONAR
      ref={ref}
      className="relative h-[500vh] bg-black"
    >
      {/* STICKY */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={step}
              index={index}
              total={steps.length}
              progress={smooth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};