import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProductShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export const ProductShowcase = ({ title, description, imageSrc, imageAlt, reverse = false }: ProductShowcaseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <div ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={reverse ? 'lg:order-2' : ''}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Floating Device Image */}
          <motion.div
            style={{ y, opacity, scale }}
            className={`relative ${reverse ? 'lg:order-1' : ''}`}
          >
            <div className="relative floating">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-transparent blur-3xl -z-10" />

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
