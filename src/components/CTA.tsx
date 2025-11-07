import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(189,94%,43%,0.1),_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-yellow-300">Flypi</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their workflow with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-lg">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
