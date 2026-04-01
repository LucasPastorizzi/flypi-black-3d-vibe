import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Lglg from "../assets/FlypiL.png";

/* =========================
   STEPS
========================= */
const steps = [
  {
    type: "simple",
    title: "Seu negócio ainda é invisível?",
    description:
      "Se ninguém entende o valor do que você oferece, simplesmente segue direto. No mercado de hoje, não basta ser bom — você precisa ser visto, lembrado e desejado. Porque no fim, quem não aparece… desaparece.",
  },
  {
    type: "simple",
    title: "A internet é um campo de batalha.",
    description:
      "Ou você se destaca, ou você é ignorado. Todos os dias, milhares de marcas disputam atenção — e só vence quem sabe se posicionar. Não basta estar online, é preciso marcar presença. Porque no digital, visibilidade não é opção… é sobrevivência.",
  },
  {
    type: "simple",
    title: "Design não é estética.",
    description:
      "É posicionamento. É percepção. É valor. É a forma como sua marca é sentida antes mesmo de ser entendida. É o que transforma curiosidade em interesse — e interesse em decisão. Porque no fim, as pessoas não compram só o que você vende… compram o que sua marca transmite.",
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
const Step = ({ step, index, currentStep }: any) => {
  const isActive = currentStep === index;

  // 🔥 3D Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [12, -12]);
  const rotateY = useTransform(mouseX, [-200, 200], [-12, 12]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 100,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
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

          {/* 🔥 3D VISUAL */}
          <div
            className="relative h-[300px] flex items-center justify-center perspective-[1000px]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mouseX.set(e.clientX - rect.left - rect.width / 2);
              mouseY.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
          >
            <div className="absolute w-[260px] h-[260px] bg-yellow-300/20 blur-[120px] rounded-full" />

            <motion.img
              src={Lglg}
              alt=""
              style={{ rotateX, rotateY }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-[500px] md:w-[700px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
            />
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

  // 🔥 transforma scroll em steps
  const stepProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1]
  );

  const smooth = useSpring(stepProgress, {
    stiffness: 120,
    damping: 25,
  });

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    return smooth.on("change", (v) => {
      setCurrentStep(Math.round(v));
    });
  }, [smooth]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl h-full">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={step}
              index={index}
              currentStep={currentStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
};