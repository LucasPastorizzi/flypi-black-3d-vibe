import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { AnimatedSphere } from './Scene3D';
import { Button } from './ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const fullText = 'Welcome to Flypi';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // velocidade da digitação
    return () => clearInterval(interval);
  }, []);

  // divide o texto atual em "Welcome to " e "Flypi"
  const welcomePart = displayedText.split('Flypi')[0];
  const flypiPart = displayedText.includes('Flypi') ? 'Flypi' : '';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-yellow-300" />
      
      {/* 3D Canvas */}
<div className="absolute inset-0">
<Canvas
  camera={{ position: [0, 0, 5] }}
  onCreated={({ gl, scene }) => {
    gl.setClearColor('#fde047'); // 🎨 fundo preto puro do WebGL
    
  }}
>
  {/* luzes */}
  
  <ambientLight intensity={0.05} />
  <pointLight position={[5, 5, 5]} intensity={0.2} color="#ffffff" />
  <pointLight position={[-5, -5, -5]} intensity={0.1} color="#ffffff" />

  {/* esfera + estrelas */}
  <AnimatedSphere />
  <Stars
    radius={100}
    depth={50}
    count={5000}
    factor={4}
    fade
    speed={1}
   
  />

  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
</Canvas>

   


</div> 

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}  
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect mb-6 md:mb-8"
          >
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-muted-foreground">
              Next Generation Technology
            </span>
          </motion.div>

          {/* Title com efeito de digitação e cores separadas */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 glow-text leading-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white">{welcomePart}</span>
              <span className="text-yellow-300">{flypiPart}</span>
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-white"
            >
              |
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          >
            Experience the future of innovation with cutting-edge 3D technology
            and seamless design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <Button variant="hero" size="lg" className="text-base md:text-lg w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base md:text-lg w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
