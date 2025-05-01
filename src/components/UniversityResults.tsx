
import React from 'react';
import { ArrowLeft, ExternalLink, GraduationCap, BookOpen, MapPin, Calendar, CoinsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UniversityResultsProps {
  onBack: () => void;
}

// Datos de ejemplo para las universidades recomendadas
const universidadesRecomendadas = [
  {
    id: 1,
    nombre: "Universidad de Barcelona",
    imagen: "https://lovable.dev/opengraph-image-p98pqg.png",
    pais: "España",
    ciudad: "Barcelona",
    programa: "Maestría en Negocios Internacionales",
    duracion: "24 meses",
    costoAnual: "$15,000 USD",
    idioma: "Español, Inglés",
    becasDisponibles: true,
    match: 95,
    descripcion: "Programa especializado en negocios globales con enfoque en mercados emergentes y oportunidades de intercambio en Asia y América."
  },
  {
    id: 2,
    nombre: "University of Toronto",
    imagen: "https://lovable.dev/opengraph-image-p98pqg.png",
    pais: "Canadá",
    ciudad: "Toronto",
    programa: "Master of Business Administration",
    duracion: "16 meses",
    costoAnual: "$22,500 USD",
    idioma: "Inglés",
    becasDisponibles: true,
    match: 90,
    descripcion: "MBA reconocido mundialmente con vínculos directos con el distrito financiero de Toronto y pasantías garantizadas."
  },
  {
    id: 3,
    nombre: "Technische Universität Berlin",
    imagen: "https://lovable.dev/opengraph-image-p98pqg.png",
    pais: "Alemania",
    ciudad: "Berlín",
    programa: "Master in International Business Management",
    duracion: "24 meses",
    costoAnual: "$8,000 USD",
    idioma: "Inglés, Alemán (básico)",
    becasDisponibles: true,
    match: 88,
    descripcion: "Programa técnico con doble titulación y enfoque en emprendimiento e innovación empresarial en contextos europeos."
  },
  {
    id: 4,
    nombre: "ESADE Business School",
    imagen: "https://lovable.dev/opengraph-image-p98pqg.png",
    pais: "España",
    ciudad: "Barcelona",
    programa: "MSc in Global Business Management",
    duracion: "10 meses",
    costoAnual: "$28,000 USD",
    idioma: "Inglés",
    becasDisponibles: true,
    match: 85,
    descripcion: "Programa intensivo de una de las mejores escuelas de negocios de Europa con red global de contactos profesionales."
  }
];

const UniversityResults: React.FC<UniversityResultsProps> = ({ onBack }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft size={18} />
          Ajustar filtros
        </Button>
        <span className="text-sm text-gray-500">4 resultados encontrados</span>
      </div>
      
      <div className="space-y-6">
        {universidadesRecomendadas.map((uni) => (
          <Card key={uni.id} className="overflow-hidden transition-all hover:shadow-md border-l-4" style={{borderLeftColor: uni.match > 90 ? '#2A65F0' : '#FDCB5A'}}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{uni.nombre}</CardTitle>
                <Badge className={uni.match > 90 ? "bg-edubridge-blue" : "bg-edubridge-yellow text-black"}>
                  {uni.match}% match
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} />
                <span>{uni.ciudad}, {uni.pais}</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-edubridge-blue mb-2">
                    <GraduationCap size={18} />
                    {uni.programa}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{uni.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {uni.becasDisponibles && (
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        Becas disponibles
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <BookOpen size={14} />
                      Idioma:
                    </span>
                    <span className="font-medium">{uni.idioma}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      Duración:
                    </span>
                    <span className="font-medium">{uni.duracion}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CoinsIcon size={14} />
                      Costo anual:
                    </span>
                    <span className="font-medium">{uni.costoAnual}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 bg-gray-50 py-2">
              <Button variant="outline" size="sm">Ver detalles</Button>
              <Button className="bg-edubridge-blue" size="sm">
                <span>Solicitar información</span>
                <ExternalLink size={14} className="ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UniversityResults;
