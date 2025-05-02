
import { createClient } from '@supabase/supabase-js'

// Get Supabase URL and anon key from runtime environment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Make sure we have the required environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.")
}

// Create a single supabase client for the entire app
export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
)

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
}
