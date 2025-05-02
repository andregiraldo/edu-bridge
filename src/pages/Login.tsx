
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Globe, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtpOption, setShowOtpOption] = useState(false);
  const navigate = useNavigate();

  const handleEmailPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        toast.error(error.message);
      } else {
        localStorage.setItem('auth', JSON.stringify({ email: data.user.email, isAuthenticated: true }));
        toast.success('¡Inicio de sesión exitoso!');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error('Error al iniciar sesión');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
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
        toast.success('Se ha enviado un enlace de inicio de sesión a tu correo electrónico');
        navigate('/verify-otp', { state: { email } });
      }
    } catch (error) {
      toast.error('Error al enviar OTP');
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

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Iniciar sesión</CardTitle>
            <CardDescription>
              Ingresa tus credenciales para acceder a tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showOtpOption ? (
              <form onSubmit={handleEmailPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@correo.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link to="/forgot-password" className="text-sm text-edubridge-blue hover:underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue"
                  disabled={loading}
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </Button>
                <div className="text-center">
                  <button 
                    type="button" 
                    onClick={() => setShowOtpOption(true)} 
                    className="text-edubridge-blue hover:underline text-sm mt-2"
                  >
                    Iniciar sesión con enlace mágico (sin contraseña)
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-otp">Correo electrónico</Label>
                  <Input 
                    id="email-otp" 
                    type="email" 
                    placeholder="tu@correo.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue"
                  disabled={loading}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {loading ? 'Enviando enlace...' : 'Enviar enlace mágico'}
                </Button>
                <div className="text-center">
                  <button 
                    type="button" 
                    onClick={() => setShowOtpOption(false)} 
                    className="text-edubridge-blue hover:underline text-sm mt-2"
                  >
                    Volver al inicio de sesión con contraseña
                  </button>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              ¿No tienes una cuenta?{' '}
              <Link to="/register" className="text-edubridge-blue hover:underline">
                Regístrate
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
