
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
        
        console.log("Llamando al webhook:", url);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Error al obtener universidades');
        }
        
        // Primero intentamos parsear la respuesta como texto para inspeccionar su contenido
        const responseText = await response.text();
        let data;
        
        try {
          // Intentamos convertir el texto a un objeto JSON
          data = responseText ? JSON.parse(responseText) : null;
          console.log("Respuesta del webhook:", data);
        } catch (error) {
          console.error("Error al parsear JSON:", error);
          throw new Error('Formato de respuesta inválido');
        }
        
        // Verificar si la respuesta está vacía
        if (!data) {
          const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
          setUniversities(filteredLocal);
          toast({
            title: "Respuesta vacía",
            description: "El servicio no devolvió datos. Mostrando resultados locales.",
          });
          return;
        }
        
        // Verifica si la respuesta es el mensaje "Workflow was started"
        if (data && data.message === "Workflow was started") {
          // Usar datos locales filtrados como fallback
          const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
          setUniversities(filteredLocal);
          toast({
            title: "Proceso iniciado",
            description: "El workflow se ha iniciado. Mostrando resultados locales mientras se procesa.",
          });
          return;
        }
        
        // Manejar diferentes formatos de respuesta
        let universityData = [];
        
        // Si es un array, usarlo directamente
        if (Array.isArray(data)) {
          universityData = data;
        }
        // Si es un objeto único (no un array), convertirlo en array
        else if (data && typeof data === 'object' && data.nombre) {
          universityData = [data];
        }
        // Si tiene algún formato diferente pero con datos que podríamos intentar usar
        else if (data && typeof data === 'object') {
          // Intentar extraer información útil del objeto
          toast({
            title: "Formato de respuesta inesperado",
            description: "La estructura de datos no coincide con lo esperado. Mostrando resultados locales.",
          });
          const filteredLocal = universidades.filter(uni => uni.pais === selectedCountry);
          setUniversities(filteredLocal);
          return;
        }
        
        if (universityData.length > 0) {
          // Asegurarse de que todos los objetos tienen la estructura correcta
          const formattedData = universityData.map((uni: any, index: number) => ({
            id: uni.id || index + 1,
            nombre: uni.nombre || 'Universidad sin nombre',
            imagen: uni.imagen || `https://images.unsplash.com/photo-${1490000000000 + index}`,
            pais: uni.pais || selectedCountry,
            ciudad: uni.ciudad || 'Ciudad no especificada',
            programas: uni.programas || Math.floor(Math.random() * 50) + 10, // Número aleatorio de programas
          }));
          
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
            title: "Sin resultados",
            description: "No se encontraron universidades. Mostrando resultados locales.",
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
