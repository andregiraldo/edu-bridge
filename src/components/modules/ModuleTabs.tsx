
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import ModuleTabContent from './ModuleTabContent';

export const ModuleTabs: React.FC = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="bg-gray-100 mx-auto w-fit mb-8">
        <TabsTrigger value="all" className="data-[state=active]:bg-edubridge-blue data-[state=active]:text-white">Todas</TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-edubridge-purple data-[state=active]:text-white">Con IA</TabsTrigger>
        <TabsTrigger value="tools" className="data-[state=active]:bg-edubridge-cyan data-[state=active]:text-white">Herramientas</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-0">
        <ModuleTabContent />
      </TabsContent>
      
      <TabsContent value="ai" className="mt-0">
        <ModuleTabContent filter={(module) => module.aiPowered} />
      </TabsContent>
      
      <TabsContent value="tools" className="mt-0">
        <ModuleTabContent filter={(module) => !module.aiPowered} />
      </TabsContent>
    </Tabs>
  );
};

export default ModuleTabs;
