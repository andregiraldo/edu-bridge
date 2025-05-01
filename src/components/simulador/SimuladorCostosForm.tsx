
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, GraduationCap, House, Money } from 'lucide-react';
import CostoEducacionForm from './CostoEducacionForm';
import CostoViviendaForm from './CostoViviendaForm';
import CostoVidaForm from './CostoVidaForm';
import ResultadosSimulador from './ResultadosSimulador';

const SimuladorCostosForm = () => {
  const [currentStep, setCurrentStep] = useState('educacion');
  const [resultadosVisible, setResultadosVisible] = useState(false);
  const [costoTotal, setCostoTotal] = useState({
    educacion: 0,
    vivienda: 0,
    vida: 0,
    total: 0,
    moneda: '€',
    pais: 'España'
  });
  
  const handleUpdateCosto = (type: 'educacion' | 'vivienda' | 'vida', valor: number, pais?: string) => {
    setCostoTotal(prev => {
      const newCostos = {
        ...prev,
        [type]: valor,
        pais: pais || prev.pais
      };
      
      newCostos.total = newCostos.educacion + newCostos.vivienda + newCostos.vida;
      return newCostos;
    });
  };
  
  const handleCalcular = () => {
    setResultadosVisible(true);
  };
  
  const handleResetear = () => {
    setResultadosVisible(false);
    setCurrentStep('educacion');
    setCostoTotal({
      educacion: 0,
      vivienda: 0,
      vida: 0,
      total: 0,
      moneda: '€',
      pais: 'España'
    });
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6 shadow-lg border-0 bg-white">
        {!resultadosVisible ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Simula tus costos</h2>
              <div className="flex items-center text-sm">
                <span className="font-medium text-edubridge-blue">
                  {costoTotal.moneda}{costoTotal.total.toLocaleString('es-ES')}
                </span>
                <span className="ml-2 text-gray-500">estimado total</span>
              </div>
            </div>
            
            <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger 
                  value="educacion"
                  className="data-[state=active]:bg-edubridge-blue data-[state=active]:text-white"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Educación
                </TabsTrigger>
                <TabsTrigger 
                  value="vivienda" 
                  className="data-[state=active]:bg-edubridge-purple data-[state=active]:text-white"
                >
                  <House className="mr-2 h-4 w-4" />
                  Vivienda
                </TabsTrigger>
                <TabsTrigger 
                  value="vida" 
                  className="data-[state=active]:bg-edubridge-cyan data-[state=active]:text-white"
                >
                  <Money className="mr-2 h-4 w-4" />
                  Coste de vida
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="educacion" className="mt-0">
                <CostoEducacionForm 
                  onUpdateCosto={(value, pais) => handleUpdateCosto('educacion', value, pais)} 
                  onNext={() => setCurrentStep('vivienda')}
                />
              </TabsContent>
              
              <TabsContent value="vivienda" className="mt-0">
                <CostoViviendaForm 
                  onUpdateCosto={(value) => handleUpdateCosto('vivienda', value)} 
                  onNext={() => setCurrentStep('vida')}
                  onBack={() => setCurrentStep('educacion')}
                  pais={costoTotal.pais}
                />
              </TabsContent>
              
              <TabsContent value="vida" className="mt-0">
                <CostoVidaForm 
                  onUpdateCosto={(value) => handleUpdateCosto('vida', value)} 
                  onCalcular={handleCalcular}
                  onBack={() => setCurrentStep('vivienda')}
                  pais={costoTotal.pais}
                />
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <ResultadosSimulador 
            costos={costoTotal} 
            onResetear={handleResetear} 
          />
        )}
      </Card>
    </div>
  );
};

export default SimuladorCostosForm;
