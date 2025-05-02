
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

const Dashboard = () => {
  const [userAuth, setUserAuth] = useState<{ email: string; isAuthenticated: boolean } | null>(null);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Selected data that will be shared across sections
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);
  const [selectedHousing, setSelectedHousing] = useState<any>(null);
  const [expensesData, setExpensesData] = useState<any>({});

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
