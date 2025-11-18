import { motion } from "framer-motion";
import Tecc from "@/assets/tech/Tecc.png";
 // <--- IMPORTAÇÃO CORRETA

const technologies = [
     // <--- AQUI USA A IMAGEM IMPORTADA
  { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" },
  {name : "Aws" , img : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
  { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
  { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },

];

export default function TechCarousel() {
  const duplicated = [...technologies, ...technologies]; // Loop contínuo

  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <div className="relative w-full">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {duplicated.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px]"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-all duration-300 drop-shadow-md"
              />
              <p className="text-gray-300 mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
