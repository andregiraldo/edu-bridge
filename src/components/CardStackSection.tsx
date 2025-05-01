
import React, { useEffect, useRef, useState } from "react";

const CardStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // Estilos para las tarjetas, similar a HumanoidSection
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Detectar cuando la sección está en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Comienza a observar cuando el 10% del elemento es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Manejador de scroll optimizado usando requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calcular el progreso del desplazamiento
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determinar qué tarjeta debería ser visible según el progreso
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Cálculo inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Visibilidad de las tarjetas basada en el índice activo
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  // Define card gradients matching the EduBridge theme colors
  const cardGradients = [
    'from-edubridge-blue to-edubridge-purple',
    'from-edubridge-purple to-edubridge-cyan',
    'from-edubridge-cyan to-edubridge-coral'
  ];

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="card-stack">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="opacity-0 animate-fade-in flex items-center" style={{
                animationDelay: "0.1s"
              }}>
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-edubridge-blue text-white mr-2 text-xs">01</div>
                <span className="text-gray-600 font-medium">Experiencia</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
              Tarjetas Interactivas
            </h2>
            <p className="section-subtitle text-base sm:text-lg text-gray-600 max-w-2xl">
              Descubre cómo EduBridge te ayuda a conseguir tus objetivos académicos con estas soluciones interactivas
            </p>
          </div>
          
          <div className="relative flex-1 perspective-1000">
            {/* Primera Tarjeta */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl rounded-2xl border border-white/20 ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className={`absolute inset-0 z-0 bg-gradient-to-br ${cardGradients[0]} opacity-10`}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-edubridge-blue/10 backdrop-blur-sm text-edubridge-blue">
                  <span className="text-sm font-medium">Comienza tu viaje</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
                    Busca universidades que se adapten a ti
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Usa nuestro buscador inteligente para encontrar las mejores opciones según tu perfil, intereses y presupuesto.
                  </p>
                  <button className="btn-primary">Explorar opciones</button>
                </div>
              </div>
            </div>
            
            {/* Segunda Tarjeta */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl rounded-2xl border border-white/20 ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className={`absolute inset-0 z-0 bg-gradient-to-br ${cardGradients[1]} opacity-10`}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-edubridge-purple/10 backdrop-blur-sm text-edubridge-purple">
                  <span className="text-sm font-medium">Gestiona tus solicitudes</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
                    Aplicaciones sencillas y centralizadas
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Gestiona todas tus solicitudes en un solo lugar y recibe actualizaciones en tiempo real sobre tu proceso de admisión.
                  </p>
                  <button className="btn-primary">Centralizar aplicaciones</button>
                </div>
              </div>
            </div>
            
            {/* Tercera Tarjeta */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl rounded-2xl border border-white/20 ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className={`absolute inset-0 z-0 bg-gradient-to-br ${cardGradients[2]} opacity-10`}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-edubridge-cyan/10 backdrop-blur-sm text-edubridge-cyan">
                  <span className="text-sm font-medium">Asistencia IA</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-gray-900">
                    Recibe ayuda personalizada con <span className="text-edubridge-blue">IA</span>
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Nuestros asistentes virtuales te ayudan a preparar documentos, practicar entrevistas y resolver dudas en cualquier momento.
                  </p>
                  <button className="btn-primary">Probar asistente</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardStackSection;
