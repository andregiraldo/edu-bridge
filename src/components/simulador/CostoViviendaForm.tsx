
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CostoViviendaFormProps {
  onUpdateCosto: (value: number) => void;
  onNext: () => void;
  onBack: () => void;
  pais: string;
}

const CostoViviendaForm = ({ onUpdateCosto, onNext, onBack, pais }: CostoViviendaFormProps) => {
  const [tipoAlojamiento, setTipoAlojamiento] = useState('residencia');
  const [ubicacion, setUbicacion] = useState('centro');
  const [costoMensual, setCostoMensual] = useState(0);
  
  // Datos de ejemplo por país/tipo/ubicación
  const costosPorPaisTipoUbicacion = {
    'España': {
      'residencia': {
        'centro': 600,
        'periferia': 450
      },
      'apartamento': {
        'centro': 800,
        'periferia': 600
      },
      'coliving': {
        'centro': 550,
        'periferia': 400
      }
    },
    'Reino Unido': {
      'residencia': {
        'centro': 1200,
        'periferia': 900
      },
      'apartamento': {
        'centro': 1500,
        'periferia': 1100
      },
      'coliving': {
        'centro': 1000,
        'periferia': 800
      }
    },
    'Francia': {
      'residencia': {
        'centro': 800,
        'periferia': 600
      },
      'apartamento': {
        'centro': 1000,
        'periferia': 750
      },
      'coliving': {
        'centro': 700,
        'periferia': 550
      }
    },
    'Alemania': {
      'residencia': {
        'centro': 700,
        'periferia': 500
      },
      'apartamento': {
        'centro': 900,
        'periferia': 650
      },
      'coliving': {
        'centro': 600,
        'periferia': 450
      }
    }
  };
  
  useEffect(() => {
    // Al cambiar de país, actualiza el costo
    actualizarCosto();
  }, [pais]);
  
  const actualizarCosto = () => {
    if (!pais) return;
    const costoPorPais = costosPorPaisTipoUbicacion[pais as keyof typeof costosPorPaisTipoUbicacion] || costosPorPaisTipoUbicacion['España'];
    const costoPorTipo = costoPorPais[tipoAlojamiento as keyof typeof costoPorPais];
    const costoFinal = costoPorTipo[ubicacion as keyof typeof costoPorTipo];
    
    setCostoMensual(costoFinal);
    // 10 meses de alojamiento (año académico)
    onUpdateCosto(costoFinal * 10);
  };
  
  const handleTipoChange = (value: string) => {
    setTipoAlojamiento(value);
    setTimeout(() => {
      actualizarCosto();
    }, 0);
  };
  
  const handleUbicacionChange = (value: string) => {
    setUbicacion(value);
    setTimeout(() => {
      actualizarCosto();
    }, 0);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Tipo de alojamiento</h3>
        <RadioGroup value={tipoAlojamiento} onValueChange={handleTipoChange} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
            <RadioGroupItem value="residencia" id="residencia" />
            <Label htmlFor="residencia" className="cursor-pointer w-full">Residencia estudiantil</Label>
          </div>
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
            <RadioGroupItem value="apartamento" id="apartamento" />
            <Label htmlFor="apartamento" className="cursor-pointer w-full">Apartamento compartido</Label>
          </div>
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
            <RadioGroupItem value="coliving" id="coliving" />
            <Label htmlFor="coliving" className="cursor-pointer w-full">Coliving</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Ubicación</h3>
        <RadioGroup value={ubicacion} onValueChange={handleUbicacionChange} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
            <RadioGroupItem value="centro" id="centro" />
            <Label htmlFor="centro" className="cursor-pointer w-full">Centro de la ciudad</Label>
          </div>
          <div className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
            <RadioGroupItem value="periferia" id="periferia" />
            <Label htmlFor="periferia" className="cursor-pointer w-full">Periferia / Afueras</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="p-4 bg-edubridge-purple/10 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Costo mensual estimado</h3>
            <p className="text-sm text-gray-600">10 meses (año académico)</p>
          </div>
          <div className="text-xl font-bold text-edubridge-purple">€{costoMensual.toLocaleString('es-ES')}</div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft size={16} className="mr-2" /> Atrás
        </Button>
        <Button onClick={onNext} className="bg-edubridge-purple hover:bg-edubridge-purple/90">
          Siguiente <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CostoViviendaForm;
