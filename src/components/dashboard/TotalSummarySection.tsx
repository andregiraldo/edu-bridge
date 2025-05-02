
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Download, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TotalSummarySectionProps {
  selectedUniversity: any;
  selectedHousing: any;
  expensesData: any;
  fullWidth?: boolean;
}

const TotalSummarySection: React.FC<TotalSummarySectionProps> = ({
  selectedUniversity,
  selectedHousing,
  expensesData,
  fullWidth = false
}) => {
  // Calculate the total cost and format values
  const summaryData = useMemo(() => {
    if (!expensesData.total) {
      return null;
    }

    const tuitionFee = expensesData.tuition || 0;
    const housingCost = expensesData.housing || 0;
    const livingExpenses = (expensesData.food || 0) + 
                          (expensesData.transport || 0) + 
                          (expensesData.entertainment || 0) + 
                          (expensesData.other || 0);
    
    // Assume 20% of tuition is covered by scholarships (just for demonstration)
    const scholarships = Math.round(tuitionFee * 0.2);
    
    const totalCost = tuitionFee + housingCost + livingExpenses - scholarships;
    
    return {
      tuitionFee,
      housingCost,
      livingExpenses,
      scholarships,
      totalCost,
      monthlyAverage: Math.round(totalCost / 12)
    };
  }, [expensesData]);

  if (!selectedUniversity || !summaryData) {
    return (
      <Card className={cn("h-full", fullWidth ? "col-span-full" : "")}>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-bold">
            <BarChart className="h-5 w-5 mr-2 text-edubridge-purple" />
            Resumen Total de Costos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-center">
            <p className="text-gray-500">
              Completa la información en las secciones anteriores para ver el resumen total
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
          <BarChart className="h-5 w-5 mr-2 text-edubridge-purple" />
          Resumen Total de Costos - {selectedUniversity.nombre}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-edubridge-purple/10 rounded-lg p-4 flex flex-col">
              <span className="text-gray-600 text-sm">Costo Total Estimado</span>
              <span className="text-2xl font-bold text-edubridge-purple">
                {summaryData.totalCost.toLocaleString()}€
              </span>
              <span className="text-sm text-gray-500">por año académico</span>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col">
              <span className="text-gray-600 text-sm">Promedio Mensual</span>
              <span className="text-2xl font-bold text-gray-700">
                {summaryData.monthlyAverage.toLocaleString()}€
              </span>
              <span className="text-sm text-gray-500">por mes</span>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 flex flex-col">
              <span className="text-gray-600 text-sm">Potencial en Becas</span>
              <span className="text-2xl font-bold text-green-600">
                {summaryData.scholarships.toLocaleString()}€
              </span>
              <span className="text-sm text-gray-500">estimado</span>
            </div>
          </div>
        
          <div>
            <h3 className="font-medium mb-3">Desglose de Costos Anuales</h3>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Costo Anual</TableHead>
                  <TableHead className="text-right">Porcentaje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Matrícula y Tasas Académicas</TableCell>
                  <TableCell className="text-right">{summaryData.tuitionFee.toLocaleString()}€</TableCell>
                  <TableCell className="text-right">
                    {Math.round((summaryData.tuitionFee / summaryData.totalCost) * 100)}%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Alojamiento</TableCell>
                  <TableCell className="text-right">{summaryData.housingCost.toLocaleString()}€</TableCell>
                  <TableCell className="text-right">
                    {Math.round((summaryData.housingCost / summaryData.totalCost) * 100)}%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gastos de Vida</TableCell>
                  <TableCell className="text-right">{summaryData.livingExpenses.toLocaleString()}€</TableCell>
                  <TableCell className="text-right">
                    {Math.round((summaryData.livingExpenses / summaryData.totalCost) * 100)}%
                  </TableCell>
                </TableRow>
                <TableRow className="text-green-600">
                  <TableCell>Becas (estimado)</TableCell>
                  <TableCell className="text-right">-{summaryData.scholarships.toLocaleString()}€</TableCell>
                  <TableCell className="text-right">
                    -{Math.round((summaryData.scholarships / (summaryData.totalCost + summaryData.scholarships)) * 100)}%
                  </TableCell>
                </TableRow>
                <TableRow className="font-medium">
                  <TableCell>Total Anual</TableCell>
                  <TableCell className="text-right">{summaryData.totalCost.toLocaleString()}€</TableCell>
                  <TableCell className="text-right">100%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium">Recomendaciones para ahorrar</h3>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Solicita todas las becas para las que seas elegible lo antes posible</li>
                  <li>Considera opciones de alojamiento compartido para reducir costos</li>
                  <li>Utiliza tarjetas de estudiante para descuentos en transporte y servicios</li>
                  <li>Prepara comidas en casa en lugar de comer fuera habitualmente</li>
                  <li>Explora programas de trabajo a tiempo parcial permitidos con visa de estudiante</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="flex-1 bg-edubridge-purple hover:bg-edubridge-purple/90"
            >
              Guardar plan
            </Button>
            <Button 
              variant="outline"
              className="flex-1"
            >
              <Download className="mr-2 h-4 w-4" />
              Exportar como PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalSummarySection;
