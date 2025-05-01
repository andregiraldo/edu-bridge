
import React, { useRef } from "react";
import StackCard from "./card-stack/StackCard";
import { useCardStack } from "./card-stack/useCardStack";
import { cards } from "./card-stack/cardData";

const CardStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { 
    activeCardIndex
  } = useCardStack(sectionRef);

  // Card position and scaling configurations
  const cardConfigs = [
    {
      isVisible: activeCardIndex === 0,
      isActive: activeCardIndex === 0,
      zIndex: 10,
      scaleValue: 1,
      translateY: '0px',
    },
    {
      isVisible: activeCardIndex === 1,
      isActive: activeCardIndex === 1,
      zIndex: 20,
      scaleValue: 1,
      translateY: '0px',
    },
    {
      isVisible: activeCardIndex === 2,
      isActive: activeCardIndex === 2,
      zIndex: 30,
      scaleValue: 1,
      translateY: '0px',
    }
  ];

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="card-stack">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="opacity-0 animate-fade-in flex items-center" style={{
                animationDelay: "0.1s"
              }}>
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-edubridge-blue text-white mr-2 text-xs">01</div>
                <span className="text-gray-600 font-medium">Experiencia</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              Tarjetas Interactivas
            </h2>
            <p className="section-subtitle text-base sm:text-lg text-gray-600 max-w-2xl">
              Descubre cómo EduBridge te ayuda a conseguir tus objetivos académicos con estas soluciones interactivas
            </p>
          </div>
          
          <div className="relative flex-1 perspective-1000">
            {cards.map((card, index) => (
              <StackCard
                key={index}
                isVisible={cardConfigs[index].isVisible}
                isActive={cardConfigs[index].isActive}
                zIndex={cardConfigs[index].zIndex}
                scaleValue={cardConfigs[index].scaleValue}
                translateY={cardConfigs[index].translateY}
                title={card.title}
                description={card.description}
                gradientClass={card.gradient}
                chipText={card.chipText}
                chipColorClass={card.chipColorClass}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardStackSection;
