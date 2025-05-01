
import React from 'react';
import ColivingCard from '@/components/ColivingCard';
import { Button } from '@/components/ui/button';

const colivingData = [
  {
    id: 1,
    name: 'Bonnevoie 111',
    details: '14 bedrooms',
    location: 'Bonnevoie',
    price: '€1520',
    image: '/lovable-uploads/0f4495aa-6013-4b1d-a5ad-222fabf31cb3.png',
    comingSoon: false
  },
  {
    id: 2,
    name: 'Dargent 11',
    details: '3 units',
    location: 'Eich',
    price: '€1550',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    comingSoon: false
  },
  {
    id: 3,
    name: 'Bonnevoie 116',
    details: '13 bedrooms',
    location: 'Bonnevoie',
    price: '€1525',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    comingSoon: false
  },
  {
    id: 4,
    name: 'Bonnevoie 112',
    details: '21 bedrooms (coming soon!)',
    location: 'Bonnevoie',
    price: '€1550',
    image: '',
    comingSoon: true
  }
];

const ColivingSection = () => {
  return (
    <section className="py-16 bg-white" id="coliving">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            A house with the right people becomes a home
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are looking for warm and open people to live with us in our beautiful Cohabs homes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colivingData.map((item) => (
            <ColivingCard key={item.id} {...item} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-edubridge-yellow hover:bg-edubridge-yellow/90 text-black px-8 py-6 rounded-full text-lg font-semibold">
            Apply today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ColivingSection;
