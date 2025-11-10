import { motion } from "framer-motion";
import macbookMockup from "@/assets/macbook-mockup1.png";

export const FloatingDevices = () => {
  const cards = [
    {
      title: "App oficial™",
      subtitle: "Sua loja no celular do seu cliente",
    },
    {
      title: "Loja virtual.",
      subtitle: "Seus produtos em um só lugar vendendo para o Brasil todo!",
    },
    {
      title: "Nacional & global.",
      subtitle: "Venda para onde quiser e na moeda que quiser",
    },
    {
      title: "Identidade visual.",
      subtitle: "Criamos sua marca completa",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // aumenta o card todo
            className="relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-zinc-200/40 dark:border-zinc-800/60 cursor-pointer"
          >
            {/* Imagem com hover motion */}
            <motion.div
              className="relative w-full overflow-hidden"
              whileHover={{ scale: 1.1 }} // aumenta só a imagem
              transition={{ duration: 0.5 }}
            >
              <img
                src={macbookMockup}
                alt={card.title}
                className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80 transition-transform duration-700"
              />
              {/* Gradiente escuro para legibilidade do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </motion.div>

            {/* Texto */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base opacity-90">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloatingDevices;
