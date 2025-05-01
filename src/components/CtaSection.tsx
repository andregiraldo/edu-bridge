
import React from 'react';
import { ArrowRight, GraduationCap, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with subtle pattern and gradient */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-edubridge-blue/10 via-edubridge-purple/10 to-edubridge-cyan/10"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-edubridge-purple/20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-4 border-edubridge-cyan/20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border-4 border-edubridge-yellow/20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-edubridge-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-edubridge-purple/5 rounded-full blur-3xl"></div>
            
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple p-0.5">
                  <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                    <GraduationCap className="text-edubridge-blue" size={24} />
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tu futuro está más cerca de lo que crees
              </h2>
              
              <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
                Da el primer paso hacia tu experiencia académica internacional. Explora oportunidades, compara opciones y encuentra la mejor ruta para ti.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue text-white px-8 py-6 font-medium transition-all duration-300">
                  <span className="flex items-center">
                    <Globe size={18} className="mr-2" />
                    Explora destinos globales
                  </span>
                </Button>
                
                <Button variant="outline" className="group rounded-full border-2 border-edubridge-blue text-edubridge-blue hover:bg-edubridge-blue/5 px-8 py-6 font-medium">
                  <span className="flex items-center">
                    <Zap size={18} className="mr-2" />
                    Consulta con nuestra IA
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
