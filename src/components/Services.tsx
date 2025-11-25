import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Palette, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web Estratégico',
    description: 'Construção de soluções digitais de alto impacto. Criamos websites e aplicações web inovadoras, com design adaptativo (responsive) e arquitetura otimizada para máxima velocidade, conversão e desempenho em mecanismos de busca.',
  },
  {
    icon: Smartphone,
    title: 'Engenharia de Aplicações Mobile',
    description: 'Criamos experiências digitais nativas e multiplataforma com arquitetura robusta. Desenvolvemos aplicativos de alto desempenho para iOS e Android, garantindo uma Experiência do Usuário (UX) impecável e alcance máximo de mercado.',
  },
  {
    icon: Cloud,
    title: 'Arquitetura Cloud Otimizada',
    description: 'Promovemos a transformação digital com soluções cloud-first, altamente seguras e em conformidade com as melhores práticas de mercado. Garantimos a resiliência e o gerenciamento proativo da sua infraestrutura para que você se concentre no core business.',
  },
  {
    icon: Palette,
    title: 'Design Centrado em Resultados',
    description: 'Estratégia de experiência (UX) e interfaces (UI) que geram valor de negócio. Criamos produtos digitais com usabilidade intuitiva, alta performance e um design que comprovadamente impulsiona a satisfação do usuário e as taxas de conversão.',
  },
  {
    icon: Database,
    title: 'Arquitetura de Sistemas de Alto Desempenho',
    description: 'Projetamos e implementamos sistemas backend com foco em baixa latência e performance excepcional. Desenvolvemos APIs RESTful e GraphQL robustas, seguras e prontas para processar grandes volumes de dados com eficiência.',
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
