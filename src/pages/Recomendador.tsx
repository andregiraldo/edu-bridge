
import React, { useState } from 'react';
import { GraduationCap, Search, BookOpen, Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import RecomendadorForm from '@/components/RecomendadorForm';
import UniversityResults from '@/components/UniversityResults';

const Recomendador = () => {
  const [showResults, setShowResults] = useState(false);
  
  return (
    <div className="min-h-screen bg-edubridge-bg">
      <Navbar />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-edubridge-blue/10 rounded-full mb-4">
              <GraduationCap size={24} className="text-edubridge-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Recomendador Inteligente</h1>
            <p className="text-lg text-gray-600">
              Encuentra programas académicos que se ajusten a tu perfil, intereses y presupuesto con la ayuda de nuestra IA.
            </p>
          </div>
          
          {!showResults ? (
            <RecomendadorForm onSubmit={() => setShowResults(true)} />
          ) : (
            <UniversityResults onBack={() => setShowResults(false)} />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Recomendador;
