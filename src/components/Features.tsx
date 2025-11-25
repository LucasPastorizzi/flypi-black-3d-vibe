import { Rocket, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Performance e Velocidade Excepcionais',
    description: 'Entregamos tempo de carregamento ultrarrápido através de um clean code meticulosamente otimizado e arquiteturas de sistema de baixa latência. Sua aplicação ou site alcançará o mais alto nível de desempenho no mercado.',
  },
  {
    icon: Zap,
    title: 'Arquitetura Sólida e Robusta',
    description: 'Nossas soluções são fundamentadas em um motor de processamento construído com tecnologias de última geração. Garantimos a estabilidade inabalável e a capacidade de suportar os requisitos mais exigentes e complexos do seu ecossistema digital.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security measures to protect your data and ensure privacy',
  },
  {
    icon: Sparkles,
    title: 'Modern Design',
    description: 'Beautiful, intuitive interface that adapts to your workflow seamlessly',
  },
];

export const Features = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
           Excelência Técnica e Parceria <span className="text-yellow-300">Estratégica</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Entregamos mais do que código; oferecemos uma colaboração integral. Nossos recursos e metodologias avançadas são calibrados para gerar resultados tangíveis, garantindo que a sua visão de negócio seja executada com precisão, inovação e sustentabilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 md:p-8 hover:border-yellow-300 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
