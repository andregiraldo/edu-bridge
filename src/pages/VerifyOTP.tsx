
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp";
import { toast } from 'sonner';
import { Globe, Mail, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const email = location.state?.email || '';

  useEffect(() => {
    // Check if authentication is already done via magic link
    const handleAuthStateChange = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        localStorage.setItem('auth', JSON.stringify({ email: session.user.email, isAuthenticated: true }));
        toast.success('¡Inicio de sesión exitoso!');
        navigate('/dashboard');
      }
    });

    return () => {
      handleAuthStateChange.data.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    let timer: number;
    if (countdown > 0 && !canResend) {
      timer = window.setInterval(() => {
        setCountdown((current) => current - 1);
      }, 1000);
    } else if (countdown === 0 && !canResend) {
      setCanResend(true);
    }
    
    return () => {
      clearInterval(timer);
    };
  }, [countdown, canResend]);

  const handleResendOtp = async () => {
    if (!email) {
      toast.error('No hay correo electrónico asociado');
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin + '/verify-otp',
        }
      });
      
      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Se ha enviado un nuevo enlace a tu correo');
        setCanResend(false);
        setCountdown(30);
      }
    } catch (error) {
      toast.error('Error al reenviar OTP');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-edubridge-blue text-2xl font-bold flex items-center">
            <Globe className="w-6 h-6 mr-2" />
            Edu<span className="text-edubridge-purple">Bridge</span>
          </Link>
        </div>
      </div>

      {/* OTP Verification Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Verificación</CardTitle>
            <CardDescription className="pt-2">
              Hemos enviado un enlace mágico a <strong>{email}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gray-50">
              <Mail className="h-12 w-12 text-edubridge-blue mb-4" />
              <p className="text-center text-gray-700 mb-1">Revisa tu correo electrónico</p>
              <p className="text-center text-gray-500 text-sm">
                Haz clic en el enlace enviado para acceder a tu cuenta
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                type="button"
                variant="outline" 
                onClick={handleResendOtp}
                disabled={!canResend || loading}
                className="mt-2"
              >
                {loading 
                  ? 'Enviando...' 
                  : canResend 
                    ? 'Reenviar enlace' 
                    : `Reenviar en ${countdown}s`}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link to="/login" className="text-edubridge-blue hover:underline text-sm">
              Volver al inicio de sesión
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default VerifyOTP;
