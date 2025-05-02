
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import UniversitySection from '@/components/dashboard/UniversitySection';
import HousingSection from '@/components/dashboard/HousingSection';
import ExpensesSection from '@/components/dashboard/ExpensesSection';
import ApplicationGuideSection from '@/components/dashboard/ApplicationGuideSection';
import ScholarshipsSection from '@/components/dashboard/ScholarshipsSection';
import TotalSummarySection from '@/components/dashboard/TotalSummarySection';
import StudyFiltersSection, { StudyFilters } from '@/components/dashboard/StudyFiltersSection';

const Dashboard = () => {
  const [userAuth, setUserAuth] = useState<{ email: string; isAuthenticated: boolean } | null>(null);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Selected data that will be shared across sections
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);
  const [selectedHousing, setSelectedHousing] = useState<any>(null);
  const [expensesData, setExpensesData] = useState<any>({});
  
  // Nuevo estado para los filtros de estudio
  const [studyFilters, setStudyFilters] = useState<StudyFilters>({
    programType: 'undergraduate',
    duration: '1year',
    modality: 'onsite'
  });

  const updateStudyFilters = (newFilters: StudyFilters) => {
    setStudyFilters(newFilters);
    
    // Ajustar costos basados en los filtros seleccionados
    if (newFilters.modality === 'online') {
      // Si es online, eliminamos gastos de vivienda
      setSelectedHousing(null);
      
      // Actualizamos expensesData para reducir transporte y otros gastos
      if (expensesData && Object.keys(expensesData).length > 0) {
        setExpensesData({
          ...expensesData,
          transport: 0,
          housing: 0,
          monthly: expensesData.food + expensesData.entertainment + expensesData.other
        });
      }
    }
    
    // Ajustar costos de matrícula basado en tipo y duración del programa
    if (selectedUniversity && expensesData) {
      let tuitionMultiplier = 1;
      
      // Ajuste por tipo de programa
      switch (newFilters.programType) {
        case 'language': 
          tuitionMultiplier = 0.4; break;
        case 'masters': 
          tuitionMultiplier = 1.5; break;
        case 'phd': 
          tuitionMultiplier = 2; break;
        case 'shortcourse': 
          tuitionMultiplier = 0.3; break;
        case 'specialization': 
          tuitionMultiplier = 1.2; break;
        case 'sabbatical': 
          tuitionMultiplier = 0.8; break;
        default: 
          tuitionMultiplier = 1;
      }
      
      // Ajuste por duración
      let durationMultiplier = 1;
      switch (newFilters.duration) {
        case '3months': 
          durationMultiplier = 0.25; break;
        case '6months': 
          durationMultiplier = 0.5; break;
        case '2years': 
          durationMultiplier = 2; break;
        case '3plusyears': 
          durationMultiplier = 3; break;
        default: 
          durationMultiplier = 1;
      }
      
      if (expensesData.tuition) {
        const baseTuition = expensesData.tuition / durationMultiplier / tuitionMultiplier;
        const newTuition = baseTuition * tuitionMultiplier * durationMultiplier;
        
        setExpensesData({
          ...expensesData,
          tuition: newTuition,
          total: newTuition + expensesData.housing + expensesData.food + expensesData.transport + expensesData.entertainment + expensesData.other
        });
      }
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('auth');
    if (!auth) {
      navigate('/login');
      return;
    }
    
    setUserAuth(JSON.parse(auth));
  }, [navigate]);

  if (!userAuth) {
    return <div>Redirigiendo...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userEmail={userAuth.email} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <DashboardHeader userEmail={userAuth.email} />
          
          {activeSection === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <UniversitySection 
                selectedUniversity={selectedUniversity}
                setSelectedUniversity={setSelectedUniversity}
              />
              <HousingSection 
                selectedUniversity={selectedUniversity}
                selectedHousing={selectedHousing}
                setSelectedHousing={setSelectedHousing}
              />
              <ExpensesSection 
                selectedUniversity={selectedUniversity}
                selectedHousing={selectedHousing}
                expensesData={expensesData}
                setExpensesData={setExpensesData}
              />
              <StudyFiltersSection
                filters={studyFilters}
                updateFilters={updateStudyFilters}
              />
              <ScholarshipsSection 
                selectedUniversity={selectedUniversity}
              />
              <div className="lg:col-span-2">
                <TotalSummarySection 
                  selectedUniversity={selectedUniversity}
                  selectedHousing={selectedHousing}
                  expensesData={expensesData}
                />
              </div>
            </div>
          )}

          {activeSection === 'universities' && (
            <UniversitySection 
              selectedUniversity={selectedUniversity}
              setSelectedUniversity={setSelectedUniversity}
              fullWidth
            />
          )}
          
          {activeSection === 'housing' && (
            <HousingSection 
              selectedUniversity={selectedUniversity}
              selectedHousing={selectedHousing}
              setSelectedHousing={setSelectedHousing}
              fullWidth
            />
          )}
          
          {activeSection === 'expenses' && (
            <ExpensesSection 
              selectedUniversity={selectedUniversity}
              selectedHousing={selectedHousing}
              expensesData={expensesData}
              setExpensesData={setExpensesData}
              fullWidth
            />
          )}
          
          {activeSection === 'filters' && (
            <StudyFiltersSection
              filters={studyFilters}
              updateFilters={updateStudyFilters}
              fullWidth
            />
          )}
          
          {activeSection === 'application' && (
            <ApplicationGuideSection 
              selectedUniversity={selectedUniversity}
              fullWidth
            />
          )}
          
          {activeSection === 'scholarships' && (
            <ScholarshipsSection 
              selectedUniversity={selectedUniversity}
              fullWidth
            />
          )}
          
          {activeSection === 'summary' && (
            <TotalSummarySection 
              selectedUniversity={selectedUniversity}
              selectedHousing={selectedHousing}
              expensesData={expensesData}
              fullWidth
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
