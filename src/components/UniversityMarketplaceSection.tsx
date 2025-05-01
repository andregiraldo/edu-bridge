
import React, { useState } from 'react';
import { ExternalLink, GraduationCap, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import UniversityCarousel from './university/UniversityCarousel';
import { universidades, uniqueCountries } from '@/data/universitiesData';

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

        {/* University Carousel */}
        <UniversityCarousel universities={filteredUniversities} />

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
