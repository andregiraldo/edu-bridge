
import { createClient } from '@supabase/supabase-js';

// Usar directamente las credenciales de Supabase
const SUPABASE_URL = "https://yqhqpmlrzgscsqrbohds.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxaHFwbWxyemdzY3NxcmJvaGRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNDY5NDcsImV4cCI6MjA2MTcyMjk0N30.rOS9Ntiqi3rirYteNdp0Xx5vVhCgfbHWQpI-_c_Cplc";

// Crear cliente de Supabase con opciones adicionales para mejorar la autenticación
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  }
});

// Función auxiliar para verificar la conexión
export const checkSupabaseConnection = async () => {
  try {
    // Intentamos hacer una consulta simple para verificar la conexión
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);
    
    if (error) {
      console.error('Error de conexión con Supabase:', error);
      return false;
    }
    
    console.log('Conexión con Supabase establecida correctamente');
    return true;
  } catch (err) {
    console.error('Error al verificar la conexión con Supabase:', err);
    return false;
  }
};
