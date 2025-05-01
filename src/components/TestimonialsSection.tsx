
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
          <div className="bg-edubridge-bg rounded-2xl p-8 md:p-12 shadow-lg relative">
            <Quote className="absolute top-8 left-8 text-edubridge-blue/20" size={48} />
            
            <div className="text-center">
              <p className="text-xl md:text-2xl italic mb-8 pt-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight />
            </Button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-edubridge-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
