import { motion } from "framer-motion";

const technologies = [
  { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
  { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
];

export default function TechCarousel() {
  const duplicated = [...technologies, ...technologies];

  return (
    <section className="w-full bg-white/80 py-24 sm:py-32 md:py-44">
      {/* Título */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Stacks<span className="text-yellow-300"> Clouds</span> | Technology
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Cloud • DevOps • Desenvolvimento
        </p>
      </div>

      {/* Wrapper CENTRALIZADO */}
      <div className="relative w-full flex justify-center">
        <motion.div
          className="overflow-hidden w-[90%] sm:w-[80%] md:w-[70%]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          {/* Track do carrossel */}
          <motion.div
            className="flex gap-10 sm:gap-16 md:gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {duplicated.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center 
                min-w-[100px] sm:min-w-[130px] md:min-w-[150px]"
                whileHover={{ scale: 1.1, rotateY: 8 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="h-12 sm:h-16 md:h-20 opacity-90 hover:opacity-100 transition-all duration-300"
                />
                <p className="text-gray-700 mt-2 text-xs sm:text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
