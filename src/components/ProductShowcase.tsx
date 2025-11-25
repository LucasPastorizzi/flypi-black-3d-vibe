import { motion } from "framer-motion";

export const ProductShowcase = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row items-center justify-between 
        gap-16 md:gap-20 
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-md text-center md:text-left"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        <p className="text-zinc-400 mt-4 text-lg leading-relaxed">{description}</p>
      </motion.div>

      {/* IMAGEM COM EFEITO 3D + NOVO HOVER */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.06,
          rotateX: 8,
          rotateY: -8,
          rotateZ: 1,
          transition: { duration: 0.35 },
        }}
        className="relative w-full md:w-[550px] lg:w-[650px] xl:w-[750px] select-none"
      >
        {/* Glow suave no hover (mas totalmente transparente quando não está em hover) */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.35 }}
          transition={{ duration: 0.35 }}
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 70%)",
            filter: "blur(25px)",
          }}
        />

        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-contain pointer-events-none select-none"
        />
      </motion.div>
    </div>
  );
};