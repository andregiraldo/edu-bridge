
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-edubridge-blue text-2xl font-bold flex items-center">
            <Globe className="w-6 h-6 mr-2" />
            Edu<span className="text-edubridge-purple">Bridge</span>
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-edubridge-blue/10 text-edubridge-blue flex items-center">
              <Zap className="w-3 h-3 mr-1" /> AI
            </span>
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#como-funciona" className="text-gray-700 hover:text-edubridge-blue transition-colors font-medium">Cómo funciona</a></li>
          <li><a href="#modulos" className="text-gray-700 hover:text-edubridge-blue transition-colors font-medium">Herramientas</a></li>
          <li><a href="#testimonios" className="text-gray-700 hover:text-edubridge-blue transition-colors font-medium">Testimonios</a></li>
          <li><a href="#contacto" className="text-gray-700 hover:text-edubridge-blue transition-colors font-medium">Contacto</a></li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className={isScrolled ? 'text-gray-800' : 'text-gray-800'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* CTA button (desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Button variant="ghost" className="text-gray-700 hover:text-edubridge-blue hover:bg-edubridge-blue/5">
            Iniciar sesión
          </Button>
          <Button className="bg-gradient-to-r from-edubridge-blue to-edubridge-purple hover:from-edubridge-purple hover:to-edubridge-blue text-white transition-all duration-300">
            Registrarse
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md p-4 md:hidden border-t border-gray-100">
          <ul className="flex flex-col space-y-3">
            <li><a href="#como-funciona" className="block py-2 text-gray-700 hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Cómo funciona</a></li>
            <li><a href="#modulos" className="block py-2 text-gray-700 hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Herramientas</a></li>
            <li><a href="#testimonios" className="block py-2 text-gray-700 hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Testimonios</a></li>
            <li><a href="#contacto" className="block py-2 text-gray-700 hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Contacto</a></li>
          </ul>
          <div className="mt-4 flex space-x-2">
            <Button variant="ghost" className="w-1/2 justify-center">
              Iniciar sesión
            </Button>
            <Button className="w-1/2 justify-center bg-gradient-to-r from-edubridge-blue to-edubridge-purple">
              Registrarse
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
