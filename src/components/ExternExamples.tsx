import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import image1 from "@/assets/examples.png";
import image1mo from "@/assets/ooss.png";
import imageRestaurante from "@/assets/OrientalRestaurante.png";
import ImageMobileRestaurante  from "@/assets/OrientalRestauranteMobile.png";
import ImageClothesShop from "@/assets/Demo1Clothes.jpg";
export default function PortfolioDemos() {
  const projects = [
    {
      title: "Fashion Store UI",
      image: image1,
      mobile: image1mo,
      link: "#",
    },
    {
      title: "Restaurant Website",
      image: imageRestaurante,
      mobile: ImageMobileRestaurante,
      link: "#",
    },
    {
      title: "Clothes Shop",
      image: ImageClothesShop,
      mobile: "/assets/demos/cosmetics-mobile.png",
      link: "#",
    },
    {
      title: "Furniture Store",
      image: "/assets/demos/furniture.png",
      mobile: "/assets/demos/furniture-mobile.png",
      link: "#",
    },
  ];

  return (
    <section id="demos" className="py-20 md:py-24 container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-12"
      >
        Demos. <span className="text-gray-500">Clique para ver</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <TiltCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------
   CARD DESKTOP 3D + MOBILE SAFE
-------------------------- */

function TiltCard({ project, index }: any) {
  // motion values for tilt (only desktop)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative block p-4 rounded-3xl bg-white 
                 shadow-lg hover:shadow-3xl transition-all duration-500"
    >
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
        }}
        onMouseMove={(e) => {
          if (isMobile) return;
          const rect = (e.target as HTMLElement).getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative rounded-2xl overflow-hidden transform-gpu"
      >
        {/* DESKTOP MOCKUP */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl w-full 
                     group-hover:scale-105 transition-all duration-700"
        />

        {/* MOBILE THUMB */}
        <img
          src={project.mobile}
          alt={project.title + ' mobile'}
          className="absolute bottom-4 right-4 
                     w-24 sm:w-28 md:w-32
                     rounded-xl shadow-2xl
                     transform-gpu group-hover:scale-110 
                     group-hover:rotate-1 transition-all duration-700"
        />

        {/* GLOW */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 
                     group-hover:opacity-20 transition duration-700 
                     bg-gradient-to-br from-white/40 to-transparent"
        />
      </motion.div>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        className="absolute bottom-5 left-5 px-5 py-2 rounded-full 
                   bg-white/70 backdrop-blur-lg shadow 
                   text-gray-800 font-medium flex items-center gap-2
                   transition-all duration-500 group-hover:bg-white"
      >
        Ver demo <ExternalLink size={18} />
      </motion.button>
    </motion.a>
  );
}
