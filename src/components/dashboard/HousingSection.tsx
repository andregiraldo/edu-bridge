
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { House, Search, MapPin, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HousingSectionProps {
  selectedUniversity: any;
  selectedHousing: any;
  setSelectedHousing: (housing: any) => void;
  fullWidth?: boolean;
}

// Mock housing data
const housingOptions = [
  {
    id: 1,
    name: 'Residencia Estudiantil Central',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    city: 'Barcelona',
    country: 'España',
    price: 450,
    type: 'Residencia',
    amenities: ['WiFi', 'Cocina compartida', 'Lavandería']
  },
  {
    id: 2,
    name: 'Apartamento Compartido Gracia',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    city: 'Barcelona',
    country: 'España',
    price: 380,
    type: 'Compartido',
    amenities: ['WiFi', 'Cocina equipada', 'Balcón']
  },
  {
    id: 3,
    name: 'Estudio Privado Campus Norte',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    city: 'Barcelona',
    country: 'España',
    price: 650,
    type: 'Estudio',
    amenities: ['WiFi', 'Cocina privada', 'Baño privado']
  },
  {
    id: 4,
    name: 'Habitación en Casa Familiar',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858',
    city: 'Barcelona',
    country: 'España',
    price: 320,
    type: 'Familia',
    amenities: ['WiFi', 'Desayuno incluido', 'Limpieza semanal']
  },
];

const HousingSection: React.FC<HousingSectionProps> = ({
  selectedUniversity,
  selectedHousing,
  setSelectedHousing,
  fullWidth = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHousing, setFilteredHousing] = useState(housingOptions);
  const [housingType, setHousingType] = useState('Todos');

  useEffect(() => {
    if (!selectedUniversity) {
      setFilteredHousing([]);
      return;
    }

    // Filter housing based on selected university location and search term
    const filtered = housingOptions.filter(house => {
      const matchesLocation = house.city === selectedUniversity.ciudad && 
                             house.country === selectedUniversity.pais;
      
      const matchesSearch = house.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          house.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = housingType === 'Todos' || house.type === housingType;
      
      return matchesLocation && matchesSearch && matchesType;
    });
    
    setFilteredHousing(filtered);
  }, [selectedUniversity, searchTerm, housingType]);

  const housingTypes = ['Todos', 'Residencia', 'Compartido', 'Estudio', 'Familia'];

  if (!selectedUniversity) {
    return (
      <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <House className="h-5 w-5 mr-2 text-edubridge-blue" />
            Vivienda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-center">
            <p className="text-gray-500">
              Selecciona primero una universidad para ver opciones de vivienda cercanas
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <CardTitle className="flex items-center text-xl font-bold">
            <House className="h-5 w-5 mr-2 text-edubridge-blue" />
            Vivienda en {selectedUniversity.ciudad}
          </CardTitle>
          {fullWidth && (
            <div className="flex flex-wrap mt-2 md:mt-0 gap-2">
              {housingTypes.map(type => (
                <Badge 
                  key={type}
                  variant={housingType === type ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer",
                    housingType === type ? "bg-edubridge-purple hover:bg-edubridge-purple/80" : ""
                  )}
                  onClick={() => setHousingType(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Buscar por nombre o tipo..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredHousing.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto py-2">
              {filteredHousing.map((housing) => (
                <div
                  key={housing.id}
                  className={cn(
                    "border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md",
                    selectedHousing?.id === housing.id ? "ring-2 ring-edubridge-purple" : ""
                  )}
                  onClick={() => setSelectedHousing(housing)}
                >
                  <div className="h-24 bg-gray-200 relative">
                    <img
                      src={housing.image}
                      alt={housing.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <div className="flex items-center text-white">
                        <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                          {housing.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm line-clamp-1">{housing.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 text-gray-500 mr-1" />
                        <span className="text-xs text-gray-500">{housing.city}</span>
                      </div>
                      <div className="flex items-center font-medium text-edubridge-purple">
                        <DollarSign className="h-3 w-3 mr-1" />
                        <span>{housing.price}€/mes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-40 text-center">
              <p className="text-gray-500">
                No se encontraron opciones de vivienda para los filtros seleccionados
              </p>
            </div>
          )}
          
          {selectedHousing && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-start">
                <div className="h-12 w-12 bg-gray-200 rounded overflow-hidden mr-3">
                  <img
                    src={selectedHousing.image}
                    alt={selectedHousing.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{selectedHousing.name}</h3>
                    <Badge variant="outline">{selectedHousing.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {selectedHousing.city}, {selectedHousing.country}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex flex-wrap gap-1">
                      {selectedHousing.amenities.map((amenity, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-edubridge-purple">
                      {selectedHousing.price}€/mes
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

export default HousingSection;
