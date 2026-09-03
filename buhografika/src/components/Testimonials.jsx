import React, { useRef, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonios = [
  {
    id: 1,
    nombre: "Martín López",
    negocio: "", 
    texto: "Excelente calidad en las letras corpóreas. El local quedó increíble y la instalación fue súper rápida. Recomendadísimos.",
    estrellas: 5
  },
  {
    id: 2,
    nombre: "Sofía Martínez",
    negocio: "",
    texto: "Pedí un cuadro de neón personalizado para un evento y superó mis expectativas. Los colores brillan espectacular, gran terminación.",
    estrellas: 5
  },
  {
    id: 3,
    nombre: "Javier Rodríguez",
    negocio: "",
    texto: "Hicimos toda la cartelería comercial y el estampado de remeras con ellos. Todo entregado en tiempo y forma. Un 10.",
    estrellas: 5
  },
  {
    id: 4,
    nombre: "Loana Liste",
    negocio: "",
    texto: "Súper recomendables, calidad de precio y trabajo 10/10. Buena atención al cliente!",
    estrellas: 5
  },
  {
    id: 5,
    nombre: "Nahuel Pintos",
    negocio: "",
    texto: "Rapidísimo pedí calco de Xtz 2008 y lo hizo increíble no la encontraba en ningún lado.",
    estrellas: 5
  },
  {
    id: 6,
    nombre: "Lara Dorneles De Souza",
    negocio: "",
    texto: "Excelente atencion y trabajo. Muy recomendable 10/10",
    estrellas: 5
  },
  {
    id: 7,
    nombre: "Luz Publicidad",
    negocio: "",
    texto: "Unos genios, me salvaron con una impresión de último momento. Rápidos, buena calidad y re buena atención. Súper recomendados.",
    estrellas: 5
  },
  {
    id: 8,
    nombre: "Micaela de la plaza",
    negocio: "",
    texto: "Excelente atención, servicio y calidad. En dos oportunidades nos realizaron remeras estampadas y el cartel para nuestro negocio. Un lujo!",
    estrellas: 5
  },
  {
    id: 9,
    nombre: "Gonzalo Bertolucci",
    negocio: "",
    texto: "Muy buena atención, me explicaron todo con paciencia y me ayudaron a elegir lo mejor para lo que necesitaba. El trabajo quedó excelente y lo tuvieron listo super rápido. Se nota que saben lo que hacen. Súper recomendado!",
    estrellas: 5
  },
  {
    id: 10,
    nombre: "Valentin Morales",
    negocio: "",
    texto: "Quedé muy conforme con el trabajo. Me asesoraron desde el inicio, resolvieron todas mis dudas y el resultado final superó mis expectativas. Los materiales son de calidad y se nota en el resultado todo el empeño en el laburo que hacen. Además, entregaron en tiempo y forma. Muy recomendable.",
    estrellas: 5
  }
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const isEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;
      
      if (isEnd) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
      }
    }, 20000); // <-- 20000 = 20 segundos. Velocidad del carrousel

    return () => clearInterval(interval);
  }, []);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative text-white font-sans overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-primary neon-text">clientes</span>
          </h2>
        </div>

        <div className="relative group/slider">
          
          <button onClick={slideLeft} className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/50 transition-all duration-300 hidden md:flex opacity-0 group-hover/slider:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            <FaChevronLeft size={16} />
          </button>

          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8 pt-4 px-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="snap-center shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] h-auto">
                
                <div className="group relative bg-dark-card/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 h-full flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 shadow-lg">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    
                    <div className="flex text-yellow-500/90 mb-6 text-xl group-hover:scale-105 transition-transform duration-300 origin-left">
                      {[...Array(testimonio.estrellas)].map((_, index) => <FaStar key={index} className="mr-1" />)}
                    </div>
                    
                    <p className="text-gray-400 mb-8 flex-grow italic leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      "{testimonio.texto}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-white text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonio.nombre}
                      </h4>
                      <p className="text-primary/90 text-sm font-semibold mt-1">
                        {testimonio.negocio}
                      </p>
                    </div>

                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                </div>

              </div>
            ))}
          </div>

          <button onClick={slideRight} className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/50 transition-all duration-300 hidden md:flex opacity-0 group-hover/slider:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            <FaChevronRight size={16} />
          </button>

        </div>
      </div>
    </section>
  );
}