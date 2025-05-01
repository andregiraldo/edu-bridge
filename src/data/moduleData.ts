
import { 
  GraduationCap, 
  Calculator, 
  Bell, 
  House, 
  FileText
} from 'lucide-react';

// Define module data with additional properties for the dashboard view
export const modules = [
  {
    icon: GraduationCap,
    title: "Recomendador inteligente",
    description: "Encuentra programas académicos que se ajusten a tu perfil, intereses y presupuesto.",
    url: "/recomendador",
    aiPowered: true,
    color: "from-edubridge-purple to-edubridge-blue",
    iconColor: "text-edubridge-purple",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(107,92,231,0.15),transparent_70%)]"
  },
  {
    icon: Calculator,
    title: "Simulador de costos",
    description: "Calcula y compara gastos de educación, vivienda, transporte y más en diferentes destinos.",
    url: "/simulador-costos",
    aiPowered: true,
    color: "from-edubridge-cyan to-edubridge-blue",
    iconColor: "text-edubridge-cyan",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(0,206,206,0.15),transparent_70%)]"
  },
  {
    icon: Bell,
    title: "Alertas de becas",
    description: "Recibe notificaciones sobre oportunidades de financiamiento compatibles con tu perfil.",
    url: "/alerta-becas",
    aiPowered: true,
    color: "from-edubridge-yellow to-edubridge-coral",
    iconColor: "text-edubridge-yellow",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(253,203,90,0.15),transparent_70%)]"
  },
  {
    icon: House,
    title: "Comparador de alojamientos",
    description: "Explora y compara residencias, apartamentos compartidos y opciones de coliving.",
    url: "#",
    aiPowered: false,
    color: "from-edubridge-coral to-edubridge-purple",
    iconColor: "text-edubridge-coral",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(255,107,107,0.15),transparent_70%)]"
  },
  {
    icon: FileText,
    title: "Proceso de visa",
    description: "Guías paso a paso y recordatorios para completar todos los requisitos de tu visa de estudiante.",
    url: "#",
    aiPowered: false,
    color: "from-edubridge-mint to-edubridge-cyan",
    iconColor: "text-edubridge-mint",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(0,210,160,0.15),transparent_70%)]"
  }
];
