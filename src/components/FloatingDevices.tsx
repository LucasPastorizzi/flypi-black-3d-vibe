import { motion } from "framer-motion";
import macbookMockup from "@/assets/macbook-mockup1.png";
import MacBook3 from "@/assets/MacBook3.png";
import IluminatedFlypi from "@/assets/IlluminatedBillboard.png";
import Floating from "@/assets/ImgforFloating.jpg";


export const FloatingDevices = () => {
  const cards = [
    {
      title: "App oficial™",
      subtitle: "Sua loja no celular do seu cliente",
      image : macbookMockup,
    },
    {
      title: "Loja virtual",
      subtitle: "Seus produtos em um só lugar vendendo para o Brasil todo!",
      image: MacBook3,
      
    },
    {
      title: "Nacional & global",
      subtitle: "Venda para onde quiser e na moeda que quiser",
      image: IluminatedFlypi
    },
    {
      title: "Identidade visual",
      subtitle: "Criamos sua marca completa",
      image : Floating,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
            Nossos Projetos
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-foreground">
            Experiências <span className="text-yellow-300">Digitais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3x1 mx-auto">
            Transformamos ideias em soluções visuais e funcionais, elevando marcas a outro nível.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: -3, rotateY: 3 }}
              className="relative bg-black text-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-zinc-800 cursor-pointer transform-gpu perspective-1000"
            >
              {/* Imagem */}
              <motion.div
                className="relative w-full overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-60 md:h-72 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </motion.div>

              {/* Texto */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base opacity-90">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingDevices;
