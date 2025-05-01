
import React from 'react';
import { 
  GraduationCap, 
  Calculator, 
  Bell, 
  House, 
  FileText, 
  Zap, 
  LayoutDashboard,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Define module data with additional properties for the dashboard view
const modules = [
  {
    icon: GraduationCap,
    title: "Recomendador inteligente",
    description: "Encuentra programas académicos que se ajusten a tu perfil, intereses y presupuesto.",
    url: "/recomendador",
    aiPowered: true,
    actionText: "Buscar programas",
    color: "from-edubridge-purple to-edubridge-blue",
    iconColor: "text-edubridge-purple",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(107,92,231,0.15),transparent_70%)]"
  },
  {
    icon: Calculator,
    title: "Simulador de costos",
    description: "Calcula y compara gastos de educación, vivienda, transporte y más en diferentes destinos.",
    url: "#",
    aiPowered: true,
    actionText: "Simular costos",
    color: "from-edubridge-cyan to-edubridge-blue",
    iconColor: "text-edubridge-cyan",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(0,206,206,0.15),transparent_70%)]"
  },
  {
    icon: Bell,
    title: "Alertas de becas",
    description: "Recibe notificaciones sobre oportunidades de financiamiento compatibles con tu perfil.",
    url: "#",
    aiPowered: true,
    actionText: "Configurar alertas",
    color: "from-edubridge-yellow to-edubridge-coral",
    iconColor: "text-edubridge-yellow",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(253,203,90,0.15),transparent_70%)]"
  },
  {
    icon: House,
    title: "Comparador de alojamientos",
    description: "Explora y compara residencias, apartamentos compartidos y opciones de coliving.",
    url: "#",
    aiPowered: false,
    actionText: "Ver alojamientos",
    color: "from-edubridge-coral to-edubridge-purple",
    iconColor: "text-edubridge-coral",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(255,107,107,0.15),transparent_70%)]"
  },
  {
    icon: FileText,
    title: "Proceso de visa",
    description: "Guías paso a paso y recordatorios para completar todos los requisitos de tu visa de estudiante.",
    url: "#",
    aiPowered: false,
    actionText: "Ver mi checklist",
    color: "from-edubridge-mint to-edubridge-cyan",
    iconColor: "text-edubridge-mint",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(0,210,160,0.15),transparent_70%)]"
  }
];

const ModulesSection: React.FC = () => {
  return (
    <section id="modulos" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-purple/10 to-edubridge-blue/10 text-edubridge-purple text-sm font-medium mb-4">
            <LayoutDashboard size={16} className="mr-2" /> Panel personalizado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mi panel de estudio al extranjero</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Personaliza tu experiencia académica global con estas herramientas interactivas
          </p>
        </div>

        {/* Dashboard Panel */}
        <div className="relative mb-20 mx-auto">
          {/* Dashboard background */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-4xl mx-auto transform perspective-1000">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-edubridge-blue/10 p-3 rounded-lg">
                  <LayoutDashboard size={24} className="text-edubridge-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Dashboard de herramientas</h3>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings size={18} />
                <span>Personalizar</span>
              </Button>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-edubridge-blue data-[state=active]:text-white">Todas</TabsTrigger>
                <TabsTrigger value="ai" className="data-[state=active]:bg-edubridge-purple data-[state=active]:text-white">Con IA</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-edubridge-cyan data-[state=active]:text-white">Herramientas</TabsTrigger>
              </TabsList>
              
              <div className="hidden md:flex gap-2">
                <div className="w-3 h-3 rounded-full bg-edubridge-coral"></div>
                <div className="w-3 h-3 rounded-full bg-edubridge-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-edubridge-mint"></div>
              </div>
            </div>
            
            {/* Dashboard content - placeholder grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 opacity-15">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 rounded-lg bg-gray-100 animate-pulse"></div>
              ))}
            </div>
          </div>
          
          {/* Widget Cards positioned outside the dashboard */}
          <div className="absolute inset-x-0 -bottom-96 md:-bottom-64 pointer-events-none">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="all" className="w-full">
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {modules.map((module, index) => (
                      <Card 
                        key={index} 
                        className={`border-0 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl pointer-events-auto transform translate-y-0 hover:-translate-y-2 ${module.bgPattern} opacity-0 animate-slide-up`}
                        style={{ 
                          animationDelay: `${index * 150}ms`, 
                          animationFillMode: 'forwards' 
                        }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-14 h-14 rounded-xl ${module.iconColor} bg-gray-50 flex items-center justify-center shadow-md`}>
                              <module.icon size={28} className="animate-float" />
                            </div>
                            {module.aiPowered && (
                              <span className="flex items-center text-sm font-medium text-edubridge-purple bg-edubridge-purple/10 px-3 py-1 rounded-full">
                                <Zap size={14} className="mr-1 animate-pulse-glow" />
                                Con IA
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{module.title}</h3>
                          <p className="text-gray-600 mb-6 text-sm">{module.description}</p>
                          
                          <Link to={module.url} className="block">
                            <Button 
                              className={`w-full bg-gradient-to-r ${module.color} text-white hover:opacity-90 shadow-md transition-all duration-300 hover:shadow-lg group`}
                            >
                              {module.actionText}
                              <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="ai" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {modules
                      .filter(module => module.aiPowered)
                      .map((module, index) => (
                        <Card 
                          key={index} 
                          className={`border-0 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl pointer-events-auto transform translate-y-0 hover:-translate-y-2 ${module.bgPattern} opacity-0 animate-slide-up`}
                          style={{ 
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: 'forwards' 
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-14 h-14 rounded-xl ${module.iconColor} bg-gray-50 flex items-center justify-center shadow-md`}>
                                <module.icon size={28} className="animate-float" />
                              </div>
                              <span className="flex items-center text-sm font-medium text-edubridge-purple bg-edubridge-purple/10 px-3 py-1 rounded-full">
                                <Zap size={14} className="mr-1 animate-pulse-glow" />
                                Con IA
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{module.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm">{module.description}</p>
                            
                            <Link to={module.url} className="block">
                              <Button 
                                className={`w-full bg-gradient-to-r ${module.color} text-white hover:opacity-90 shadow-md transition-all duration-300 hover:shadow-lg group`}
                              >
                                {module.actionText}
                                <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="tools" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {modules
                      .filter(module => !module.aiPowered)
                      .map((module, index) => (
                        <Card 
                          key={index} 
                          className={`border-0 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl pointer-events-auto transform translate-y-0 hover:-translate-y-2 ${module.bgPattern} opacity-0 animate-slide-up`}
                          style={{ 
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: 'forwards' 
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-14 h-14 rounded-xl ${module.iconColor} bg-gray-50 flex items-center justify-center shadow-md`}>
                                <module.icon size={28} className="animate-float" />
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{module.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm">{module.description}</p>
                            
                            <Link to={module.url} className="block">
                              <Button 
                                className={`w-full bg-gradient-to-r ${module.color} text-white hover:opacity-90 shadow-md transition-all duration-300 hover:shadow-lg group`}
                              >
                                {module.actionText}
                                <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Spacer to account for the absolute positioned cards */}
        <div className="h-[500px] md:h-[400px] lg:h-[350px]"></div>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
          transform: rotateX(2deg) rotateY(0deg);
          transition: transform 0.3s ease;
        }
        
        .perspective-1000:hover {
          transform: rotateX(0deg) rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default ModulesSection;
