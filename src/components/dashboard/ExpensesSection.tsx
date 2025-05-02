
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ExpensesSectionProps {
  selectedUniversity: any;
  selectedHousing: any;
  expensesData: any;
  setExpensesData: (data: any) => void;
  fullWidth?: boolean;
}

const ExpensesSection: React.FC<ExpensesSectionProps> = ({
  selectedUniversity,
  selectedHousing,
  expensesData,
  setExpensesData,
  fullWidth = false
}) => {
  const [foodExpense, setFoodExpense] = useState(300);
  const [transportExpense, setTransportExpense] = useState(60);
  const [entertainmentExpense, setEntertainmentExpense] = useState(150);
  const [otherExpenses, setOtherExpenses] = useState(100);

  // Tuition fee based on university (mock data)
  const getTuitionFee = () => {
    if (!selectedUniversity) return 0;
    
    // Mock data - different tuition fees based on country
    const countryFees: Record<string, number> = {
      "España": 2500,
      "Canadá": 9000,
      "Alemania": 1500,
      "México": 1200,
      "Australia": 8000,
      "Francia": 3000
    };
    
    return countryFees[selectedUniversity.pais] || 5000;
  };

  // Calculate the total expenses
  useEffect(() => {
    const tuition = getTuitionFee();
    const housing = selectedHousing ? selectedHousing.price : 0;
    const living = foodExpense + transportExpense + entertainmentExpense + otherExpenses;
    const total = tuition + (housing * 12) + (living * 12);
    
    setExpensesData({
      tuition,
      housing: housing * 12,
      food: foodExpense * 12,
      transport: transportExpense * 12,
      entertainment: entertainmentExpense * 12,
      other: otherExpenses * 12,
      monthly: housing + foodExpense + transportExpense + entertainmentExpense + otherExpenses,
      total
    });
  }, [selectedUniversity, selectedHousing, foodExpense, transportExpense, entertainmentExpense, otherExpenses]);

  if (!selectedUniversity) {
    return (
      <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <DollarSign className="h-5 w-5 mr-2 text-edubridge-cyan" />
            Gastos Estimados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-center">
            <p className="text-gray-500">
              Selecciona primero una universidad para estimar gastos
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-bold">
          <DollarSign className="h-5 w-5 mr-2 text-edubridge-cyan" />
          Gastos Estimados en {selectedUniversity.ciudad}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Matrícula anual estimada</h3>
            <div className="p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center justify-between">
                <span>Universidad {selectedUniversity.nombre}</span>
                <span className="font-medium text-edubridge-cyan">{getTuitionFee().toLocaleString()}€/año</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Alojamiento mensual</h3>
            {selectedHousing ? (
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="flex items-center justify-between">
                  <span>{selectedHousing.name}</span>
                  <span className="font-medium text-edubridge-cyan">{selectedHousing.price}€/mes</span>
                </div>
              </div>
            ) : (
              <div className="p-3 bg-gray-50 rounded-lg border text-gray-500 text-center">
                Selecciona una opción de alojamiento
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Gastos mensuales de vida</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Alimentación</span>
                  <span className="font-medium text-edubridge-cyan">{foodExpense}€/mes</span>
                </div>
                <Slider
                  value={[foodExpense]}
                  min={150}
                  max={600}
                  step={10}
                  onValueChange={(value) => setFoodExpense(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Básico</span>
                  <span>Medio</span>
                  <span>Premium</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Transporte</span>
                  <span className="font-medium text-edubridge-cyan">{transportExpense}€/mes</span>
                </div>
                <Slider
                  value={[transportExpense]}
                  min={20}
                  max={200}
                  step={5}
                  onValueChange={(value) => setTransportExpense(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Básico</span>
                  <span>Medio</span>
                  <span>Premium</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Ocio y entretenimiento</span>
                  <span className="font-medium text-edubridge-cyan">{entertainmentExpense}€/mes</span>
                </div>
                <Slider
                  value={[entertainmentExpense]}
                  min={50}
                  max={500}
                  step={10}
                  onValueChange={(value) => setEntertainmentExpense(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Básico</span>
                  <span>Medio</span>
                  <span>Premium</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Otros gastos</span>
                  <span className="font-medium text-edubridge-cyan">{otherExpenses}€/mes</span>
                </div>
                <Slider
                  value={[otherExpenses]}
                  min={50}
                  max={300}
                  step={10}
                  onValueChange={(value) => setOtherExpenses(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Básico</span>
                  <span>Medio</span>
                  <span>Premium</span>
                </div>
              </div>
            </div>
          </div>

          {expensesData.monthly > 0 && (
            <div className="mt-4 p-4 bg-edubridge-cyan/10 rounded-lg">
              <h3 className="font-medium mb-2">Resumen mensual estimado</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-right">Gasto mensual</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedHousing && (
                    <TableRow>
                      <TableCell>Alojamiento</TableCell>
                      <TableCell className="text-right">{selectedHousing.price}€</TableCell>
                    </TableRow>
                  )}
                  <TableRow>
                    <TableCell>Alimentación</TableCell>
                    <TableCell className="text-right">{foodExpense}€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Transporte</TableCell>
                    <TableCell className="text-right">{transportExpense}€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ocio</TableCell>
                    <TableCell className="text-right">{entertainmentExpense}€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Otros</TableCell>
                    <TableCell className="text-right">{otherExpenses}€</TableCell>
                  </TableRow>
                  <TableRow className="font-medium text-edubridge-cyan">
                    <TableCell>Total mensual</TableCell>
                    <TableCell className="text-right">{expensesData.monthly}€</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensesSection;
