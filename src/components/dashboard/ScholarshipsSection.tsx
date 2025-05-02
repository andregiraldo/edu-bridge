
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Info, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

interface ScholarshipsSectionProps {
  selectedUniversity: any;
  fullWidth?: boolean;
}

const ScholarshipsSection: React.FC<ScholarshipsSectionProps> = ({
  selectedUniversity,
  fullWidth = false
}) => {
  if (!selectedUniversity) {
    return (
      <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <Award className="h-5 w-5 mr-2 text-edubridge-yellow" />
            Becas Disponibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-center">
            <p className="text-gray-500">
              Selecciona primero una universidad para ver becas disponibles
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Mock scholarships based on the selected university and country
  const getAvailableScholarships = () => {
    const baseScholarships = [];
    
    // University-specific scholarships
    baseScholarships.push({
      name: `Beca ${selectedUniversity.nombre}`,
      description: `Beca para estudiantes internacionales en ${selectedUniversity.nombre}`,
      amount: getRandomAmount(1000, 5000),
      deadline: "30 de mayo, 2024",
      eligibility: "Estudiantes internacionales con promedio superior a 8.5",
      requirements: ["Carta de motivación", "Certificado de notas", "Prueba de idioma"],
      probability: "Alta"
    });
    
    // Country-specific scholarships
    if (selectedUniversity.pais === "España") {
      baseScholarships.push({
        name: "Beca Santander Iberoamérica",
        description: "Para estudiantes latinoamericanos en universidades españolas",
        amount: 5000,
        deadline: "15 de abril, 2024",
        eligibility: "Estudiantes de Latinoamérica con carta de aceptación",
        requirements: ["Nacionalidad latinoamericana", "Carta de aceptación", "Ensayo"],
        probability: "Media"
      });
    } else if (selectedUniversity.pais === "Canadá") {
      baseScholarships.push({
        name: "Emerging Leaders in the Americas Program",
        description: "Beca para líderes emergentes de América Latina",
        amount: 8000,
        deadline: "1 de marzo, 2024",
        eligibility: "Estudiantes latinoamericanos con liderazgo demostrado",
        requirements: ["CV", "Cartas de recomendación", "Ensayo de liderazgo"],
        probability: "Media"
      });
    }
    
    // General scholarships available in any country
    baseScholarships.push({
      name: "Beca EduBridge Global Scholar",
      description: "Para estudiantes usando la plataforma EduBridge",
      amount: 2000,
      deadline: "Continua",
      eligibility: "Usuarios de EduBridge con perfil completo",
      requirements: ["Perfil completo", "Carta de aceptación"],
      probability: "Alta"
    });
    
    return baseScholarships;
  };

  function getRandomAmount(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const scholarships = getAvailableScholarships();

  const getProbabilityColor = (probability: string) => {
    switch(probability) {
      case "Alta":
        return "text-green-500 bg-green-50";
      case "Media":
        return "text-amber-500 bg-amber-50";
      case "Baja":
        return "text-red-500 bg-red-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-bold">
          <Award className="h-5 w-5 mr-2 text-edubridge-yellow" />
          Becas Disponibles - {selectedUniversity.nombre}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-edubridge-yellow/10 rounded-lg p-4 flex items-start">
            <Info className="h-5 w-5 mr-3 text-edubridge-yellow mt-0.5" />
            <div>
              <h3 className="font-medium">Perfil de elegibilidad</h3>
              <p className="text-sm mt-1">
                Basado en tu perfil, hemos encontrado {scholarships.length} becas para las que podrías ser elegible.
                Completa tu perfil académico para mejorar tus oportunidades.
              </p>
            </div>
          </div>
        
          <div>
            <h3 className="font-medium mb-4">Becas disponibles</h3>
            
            <div className="space-y-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{scholarship.name}</h4>
                      <Badge className={cn("ml-2", getProbabilityColor(scholarship.probability))}>
                        Probabilidad {scholarship.probability}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <p className="text-sm text-gray-600 mb-3">
                      {scholarship.description}
                    </p>
                    
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="py-2 font-medium">Monto</TableCell>
                          <TableCell className="py-2 text-right">{scholarship.amount}€</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="py-2 font-medium">Fecha límite</TableCell>
                          <TableCell className="py-2 text-right">{scholarship.deadline}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="py-2 font-medium">Elegibilidad</TableCell>
                          <TableCell className="py-2 text-right text-sm">{scholarship.eligibility}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                    <div className="mt-3">
                      <h5 className="text-sm font-medium mb-1">Requisitos:</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {scholarship.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <Button size="sm" variant="outline" className="w-full">
                        Ver detalles y aplicar
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <Button 
              className="w-full bg-edubridge-yellow hover:bg-edubridge-yellow/90 text-white"
            >
              Buscar más becas
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScholarshipsSection;
