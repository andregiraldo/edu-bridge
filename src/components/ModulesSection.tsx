
import React from 'react';
import ModuleSectionHeader from './modules/ModuleSectionHeader';
import ModuleTabs from './modules/ModuleTabs';
import ModuleAnimations from './modules/ModuleAnimations';

const ModulesSection: React.FC = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ModuleSectionHeader />
        
        <div className="mt-12">
          <div className="max-w-6xl mx-auto">
            <ModuleTabs />
          </div>
        </div>
      </div>
      
      {/* Add CSS animations */}
      <ModuleAnimations />
    </section>
  );
};

export default ModulesSection;
