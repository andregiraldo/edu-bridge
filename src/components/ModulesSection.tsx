
import React from 'react';
import { GraduationCap, Calculator, Bell, House, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const moduleColors = [
  'bg-gradient-to-br from-indigo-600 to-purple-600',
  'bg-gradient-to-br from-emerald-500 to-teal-600',
  'bg-gradient-to-br from-amber-500 to-orange-600',
  'bg-gradient-to-br from-rose-500 to-pink-600',
  'bg-gradient-to-br from-blue-500 to-cyan-600',
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
    <section id="modulos" className="py-16 md:py-24 bg-[#130F40]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-edubridge-blue/10 text-edubridge-blue text-sm font-medium">
            <Zap size={16} className="mr-2" /> Potenciado por IA
          </span>
          <h2 className="section-title text-center mt-3">Nuestras herramientas inteligentes</h2>
          <p className="section-subtitle text-center">
            Soluciones digitales diseñadas para simplificar tu experiencia académica global
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {modules.map((module, index) => (
            <Link 
              key={index}
              to={module.url}
              className={`${moduleColors[index % moduleColors.length]} rounded-xl p-6 shadow-lg flex flex-col h-full card-hover transition-all hover:shadow-xl text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -ml-6 -mb-6 bg-black/10 rounded-full blur-xl"></div>
              
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 text-white flex items-center justify-center mr-4">
                  <module.icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{module.title}</h3>
              </div>
              <p className="text-white/90 mt-2">{module.description}</p>
              
              {module.aiPowered && (
                <div className="mt-auto pt-4 flex items-center text-sm">
                  <Zap size={14} className="mr-1" />
                  <span>Con IA</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Zap = ({ size = 24, className = "" }) => (
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
    className={`lucide lucide-zap ${className}`}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default ModulesSection;
