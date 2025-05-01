
import React, { useState } from 'react';
import { Search, BookOpen, MapPin, CoinsIcon, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface RecomendadorFormProps {
  onSubmit: () => void;
}

const RecomendadorForm: React.FC<RecomendadorFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    areaEstudio: '',
    nivel: 'pregrado',
    paises: [],
    presupuesto: '',
    idiomas: [],
    intereses: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular una consulta a la API
    setTimeout(() => {
      setLoading(false);
      onSubmit();
    }, 1500);
  };

  const niveles = ['pregrado', 'maestría', 'doctorado', 'certificado'];
  const paisesOpciones = ['Estados Unidos', 'Canadá', 'España', 'Reino Unido', 'Australia', 'Alemania', 'Francia', 'Italia'];
  const idiomasOpciones = ['Inglés', 'Español', 'Francés', 'Alemán', 'Italiano', 'Portugués'];
  
  const handleCheckboxChange = (field: 'paises' | 'idiomas', value: string) => {
    setFormData(prev => {
      const currentValues = prev[field] as string[];
      if (currentValues.includes(value)) {
        return { ...prev, [field]: currentValues.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentValues, value] };
      }
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Completa tu perfil académico</CardTitle>
        <CardDescription>
          Nuestra IA analizará tus preferencias para recomendarte las mejores opciones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="areaEstudio" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> 
                Área de estudio
              </Label>
              <Input 
                id="areaEstudio"
                placeholder="Ej: Ingeniería, Negocios, Arte, Medicina..."
                value={formData.areaEstudio}
                onChange={(e) => setFormData({...formData, areaEstudio: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> 
                Nivel académico
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
                {niveles.map((nivel) => (
                  <div key={nivel} className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id={`nivel-${nivel}`}
                      name="nivel"
                      value={nivel}
                      checked={formData.nivel === nivel}
                      onChange={() => setFormData({...formData, nivel})}
                      className="rounded-full"
                    />
                    <Label htmlFor={`nivel-${nivel}`} className="text-sm capitalize">
                      {nivel}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="flex items-center gap-2 mb-1">
                <MapPin className="h-4 w-4" /> 
                Países de interés
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {paisesOpciones.map((pais) => (
                  <div key={pais} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`pais-${pais}`}
                      checked={(formData.paises as string[]).includes(pais)}
                      onCheckedChange={() => handleCheckboxChange('paises', pais)}
                    />
                    <Label htmlFor={`pais-${pais}`} className="text-sm">
                      {pais}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="presupuesto" className="flex items-center gap-2">
                <CoinsIcon className="h-4 w-4" /> 
                Presupuesto anual (USD)
              </Label>
              <Input 
                id="presupuesto"
                placeholder="Ej: 20000"
                type="number"
                value={formData.presupuesto}
                onChange={(e) => setFormData({...formData, presupuesto: e.target.value})}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label className="flex items-center gap-2 mb-1">
                Idiomas que dominas
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {idiomasOpciones.map((idioma) => (
                  <div key={idioma} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`idioma-${idioma}`}
                      checked={(formData.idiomas as string[]).includes(idioma)}
                      onCheckedChange={() => handleCheckboxChange('idiomas', idioma)}
                    />
                    <Label htmlFor={`idioma-${idioma}`} className="text-sm">
                      {idioma}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="intereses" className="flex items-center gap-2">
                Intereses y especialidades
              </Label>
              <Textarea 
                id="intereses"
                placeholder="Describe tus intereses específicos, especialidades o cualquier detalle relevante..."
                value={formData.intereses}
                onChange={(e) => setFormData({...formData, intereses: e.target.value})}
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-edubridge-blue" disabled={loading}>
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analizando...
              </span>
            ) : (
              <span className="flex items-center">
                <Search className="mr-2 h-4 w-4" />
                Encontrar programas recomendados
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecomendadorForm;
