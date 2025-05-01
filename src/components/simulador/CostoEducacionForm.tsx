
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

interface CostoEducacionFormProps {
  onUpdateCosto: (value: number, pais: string) => void;
  onNext: () => void;
}

const CostoEducacionForm = ({ onUpdateCosto, onNext }: CostoEducacionFormProps) => {
  const [pais, setPais] = useState('España');
  const [nivelEstudios, setNivelEstudios] = useState('grado');
  const [duracionAnos, setDuracionAnos] = useState(1);
  const [costoAnual, setCostoAnual] = useState(0);
  
  // Datos de ejemplo por país/nivel
  const costosPorPaisNivel = {
    'España': {
      'grado': 2500,
      'master': 4000,
      'doctorado': 3000
    },
    'Reino Unido': {
      'grado': 12000,
      'master': 15000,
      'doctorado': 18000
    },
    'Francia': {
      'grado': 3000,
      'master': 5000,
      'doctorado': 4000
    },
    'Alemania': {
      'grado': 1500,
      'master': 3000,
      'doctorado': 2500
    }
  };
  
  const handlePaisChange = (value: string) => {
    setPais(value);
    const nuevoCosto = costosPorPaisNivel[value as keyof typeof costosPorPaisNivel][nivelEstudios as keyof typeof costosPorPaisNivel['España']];
    setCostoAnual(nuevoCosto);
    onUpdateCosto(nuevoCosto * duracionAnos, value);
  };
  
  const handleNivelChange = (value: string) => {
    setNivelEstudios(value);
    const nuevoCosto = costosPorPaisNivel[pais as keyof typeof costosPorPaisNivel][value as keyof typeof costosPorPaisNivel['España']];
    setCostoAnual(nuevoCosto);
    onUpdateCosto(nuevoCosto * duracionAnos, pais);
  };
  
  const handleDuracionChange = (value: number[]) => {
    const duracion = value[0];
    setDuracionAnos(duracion);
    onUpdateCosto(costoAnual * duracion, pais);
  };
  
  const handleNext = () => {
    onNext();
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Label htmlFor="pais">País de destino</Label>
          <Select value={pais} onValueChange={handlePaisChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un país" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="España">España</SelectItem>
              <SelectItem value="Reino Unido">Reino Unido</SelectItem>
              <SelectItem value="Francia">Francia</SelectItem>
              <SelectItem value="Alemania">Alemania</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-4">
          <Label htmlFor="nivel">Nivel de estudios</Label>
          <Select value={nivelEstudios} onValueChange={handleNivelChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona nivel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grado">Grado / Licenciatura</SelectItem>
              <SelectItem value="master">Máster / Posgrado</SelectItem>
              <SelectItem value="doctorado">Doctorado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label htmlFor="duracion">Duración (años): {duracionAnos}</Label>
          <span className="text-sm text-gray-500">1 - 5 años</span>
        </div>
        <Slider
          id="duracion"
          defaultValue={[1]}
          max={5}
          min={1}
          step={1}
          onValueChange={handleDuracionChange}
        />
      </div>
      
      <div className="p-4 bg-edubridge-blue/10 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Costo anual estimado</h3>
            <p className="text-sm text-gray-600">Basado en tarifas promedio</p>
          </div>
          <div className="text-xl font-bold text-edubridge-blue">€{costoAnual.toLocaleString('es-ES')}</div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={handleNext} className="bg-edubridge-blue hover:bg-edubridge-blue/90">
          Siguiente <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CostoEducacionForm;
