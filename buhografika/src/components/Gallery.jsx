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
    <section id="galeria" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-dark-card aspect-[16/9]">
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
                <img
                  src={slides[current].src}
                  alt={slides[current].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {slides[current].title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {slides[current].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark/80 border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark/80 border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <FaChevronRight size={14} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-primary w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
