
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Gracias a EduBridge encontré mi beca para Alemania y ya tengo dónde vivir. Todo en un solo lugar.",
    name: "Camila",
    location: "Colombia → Berlín",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg"
  },
  {
    quote: "La IA de EduBridge me recomendó programas que ni sabía que existían y que se ajustaban perfectamente a mis intereses.",
    name: "Miguel",
    location: "México → Barcelona",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "El comparador de alojamiento me ahorró semanas de búsqueda. Encontré un coliving increíble con otros estudiantes internacionales.",
    name: "Valentina",
    location: "Argentina → Toronto",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Testimonios de estudiantes</h2>
        <p className="section-subtitle text-center">
          Historias reales de estudiantes que están cumpliendo su sueño académico internacional
        </p>

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative border border-gray-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-edubridge-purple/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-edubridge-cyan/5 rounded-full -ml-20 -mb-20"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative z-10">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4 -z-10 w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-edubridge-yellow/20"></div>
                  
                  <div className="mt-4 md:mt-6">
                    <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin size={14} className="mr-1 text-edubridge-purple" /> 
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative">
                  <MessageSquare className="absolute -top-4 -left-4 text-edubridge-blue/10" size={40} />
                  <p className="text-xl italic mb-6 relative z-10">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial} 
              aria-label="Previous testimonial"
              className="rounded-full border-2 border-gray-200 hover:border-edubridge-blue hover:text-edubridge-blue"
            >
              <ChevronLeft />
            </Button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-edubridge-blue scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial} 
              aria-label="Next testimonial"
              className="rounded-full border-2 border-gray-200 hover:border-edubridge-blue hover:text-edubridge-blue"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
