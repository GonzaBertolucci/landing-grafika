import React, { useRef, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonios = [
  {
    id: 1,
    nombre: "Martín López",
    negocio: "Atlas Gym & Fitness", 
    texto: "Excelente calidad en las letras corpóreas. El local quedó increíble y la instalación fue súper rápida. Recomendadísimos.",
    estrellas: 5
  },
  {
    id: 2,
    nombre: "Sofía Martínez",
    negocio: "Decoración de Interiores",
    texto: "Pedí un cuadro de neón personalizado para un evento y superó mis expectativas. Los colores brillan espectacular, gran terminación.",
    estrellas: 5
  },
  {
    id: 3,
    nombre: "Javier Rodríguez",
    negocio: "Cervecería Artesanal",
    texto: "Hicimos toda la cartelería comercial y el estampado de remeras con ellos. Todo entregado en tiempo y forma. Un 10.",
    estrellas: 5
  },
  {
    id: 4,
    nombre: "Bruno Dias",
    negocio: "Wayne Enterprises",
    texto: "Eu so batman",
    estrellas: 5
  },
  {
    id: 5,
    nombre: "Persona 100% real",
    negocio: "Negocio 100% no fake",
    texto: "Lorem ipsum.",
    estrellas: 5
  },
  {
    id: 6,
    nombre: "Persona 100% real 2",
    negocio: "Negocio 100% no fake",
    texto: "Lorem ipsum.",
    estrellas: 5
  },
  {
    id: 7,
    nombre: "Persona 100% real 3",
    negocio: "Negocio 100% no fake",
    texto: "Lorem ipsum.",
    estrellas: 5
  },
  {
    id: 8,
    nombre: "Persona 100% real 4",
    negocio: "Negocio 100% no fake",
    texto: "Lorem ipsum.",
    estrellas: 5
  },
  {
    id: 9,
    nombre: "Persona 100% real 5",
    negocio: "Negocio 100% no fake",
    texto: "Lorem ipsum.",
    estrellas: 5
  },
  {
    id: 10,
    nombre: "Persona 100% real 6",
    negocio: "Negocio 100% no fake",
    texto: "Lorem ipsum.",
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
      
      {/* Fondo gradiente y luz (Mismo estilo que las otras secciones) */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Contenedor principal con z-10 para quedar sobre el fondo */}
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-red-600">clientes</span>
          </h2>
        </div>

        <div className="relative group">
          
          <button onClick={slideLeft} className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all hidden md:block opacity-0 group-hover:opacity-100">
            <FaChevronLeft />
          </button>

          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8 pt-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="snap-center shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)]">
                {/* ... (Tu código de la tarjeta queda exactamente igual) */}
                <div className="bg-[#1e1e1e] border-2 border-transparent hover:border-red-600 transition-colors duration-300 rounded-2xl p-8 flex flex-col h-full shadow-lg">
                  <div className="flex text-yellow-500 mb-6 text-xl">
                    {[...Array(testimonio.estrellas)].map((_, index) => <FaStar key={index} className="mr-1" />)}
                  </div>
                  <p className="text-gray-300 mb-8 flex-grow italic leading-relaxed">"{testimonio.texto}"</p>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonio.nombre}</h4>
                    <p className="text-red-500 text-sm font-semibold mt-1">{testimonio.negocio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={slideRight} className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all hidden md:block opacity-0 group-hover:opacity-100">
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}