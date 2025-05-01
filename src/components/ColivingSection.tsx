import React from 'react';
import ColivingCard from '@/components/ColivingCard';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Building } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';

// Original coliving data kept for reference
const colivingData = [{
  id: 1,
  name: 'Bonnevoie 111',
  details: '14 bedrooms',
  location: 'Bonnevoie',
  price: '€1520',
  image: '/lovable-uploads/0f4495aa-6013-4b1d-a5ad-222fabf31cb3.png',
  comingSoon: false
}, {
  id: 2,
  name: 'Dargent 11',
  details: '3 units',
  location: 'Eich',
  price: '€1550',
  image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
  comingSoon: false
}, {
  id: 3,
  name: 'Bonnevoie 116',
  details: '13 bedrooms',
  location: 'Bonnevoie',
  price: '€1525',
  image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  comingSoon: false
}, {
  id: 4,
  name: 'Bonnevoie 112',
  details: '21 bedrooms (coming soon!)',
  location: 'Bonnevoie',
  price: '€1550',
  image: '',
  comingSoon: true
}, {
  id: 5,
  name: 'Limpertsberg 38',
  details: '8 bedrooms',
  location: 'Limpertsberg',
  price: '€1600',
  image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
  comingSoon: false
}, {
  id: 6,
  name: 'Gasperich 27',
  details: '10 bedrooms',
  location: 'Gasperich',
  price: '€1480',
  image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  comingSoon: false
}, {
  id: 7,
  name: 'Clausen 55',
  details: '6 units',
  location: 'Clausen',
  price: '€1575',
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
  comingSoon: false
}];

// New coliving company data
const colivingCompanies = [
  {
    id: 1,
    name: 'Coliving.com',
    details: 'Global coliving platform',
    location: 'International',
    price: 'Variable',
    image: '/lovable-uploads/91068668-c2dd-481c-9664-3e9daee00199.png',
    comingSoon: false,
    isCompany: true,
    url: 'https://coliving.com'
  },
  {
    id: 2,
    name: 'The House of Co',
    details: 'Premium coliving spaces',
    location: 'Multiple locations',
    price: 'Variable',
    image: '/lovable-uploads/a8c9ec06-d22e-456f-930c-52482063c06e.png',
    comingSoon: false,
    isCompany: true,
    url: 'https://thehouseofco.com'
  },
  {
    id: 3,
    name: 'Spotahome',
    details: 'Online rental platform',
    location: 'Global coverage',
    price: 'Variable',
    image: '/lovable-uploads/bf160780-45c9-490f-8963-ff3701b53d34.png',
    comingSoon: false,
    isCompany: true,
    url: 'https://www.spotahome.com'
  }
];

const ColivingSection = () => {
  return <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100" id="coliving">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-blue/10 to-edubridge-purple/10 text-edubridge-blue text-sm font-medium mb-4">
            <Home size={16} className="mr-2" /> Espacios para vivir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Encuentra un Coliving</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are looking for warm and open people to live with us in our beautiful Cohabs homes.
          </p>
        </div>
        
        {/* Company Partners Section - Reorganized as a grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Nuestros socios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {colivingCompanies.map(company => (
              <div key={company.id} className="h-full">
                <ColivingCard {...company} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Original Coliving Options */}
        <div className="relative px-4 md:px-12">
          <h3 className="text-2xl font-bold text-center mb-6">Opciones disponibles</h3>
          <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
            <CarouselContent className="py-4">
              {colivingData.map(item => (
                <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4 md:pl-6">
                  <div className="h-full">
                    <ColivingCard {...item} />
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

        <div className="flex justify-center mt-12">
          <Button className="bg-edubridge-blue hover:bg-edubridge-blue/90 text-white px-8 py-6 rounded-full text-lg font-semibold">
            Apply today
          </Button>
        </div>
      </div>
    </section>;
};

export default ColivingSection;
