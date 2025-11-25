import { ProductShowcase } from "@/components/ProductShowcase";
import NewMac from "@/assets/Midnight12121.png";
import iphoneMockup from "@/assets/Black.png";
import { motion } from "framer-motion";

export const Showcase = () => {
  return (
    <section
      id="catalogo"
      className="w-full py-16 md:py-28 bg-white/80 from-black to-zinc-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col gap-40">

        {/* Título Geral */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Catálogo de <span className="text-yellow-300">Experiências</span>
          </h2>
          <p className="text-lg text-zinc-400 mt-3 max-w-xl mx-auto">
            Veja como o produto se adapta e se destaca em diferentes dispositivos.
          </p>
        </motion.div>

        {/* --- SEÇÃO DESKTOP --- */}
        <div className="relative">
          <ProductShowcase
            title="Desktop Perfeito"
            description="Uma experiência completa em tela grande. Interface limpa, fluida e rápida para quem busca alta performance."
            imageSrc={NewMac}
            imageAlt="Desktop showcase"
          />
        </div>

        {/* --- SEÇÃO MOBILE --- */}
        <div className="relative">
          <ProductShowcase
            title="Mobile First"
            description="Design totalmente responsivo e adaptado ao uso diário no celular. Funciona suavemente em qualquer dispositivo."
            imageSrc={iphoneMockup}
            imageAlt="Mobile showcase"
            reverse
          />
        </div>
      </div>
    </section>
  );
};
