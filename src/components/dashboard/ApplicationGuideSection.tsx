
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ApplicationGuideSectionProps {
  selectedUniversity: any;
  fullWidth?: boolean;
}

const ApplicationGuideSection: React.FC<ApplicationGuideSectionProps> = ({
  selectedUniversity,
  fullWidth = false
}) => {
  if (!selectedUniversity) {
    return (
      <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <FileText className="h-5 w-5 mr-2 text-edubridge-blue" />
            Guía de Aplicación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-center">
            <p className="text-gray-500">
              Selecciona primero una universidad para ver la guía de aplicación
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Mock application steps based on the country of the selected university
  const getApplicationSteps = () => {
    const baseSteps = [
      {
        title: "Crear cuenta en el portal universitario",
        description: "Regístrate en el portal oficial de la universidad",
        completed: true,
        deadline: "Inmediato"
      },
      {
        title: "Preparar documentos académicos",
        description: "Certificados de estudios previos, diplomas y transcripciones",
        completed: false,
        deadline: "3 meses antes"
      },
      {
        title: "Prueba de idioma",
        description: "Realizar examen de idioma requerido (TOEFL/IELTS/DELE)",
        completed: false,
        deadline: "4 meses antes"
      },
      {
        title: "Carta de motivación",
        description: "Redactar carta explicando motivaciones académicas",
        completed: false,
        deadline: "2 meses antes"
      },
      {
        title: "Cartas de recomendación",
        description: "Solicitar y obtener cartas de profesores o empleadores",
        completed: false,
        deadline: "2 meses antes"
      }
    ];
    
    // Customize based on country
    if (selectedUniversity.pais === "España") {
      baseSteps.push({
        title: "Homologación de títulos",
        description: "Legalización de documentos académicos para España",
        completed: false,
        deadline: "6 meses antes"
      });
    } else if (selectedUniversity.pais === "Canadá" || selectedUniversity.pais === "Australia") {
      baseSteps.push({
        title: "Solicitud de permiso de estudio",
        description: "Completar solicitud de visa de estudiante",
        completed: false,
        deadline: "4 meses antes"
      });
    }
    
    return baseSteps;
  };

  const applicationSteps = getApplicationSteps();

  const getApplicationDeadline = () => {
    // Mock deadlines based on country
    const deadlines: Record<string, string> = {
      "España": "15 de junio",
      "Canadá": "1 de febrero",
      "Alemania": "15 de enero",
      "México": "30 de abril",
      "Australia": "31 de octubre",
      "Francia": "31 de marzo"
    };
    
    return deadlines[selectedUniversity.pais] || "Verificar en sitio web";
  };

  return (
    <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-bold">
          <FileText className="h-5 w-5 mr-2 text-edubridge-blue" />
          Guía de Aplicación - {selectedUniversity.nombre}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-edubridge-blue/10 rounded-lg p-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-3 text-edubridge-blue mt-0.5" />
              <div>
                <h3 className="font-medium">Fecha límite de solicitud</h3>
                <p className="text-sm mt-1">
                  Para el próximo periodo académico: <strong>{getApplicationDeadline()}</strong>
                </p>
              </div>
            </div>
          </div>
        
          <div>
            <h3 className="font-medium mb-4">Pasos para aplicar a {selectedUniversity.nombre}</h3>
            
            <div className="space-y-4">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3">
                    {step.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={cn(
                        "font-medium",
                        step.completed ? "text-gray-500 line-through" : ""
                      )}>
                        {step.title}
                      </h4>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {step.deadline}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Recursos útiles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="justify-start h-auto py-2 px-3"
              >
                <FileText className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <p className="font-medium">Requisitos completos</p>
                  <p className="text-xs text-gray-500">PDF, 1.2MB</p>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto py-2 px-3"
              >
                <FileText className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <p className="font-medium">Formato carta motivación</p>
                  <p className="text-xs text-gray-500">DOCX, 320KB</p>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto py-2 px-3"
              >
                <FileText className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <p className="font-medium">Lista de documentos</p>
                  <p className="text-xs text-gray-500">PDF, 450KB</p>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto py-2 px-3"
              >
                <FileText className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <p className="font-medium">Calendario académico</p>
                  <p className="text-xs text-gray-500">PDF, 280KB</p>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="mt-4">
            <Button 
              className="w-full bg-edubridge-blue hover:bg-edubridge-blue/90"
            >
              Contactar asesor de admisiones
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationGuideSection;
