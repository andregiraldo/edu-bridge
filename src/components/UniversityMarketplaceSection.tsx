
import React, { useState, useEffect } from 'react';
import { ExternalLink, GraduationCap, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import UniversityCarousel from './university/UniversityCarousel';
import { universidades, uniqueCountries } from '@/data/universitiesData';
import { toast } from "@/components/ui/use-toast";

const UniversityMarketplaceSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Todos');
  const [universities, setUniversities] = useState(universidades);
  const [isLoading, setIsLoading] = useState(false);

  // URL del webhook de n8n
  const webhookUrl = "https://n8n-nuevo-n8n.j3gxaw.easypanel.host/webhook-test/buscar-universidades";

  useEffect(() => {
    // Si seleccionamos "Todos", mostrar todas las universidades locales
    if (selectedCountry === 'Todos') {
      setUniversities(universidades);
      return;
    }

    // Si seleccionamos un país específico, consultar a n8n
    const fetchUniversitiesByCountry = async () => {
      setIsLoading(true);
      try {
        // Construir URL con parámetro de país
        const url = `${webhookUrl}?pais=${encodeURIComponent(selectedCountry)}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Error al obtener universidades');
        }
        
        const data = await response.json();
        
        // Transformar la respuesta para que coincida con nuestro formato de datos
        const formattedData = data.map((uni: any, index: number) => ({
          id: index + 1,
          nombre: uni.nombre || 'Universidad sin nombre',
          imagen: `https://images.unsplash.com/photo-${1490000000000 + index}`,
          pais: uni.pais || selectedCountry,
          ciudad: uni.ciudad || 'Ciudad no especificada',
          programas: Math.floor(Math.random() * 50) + 10, // Número aleatorio de programas
        }));
        
        if (formattedData.length > 0) {
          setUniversities(formattedData);
          toast({
            title: `Universidades de ${selectedCountry}`,
            description: `Se encontraron ${formattedData.length} universidades`,
          });
        } else {
          // Si no hay resultados, usar datos locales filtrados
          const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
          setUniversities(filteredLocal);
          toast({
            title: "Sin resultados de la API",
            description: "Mostrando universidades de nuestro directorio local",
          });
        }
      } catch (error) {
        console.error('Error:', error);
        // En caso de error, usar los datos locales filtrados
        const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
        setUniversities(filteredLocal);
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
  }, [selectedCountry]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-blue/10 to-edubridge-purple/10 text-edubridge-blue text-sm font-medium mb-4">
            <GraduationCap size={16} className="mr-2" /> Instituciones globales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Explora universidades de todo el mundo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre miles de programas académicos en las mejores instituciones a nivel global
          </p>
        </div>

        {/* Country Filters */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-2 rounded-xl shadow-md">
            <ToggleGroup type="single" value={selectedCountry} onValueChange={(value) => value && setSelectedCountry(value)}>
              {uniqueCountries.map(country => (
                <ToggleGroupItem 
                  key={country} 
                  value={country} 
                  variant="outline" 
                  disabled={isLoading}
                  className="px-4 py-2 data-[state=on]:bg-edubridge-blue data-[state=on]:text-white"
                >
                  {country}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-edubridge-blue"></div>
          </div>
        )}

        {/* University Carousel */}
        <UniversityCarousel universities={universities} />

        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-edubridge-blue hover:bg-edubridge-blue/90 text-white px-8 py-6 rounded-full text-lg font-semibold">
            <Globe className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Explorar todas las universidades
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UniversityMarketplaceSection;
