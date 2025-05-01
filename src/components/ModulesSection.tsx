
import React from 'react';
import ModuleSectionHeader from './modules/ModuleSectionHeader';
import ModuleTabs from './modules/ModuleTabs';
import ModuleAnimations from './modules/ModuleAnimations';

const ModulesSection: React.FC = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ModuleSectionHeader />

        <div className="relative mb-20 mx-auto">
          <div className="absolute inset-x-0 -bottom-96 md:-bottom-64 pointer-events-none">
            <div className="max-w-6xl mx-auto">
              <ModuleTabs />
            </div>
          </div>
        </div>
        
        {/* Spacer to account for the absolute positioned cards */}
        <div className="h-[500px] md:h-[400px] lg:h-[350px]"></div>
      </div>
      
      {/* Add CSS animations */}
      <ModuleAnimations />
    </section>
  );
};

export default ModulesSection;
