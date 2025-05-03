import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, GraduationCap, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { universidades } from '@/data/universitiesData';
import { toast } from "@/components/ui/use-toast";

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
  const [universitiesList, setUniversitiesList] = useState(universidades);
  const [isLoading, setIsLoading] = useState(false);

  // URL del webhook de n8n
  const webhookUrl = "https://n8n-nuevo-n8n.j3gxaw.easypanel.host/webhook-test/buscar-universidades";

  useEffect(() => {
    // Si el país seleccionado es "Todos", o si hay un término de búsqueda,
    // filtramos las universidades locales
    if (selectedCountry === 'Todos' || searchTerm) {
      const filteredUniversities = universidades.filter(uni => {
        const matchesSearch = uni.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           uni.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           uni.pais.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCountry = selectedCountry === 'Todos' || uni.pais === selectedCountry;
        
        return matchesSearch && matchesCountry;
      });
      
      setUniversitiesList(filteredUniversities);
      return;
    }

    // Si seleccionamos un país específico y no hay término de búsqueda,
    // consultar a n8n
    const fetchUniversitiesByCountry = async () => {
      setIsLoading(true);
      try {
        // Construir URL con parámetro de país
        const url = `${webhookUrl}?pais=${encodeURIComponent(selectedCountry)}`;
        
        console.log("Llamando al webhook desde dashboard:", url);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Error al obtener universidades');
        }
        
        const data = await response.json();
        console.log("Respuesta del webhook dashboard:", data);
        
        // Verifica si la respuesta es el mensaje "Workflow was started"
        if (data && data.message === "Workflow was started") {
          // Usar datos locales filtrados como fallback
          const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
          setUniversitiesList(filteredLocal);
          toast({
            title: "Proceso iniciado",
            description: "El workflow se ha iniciado. Mostrando resultados locales mientras se procesa.",
          });
          return;
        }
        
        // Si recibimos una respuesta en formato array, usarla
        if (Array.isArray(data)) {
          // Transformar la respuesta para que coincida con nuestro formato de datos
          const formattedData = data.map((uni: any, index: number) => ({
            id: universidades.length + index + 1,
            nombre: uni.nombre || 'Universidad sin nombre',
            imagen: `https://images.unsplash.com/photo-${1490000000000 + index}`,
            pais: uni.pais || selectedCountry,
            ciudad: uni.ciudad || 'Ciudad no especificada',
            programas: Math.floor(Math.random() * 50) + 10, // Número aleatorio de programas
          }));
          
          if (formattedData.length > 0) {
            setUniversitiesList(formattedData);
            toast({
              title: `Universidades de ${selectedCountry}`,
              description: `Se encontraron ${formattedData.length} universidades`,
            });
          } else {
            // Si no hay resultados, usar datos locales filtrados
            const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
            setUniversitiesList(filteredLocal);
            toast({
              description: "No se encontraron universidades externas. Mostrando resultados locales.",
            });
          }
        } else {
          // Si la respuesta no es un array, usar datos locales
          const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
          setUniversitiesList(filteredLocal);
          toast({
            title: "Formato de respuesta inesperado",
            description: "Mostrando universidades de nuestro directorio local",
          });
        }
      } catch (error) {
        console.error('Error:', error);
        // En caso de error, usar los datos locales filtrados
        const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
        setUniversitiesList(filteredLocal);
        toast({
          title: "Error de conexión",
          description: "No se pudo conectar con el servicio. Mostrando resultados locales.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUniversitiesByCountry();
  }, [selectedCountry, searchTerm]);

  // Filtrar universidades por término de búsqueda
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
                onChange={handleSearch}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-edubridge-blue" />
              <span className="ml-2">Cargando universidades...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto py-2">
              {universitiesList.map((university) => (
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
                        <span className="text-xs">{university.ciudad || 'Ciudad'}, {university.pais}</span>
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
          )}
          
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
                    {selectedUniversity.ciudad || 'Ciudad'}, {selectedUniversity.pais}
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
