import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import logo from "@/assets/Flypi-Logo.png";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Catálogo', href: '#catalogo' }
 
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden"; // trava scroll
  } else {
    document.body.style.overflow = "auto";   // libera scroll
  }

  return () => {
    document.body.style.overflow = "auto";   // garante reset
  };
}, [isOpen]);
  

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
   className={`fixed top-0 left-0 right-0 z-[1000001] transition-all duration-100
  ${isOpen ? 'bg-zinc-900 shadow-lg' : isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}
`}

    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer flex items-center"
            onClick={() => scrollToSection('#home')}
          >
            <img
              src={logo}
              alt="Flypi Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </motion.button>
            ))}

            {/* Botão Fale Conosco */}
            <Button
              onClick={() => scrollToSection('#contato')}
              className="ml-4 px-5 py-2 rounded-xl font-medium shadow-md hover:scale-105 transition-all bg-primary/80"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

   {/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* Travar scroll da página */}
      

      {/* Overlay escuro */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => {
          document.body.style.overflow = "";
          setIsOpen(false);
        }}
        className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm md:hidden"
      />

      {/* Menu lateral mobile */}
      <motion.aside
        key="menu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 z-[1000000] w-[78%] max-w-xs h-full bg-zinc-900/95 border-l border-zinc-800 p-6 shadow-xl md:hidden flex flex-col"
      >
        {/* Botão de fechar */}
        <button
          onClick={() => {
            document.body.style.overflow = "";
            setIsOpen(false);
          }}
          className="mb-6 text-white ml-auto"
        >
          <X size={26} />
        </button>

        {/* Links */}
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                document.body.style.overflow = "";
                scrollToSection(item.href);
                setIsOpen(false);
              }}
              className="text-left text-lg text-white hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Botão CTA */}
        <button
          onClick={() => {
            document.body.style.overflow = "";
            scrollToSection("#contato");
            setIsOpen(false);
          }}
          className="mt-8 w-full px-4 py-3 bg-primary text-white rounded-xl text-lg shadow-md hover:scale-105 transition-transform"
        >
          Fale Conosco
        </button>
      </motion.aside>
    </>
  )}
</AnimatePresence>




    </nav>
  );
};
