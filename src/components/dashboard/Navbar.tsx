
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, Globe, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';

interface NavbarProps {
  userEmail: string;
}

const Navbar: React.FC<NavbarProps> = ({ userEmail }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut } = useAuth();
  
  return (
    <nav className="bg-white shadow-sm z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-edubridge-blue text-2xl font-bold flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              Edu<span className="text-edubridge-purple">Bridge</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-edubridge-purple/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-edubridge-purple" />
                  </div>
                  <span>{userEmail}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Mi perfil</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-2 px-4 space-y-2">
            <div className="flex items-center justify-between py-2">
              <span className="font-medium">{userEmail}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="text-red-500"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Salir
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
