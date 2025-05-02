
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';

// Modified User type to handle optional email safely
type SafeUser = {
  id: string;
  email: string;
} | null;

interface AuthContextType {
  user: SafeUser;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<SafeUser>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active session
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        // Safely handle user data with optional email
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || 'No email provided'
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error checking session:', error);
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Safely handle user data with optional email
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || 'No email provided'
          });
          
          if (event === 'SIGNED_IN') {
            localStorage.setItem('auth', JSON.stringify({ 
              email: session.user.email, 
              isAuthenticated: true 
            }));
          }
        } else {
          setUser(null);
          
          if (event === 'SIGNED_OUT') {
            localStorage.removeItem('auth');
          }
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('auth');
      setUser(null);
      toast.success('Sesión cerrada');
      navigate('/');
    } catch (error) {
      toast.error('Error al cerrar sesión');
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
