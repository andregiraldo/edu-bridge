
import React, { useState } from 'react';
import { ArrowRight, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success("¡Búsqueda iniciada con IA!", {
        description: `Buscando "${searchQuery}" con nuestra inteligencia artificial`
      });
    }
  };

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
          
          {/* AI Search Bar */}
          <form onSubmit={handleSearch} className="relative mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex max-w-xl bg-white/10 backdrop-blur-md rounded-full border border-gray-300/30 overflow-hidden p-1">
              <Input 
                type="text" 
                placeholder="¿Qué quieres estudiar? ¿Dónde? Pregúntale a nuestra IA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-300 focus:ring-0 rounded-full px-5"
              />
              <Button type="submit" className="rounded-full bg-edubridge-blue px-6 flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Buscar con IA</span>
              </Button>
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-300">
              <Zap size={16} className="mr-1" />
              <span>Potenciado por IA para encontrar tu destino académico perfecto</span>
            </div>
          </form>

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
