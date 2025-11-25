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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black">
            Plataformas de Visualização de <span className="text-yellow-300">Produtos</span>
          </h2>
          <p className="text-lg text-zinc-400 mt-3 max-w-xl mx-auto text-black">
           Design e função impulsionam suas vendas.
          </p>
        </motion.div>

        {/* --- SEÇÃO DESKTOP --- */}
        <div className="relative">
          <ProductShowcase
            title="Otimização para Ambientes Desktop"
            description="Criamos interfaces projetadas com engenharia de usabilidade para alta produtividade em telas grandes. Nossa arquitetura garante um design limpo, navegação fluida e performance ultrarrápida, ideal para usuários que exigem eficiência máxima."
            imageSrc={NewMac}
            imageAlt="Desktop showcase"
          />
        </div>

        {/* --- SEÇÃO MOBILE --- */}
        <div className="relative">
          <ProductShowcase
            title="Estratégia Mobile-First e Experiência Universal"
            description="Adotamos a metodologia Mobile-First como pilar de desenvolvimento. Garantimos um design totalmente responsivo e interfaces otimizadas que oferecem uma experiência fluida e performática no uso diário, em qualquer tela."
            imageSrc={iphoneMockup}
            imageAlt="Mobile showcase"
            reverse
          />
        </div>
      </div>
    </section>
  );
};
