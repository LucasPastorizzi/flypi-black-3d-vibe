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
import iphoneMockup from "@/assets/Black.png";
import { CreativeProcess } from "../components/CreativeProcess";
import NewMac from "@/assets/Midnight12121.png";
import TechCarousel from "@/components/TechCarousel";
import  ExternExamples  from "@/components/ExternExamples";
import {Showcase }   from "@/components/Showcase";



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
      <ExternExamples />
      <FloatingDevices />
      <TechCarousel />
      <Features />
      

 <Showcase />
       <CreativeProcess />
    
       
  


      {/* Contato e chamada final */}
      <Contact />
      

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
