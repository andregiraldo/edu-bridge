
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { universidades } from '@/data/universitiesData';

interface UniversitySectionProps {
  selectedUniversity: any;
  setSelectedUniversity: (university: any) => void;
  fullWidth?: boolean;
}

const UniversitySection: React.FC<UniversitySectionProps> = ({
  selectedUniversity,
  setSelectedUniversity,
  fullWidth = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Todos');

  const filteredUniversities = universidades.filter(uni => {
    const matchesSearch = uni.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       uni.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       uni.pais.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = selectedCountry === 'Todos' || uni.pais === selectedCountry;
    
    return matchesSearch && matchesCountry;
  });

  const countries = ['Todos', ...new Set(universidades.map(uni => uni.pais))];

  return (
    <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <CardTitle className="flex items-center text-xl font-bold">
            <GraduationCap className="h-5 w-5 mr-2 text-edubridge-blue" />
            Universidades
          </CardTitle>
          {fullWidth && (
            <div className="flex mt-2 md:mt-0 space-x-2">
              {countries.map(country => (
                <Badge 
                  key={country}
                  variant={selectedCountry === country ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer",
                    selectedCountry === country ? "bg-edubridge-blue hover:bg-edubridge-blue/80" : ""
                  )}
                  onClick={() => setSelectedCountry(country)}
                >
                  {country}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar por universidad, ciudad o país..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto py-2">
            {filteredUniversities.map((university) => (
              <div
                key={university.id}
                className={cn(
                  "border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md",
                  selectedUniversity?.id === university.id ? "ring-2 ring-edubridge-blue" : ""
                )}
                onClick={() => setSelectedUniversity(university)}
              >
                <div className="h-24 bg-gray-200 relative">
                  <img
                    src={university.imagen}
                    alt={university.nombre}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <div className="flex items-center text-white">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-xs">{university.ciudad}, {university.pais}</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-1">{university.nombre}</h3>
                  <div className="flex items-center mt-1">
                    <GraduationCap className="h-3 w-3 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-500">
                      {university.programas} programas disponibles
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedUniversity && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-start">
                <div className="h-12 w-12 bg-gray-200 rounded overflow-hidden mr-3">
                  <img
                    src={selectedUniversity.imagen}
                    alt={selectedUniversity.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{selectedUniversity.nombre}</h3>
                  <p className="text-sm text-gray-500">
                    {selectedUniversity.ciudad}, {selectedUniversity.pais}
                  </p>
                  <div className="flex items-center mt-1">
                    <GraduationCap className="h-3 w-3 text-edubridge-blue mr-1" />
                    <span className="text-xs">
                      {selectedUniversity.programas} programas académicos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversitySection;
