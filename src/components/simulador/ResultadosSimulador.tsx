
import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, House, Money, RefreshCcw } from 'lucide-react';

interface ResultadosSimuladorProps {
  costos: {
    educacion: number;
    vivienda: number;
    vida: number;
    total: number;
    moneda: string;
    pais: string;
  };
  onResetear: () => void;
}

const ResultadosSimulador = ({ costos, onResetear }: ResultadosSimuladorProps) => {
  // Calcular porcentajes para el gráfico
  const porcentajeEducacion = Math.round((costos.educacion / costos.total) * 100);
  const porcentajeVivienda = Math.round((costos.vivienda / costos.total) * 100);
  const porcentajeVida = Math.round((costos.vida / costos.total) * 100);
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Presupuesto para estudiar en {costos.pais}</h2>
        <p className="text-gray-600 mb-4">Estimación de costos para un año académico</p>
        <div className="text-4xl font-bold text-edubridge-blue">
          {costos.moneda}{costos.total.toLocaleString('es-ES')}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="p-4 border rounded-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-edubridge-blue/20 rounded-full flex items-center justify-center mr-3">
              <GraduationCap className="text-edubridge-blue" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Educación</h3>
              <span className="text-xs text-gray-500">Matrícula y tasas</span>
            </div>
          </div>
          <div className="text-xl font-bold">{costos.moneda}{costos.educacion.toLocaleString('es-ES')}</div>
          <Progress value={porcentajeEducacion} className="h-2 mt-2" />
          <div className="text-xs text-right mt-1">{porcentajeEducacion}% del total</div>
        </div>
        
        <div className="p-4 border rounded-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-edubridge-purple/20 rounded-full flex items-center justify-center mr-3">
              <House className="text-edubridge-purple" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Vivienda</h3>
              <span className="text-xs text-gray-500">10 meses de alojamiento</span>
            </div>
          </div>
          <div className="text-xl font-bold">{costos.moneda}{costos.vivienda.toLocaleString('es-ES')}</div>
          <Progress value={porcentajeVivienda} className="h-2 mt-2 bg-gray-200">
            <div className="h-full bg-edubridge-purple rounded-full" style={{ width: `${porcentajeVivienda}%` }}></div>
          </Progress>
          <div className="text-xs text-right mt-1">{porcentajeVivienda}% del total</div>
        </div>
        
        <div className="p-4 border rounded-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-edubridge-cyan/20 rounded-full flex items-center justify-center mr-3">
              <Money className="text-edubridge-cyan" size={20} />
            </div>
            <div>
              <h3 className="font-medium">Coste de vida</h3>
              <span className="text-xs text-gray-500">Comida, transporte, ocio</span>
            </div>
          </div>
          <div className="text-xl font-bold">{costos.moneda}{costos.vida.toLocaleString('es-ES')}</div>
          <Progress value={porcentajeVida} className="h-2 mt-2 bg-gray-200">
            <div className="h-full bg-edubridge-cyan rounded-full" style={{ width: `${porcentajeVida}%` }}></div>
          </Progress>
          <div className="text-xs text-right mt-1">{porcentajeVida}% del total</div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-3">Recomendaciones</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="bg-edubridge-blue/20 text-edubridge-blue rounded-full p-1 mr-2 flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Busca becas y ayudas para estudiar en {costos.pais} para reducir los costos académicos.
          </li>
          <li className="flex items-start">
            <span className="bg-edubridge-blue/20 text-edubridge-blue rounded-full p-1 mr-2 flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Considera opciones de alojamiento compartido para reducir gastos de vivienda.
          </li>
          <li className="flex items-start">
            <span className="bg-edubridge-blue/20 text-edubridge-blue rounded-full p-1 mr-2 flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Aprovecha descuentos para estudiantes en transporte público y servicios.
          </li>
        </ul>
      </div>
      
      <div className="flex justify-center">
        <Button onClick={onResetear} variant="outline" className="flex items-center">
          <RefreshCcw size={16} className="mr-2" /> Simular otro escenario
        </Button>
      </div>
    </div>
  );
};

export default ResultadosSimulador;
