
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Home, Building, ExternalLink } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';

interface ColivingCardProps {
  name: string;
  details: string;
  location: string;
  price: string;
  image: string;
  comingSoon: boolean;
  isCompany?: boolean;
  url?: string;
}

const ColivingCard = ({ name, details, location, price, image, comingSoon, isCompany, url }: ColivingCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white border-0 rounded-xl hover:-translate-y-2">
      {comingSoon ? (
        <div className="bg-gray-100 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-edubridge-purple/10 to-edubridge-blue/10"></div>
          <div className="bg-edubridge-blue/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center">
            <span className="text-lg font-semibold">Coming Soon!</span>
          </div>
        </div>
      ) : isCompany ? (
        <div className="h-48 flex items-center justify-center p-4 bg-white relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="max-h-full max-w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 p-3 w-full">
            <span className="bg-edubridge-blue/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center">
              <Building size={12} className="mr-1" />
              Partner
            </span>
          </div>
        </div>
      ) : (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-3 w-full">
            <span className="bg-edubridge-blue/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center">
              <MapPin size={12} className="mr-1" />
              {location}
            </span>
          </div>
        </div>
      )}
      
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-3 group-hover:text-edubridge-blue transition-colors">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{details}</p>
        
        <div className="flex items-center justify-between mt-2">
          {isCompany ? (
            <div className="w-full">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center text-edubridge-purple hover:text-edubridge-blue"
                onClick={() => url && window.open(url, '_blank')}
              >
                Visit website
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center">
                <Home size={16} className="mr-2 text-edubridge-purple" />
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="text-sm text-edubridge-purple font-medium cursor-help">View details</span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{name}</h4>
                      <p className="text-sm">{details} in {location}</p>
                      <p className="text-sm">Starting from {price}/month</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="text-right">
                <span className="text-xs text-gray-500">from</span>
                <div className="font-bold text-lg">
                  {price}
                  <span className="text-xs font-normal text-gray-500">/month</span>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ColivingCard;
