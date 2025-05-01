
import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface UniversityCardProps {
  universidad: {
    id: number;
    nombre: string;
    imagen: string;
    pais: string;
    ciudad: string;
    programas: number;
  };
}

const UniversityCard: React.FC<UniversityCardProps> = ({ universidad }) => {
  return (
    <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white border-0 rounded-xl hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={universidad.imagen}
          alt={universidad.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 p-3 w-full">
          <span className="bg-edubridge-blue/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center">
            <MapPin size={12} className="mr-1" />
            {universidad.ciudad}, {universidad.pais}
          </span>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-3 group-hover:text-edubridge-blue transition-colors">{universidad.nombre}</h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <GraduationCap size={16} className="mr-2 text-edubridge-purple" />
            <span className="text-sm text-edubridge-purple font-medium cursor-help">
              Ver detalles
            </span>
          </div>
          
          <div className="text-right">
            <span className="text-sm font-medium bg-gray-100 rounded-full px-3 py-1.5 text-edubridge-purple">
              {universidad.programas} programas
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversityCard;
