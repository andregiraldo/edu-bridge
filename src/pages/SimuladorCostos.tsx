
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimuladorCostosForm from '@/components/simulador/SimuladorCostosForm';

const SimuladorCostos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-edubridge-cyan/10 to-edubridge-blue/10 text-edubridge-cyan text-sm font-medium mb-4">
            Planifica tu presupuesto
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Simulador de Costos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calcula y compara gastos de educación, vivienda, transporte y más en diferentes destinos
          </p>
        </div>
        
        <SimuladorCostosForm />
      </div>
      <Footer />
    </div>
  );
};

export default SimuladorCostos;
