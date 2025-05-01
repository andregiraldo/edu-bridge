
import React from 'react';
import { User, Search, FileCheck, Home } from 'lucide-react';

const stepColors = [
  'border-edubridge-blue text-edubridge-blue bg-edubridge-blue/5',
  'border-edubridge-purple text-edubridge-purple bg-edubridge-purple/5',
  'border-edubridge-cyan text-edubridge-cyan bg-edubridge-cyan/5',
  'border-edubridge-coral text-edubridge-coral bg-edubridge-coral/5',
];

const steps = [
  {
    icon: User,
    title: "Completa tu perfil",
    description: "Indica qué quieres estudiar, país, idioma y presupuesto."
  },
  {
    icon: Search,
    title: "Recibe sugerencias personalizadas con IA",
    description: "Nuestro algoritmo encuentra las mejores opciones según tu perfil."
  },
  {
    icon: FileCheck,
    title: "Aplica a universidades y becas directamente",
    description: "Gestiona todas tus aplicaciones desde una única plataforma."
  },
  {
    icon: Home,
    title: "Encuentra alojamiento y planifica tu viaje",
    description: "Soluciones para vivir, seguros y todo lo que necesitas para tu aventura."
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Cómo funciona</h2>
        <p className="section-subtitle text-center">
          EduBridge te acompaña en cada paso de tu viaje académico internacional
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${stepColors[index % stepColors.length]} flex items-center justify-center mb-4 border-2 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={28} />
                </div>
                <div className="relative mb-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-100 -translate-y-1/2">
                      <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-100 rotate-45"></div>
                    </div>
                  )}
                </div>
                <p className="text-gray-600">{step.description}</p>
                
                <div className="w-2 h-2 rounded-full bg-gray-200 mt-6 group-hover:bg-edubridge-blue transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
