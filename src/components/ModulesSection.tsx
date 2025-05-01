
import React from 'react';
import { GraduationCap, Calculator, Bell, House, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    icon: GraduationCap,
    title: "Recomendador inteligente de universidades y programas",
    description: "Encuentra programas académicos que se ajusten a tu perfil, intereses y presupuesto.",
    url: "/recomendador"
  },
  {
    icon: Calculator,
    title: "Simulador de costos de vida y matrícula por país",
    description: "Calcula y compara gastos de educación, vivienda, transporte y más en diferentes destinos.",
    url: "#"
  },
  {
    icon: Bell,
    title: "Alertas automáticas de becas disponibles",
    description: "Recibe notificaciones sobre oportunidades de financiamiento compatibles con tu perfil.",
    url: "#"
  },
  {
    icon: House,
    title: "Comparador de alojamientos y opciones de coliving",
    description: "Explora y compara residencias, apartamentos compartidos y opciones de coliving en tu destino.",
    url: "#"
  },
  {
    icon: FileText,
    title: "Checklists y acompañamiento para el proceso de visa",
    description: "Guías paso a paso y recordatorios para completar todos los requisitos de tu visa de estudiante.",
    url: "#"
  }
];

const ModulesSection: React.FC = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 bg-edubridge-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Módulos principales</h2>
        <p className="section-subtitle text-center">
          Herramientas diseñadas para hacer tu experiencia internacional más sencilla
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {modules.map((module, index) => (
            <Link 
              key={index}
              to={module.url}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col h-full card-hover transition-all hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-edubridge-blue/10 text-edubridge-blue flex items-center justify-center mr-4">
                  <module.icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{module.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{module.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
