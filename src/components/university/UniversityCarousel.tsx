
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UniversityCard from './UniversityCard';

interface UniversityCarouselProps {
  universities: Array<{
    id: number;
    nombre: string;
    imagen: string;
    pais: string;
    ciudad: string;
    programas: number;
  }>;
}

const UniversityCarousel: React.FC<UniversityCarouselProps> = ({ universities }) => {
  return (
    <div className="relative px-4 md:px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {universities.map((uni) => (
            <CarouselItem key={uni.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4 md:pl-6">
              <div className="h-full">
                <UniversityCard universidad={uni} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default UniversityCarousel;
