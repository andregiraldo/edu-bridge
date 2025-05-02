
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface DashboardHeaderProps {
  userEmail: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userEmail }) => {
  const firstName = userEmail.split('@')[0];
  
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¡Bienvenido, {firstName}!
          </h1>
          <p className="text-gray-600 mt-1">
            Continúa con tu planificación para estudiar en el extranjero
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Exportar Plan
          </Button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-edubridge-blue/10 to-edubridge-purple/10 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="md:w-2/3">
            <h3 className="font-medium text-gray-800">Tu progreso de planificación</h3>
            <p className="text-sm text-gray-600 mt-1">
              Completa todos los pasos para recibir un plan personalizado para estudiar en el extranjero
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 md:w-1/4">
            <div className="w-full bg-white rounded-full h-2.5">
              <div className="bg-edubridge-blue h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-xs text-gray-600 mt-1 text-right">45% completado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
