
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Bell, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import BecasResultados from './BecasResultados';

const AlertaBecasForm = () => {
  const { toast } = useToast();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [nivelEstudios, setNivelEstudios] = useState('');
  const [pais, setPais] = useState('');
  const [area, setArea] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [intereses, setIntereses] = useState({
    completa: false,
    parcial: false,
    intercambio: false,
    investigacion: false,
    movilidad: false
  });

  const handleInteresChange = (interes: keyof typeof intereses) => {
    setIntereses(prev => ({
      ...prev,
      [interes]: !prev[interes]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !email || !nivelEstudios || !pais) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }
    
    // Validar email básico
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      return;
    }
    
    // Simular envío exitoso
    toast({
      title: "¡Suscripción exitosa!",
      description: "Comenzarás a recibir alertas de becas en tu correo.",
      variant: "default",
    });
    
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!submitted ? (
        <Card className="p-6 shadow-lg border-0 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo*</Label>
                <Input 
                  id="nombre" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  placeholder="Tu nombre" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico*</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="tu@email.com" 
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nivel">Nivel de estudios*</Label>
                <Select value={nivelEstudios} onValueChange={setNivelEstudios} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grado">Grado / Licenciatura</SelectItem>
                    <SelectItem value="master">Máster / Posgrado</SelectItem>
                    <SelectItem value="doctorado">Doctorado</SelectItem>
                    <SelectItem value="investigacion">Investigación</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pais">País de destino*</Label>
                <Select value={pais} onValueChange={setPais} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="espana">España</SelectItem>
                    <SelectItem value="reino-unido">Reino Unido</SelectItem>
                    <SelectItem value="alemania">Alemania</SelectItem>
                    <SelectItem value="francia">Francia</SelectItem>
                    <SelectItem value="italia">Italia</SelectItem>
                    <SelectItem value="otros">Otros países europeos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="area">Área de estudios</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona área (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="negocios">Negocios y Economía</SelectItem>
                  <SelectItem value="humanidades">Humanidades y Artes</SelectItem>
                  <SelectItem value="ingenieria">Ingeniería y Tecnología</SelectItem>
                  <SelectItem value="ciencias">Ciencias</SelectItem>
                  <SelectItem value="salud">Ciencias de la Salud</SelectItem>
                  <SelectItem value="sociales">Ciencias Sociales</SelectItem>
                  <SelectItem value="otros">Otros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label>Tipos de becas (selecciona todos los que te interesen)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="completa" 
                    checked={intereses.completa} 
                    onCheckedChange={() => handleInteresChange('completa')} 
                  />
                  <Label htmlFor="completa" className="cursor-pointer">Beca completa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="parcial" 
                    checked={intereses.parcial} 
                    onCheckedChange={() => handleInteresChange('parcial')} 
                  />
                  <Label htmlFor="parcial" className="cursor-pointer">Beca parcial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="intercambio" 
                    checked={intereses.intercambio} 
                    onCheckedChange={() => handleInteresChange('intercambio')} 
                  />
                  <Label htmlFor="intercambio" className="cursor-pointer">Programas de intercambio</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="investigacion" 
                    checked={intereses.investigacion} 
                    onCheckedChange={() => handleInteresChange('investigacion')} 
                  />
                  <Label htmlFor="investigacion" className="cursor-pointer">Becas de investigación</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="movilidad" 
                    checked={intereses.movilidad} 
                    onCheckedChange={() => handleInteresChange('movilidad')} 
                  />
                  <Label htmlFor="movilidad" className="cursor-pointer">Ayudas de movilidad</Label>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-edubridge-yellow text-edubridge-text hover:bg-edubridge-yellow/90">
                <Bell className="mr-2" /> Activar alertas de becas
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Recibirás notificaciones personalizadas sobre becas que coincidan con tu perfil
              </p>
            </div>
          </form>
        </Card>
      ) : (
        <BecasResultados 
          nombre={nombre}
          email={email}
          nivelEstudios={nivelEstudios}
          pais={pais}
          area={area}
          intereses={intereses}
        />
      )}
    </div>
  );
};

export default AlertaBecasForm;
