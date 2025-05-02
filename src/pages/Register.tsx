
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Globe, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { supabase, checkSupabaseConnection } from '@/lib/supabase';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [supabaseConnected, setSupabaseConnected] = useState(true);
  const [connectionChecked, setConnectionChecked] = useState(false);
  const navigate = useNavigate();

  // Verificar la conexión con Supabase al cargar el componente
  useEffect(() => {
    const verifyConnection = async () => {
      try {
        const isConnected = await checkSupabaseConnection();
        console.log('Estado de la conexión a Supabase:', isConnected);
        setSupabaseConnected(isConnected);
        if (!isConnected) {
          toast.error('No se pudo conectar con la base de datos. Por favor, intenta más tarde.');
        }
        setConnectionChecked(true);
      } catch (error) {
        console.error('Error al verificar la conexión:', error);
        setSupabaseConnected(false);
        toast.error('Error al verificar la conexión con la base de datos.');
        setConnectionChecked(true);
      }
    };

    verifyConnection();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabaseConnected) {
      toast.error('No hay conexión con la base de datos. Por favor, intenta más tarde.');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }
    
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    setLoading(true);
    
    try {
      console.log('Intentando registrar usuario con email:', email);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + '/dashboard',
        }
      });
      
      if (error) {
        console.error('Error durante el registro:', error);
        toast.error(error.message);
      } else {
        console.log('Usuario registrado correctamente:', data);
        
        // Después de registrar al usuario, crear un perfil en la tabla profiles
        if (data.user) {
          console.log('Creando perfil para el usuario:', data.user.id);
          
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              { 
                id: data.user.id, 
                email: email,
                created_at: new Date()
              }
            ]);
            
          if (profileError) {
            console.error('Error creando el perfil:', profileError);
            toast.error('Se creó el usuario pero hubo un problema al guardar el perfil');
          } else {
            console.log('Perfil creado exitosamente');
          }
        }
        
        toast.success('¡Registro exitoso! Por favor verifica tu correo electrónico.');
        navigate('/verify-email', { state: { email } });
      }
    } catch (error) {
      console.error('Error inesperado durante el registro:', error);
      toast.error('Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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

      {/* Register Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Crear cuenta</CardTitle>
            <CardDescription>
              Ingresa tus datos para registrarte en EduBridge
            </CardDescription>
          </CardHeader>
          <CardContent>
            {connectionChecked && !supabaseConnected && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error de conexión</AlertTitle>
                <AlertDescription>
                  No se pudo establecer conexión con la base de datos. Por favor, intenta más tarde.
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleRegister} className="space-y-4">
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
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                <Input 
                  id="confirm-password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue"
                disabled={loading || !supabaseConnected}
              >
                {loading ? 'Registrando...' : 'Crear cuenta'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="text-edubridge-blue hover:underline">
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
