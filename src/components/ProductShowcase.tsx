import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-40 md:py-56 bg-mud/80 relative overflow-hidden">
      <div
        className={`max-w-8xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-32 px-6`}
      >
        {/* Texto lateral */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 z-20"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground drop-shadow-sm">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Imagem principal — bem maior e com 3D suave */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="flex-1 relative flex justify-center items-center cursor-pointer"
        >
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="w-[850px] md:w-[1000px] lg:w-[1200px] object-contain drop-shadow-2xl rounded-3xl transition-transform duration-700 ease-out"
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 1, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
