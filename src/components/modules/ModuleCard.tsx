
import React from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  url: string;
  aiPowered: boolean;
  iconColor: string;
  bgPattern: string;
  index: number;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  icon: Icon,
  title,
  description,
  url,
  aiPowered,
  iconColor,
  bgPattern,
  index
}) => {
  return (
    <Link 
      to={url}
      className="pointer-events-auto"
    >
      <Card 
        className={`
          border-0 shadow-xl overflow-hidden transition-all duration-500 
          hover:shadow-2xl transform translate-y-0 hover:-translate-y-6 
          cursor-pointer ${bgPattern} opacity-0 animate-slide-up
        `}
        style={{ 
          animationDelay: `${index * 150}ms`, 
          animationFillMode: 'forwards' 
        }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl ${iconColor} bg-gray-50 flex items-center justify-center shadow-md`}>
              <Icon size={28} className="animate-float" />
            </div>
            {aiPowered && (
              <span className="flex items-center text-sm font-medium text-edubridge-purple bg-edubridge-purple/10 px-3 py-1 rounded-full">
                <Zap size={14} className="mr-1 animate-pulse-glow" />
                Con IA
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-2 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ModuleCard;
