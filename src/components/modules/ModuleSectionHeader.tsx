
import React from 'react';
import { LayoutDashboard } from 'lucide-react';

export const ModuleSectionHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-purple/10 to-edubridge-blue/10 text-edubridge-purple text-sm font-medium mb-4">
        <LayoutDashboard size={16} className="mr-2" /> Panel personalizado
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mi panel de estudio al extranjero</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Personaliza tu experiencia académica global con estas herramientas interactivas
      </p>
    </div>
  );
};

export default ModuleSectionHeader;
