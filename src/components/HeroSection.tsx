
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Encuentra tu camino al mundo. Estudia en el extranjero con inteligencia.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Universidades, becas, alojamiento y más en un solo lugar.
          </p>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="btn-primary text-lg group">
              Descubre tus opciones
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-edubridge-bg to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;
