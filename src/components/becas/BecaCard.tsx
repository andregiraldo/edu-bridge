
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, GraduationCap, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface BecaProps {
  beca: {
    titulo: string;
    organizacion: string;
    tipo: string;
    fechaLimite: string;
    financiamiento: string;
    pais: string;
    url: string;
    destacada: boolean;
    nivel: string;
  };
}

const BecaCard = ({ beca }: BecaProps) => {
  const { toast } = useToast();
  
  const handleSeguirBeca = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "¡Seguimiento activado!",
      description: `Recibirás actualizaciones sobre la beca ${beca.titulo}`,
    });
  };
  
  const getNivelLabel = (nivel: string) => {
    switch (nivel) {
      case 'grado': return 'Grado';
      case 'master': return 'Máster';
      case 'doctorado': return 'Doctorado';
      case 'investigacion': return 'Investigación';
      default: return nivel;
    }
  };
  
  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'completa': return 'Beca completa';
      case 'parcial': return 'Beca parcial';
      case 'intercambio': return 'Intercambio';
      case 'investigacion': return 'Investigación';
      case 'movilidad': return 'Movilidad';
      default: return tipo;
    }
  };
  
  const getTipoBadgeColor = (tipo: string) => {
    switch (tipo) {
      case 'completa': return 'bg-edubridge-yellow/20 text-edubridge-yellow border-edubridge-yellow/30';
      case 'parcial': return 'bg-edubridge-purple/20 text-edubridge-purple border-edubridge-purple/30';
      case 'intercambio': return 'bg-edubridge-blue/20 text-edubridge-blue border-edubridge-blue/30';
      case 'investigacion': return 'bg-edubridge-cyan/20 text-edubridge-cyan border-edubridge-cyan/30';
      case 'movilidad': return 'bg-edubridge-coral/20 text-edubridge-coral border-edubridge-coral/30';
      default: return 'bg-gray-200 text-gray-800';
    }
  };
  
  return (
    <Card className={`overflow-hidden group hover:shadow-lg transition-all duration-300 border ${
      beca.destacada ? 'border-edubridge-yellow' : 'border-gray-100'
    }`}>
      {beca.destacada && (
        <div className="bg-edubridge-yellow/90 text-edubridge-text py-1 text-center text-xs font-medium">
          Beca destacada
        </div>
      )}
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg group-hover:text-edubridge-blue transition-colors">
            {beca.titulo}
          </h3>
          
          <Badge variant="outline" className={`${getTipoBadgeColor(beca.tipo)} font-medium border`}>
            {getTipoLabel(beca.tipo)}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm">{beca.organizacion}</p>
        
        <div className="my-4 space-y-2">
          <div className="flex items-center text-sm">
            <Calendar size={14} className="mr-2 text-gray-500" />
            <span>Fecha límite: <span className="font-medium">{beca.fechaLimite}</span></span>
          </div>
          
          <div className="flex items-center text-sm">
            <GraduationCap size={14} className="mr-2 text-gray-500" />
            <span>Nivel: <span className="font-medium">{getNivelLabel(beca.nivel)}</span></span>
          </div>
        </div>
        
        <div className="p-2 bg-gray-50 rounded-lg mb-4">
          <span className="text-sm font-medium">{beca.financiamiento}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="sm" className="p-0 h-auto" onClick={handleSeguirBeca}>
            <Bell size={14} className="mr-1" /> Seguir
          </Button>
          
          <Button variant="ghost" size="sm" className="text-edubridge-blue p-0 h-auto flex items-center group-hover:text-edubridge-blue/80">
            Ver detalles
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BecaCard;
