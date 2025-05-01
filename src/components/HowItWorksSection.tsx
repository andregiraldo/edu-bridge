
import React from 'react';
import { GraduationCap, Calculator, Bell, House } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const stepGradients = ['from-edubridge-blue to-edubridge-purple', 'from-edubridge-purple to-edubridge-cyan', 'from-edubridge-cyan to-edubridge-coral', 'from-edubridge-coral to-edubridge-blue'];

const steps = [{
  icon: GraduationCap,
  title: "Encuentra tu programa ideal",
  description: "Nuestro algoritmo de IA encuentra las mejores opciones según tu perfil académico y preferencias.",
  action: "Explorar programas",
  url: "/recomendador"
}, {
  icon: Calculator,
  title: "Calcula tu presupuesto",
  description: "Simula los costos de vida y estudios en diferentes destinos para planificar tus finanzas.",
  action: "Calcular costos",
  url: "#"
}, {
  icon: Bell,
  title: "Recibe alertas de becas",
  description: "Configura notificaciones personalizadas sobre oportunidades de financiamiento compatibles.",
  action: "Configurar alertas",
  url: "#"
}, {
  icon: House,
  title: "Encuentra alojamiento",
  description: "Explora opciones de residencias, apartamentos compartidos y coliving en tu destino.",
  action: "Ver opciones",
  url: "#"
}];

const HowItWorksSection: React.FC = () => {
  return <section id="como-funciona" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Tu viaje académico paso a paso</h2>
          <p className="section-subtitle">
            EduBridge te acompaña en cada etapa de tu experiencia internacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => <motion.div key={index} className="flex justify-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }} viewport={{
          once: true
        }}>
              <div className="hexagon-container">
                <motion.div className={`hexagon bg-white relative shadow-lg group`} whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: {
                type: "spring",
                stiffness: 300
              }
            }} whileTap={{
              scale: 0.95
            }}>
                  {/* Top gradient border */}
                  <div className={`h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r ${stepGradients[index % stepGradients.length]}`} style={{
                clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 100%)"
              }}></div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col items-center h-full z-10 px-[25px] py-0 rounded mx-0 my-0">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: {
                    duration: 0.5
                  }
                }} className="">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center mx-0 my-[10px]">
                        <step.icon className="text-edubridge-blue" size={24} />
                      </div>
                    </motion.div>
                    
                    <span className="text-sm font-medium text-edubridge-purple mb-1 my-[18px] mx-px px-[3px]">Paso {index + 1}</span>
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 mb-5 text-center text-sm">{step.description}</p>
                    
                    <motion.div className="mt-auto" whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }}>
                      <Button className={`bg-gradient-to-r ${stepGradients[index % stepGradients.length]} text-white hover:opacity-90 w-full`} asChild>
                        <Link to={step.url}>{step.action}</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>)}
        </div>

        {/* Hexagon-shaped connectors for desktop */}
        <div className="hidden lg:flex justify-center mt-4">
          {steps.slice(0, -1).map((_, index) => <div key={`connector-${index}`} className="flex items-center mx-4">
              <motion.div className={`h-1 w-24 bg-gradient-to-r ${stepGradients[index % stepGradients.length]}`} initial={{
            scaleX: 0,
            opacity: 0
          }} whileInView={{
            scaleX: 1,
            opacity: 1
          }} transition={{
            delay: 0.5 + index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }} />
            </div>)}
        </div>
      </div>
    </section>;
};

export default HowItWorksSection;
