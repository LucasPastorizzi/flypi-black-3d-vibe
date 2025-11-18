import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { FloatingDevices } from "@/components/FloatingDevices";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import macbookMockup from "@/assets/macbook-mockup1.png";
import iphoneMockup from "@/assets/macbook-mockup1.png";
import { CreativeProcess } from "../components/CreativeProcess";
import NewMac from "@/assets/Midnight.png";
import TechCarousel from "@/components/TechCarousel";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar fixa e botão do WhatsApp */}
      <Navbar />
      <WhatsAppButton />

      {/* Seção inicial */}
      <div id="home">
        <Hero />
      </div>

      {/* Sobre e processo criativo */}
      <About />
     
    

      {/* Serviços e destaques */}
      <Services />
      <FloatingDevices />
      <Features />

      {/* Catálogo e exibições de produto */}
      <section id="catálogo">
        <ProductShowcase
          title="Desktop Perfeito"
          description="Experiência desktop completa com interface intuitiva e performance excepcional. Seu produto brilha em telas grandes com recursos avançados."
          imageSrc={NewMac}
          imageAlt="Desktop showcase"
        />
      </section>

      <ProductShowcase
        title="Mobile First"
        description="Design responsivo que se adapta perfeitamente a qualquer dispositivo móvel. Leve seu produto no bolso com toda funcionalidade."
        imageSrc={iphoneMockup}
        imageAlt="Mobile showcase"
        reverse
      />

       <CreativeProcess />
       
  <TechCarousel />


      {/* Contato e chamada final */}
      <Contact />
      <CTA />

      {/* Rodapé */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Flypi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
