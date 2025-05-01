
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Home } from 'lucide-react';

interface ColivingCardProps {
  name: string;
  details: string;
  location: string;
  price: string;
  image: string;
  comingSoon: boolean;
}

const ColivingCard = ({ name, details, location, price, image, comingSoon }: ColivingCardProps) => {
  return (
    <Card className="overflow-hidden h-full border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {comingSoon ? (
        <div className="bg-gray-100 h-48 flex items-center justify-center">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center">
            <span className="text-lg font-semibold">Coming Soon!</span>
          </div>
        </div>
      ) : (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <CardContent className="p-4">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 border-b border-gray-200 pb-4">{details}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="text-right">
            <span className="text-xs text-gray-500">from</span>
            <div className="font-bold text-lg">
              {price}
              <span className="text-xs font-normal text-gray-500">/month</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColivingCard;
