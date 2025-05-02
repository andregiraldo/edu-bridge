
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Index from "./pages/Index";
import Recomendador from "./pages/Recomendador";
import SimuladorCostos from "./pages/SimuladorCostos";
import AlertaBecas from "./pages/AlertaBecas";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

// Auth guard component to protect routes
const ProtectedRoutes = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }
  
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

// Public routes that redirect to dashboard when user is already logged in
const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }
  
  return !user ? <>{children}</> : <Navigate to="/dashboard" replace />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    
    {/* Public routes for authentication */}
    <Route path="/login" element={
      <PublicOnlyRoute>
        <Login />
      </PublicOnlyRoute>
    } />
    <Route path="/register" element={
      <PublicOnlyRoute>
        <Register />
      </PublicOnlyRoute>
    } />
    <Route path="/verify-email" element={<VerifyEmail />} />
    <Route path="/verify-otp" element={<VerifyOTP />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    
    {/* Protected routes */}
    <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    
    {/* Public tool routes */}
    <Route path="/recomendador" element={<Recomendador />} />
    <Route path="/simulador-costos" element={<SimuladorCostos />} />
    <Route path="/alerta-becas" element={<AlertaBecas />} />
    
    {/* Catch-all route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
