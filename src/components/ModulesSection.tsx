import React from 'react';
import { GraduationCap, Calculator, Bell, House, FileText, Zap, LayoutDashboard, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define module data with additional properties for the dashboard view
const modules = [{
  icon: GraduationCap,
  title: "Recomendador inteligente",
  description: "Encuentra programas académicos que se ajusten a tu perfil, intereses y presupuesto.",
  url: "/recomendador",
  aiPowered: true,
  actionText: "Buscar programas",
  color: "from-edubridge-purple to-edubridge-blue",
  iconColor: "text-edubridge-purple",
  bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(107,92,231,0.15),transparent_70%)]"
}, {
  icon: Calculator,
  title: "Simulador de costos",
  description: "Calcula y compara gastos de educación, vivienda, transporte y más en diferentes destinos.",
  url: "#",
  aiPowered: true,
  actionText: "Simular costos",
  color: "from-edubridge-cyan to-edubridge-blue",
  iconColor: "text-edubridge-cyan",
  bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(0,206,206,0.15),transparent_70%)]"
}, {
  icon: Bell,
  title: "Alertas de becas",
  description: "Recibe notificaciones sobre oportunidades de financiamiento compatibles con tu perfil.",
  url: "#",
  aiPowered: true,
  actionText: "Configurar alertas",
  color: "from-edubridge-yellow to-edubridge-coral",
  iconColor: "text-edubridge-yellow",
  bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(253,203,90,0.15),transparent_70%)]"
}, {
  icon: House,
  title: "Comparador de alojamientos",
  description: "Explora y compara residencias, apartamentos compartidos y opciones de coliving.",
  url: "#",
  aiPowered: false,
  actionText: "Ver alojamientos",
  color: "from-edubridge-coral to-edubridge-purple",
  iconColor: "text-edubridge-coral",
  bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(255,107,107,0.15),transparent_70%)]"
}, {
  icon: FileText,
  title: "Proceso de visa",
  description: "Guías paso a paso y recordatorios para completar todos los requisitos de tu visa de estudiante.",
  url: "#",
  aiPowered: false,
  actionText: "Ver mi checklist",
  color: "from-edubridge-mint to-edubridge-cyan",
  iconColor: "text-edubridge-mint",
  bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(0,210,160,0.15),transparent_70%)]"
}];
const ModulesSection: React.FC = () => {
  return <section id="modulos" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
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

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutDashboard size={20} className="text-edubridge-blue" />
              <span className="font-medium text-gray-700">Dashboard de herramientas</span>
            </div>
            <Button variant="ghost" size="sm" className="gap-1">
              <Settings size={16} />
              <span className="hidden sm:inline">Personalizar</span>
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full p-4">
            <div className="flex items-center justify-between mb-4">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="ai">Con IA</TabsTrigger>
                <TabsTrigger value="tools">Herramientas</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => <Card key={index} className={`border-0 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${module.bgPattern}`}>
                    <CardContent className="p-0">
                      <Collapsible>
                        <div className="p-15 rounded-md">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-lg ${module.iconColor} bg-gray-50 flex items-center justify-center`}>
                              <module.icon size={20} />
                            </div>
                            {module.aiPowered && <span className="flex items-center text-xs font-medium text-edubridge-purple bg-edubridge-purple/10 px-2 py-1 rounded-full">
                                <Zap size={12} className="mr-1 animate-pulse-glow" />
                                Con IA
                              </span>}
                          </div>
                          
                          <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                          
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="px-0 text-gray-500 hover:text-edubridge-blue">
                              Ver detalles
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        
                        <CollapsibleContent>
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 mb-4">{module.description}</p>
                            <Link to={module.url}>
                              <Button className={`w-full bg-gradient-to-r ${module.color} text-white hover:opacity-90`}>
                                {module.actionText}
                              </Button>
                            </Link>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>)}
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.filter(module => module.aiPowered).map((module, index) => <Card key={index} className={`border-0 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${module.bgPattern}`}>
                      <CardContent className="p-0">
                        <Collapsible>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-10 h-10 rounded-lg ${module.iconColor} bg-gray-50 flex items-center justify-center`}>
                                <module.icon size={20} />
                              </div>
                              <span className="flex items-center text-xs font-medium text-edubridge-purple bg-edubridge-purple/10 px-2 py-1 rounded-full">
                                <Zap size={12} className="mr-1 animate-pulse-glow" />
                                Con IA
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                            
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="sm" className="px-0 text-gray-500 hover:text-edubridge-blue">
                                Ver detalles
                              </Button>
                            </CollapsibleTrigger>
                          </div>
                          
                          <CollapsibleContent>
                            <div className="px-6 pb-6 pt-0">
                              <p className="text-gray-600 mb-4">{module.description}</p>
                              <Link to={module.url}>
                                <Button className={`w-full bg-gradient-to-r ${module.color} text-white hover:opacity-90`}>
                                  {module.actionText}
                                </Button>
                              </Link>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>)}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.filter(module => !module.aiPowered).map((module, index) => <Card key={index} className={`border-0 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${module.bgPattern}`}>
                      <CardContent className="p-0">
                        <Collapsible>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-10 h-10 rounded-lg ${module.iconColor} bg-gray-50 flex items-center justify-center`}>
                                <module.icon size={20} />
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                            
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="sm" className="px-0 text-gray-500 hover:text-edubridge-blue">
                                Ver detalles
                              </Button>
                            </CollapsibleTrigger>
                          </div>
                          
                          <CollapsibleContent>
                            <div className="px-6 pb-6 pt-0">
                              <p className="text-gray-600 mb-4">{module.description}</p>
                              <Link to={module.url}>
                                <Button className={`w-full bg-gradient-to-r ${module.color} text-white hover:opacity-90`}>
                                  {module.actionText}
                                </Button>
                              </Link>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>;
};
export default ModulesSection;