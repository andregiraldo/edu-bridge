
import React, { useState } from 'react';
import { Compass, MapPin, ExternalLink, Search, GraduationCap, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Datos de ejemplo para las universidades
const universidades = [
  {
    id: 1,
    nombre: "Universidad de Barcelona",
    imagen: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    pais: "España",
    ciudad: "Barcelona",
    programas: 45
  },
  {
    id: 2,
    nombre: "University of Toronto",
    imagen: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    pais: "Canadá",
    ciudad: "Toronto",
    programas: 78
  },
  {
    id: 3,
    nombre: "Technische Universität Berlin",
    imagen: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    pais: "Alemania",
    ciudad: "Berlín",
    programas: 52
  },
  {
    id: 4,
    nombre: "Universidad Nacional Autónoma de México",
    imagen: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    pais: "México",
    ciudad: "Ciudad de México",
    programas: 63
  },
  {
    id: 5,
    nombre: "University of Sydney",
    imagen: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    pais: "Australia",
    ciudad: "Sydney",
    programas: 41
  },
  {
    id: 6,
    nombre: "Sorbonne Université",
    imagen: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    pais: "Francia",
    ciudad: "París",
    programas: 37
  }
];

// Extracting unique countries for filter
const uniqueCountries = ['Todos', ...new Set(universidades.map(uni => uni.pais))];

const UniversityMarketplaceSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Todos');

  const filteredUniversities = selectedCountry === 'Todos' 
    ? universidades 
    : universidades.filter(uni => uni.pais === selectedCountry);

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
                <ToggleGroupItem key={country} value={country} variant="outline" 
                  className="px-4 py-2 data-[state=on]:bg-edubridge-blue data-[state=on]:text-white">
                  {country}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        {/* Vista móvil: Carrusel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredUniversities.map((uni) => (
                <CarouselItem key={uni.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <UniversityCard universidad={uni} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>

        {/* Vista desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {filteredUniversities.map((uni) => (
            <UniversityCard key={uni.id} universidad={uni} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button size="lg" className="bg-edubridge-blue hover:bg-edubridge-blue/90 group transition-all duration-300">
            <Globe className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Explorar todas las universidades
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

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
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={universidad.imagen}
          alt={universidad.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <span className="bg-edubridge-blue/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center">
            <MapPin size={12} className="mr-1" />
            {universidad.ciudad}, {universidad.pais}
          </span>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-3 group-hover:text-edubridge-blue transition-colors line-clamp-2">
          {universidad.nombre}
        </h3>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium bg-gray-100 rounded-full px-3 py-1.5 text-edubridge-purple">
            {universidad.programas} programas
          </span>
          
          <Button variant="ghost" size="sm" className="text-edubridge-blue hover:bg-edubridge-blue/10 group">
            <Search size={16} className="mr-1 group-hover:animate-pulse" />
            Ver detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversityMarketplaceSection;
