
import React from "react";
import { CardProps } from "./types";

const StackCard: React.FC<CardProps> = ({
  isVisible,
  zIndex,
  scaleValue,
  translateY,
  title,
  description,
  gradientClass,
  chipText,
  chipColorClass,
  buttonText,
}) => {
  // Card style from original component
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity',
    zIndex,
    transform: `translateY(${translateY}) scale(${scaleValue})`,
    opacity: isVisible ? (zIndex === 10 ? 0.9 : 1) : 0,
    pointerEvents: isVisible ? 'auto' : 'none'
  };

  return (
    <div 
      className={`absolute inset-0 overflow-hidden shadow-xl rounded-2xl border border-white/20 ${isVisible ? 'animate-card-enter' : ''}`} 
      style={cardStyle}
    >
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-br ${gradientClass} opacity-10`}
      ></div>
      
      <div className="absolute top-4 right-4 z-20">
        <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full ${chipColorClass} backdrop-blur-sm`}>
          <span className="text-sm font-medium">{chipText}</span>
        </div>
      </div>
      
      <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
        <div className="max-w-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            {description}
          </p>
          <button className="btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
