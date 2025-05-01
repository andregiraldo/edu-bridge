
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-edubridge-blue text-2xl font-bold">
            Edu<span className="text-edubridge-text">Bridge</span>
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#como-funciona" className="text-edubridge-text hover:text-edubridge-blue transition-colors">Cómo funciona</a></li>
          <li><a href="#modulos" className="text-edubridge-text hover:text-edubridge-blue transition-colors">Módulos</a></li>
          <li><a href="#testimonios" className="text-edubridge-text hover:text-edubridge-blue transition-colors">Testimonios</a></li>
          <li><a href="#contacto" className="text-edubridge-text hover:text-edubridge-blue transition-colors">Contacto</a></li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
            <ul className="flex flex-col space-y-3">
              <li><a href="#como-funciona" className="block py-2 text-edubridge-text hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Cómo funciona</a></li>
              <li><a href="#modulos" className="block py-2 text-edubridge-text hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Módulos</a></li>
              <li><a href="#testimonios" className="block py-2 text-edubridge-text hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Testimonios</a></li>
              <li><a href="#contacto" className="block py-2 text-edubridge-text hover:text-edubridge-blue transition-colors" onClick={toggleMenu}>Contacto</a></li>
            </ul>
            <div className="mt-4">
              <Button className="w-full bg-edubridge-blue hover:bg-edubridge-blue/90 text-white">
                Iniciar sesión
              </Button>
            </div>
          </div>
        )}

        {/* CTA button (desktop) */}
        <div className="hidden md:block">
          <Button className="bg-edubridge-blue hover:bg-edubridge-blue/90 text-white">
            Iniciar sesión
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
