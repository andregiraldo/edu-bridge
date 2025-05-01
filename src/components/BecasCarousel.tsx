
import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BecaPromo {
  id: number;
  titulo: string;
  organizacion: string;
  descripcion: string;
  fechaLimite: string;
  financiamiento: string;
  logoUrl: string;
  url: string;
  destacada: boolean;
  bgColor: string;
}

const becasPromo: BecaPromo[] = [
  {
    id: 1,
    titulo: "Beca Erasmus+ 2025",
    organizacion: "Unión Europea",
    descripcion: "Programa de movilidad para estudiantes y personal académico en Europa",
    fechaLimite: "15 de enero, 2026",
    financiamiento: "850€/mes",
    logoUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    url: "#",
    destacada: true,
    bgColor: "bg-edubridge-blue/10"
  },
  {
    id: 2,
    titulo: "DAAD Research Grants",
    organizacion: "Gobierno Alemán",
    descripcion: "Becas de investigación para estudiantes de doctorado",
    fechaLimite: "15 de noviembre, 2025",
    financiamiento: "1.200€/mes + gastos",
    logoUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    url: "#",
    destacada: false,
    bgColor: "bg-edubridge-purple/10"
  },
  {
    id: 3,
    titulo: "Santander Universities",
    organizacion: "Banco Santander",
    descripcion: "Becas para estudiar en universidades de España y Portugal",
    fechaLimite: "30 de abril, 2026",
    financiamiento: "5.000€ (pago único)",
    logoUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    url: "#",
    destacada: true,
    bgColor: "bg-edubridge-cyan/10"
  },
  {
    id: 4,
    titulo: "Fulbright Program",
    organizacion: "US Department of State",
    descripcion: "Becas para estudiar e investigar en Estados Unidos",
    fechaLimite: "18 de febrero, 2026",
    financiamiento: "Completa + manutención",
    logoUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    url: "#",
    destacada: false,
    bgColor: "bg-edubridge-yellow/10"
  },
  {
    id: 5,
    titulo: "Beca Campus France",
    organizacion: "Gobierno Francés",
    descripcion: "Programa Eiffel de excelencia para maestría y doctorado",
    fechaLimite: "10 de enero, 2026",
    financiamiento: "1.181€/mes + beneficios",
    logoUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    url: "#",
    destacada: true,
    bgColor: "bg-edubridge-coral/10"
  },
];

const BecasCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Becas destacadas</h2>
            <p className="text-gray-600 mt-1">Oportunidades de financiación para estudiantes internacionales</p>
          </div>
          <Link to="/alerta-becas">
            <Button variant="ghost" className="text-edubridge-blue hover:bg-transparent hover:text-edubridge-blue/80 p-0">
              Ver todas <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>

        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent>
              {becasPromo.map(beca => (
                <CarouselItem key={beca.id} className="md:basis-1/2 lg:basis-1/3">
                  <BecaPromoCard beca={beca} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static transform-none mr-2 bg-white" />
              <CarouselNext className="static transform-none bg-white" />
            </div>
          </Carousel>
        ) : (
          <ScrollArea className="w-full whitespace-nowrap rounded-lg pb-6">
            <div className="flex w-max space-x-4 p-1">
              {becasPromo.map(beca => (
                <div key={beca.id} className="w-[300px]">
                  <BecaPromoCard beca={beca} />
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </section>
  );
};

const BecaPromoCard = ({ beca }: { beca: BecaPromo }) => {
  return (
    <Card className={`overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 whitespace-normal h-full ${beca.bgColor}`}>
      <CardContent className="p-0">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={beca.logoUrl} 
            alt={beca.titulo} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {beca.destacada && (
            <div className="absolute top-2 right-2 bg-edubridge-yellow/90 text-edubridge-text px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Star className="w-3 h-3 mr-1 fill-edubridge-text" />
              Destacada
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 group-hover:text-edubridge-blue transition-colors">
            {beca.titulo}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{beca.organizacion}</p>
          <p className="text-sm line-clamp-2 mb-3">{beca.descripcion}</p>
          <div className="flex items-center space-x-1 text-xs text-gray-500 mb-3">
            <GraduationCap size={12} />
            <span>Fecha límite: <span className="font-medium">{beca.fechaLimite}</span></span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-edubridge-blue">{beca.financiamiento}</span>
            <Button variant="ghost" size="sm" className="text-edubridge-blue p-0 h-auto flex items-center group/btn">
              Más info
              <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BecasCarousel;
