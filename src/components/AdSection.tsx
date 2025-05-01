
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Descubre donde quedarte</h2>
        <p className="section-subtitle text-center">
          Las mejores opciones de alojamiento para estudiantes internacionales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Coliving Ad */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="relative h-56">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Coliving Space" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Coliving Spaces</h3>
                  <p className="text-sm">Vive con estudiantes internacionales en espacios diseñados para ti</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-purple-800">Desde €350/mes</span>
                <Button variant="link" className="text-edubridge-blue p-0 h-auto flex items-center">
                  Ver opciones
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Student Residence Ad */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="relative h-56">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                alt="Student Residence" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Residencias Estudiantiles</h3>
                  <p className="text-sm">Alojamiento exclusivo para estudiantes cerca de tu universidad</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-amber-800">Desde €450/mes</span>
                <Button variant="link" className="text-edubridge-blue p-0 h-auto flex items-center">
                  Ver opciones
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Apartments Ad */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="relative h-56">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Apartments" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Apartamentos Compartidos</h3>
                  <p className="text-sm">Comparte gastos y experiencias en las mejores zonas</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-emerald-800">Desde €300/mes</span>
                <Button variant="link" className="text-edubridge-blue p-0 h-auto flex items-center">
                  Ver opciones
                  <ArrowRight size={14} className="ml-1" />
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
