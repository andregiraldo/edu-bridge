
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AlertaBecasForm from '@/components/becas/AlertaBecasForm';

const AlertaBecas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-yellow/10 to-edubridge-coral/10 text-edubridge-yellow text-sm font-medium mb-4">
            Oportunidades de financiación
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Alertas de Becas</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recibe notificaciones sobre oportunidades de financiamiento compatibles con tu perfil
          </p>
        </div>
        
        <AlertaBecasForm />
      </div>
      <Footer />
    </div>
  );
};

export default AlertaBecas;
