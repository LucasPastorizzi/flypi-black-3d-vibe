import { motion } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Revolucionar a forma como empresas interagem com tecnologia através de soluções inovadoras e intuitivas.',
  },
  {
    icon: Users,
    title: 'Equipe',
    description: 'Uma equipe jovem e ambiciosa, dedicada a evoluir nosso produto constantemente e crescer lado a lado com os resultados dos nossos parceiros.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Constantemente buscando novas tecnologias e metodologias para entregar o melhor resultado possível.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Sobre a <span className="text-yellow-300">Flypi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Transformamos ideias em ativos digitais estratégicos. <br/>
            Soluções tecnológicas para impulsionar negócios e conectar mercados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {values.map((value, index) => (
  <motion.div
    key={value.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="relative glass-effect rounded-2xl p-8 text-center cursor-pointer transform-gpu transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-300"
    whileHover={{
      rotateX: -5,
      rotateY: 5,
      scale: 1.05,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Brilho animado premium (opcional, pode remover se quiser mais clean) */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
      <value.icon className="w-8 h-8 text-yellow-300" />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
    <p className="text-muted-foreground">{value.description}</p>
  </motion.div>
))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12  border-yellow-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Projetos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Clientes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">99%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
