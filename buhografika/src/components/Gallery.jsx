import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import cartelComercial from '../assets/images/Carrusel cartel comercial 1.jpg';
import neon from '../assets/images/Carrusel neon 1.jpg';
import estampado from '../assets/images/Estampado 2.jpg';
import lona from '../assets/images/Carrusel lona 1.jpg';

const slides = [
  { id: 1, title: 'Cartelería', description: '', src: cartelComercial },
  { id: 2, title: 'Cuadros de Neón', description: 'Decoración con luces neón personalizadas', src: neon },
  { id: 3, title: 'Estampado de Remeras', description: 'Impresión directa en prendas', src: estampado },
  { id: 4, title: 'Renovación de Lonas', description: 'Impresión en gran formato', src: lona },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 15000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="galeria" className="py-20 md:py-28 relative overflow-hidden flex flex-col">
      {/* Fondos y Luces ambientales */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 1. Contenedor del Título (Mantiene sus márgenes para estar centrado) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Algunos de nuestros <span className="text-primary neon-text">trabajos realizados</span>
          </h2>
        </motion.div>
      </div>

      {/* 2. Contenedor del Carrusel (FULL SCREEN: w-full y alto relativo a la pantalla) */}
      <div className="relative z-10 w-full h-[60vh] md:h-[80vh] bg-dark-card border-y border-white/10 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* object-cover hace que la imagen llene toda la pantalla sin deformarse */}
            <img
              src={slides[current].src}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            {/* Gradiente más alto para asegurar que el texto se lea bien sobre cualquier foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent" />
            
            {/* Textos descriptivos (ahora centrados y con más espacio) */}
            <div className="absolute bottom-20 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {slides[current].title}
              </h3>
              <p className="text-gray-200 text-base md:text-xl max-w-2xl drop-shadow-md">
                {slides[current].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botones de Navegación (Más grandes y separados de los bordes) */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-primary hover:border-primary/50 hover:bg-dark transition-all duration-300 z-20"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-primary hover:border-primary/50 hover:bg-dark transition-all duration-300 z-20"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Puntos Indicadores (Ahora flotan sobre la imagen abajo al centro) */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-primary w-10 shadow-[0_0_10px_rgba(220,38,38,0.8)]'
                  : 'bg-white/40 hover:bg-white/70 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}