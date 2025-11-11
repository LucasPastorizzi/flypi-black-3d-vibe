import { motion } from "framer-motion";

interface ProductShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export const ProductShowcase = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: ProductShowcaseProps) => {
  return (
    <section
      className={`py-24 md:py-32 bg-gradient-to-b from-background via-background/90 to-background ${
        reverse ? "bg-black/95" : ""
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 px-6`}
      >
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Imagem 3D */}
        <motion.div
          className="flex-1 relative group perspective-1000"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Container com hover 3D */}
          <motion.div
            whileHover={{
              rotateY: reverse ? -8 : 8,
              rotateX: 4,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/30 dark:border-zinc-800/60 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
          >
            {/* Imagem com leve movimento de flutuação */}
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Glow sutil por trás */}
          <div className="absolute inset-0 rounded-3xl blur-3xl bg-gradient-to-tr from-yellow-300/10 to-yellow-500/10 opacity-40 group-hover:opacity-70 transition-all duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
