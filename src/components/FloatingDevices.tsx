import { motion } from 'framer-motion';

export const FloatingDevices = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Seu Produto em <span className="gradient-text">Qualquer Lugar</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Apresente sua solução de forma profissional em todos os dispositivos
          </p>
        </motion.div>

        {/* Floating Devices Grid */}
        <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          {/* MacBook */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 w-3/5 md:w-1/2 floating"
          >
            <div className="relative">
              {/* MacBook Frame */}
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-2xl border border-zinc-700">
                {/* Screen */}
                <div className="bg-black rounded-lg overflow-hidden aspect-[16/10] flex items-center justify-center">
                  <div className="text-center p-4 md:p-8">
                    <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4 gradient-text">Flypi</div>
                    <div className="text-xs md:text-sm text-muted-foreground hidden sm:block">Seu produto aqui</div>
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="h-1 md:h-2 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-xl mx-auto" style={{ width: '60%' }} />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/5 blur-2xl md:blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>

          {/* iPhone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 w-1/3 md:w-1/4 floating-delayed"
          >
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative bg-zinc-900 rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-2 md:border-4 border-zinc-800">
                {/* Notch */}
                <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-6 bg-black rounded-full z-10" />
                
                {/* Screen */}
                <div className="bg-black rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19.5] flex items-center justify-center">
                  <div className="text-center p-3 md:p-6">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 gradient-text">Flypi</div>
                    <div className="text-[0.5rem] md:text-xs text-muted-foreground">Mobile First</div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/5 blur-xl md:blur-2xl -z-10 scale-110" />
            </div>
          </motion.div>

          {/* Center Floating Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="relative z-20"
          >
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Multi-Plataforma</div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Desktop • Mobile • Tablet</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
