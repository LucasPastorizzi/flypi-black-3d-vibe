import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Palette, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas para performance.',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Infraestrutura em nuvem escalável e segura para seu negócio crescer sem limites.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces intuitivas e experiências memoráveis centradas no usuário.',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Desenvolvimento de APIs robustas e sistemas backend escaláveis.',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Proteção avançada de dados e implementação de melhores práticas de segurança.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
             Serviços End-to-End para a Estruturação da <span className="text-yellow-300">Transformação Digital Corporativa</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluções completas para transformar sua visão em realidade digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="glass-effect rounded-2xl p-6 md:p-8 hover:border-yellow-300 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
