
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-edubridge-blue to-blue-700 opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white/5 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/5 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu futuro está más cerca de lo que crees
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Da el primer paso hacia tu experiencia académica internacional. Explora oportunidades, compara opciones y encuentra la mejor ruta para ti.
          </p>
          <Button className="btn-secondary text-lg group border-2 border-edubridge-yellow bg-transparent hover:bg-edubridge-yellow/20">
            Empieza tu viaje académico
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
