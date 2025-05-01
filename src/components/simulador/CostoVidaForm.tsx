
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Calculator } from 'lucide-react';

interface CostoVidaFormProps {
  onUpdateCosto: (value: number) => void;
  onCalcular: () => void;
  onBack: () => void;
  pais: string;
}

const CostoVidaForm = ({ onUpdateCosto, onCalcular, onBack, pais }: CostoVidaFormProps) => {
  const [nivelGasto, setNivelGasto] = useState(2); // 1: básico, 2: medio, 3: alto
  const [transporte, setTransporte] = useState(50);
  const [comida, setComida] = useState(200);
  const [ocio, setOcio] = useState(100);
  
  // Datos de ejemplo por país/nivel de gasto
  const gastosPorPaisNivel = {
    'España': {
      transporte: [30, 50, 80],
      comida: [150, 200, 300],
      ocio: [50, 100, 200]
    },
    'Reino Unido': {
      transporte: [80, 120, 180],
      comida: [250, 350, 500],
      ocio: [100, 200, 350]
    },
    'Francia': {
      transporte: [60, 80, 120],
      comida: [200, 300, 400],
      ocio: [80, 150, 250]
    },
    'Alemania': {
      transporte: [70, 100, 150],
      comida: [180, 250, 350],
      ocio: [70, 120, 220]
    }
  };
  
  useEffect(() => {
    // Al cambiar de país, actualiza los costos
    actualizarCostos();
  }, [pais]);
  
  useEffect(() => {
    // Al cambiar el nivel de gasto, actualiza los costos
    actualizarCostos();
  }, [nivelGasto]);
  
  const actualizarCostos = () => {
    if (!pais) return;
    
    const costosPais = gastosPorPaisNivel[pais as keyof typeof gastosPorPaisNivel] || gastosPorPaisNivel['España'];
    const nivelIndex = nivelGasto - 1;
    
    const nuevoTransporte = costosPais.transporte[nivelIndex];
    const nuevaComida = costosPais.comida[nivelIndex];
    const nuevoOcio = costosPais.ocio[nivelIndex];
    
    setTransporte(nuevoTransporte);
    setComida(nuevaComida);
    setOcio(nuevoOcio);
    
    // 10 meses de gastos (año académico)
    const costoTotal = (nuevoTransporte + nuevaComida + nuevoOcio) * 10;
    onUpdateCosto(costoTotal);
  };
  
  const handleNivelGastoChange = (value: number[]) => {
    setNivelGasto(value[0]);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label htmlFor="nivelGasto">Nivel de gasto mensual</Label>
          <span className="text-sm font-medium">
            {nivelGasto === 1 ? 'Básico' : nivelGasto === 2 ? 'Medio' : 'Alto'}
          </span>
        </div>
        <Slider
          id="nivelGasto"
          defaultValue={[2]}
          max={3}
          min={1}
          step={1}
          onValueChange={handleNivelGastoChange}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-edubridge-purple/5 rounded-lg">
          <h3 className="font-medium mb-2">Transporte</h3>
          <div className="text-xl font-bold text-edubridge-purple">€{transporte}/mes</div>
          <p className="text-xs text-gray-500 mt-1">
            {nivelGasto === 1 ? 'Transporte público básico' : 
             nivelGasto === 2 ? 'Abono transporte completo' : 
             'Transporte + taxis ocasionales'}
          </p>
        </div>
        
        <div className="p-4 bg-edubridge-cyan/5 rounded-lg">
          <h3 className="font-medium mb-2">Alimentación</h3>
          <div className="text-xl font-bold text-edubridge-cyan">€{comida}/mes</div>
          <p className="text-xs text-gray-500 mt-1">
            {nivelGasto === 1 ? 'Comidas en casa' : 
             nivelGasto === 2 ? 'Comidas mixtas' : 
             'Restaurantes frecuentes'}
          </p>
        </div>
        
        <div className="p-4 bg-edubridge-blue/5 rounded-lg">
          <h3 className="font-medium mb-2">Ocio</h3>
          <div className="text-xl font-bold text-edubridge-blue">€{ocio}/mes</div>
          <p className="text-xs text-gray-500 mt-1">
            {nivelGasto === 1 ? 'Actividades básicas' : 
             nivelGasto === 2 ? 'Salidas regulares' : 
             'Viajes y eventos frecuentes'}
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-edubridge-cyan/10 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Gasto mensual total</h3>
            <p className="text-sm text-gray-600">Estimado para 10 meses</p>
          </div>
          <div className="text-xl font-bold text-edubridge-cyan">€{(transporte + comida + ocio).toLocaleString('es-ES')}</div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft size={16} className="mr-2" /> Atrás
        </Button>
        <Button onClick={onCalcular} className="bg-edubridge-cyan hover:bg-edubridge-cyan/90">
          <Calculator size={16} className="mr-2" /> Calcular total
        </Button>
      </div>
    </div>
  );
};

export default CostoVidaForm;
