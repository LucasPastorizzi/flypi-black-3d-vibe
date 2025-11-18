import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Glow suave no fundo */}
      <motion.div
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[500px] rounded-full 
        bg-yellow-300/10 blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6">
        
        {/* CARD 3D GLASS ESCURO IGUAL AO CONTATO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}

          whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
         
          className="
            relative glass-effect 
            rounded-3xl 
            p-10 md:p-16 
            text-center
            max-w-4xl mx-auto
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(255,233,110,0.08)]
            transform-gpu
          "
        >

          {/* borda sutil igual aos cards do Contato */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>

          {/* luz interna suave */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* TÍTULO */}
          <h2 className="relative text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Pronto para usar o{" "}
            <span className="text-yellow-300">Flypi</span>?
          </h2>

          <p className="relative text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transforme seu fluxo de trabalho com tecnologia moderna, segura e eficiente.
          </p>

          {/* BOTÕES */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <Button 
              variant="hero"
              size="lg"
              className="
                text-lg px-8 py-6 
                bg-yellow-300 text-black font-bold 
                shadow-[0_0_20px_rgba(255,233,110,0.25)]
                hover:shadow-[0_0_30px_rgba(255,233,110,0.4)]
                rounded-xl
                transition-all
              "
            >
              Começar Agora
              <ArrowRight className="ml-2" />
            </Button>

            <Button 
              variant="heroOutline" 
              size="lg"
              className="
                text-lg px-8 py-6 
                text-yellow-300 
                border border-yellow-300/40
                hover:bg-yellow-300 hover:text-black 
                rounded-xl
                transition-all
              "
            >
              Agendar Demonstração
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
