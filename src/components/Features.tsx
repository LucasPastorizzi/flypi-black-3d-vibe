import { Rocket, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with optimized code and efficient architecture',
  },
  {
    icon: Zap,
    title: 'Powerful Engine',
    description: 'Built on cutting-edge technology to handle your most demanding requirements',
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
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Recursos poderosos projetados para elevar sua experiência
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
              className="glass-effect rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
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
