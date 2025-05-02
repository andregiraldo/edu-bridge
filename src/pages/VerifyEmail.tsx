
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Mail, CheckCircle } from 'lucide-react';

const VerifyEmail = () => {
  const location = useLocation();
  const email = location.state?.email || '';

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

      {/* Email Verification Page */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold">¡Cuenta creada!</CardTitle>
            <CardDescription>
              Hemos enviado un correo de verificación a <strong>{email}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Próximos pasos:</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-2">
                <li>Revisa tu bandeja de entrada</li>
                <li>Haz clic en el enlace de verificación en el correo</li>
                <li>Una vez verificado, podrás acceder a tu cuenta</li>
              </ol>
            </div>
            
            <div className="text-center text-gray-600 text-sm">
              <p>Si no encuentras el correo, revisa tu carpeta de spam</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link to="/login">
              <Button>
                Ir al inicio de sesión
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default VerifyEmail;
