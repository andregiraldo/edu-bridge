
import React from 'react';
import { GraduationCap, Calculator, Bell, House } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const stepGradients = [
  'from-edubridge-blue to-edubridge-purple',
  'from-edubridge-purple to-edubridge-cyan',
  'from-edubridge-cyan to-edubridge-coral',
  'from-edubridge-coral to-edubridge-blue',
];

const steps = [
  {
    icon: GraduationCap,
    title: "Encuentra tu programa ideal",
    description: "Nuestro algoritmo de IA encuentra las mejores opciones según tu perfil académico y preferencias.",
    action: "Explorar programas",
    url: "/recomendador"
  },
  {
    icon: Calculator,
    title: "Calcula tu presupuesto",
    description: "Simula los costos de vida y estudios en diferentes destinos para planificar tus finanzas.",
    action: "Calcular costos",
    url: "#"
  },
  {
    icon: Bell,
    title: "Recibe alertas de becas",
    description: "Configura notificaciones personalizadas sobre oportunidades de financiamiento compatibles.",
    action: "Configurar alertas",
    url: "#"
  },
  {
    icon: House,
    title: "Encuentra alojamiento",
    description: "Explora opciones de residencias, apartamentos compartidos y coliving en tu destino.",
    action: "Ver opciones",
    url: "#"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Tu viaje académico paso a paso</h2>
          <p className="section-subtitle">
            EduBridge te acompaña en cada etapa de tu experiencia internacional
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Progress bar */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gray-100">
            <div className="h-full w-1/4 bg-gradient-to-r from-edubridge-blue to-edubridge-purple"></div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div 
                    className="rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group h-full flex flex-col"
                  >
                    {/* Top gradient border */}
                    <div className={`h-1 w-full bg-gradient-to-r ${stepGradients[index % stepGradients.length]}`}></div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-6 flex items-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stepGradients[index % stepGradients.length]} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <step.icon className="text-edubridge-blue" size={24} />
                          </div>
                        </div>
                        
                        <div className="ml-4">
                          <span className="text-sm font-medium text-edubridge-purple">Paso {index + 1}</span>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 flex-grow">{step.description}</p>
                      
                      <Button 
                        className={`bg-gradient-to-r ${stepGradients[index % stepGradients.length]} text-white hover:opacity-90 w-full group-hover:scale-105 transition-transform duration-300`}
                        asChild
                      >
                        <a href={step.url}>{step.action}</a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <div className="flex gap-1">
                {steps.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-edubridge-blue`}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
