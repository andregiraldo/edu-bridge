
import React from 'react';
import { ArrowRight, Home, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Encuentra el espacio perfecto</h2>
        <p className="section-subtitle text-center">
          Las mejores opciones de alojamiento para estudiantes internacionales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Coliving Ad */}
          <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Coliving Space" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium flex items-center text-edubridge-purple">
                <Star className="w-3 h-3 mr-1 fill-edubridge-yellow stroke-edubridge-yellow" />
                <span>Destacado</span>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Coliving Espacios</h3>
                <span className="px-2 py-1 bg-edubridge-purple/10 text-edubridge-purple text-xs rounded-full">Popular</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Vive con estudiantes internacionales en espacios diseñados para ti</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Users size={12} className="mr-1" />
                    <span>Comunidad global</span>
                  </div>
                  <span className="font-semibold text-edubridge-purple">Desde €350/mes</span>
                </div>
                <Button variant="ghost" size="sm" className="text-edubridge-blue p-0 h-auto flex items-center group/btn">
                  Ver opciones
                  <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Student Residence Ad */}
          <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                alt="Student Residence" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium flex items-center text-edubridge-cyan">
                <Star className="w-3 h-3 mr-1 fill-edubridge-yellow stroke-edubridge-yellow" />
                <span>Recomendado</span>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Residencias Estudiantiles</h3>
                <span className="px-2 py-1 bg-edubridge-cyan/10 text-edubridge-cyan text-xs rounded-full">Exclusivo</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Alojamiento exclusivo para estudiantes cerca de tu universidad</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Home size={12} className="mr-1" />
                    <span>Servicios incluidos</span>
                  </div>
                  <span className="font-semibold text-edubridge-cyan">Desde €450/mes</span>
                </div>
                <Button variant="ghost" size="sm" className="text-edubridge-blue p-0 h-auto flex items-center group/btn">
                  Ver opciones
                  <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Apartments Ad */}
          <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Apartments" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium flex items-center text-edubridge-coral">
                <Star className="w-3 h-3 mr-1 fill-edubridge-yellow stroke-edubridge-yellow" />
                <span>Económico</span>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Apartamentos Compartidos</h3>
                <span className="px-2 py-1 bg-edubridge-coral/10 text-edubridge-coral text-xs rounded-full">Flexible</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Comparte gastos y experiencias en las mejores zonas</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Users size={12} className="mr-1" />
                    <span>Ambiente internacional</span>
                  </div>
                  <span className="font-semibold text-edubridge-coral">Desde €300/mes</span>
                </div>
                <Button variant="ghost" size="sm" className="text-edubridge-blue p-0 h-auto flex items-center group/btn">
                  Ver opciones
                  <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSection;
