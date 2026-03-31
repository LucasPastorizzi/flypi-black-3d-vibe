import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import image1 from "@/assets/LArquitetoWEB.png";
import image1mo from "@/assets/LArquitetoMOBILE.png";
import imageRestaurante from "@/assets/OrientalRestaurante.png";
import ImageMobileRestaurante from "@/assets/OrientalRestauranteMobile.png";
import ImageClothesShop from "@/assets/Demo1Clothes.jpg";
import RestauranteBuffet from "@/assets/Restaurantesss.png";
import aSS2 from "@/assets/aSS2.png";
import ImageClothesMobile from "@/assets/Demo1ClothesMobile.jpg";

export default function PortfolioDemos() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

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

  // 🔥 movimento horizontal
  const x = useTransform(smooth, [0, 1], ["0%", "-300%"]);

  return (
    <section
      id="demos"
      ref={ref}
      className="relative h-[400vh] bg-black"
    >
      {/* HEADER */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        <h2 className="absolute top-16 w-full text-center text-4xl md:text-6xl font-bold z-20">
          Demos <span className="text-yellow-300">Flypi</span>
        </h2>

        {/* TRACK */}
        <motion.div
          style={{ x }}
          className="flex h-full items-center gap-20 px-[10vw]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   CARD GRANDE
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

        {/* IMAGEM DESKTOP */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[60vh] object-cover 
                     transition duration-700 group-hover:scale-105"
        />

        {/* MOBILE FLOAT */}
        <img
          src={project.mobile}
          alt="mobile"
          className="absolute bottom-6 right-6 w-32 rounded-xl shadow-2xl 
                     group-hover:scale-110 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* TITLE */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl md:text-4xl font-bold">
            {project.title}
          </h3>
        </div>

        {/* BOTÃO */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-black">
            Ver demo <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </a>
  );
}