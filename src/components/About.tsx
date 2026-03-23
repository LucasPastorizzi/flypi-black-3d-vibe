import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Componente para animar os números dos stats
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [display, setDisplay] = useState(0);
  
  return (
    <motion.span
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => setDisplay(Math.floor(latest)),
        });
        return () => controls.stop();
      }}
    >
      {display}{suffix}
    </motion.span>
  );
};

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Ajudamos empresas a evoluir através de soluções tecnológicas que otimizam operações e impulsionam crescimento.',
  },
  {
    icon: Users,
    title: 'Equipe',
    description: 'Uma equipe jovem e ambiciosa, dedicada a evoluir nosso produto e crescer com os resultados dos parceiros.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Acompanhamos a tecnologia em primeira mão para criar soluções eficientes e preparadas para o futuro.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorativo - Blur de fundo para dar profundidade */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-yellow-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sobre a <span className="text-yellow-300">Flypi</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transformamos ideias em ativos digitais estratégicos. <br/>
            Soluções tecnológicas para impulsionar negócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-yellow-300/50"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-yellow-300/10 text-yellow-300 group-hover:scale-110 group-hover:bg-yellow-300 group-hover:text-black transition-all duration-500">
                <value.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section com Transição de Escala */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] p-1 border border-white/10 bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="bg-background/40 backdrop-blur-xl rounded-[2.4rem] p-10 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Projetos", val: 500, suffix: "+" },
                { label: "Clientes", val: 50, suffix: "+" },
                { label: "Satisfação", val: 99, suffix: "%" },
                { label: "Suporte", val: 24, suffix: "/7" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-4xl md:text-6xl font-black text-yellow-300">
                    <Counter value={stat.val} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base font-medium uppercase tracking-widest opacity-60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};