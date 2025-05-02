
import React from 'react';
import { 
  GraduationCap, Home, Building, DollarSign, 
  FileText, Award, PieChart, Compass
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'overview', name: 'Panel Principal', icon: Home },
    { id: 'universities', name: 'Universidades', icon: GraduationCap },
    { id: 'housing', name: 'Alojamiento', icon: Building },
    { id: 'expenses', name: 'Gastos', icon: DollarSign },
    { id: 'filters', name: 'Filtros de Estudio', icon: Compass },
    { id: 'application', name: 'Proceso de Solicitud', icon: FileText },
    { id: 'scholarships', name: 'Becas', icon: Award },
    { id: 'summary', name: 'Resumen Total', icon: PieChart },
  ];

  return (
    <aside className="bg-white border-r w-64 hidden md:block p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-edubridge-blue">EduBridge</h2>
        <p className="text-sm text-gray-500">Dashboard de Estudiante</p>
      </div>
      
      <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center px-4 py-2 rounded-md text-sm ${
                  activeSection === item.id
                    ? 'bg-edubridge-blue text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
