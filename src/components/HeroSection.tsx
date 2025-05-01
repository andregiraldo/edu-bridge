
import React, { useState } from 'react';
import { ArrowRight, Search, Zap, Globe } from 'lucide-react';
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
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-edubridge-purple/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-edubridge-cyan/5 blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-edubridge-cyan text-edubridge-cyan text-sm font-medium bg-edubridge-cyan/5 animate-fade-in">
              <Zap size={16} className="mr-2 animate-pulse-glow" />
              Potenciado por Inteligencia Artificial
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Tu puente hacia una <span className="text-edubridge-blue">educación global</span> sin fronteras
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-600 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Conectamos estudiantes con universidades, becas y servicios para estudiar en el exterior
            </p>
            
            {/* AI Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex max-w-xl bg-white rounded-full border-2 border-gray-200 hover:border-edubridge-blue transition-all overflow-hidden p-1 shadow-sm hover:shadow-md">
                <Input 
                  type="text" 
                  placeholder="¿Qué quieres estudiar? ¿Dónde? Pregúntale a nuestra IA..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:ring-0 rounded-full px-5"
                />
                <Button type="submit" className="rounded-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue px-6 flex items-center gap-2 transition-all duration-300">
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Buscar con IA</span>
                </Button>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Globe size={16} className="mr-1 text-edubridge-purple" />
                <span>Encuentra programas en EE.UU., Europa, Canadá y Australia</span>
              </div>
            </form>

            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button className="group relative overflow-hidden rounded-full bg-white border-2 border-edubridge-yellow text-gray-800 hover:text-white px-8 py-6 font-medium transition-all duration-300">
                <span className="relative z-10">Descubre tus opciones</span>
                <span className="absolute inset-0 bg-gradient-to-r from-edubridge-yellow to-edubridge-coral -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg border-4 border-edubridge-cyan/30 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg border-4 border-edubridge-yellow/30 -z-10"></div>
              
              <div className="rounded-2xl overflow-hidden border-2 border-gray-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Estudiantes internacionales" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
