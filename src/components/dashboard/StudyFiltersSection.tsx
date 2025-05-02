
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

interface StudyFiltersSectionProps {
  updateFilters: (filters: StudyFilters) => void;
  filters: StudyFilters;
  fullWidth?: boolean;
}

export interface StudyFilters {
  programType: string;
  duration: string;
  modality: string;
}

const StudyFiltersSection: React.FC<StudyFiltersSectionProps> = ({
  updateFilters,
  filters,
  fullWidth = false
}) => {
  const handleProgramTypeChange = (value: string) => {
    updateFilters({
      ...filters,
      programType: value
    });
  };

  const handleDurationChange = (value: string) => {
    updateFilters({
      ...filters,
      duration: value
    });
  };

  const handleModalityChange = (value: string) => {
    updateFilters({
      ...filters,
      modality: value
    });
  };

  return (
    <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-bold">
          <Compass className="h-5 w-5 mr-2 text-edubridge-purple" />
          Filtros de Estudio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Tipo de programa</h3>
          <Select value={filters.programType} onValueChange={handleProgramTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un tipo de programa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="language">Curso de idiomas</SelectItem>
              <SelectItem value="undergraduate">Pregrado / Grado</SelectItem>
              <SelectItem value="masters">Maestría</SelectItem>
              <SelectItem value="specialization">Especialización</SelectItem>
              <SelectItem value="phd">Doctorado</SelectItem>
              <SelectItem value="sabbatical">Año sabático / Año académico</SelectItem>
              <SelectItem value="shortcourse">Certificados cortos / Bootcamps</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="font-medium mb-3">Duración del programa</h3>
          <RadioGroup value={filters.duration} onValueChange={handleDurationChange} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3months" id="3months" />
              <Label htmlFor="3months">3 meses</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6months" id="6months" />
              <Label htmlFor="6months">6 meses</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1year" id="1year" />
              <Label htmlFor="1year">1 año</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2years" id="2years" />
              <Label htmlFor="2years">2 años</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3plusyears" id="3plusyears" />
              <Label htmlFor="3plusyears">3+ años</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="font-medium mb-3">Modalidad</h3>
          <ToggleGroup 
            type="single" 
            value={filters.modality} 
            onValueChange={handleModalityChange} 
            className="justify-start"
            variant="outline"
          >
            <ToggleGroupItem value="onsite" className="px-4">Presencial</ToggleGroupItem>
            <ToggleGroupItem value="online" className="px-4">Online (completo)</ToggleGroupItem>
            <ToggleGroupItem value="hybrid" className="px-4">Híbrido</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Información de filtros</h3>
          <p className="text-sm text-gray-600">
            {filters.programType === "online" ? 
              "La modalidad online elimina gastos como vivienda, transporte y visa." : 
              "La selección de filtros afecta directamente los costos de matrícula, duración y becas aplicables."}
          </p>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>• El tipo de programa influye en los costos de matrícula y requisitos.</li>
            <li>• La duración afecta la proyección de costos mensuales a anuales.</li>
            <li>• La modalidad determina qué gastos son aplicables (vivienda, transporte, etc).</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyFiltersSection;
