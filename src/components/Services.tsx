import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Palette, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Websites que Vendem',
    description: 'Sites rápidos e pensados para transformar visitantes em clientes.',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Aplicativos modernos com foco em experiência e performance.',
  },
  {
    icon: Cloud,
    title: 'Infraestrutura Cloud',
    description: 'Escalabilidade e segurança para crescer sem limites.',
  },
  {
    icon: Palette,
    title: 'Design Estratégico',
    description: 'Design que transmite valor e gera confiança.',
  },
  {
    icon: Database,
    title: 'Back-end Forte',
    description: 'Sistemas robustos, rápidos e preparados para escala.',
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Proteção completa para seu negócio e seus dados.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Não são serviços.
            <br />
            <span className="text-yellow-300">São vantagens competitivas.</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Cada solução é pensada para te destacar, posicionar e fazer seu negócio crescer no digital.
          </p>
        </div>

        {/* TIMELINE / LISTA DIFERENTE */}
        <div className="relative border-l border-white/10 pl-8 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* DOT */}
              <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-yellow-300 flex items-center justify-center">
                <service.icon className="w-3 h-3 text-black" />
              </div>

              {/* CONTENT */}
              <div className="group-hover:translate-x-2 transition">
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* LINHA HOVER */}
              <div className="h-[1px] w-0 bg-yellow-300 mt-4 group-hover:w-32 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};