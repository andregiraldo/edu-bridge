
import React from 'react';
import ModuleCard from './ModuleCard';
import { modules } from '@/data/moduleData';

interface ModuleTabContentProps {
  filter?: (module: typeof modules[0]) => boolean;
}

export const ModuleTabContent: React.FC<ModuleTabContentProps> = ({ filter }) => {
  const displayModules = filter ? modules.filter(filter) : modules;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {displayModules.map((module, index) => (
        <ModuleCard
          key={index}
          icon={module.icon}
          title={module.title}
          description={module.description}
          url={module.url}
          aiPowered={module.aiPowered}
          iconColor={module.iconColor}
          bgPattern={module.bgPattern}
          index={index}
        />
      ))}
    </div>
  );
};

export default ModuleTabContent;
