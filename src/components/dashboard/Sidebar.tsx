
import React from 'react';
import { Home, GraduationCap, House, DollarSign, FileText, Award, BarChart } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sidebarItems = [
  { id: 'overview', label: 'Panel General', icon: Home },
  { id: 'universities', label: 'Universidades', icon: GraduationCap },
  { id: 'housing', label: 'Vivienda', icon: House },
  { id: 'expenses', label: 'Gastos Estimados', icon: DollarSign },
  { id: 'application', label: 'Guía de Aplicación', icon: FileText },
  { id: 'scholarships', label: 'Becas', icon: Award },
  { id: 'summary', label: 'Resumen Total', icon: BarChart },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700">Mi Dashboard</h2>
      </div>
      
      <div className="py-4 flex flex-col flex-1">
        <nav className="px-2 space-y-1">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg w-full text-left transition-colors",
                activeSection === item.id
                  ? "bg-edubridge-blue/10 text-edubridge-blue"
                  : "text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className={cn(
                "h-5 w-5 mr-3",
                activeSection === item.id ? "text-edubridge-blue" : "text-gray-400"
              )} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <div className="bg-gradient-to-r from-edubridge-blue/20 to-edubridge-purple/20 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-gray-700 mb-2">¿Necesitas ayuda?</p>
          <button className="text-edubridge-blue hover:text-edubridge-purple text-sm font-medium">
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
