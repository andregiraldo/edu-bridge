
import React from 'react';
import { GraduationCap, Calculator, Bell, House, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

// Define gradient borders for a more vibrant look
const moduleGradients = [
  'from-edubridge-purple to-edubridge-blue',
  'from-edubridge-cyan to-edubridge-blue',
  'from-edubridge-yellow to-edubridge-coral',
  'from-edubridge-coral to-edubridge-purple',
  'from-edubridge-mint to-edubridge-cyan',
];

// Keep the icon background colors
const moduleIcons = [
  'text-edubridge-purple bg-edubridge-purple/10',
  'text-edubridge-cyan bg-edubridge-cyan/10',
  'text-edubridge-yellow bg-edubridge-yellow/10',
  'text-edubridge-coral bg-edubridge-coral/10',
  'text-edubridge-mint bg-edubridge-mint/10',
];

const modules = [
  {
    icon: GraduationCap,
    title: "Recomendador inteligente de universidades y programas",
    description: "Encuentra programas académicos que se ajusten a tu perfil, intereses y presupuesto.",
    url: "/recomendador",
    aiPowered: true
  },
  {
    icon: Calculator,
    title: "Simulador de costos de vida y matrícula por país",
    description: "Calcula y compara gastos de educación, vivienda, transporte y más en diferentes destinos.",
    url: "#",
    aiPowered: true
  },
  {
    icon: Bell,
    title: "Alertas automáticas de becas disponibles",
    description: "Recibe notificaciones sobre oportunidades de financiamiento compatibles con tu perfil.",
    url: "#",
    aiPowered: true
  },
  {
    icon: House,
    title: "Comparador de alojamientos y opciones de coliving",
    description: "Explora y compara residencias, apartamentos compartidos y opciones de coliving en tu destino.",
    url: "#",
    aiPowered: false
  },
  {
    icon: FileText,
    title: "Checklists y acompañamiento para el proceso de visa",
    description: "Guías paso a paso y recordatorios para completar todos los requisitos de tu visa de estudiante.",
    url: "#",
    aiPowered: false
  }
];

const ModulesSection: React.FC = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-purple/10 to-edubridge-blue/10 text-edubridge-purple text-sm font-medium mb-4">
            <Zap size={16} className="mr-2 animate-pulse-glow" /> Potenciado por IA
          </span>
          <h2 className="section-title text-center mt-3">Herramientas inteligentes para tu viaje académico</h2>
          <p className="section-subtitle text-center">
            Soluciones digitales diseñadas para simplificar tu experiencia académica global
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {modules.map((module, index) => (
            <Link 
              key={index}
              to={module.url}
              className="group transition-all duration-300 hover:scale-[1.02]"
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden relative">
                {/* Gradient background with pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${moduleGradients[index % moduleGradients.length]} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300`}></div>
                
                {/* Top gradient border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${moduleGradients[index % moduleGradients.length]}`}></div>
                
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${moduleIcons[index % moduleIcons.length]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <module.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-edubridge-blue transition-colors duration-300">{module.title}</h3>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                    {module.aiPowered && (
                      <div className="flex items-center text-sm text-edubridge-purple">
                        <Zap size={14} className="mr-1 animate-pulse-glow" />
                        <span>Con IA</span>
                      </div>
                    )}
                    <div className="ml-auto bg-gray-50 rounded-full p-1 group-hover:bg-edubridge-blue/10 transition-colors duration-300">
                      <ArrowRight className="text-gray-400 group-hover:text-edubridge-blue transition-colors duration-300" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-arrow-right ${className}`}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default ModulesSection;
