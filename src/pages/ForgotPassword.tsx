
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Globe, KeyRound } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password',
      });
      
      if (error) {
        toast.error(error.message);
      } else {
        setSubmitted(true);
        toast.success('Se ha enviado un enlace para restablecer tu contraseña');
      }
    } catch (error) {
      toast.error('Error al enviar el correo de restablecimiento');
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

      {/* Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Recuperar contraseña</CardTitle>
            <CardDescription>
              Te enviaremos un enlace para restablecer tu contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleResetPassword} className="space-y-4">
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
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar enlace de recuperación'}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gray-50">
                  <KeyRound className="h-12 w-12 text-edubridge-blue mb-4" />
                  <p className="text-center text-gray-700 mb-1">Correo enviado</p>
                  <p className="text-center text-gray-500 text-sm">
                    Hemos enviado un enlace de recuperación a <strong>{email}</strong>
                  </p>
                </div>
                <p className="text-center text-gray-600 text-sm">
                  No olvides revisar tu carpeta de spam si no lo encuentras en la bandeja de entrada.
                </p>
              </div>
            )}
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

export default ForgotPassword;
