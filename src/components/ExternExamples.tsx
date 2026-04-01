import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@/assets/LArquitetoWEB.png";
import image1mo from "@/assets/LArquitetoMOBILE.png";
import imageRestaurante from "@/assets/OrientalRestaurante.png";
import ImageMobileRestaurante from "@/assets/OrientalRestauranteMobile.png";
import ImageClothesShop from "@/assets/Demo1Clothes.jpg";
import RestauranteBuffet from "@/assets/Restaurantesss.png";
import aSS2 from "@/assets/aSS2.png";
import ImageClothesMobile from "@/assets/Demo1ClothesMobile.jpg";

export default function PortfolioDemos() {
  const x = useMotionValue(0);
  const animationRef = useRef<any>(null);

  const projects = [
    {
      title: "Fashion Store UI",
      image: image1,
      mobile: image1mo,
      link: "https://lucaspastorizzi.github.io/architect-s-canvas/",
    },
    {
      title: "Restaurant Website",
      image: imageRestaurante,
      mobile: ImageMobileRestaurante,
      link: "https://lucaspastorizzi.github.io/Projeto-RestauranteOriental/",
    },
    {
      title: "Clothes Shop",
      image: ImageClothesShop,
      mobile: ImageClothesMobile,
      link: "https://lucaspastorizzi.github.io/style-spark-landing/",
    },
    {
      title: "Furniture Store",
      image: RestauranteBuffet,
      mobile: aSS2,
      link: "https://lucaspastorizzi.github.io/buffet-showcase/",
    },
  ];

  const loopProjects = [...projects, ...projects, ...projects];

  const CARD_WIDTH = window.innerWidth * 0.8 + 80;
  const TOTAL_WIDTH = CARD_WIDTH * projects.length;

  useEffect(() => {
    animationRef.current = animate(x, x.get() - TOTAL_WIDTH, {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => animationRef.current.stop();
  }, []);

  useEffect(() => {
    return x.on("change", (latest) => {
      if (latest <= -TOTAL_WIDTH * 2) {
        x.set(latest + TOTAL_WIDTH);
      }
      if (latest >= 0) {
        x.set(latest - TOTAL_WIDTH);
      }
    });
  }, []);

  const move = (direction: number) => {
    animationRef.current.stop();

    animate(x, x.get() + direction * CARD_WIDTH, {
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        animationRef.current = animate(x, x.get() - TOTAL_WIDTH, {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        });
      },
    });
  };

  return (
    <section
      id="demos" // ✅ FIX PRINCIPAL
      className="relative h-screen bg-black overflow-hidden scroll-mt-32" // ✅ evita navbar cobrir
    >
      <h2 className="absolute top-16 w-full text-center text-4xl md:text-6xl font-bold z-20 text-white">
        Demos <span className="text-yellow-300">Flypi</span>
      </h2>

      {/* SETAS */}
      <button
        onClick={() => move(1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur p-3 rounded-full hover:bg-white/20 transition"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={() => move(-1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur p-3 rounded-full hover:bg-white/20 transition"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* TRACK */}
      <div className="h-full flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-20 px-[10vw]"
        >
          {loopProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   CARD
========================= */
function ProjectCard({ project }: any) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative min-w-[80vw] max-w-[80vw] group"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[60vh] object-cover transition duration-700 group-hover:scale-105"
        />

        <img
          src={project.mobile}
          alt="mobile"
          className="absolute bottom-6 right-6 w-32 rounded-xl shadow-2xl 
                     group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl md:text-4xl font-bold">
            {project.title}
          </h3>
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-black">
            Ver demo <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </a>
  );
}