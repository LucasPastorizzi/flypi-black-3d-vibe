import { motion } from 'framer-motion';
import { Target, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Nossa Missão',
    description: 'Revolucionar a forma como empresas interagem com tecnologia através de soluções inovadoras e intuitivas.',
  },
  {
    icon: Users,
    title: 'Nossa Equipe',
    description: 'Profissionais apaixonados por tecnologia, dedicados a criar experiências excepcionais para nossos clientes.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Constantemente buscando novas tecnologias e metodologias para entregar o melhor resultado possível.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre o <span className="gradient-text">Flypi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa focada em transformar ideias em realidade digital,
            oferecendo soluções tecnológicas que impulsionam negócios e conectam pessoas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" />
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
          className="glass-effect rounded-3xl p-8 md:p-12"
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
