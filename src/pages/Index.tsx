import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { FloatingDevices } from '@/components/FloatingDevices';
import { ProductShowcase } from '@/components/ProductShowcase';
import { CTA } from '@/components/CTA';
import macbookMockup from '@/assets/macbook-mockup.png';
import iphoneMockup from '@/assets/iphone-mockup.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FloatingDevices />
      <Features />
      <ProductShowcase
        title="Desktop Perfeito"
        description="Experiência desktop completa com interface intuitiva e performance excepcional. Seu produto brilha em telas grandes com recursos avançados."
        imageSrc={macbookMockup}
        imageAlt="Desktop showcase"
      />
      <ProductShowcase
        title="Mobile First"
        description="Design responsivo que se adapta perfeitamente a qualquer dispositivo móvel. Leve seu produto no bolso com toda funcionalidade."
        imageSrc={iphoneMockup}
        imageAlt="Mobile showcase"
        reverse
      />
      <CTA />
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Flypi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
