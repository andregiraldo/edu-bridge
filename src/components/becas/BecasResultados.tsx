
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Mail } from 'lucide-react';
import BecaCard from './BecaCard';

interface BecasResultadosProps {
  nombre: string;
  email: string;
  nivelEstudios: string;
  pais: string;
  area: string;
  intereses: {
    completa: boolean;
    parcial: boolean;
    intercambio: boolean;
    investigacion: boolean;
    movilidad: boolean;
  };
}

// Datos de ejemplo de becas
const becasEjemplo = [
  {
    titulo: "Beca Erasmus+ para estudios",
    organizacion: "Unión Europea",
    tipo: "intercambio",
    fechaLimite: "15 de enero, 2026",
    financiamiento: "850€/mes",
    pais: "Todos los países europeos",
    url: "#",
    destacada: true,
    nivel: "grado"
  },
  {
    titulo: "Beca MAE-AECID",
    organizacion: "Gobierno de España",
    tipo: "completa",
    fechaLimite: "31 de octubre, 2025",
    financiamiento: "1.200€/mes + matrícula",
    pais: "espana",
    url: "#",
    destacada: false,
    nivel: "master"
  },
  {
    titulo: "DAAD Research Grants",
    organizacion: "Gobierno Alemán",
    tipo: "investigacion",
    fechaLimite: "15 de noviembre, 2025",
    financiamiento: "1.200€/mes + gastos",
    pais: "alemania",
    url: "#",
    destacada: true,
    nivel: "doctorado"
  },
  {
    titulo: "Beca Santander Universidades",
    organizacion: "Banco Santander",
    tipo: "parcial",
    fechaLimite: "30 de abril, 2026",
    financiamiento: "5.000€ (pago único)",
    pais: "espana",
    url: "#",
    destacada: false,
    nivel: "master"
  },
  {
    titulo: "Campus France Eiffel",
    organizacion: "Gobierno Francés",
    tipo: "completa",
    fechaLimite: "10 de enero, 2026",
    financiamiento: "1.181€/mes + beneficios",
    pais: "francia",
    url: "#",
    destacada: true,
    nivel: "master"
  },
];

const BecasResultados = ({ nombre, email, nivelEstudios, pais, area, intereses }: BecasResultadosProps) => {
  // Filtrar becas según los intereses del usuario
  const becasRelevantes = becasEjemplo.filter(beca => 
    (beca.nivel === nivelEstudios || nivelEstudios === '') &&
    (beca.pais === pais || beca.pais === "Todos los países europeos" || pais === '') &&
    (intereses[beca.tipo as keyof typeof intereses] || Object.values(intereses).every(v => !v))
  );
  
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-lg bg-gradient-to-r from-edubridge-yellow/20 to-edubridge-coral/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-full bg-edubridge-yellow/30 flex items-center justify-center">
              <Check className="text-edubridge-yellow h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">¡Suscripción activada!</h2>
          </div>
          
          <p className="text-center text-gray-600 mb-6">
            Hemos registrado tus preferencias y comenzarás a recibir alertas personalizadas de becas
            en <span className="font-medium">{email}</span>
          </p>
          
          <div className="flex justify-center">
            <Button variant="outline" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Verificar mi correo
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Becas que podrían interesarte</h2>
        <p className="text-gray-600">Hemos encontrado {becasRelevantes.length} becas que coinciden con tu perfil</p>
        
        {becasRelevantes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {becasRelevantes.map((beca, index) => (
              <BecaCard key={index} beca={beca} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-gray-50 rounded-lg">
            <p className="text-gray-600">No encontramos becas que coincidan exactamente con tus criterios actuales.</p>
            <p className="mt-2">Te enviaremos alertas cuando haya nuevas oportunidades disponibles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecasResultados;
