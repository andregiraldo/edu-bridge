
import React from 'react';
import { Compass, MapPin, ExternalLink, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const UniversityMarketplaceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Explora universidades de todo el mundo</h2>
          <p className="section-subtitle">
            Descubre miles de programas académicos en las mejores instituciones a nivel global
          </p>
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
              {universidades.map((uni) => (
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
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {universidades.map((uni) => (
            <UniversityCard key={uni.id} universidad={uni} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button size="lg" className="bg-edubridge-blue hover:bg-edubridge-blue/90 group transition-all duration-300">
            <Compass className="mr-2 h-5 w-5 group-hover:animate-pulse" />
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
    <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={universidad.imagen}
          alt={universidad.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-edubridge-blue transition-colors">
          {universidad.nombre}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>{universidad.ciudad}, {universidad.pais}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium bg-gray-100 rounded-full px-3 py-1">
            {universidad.programas} programas
          </span>
          
          <Button variant="outline" size="sm" className="text-edubridge-blue border-edubridge-blue hover:bg-edubridge-blue hover:text-white group">
            <Search size={16} className="mr-1 group-hover:animate-pulse" />
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UniversityMarketplaceSection;
