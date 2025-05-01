
import React from 'react';
import { User, Search, FileCheck, Home } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const stepGradients = [
  'from-edubridge-blue to-edubridge-purple',
  'from-edubridge-purple to-edubridge-cyan',
  'from-edubridge-cyan to-edubridge-coral',
  'from-edubridge-coral to-edubridge-blue',
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
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl group transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top gradient border */}
              <div className={`h-1 w-full bg-gradient-to-r ${stepGradients[index % stepGradients.length]}`}></div>
              
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stepGradients[index % stepGradients.length]} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <step.icon className={`text-edubridge-blue`} size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center mt-4">
                      <div className="w-8 h-0.5 bg-gray-200"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 mx-1 group-hover:bg-edubridge-blue transition-colors duration-300"></div>
                      <div className="w-8 h-0.5 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
