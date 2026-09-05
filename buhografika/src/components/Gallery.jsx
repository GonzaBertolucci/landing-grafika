import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import carrusel1 from '../assets/images/Carrusel 1.webp';
import carrusel2 from '../assets/images/Carrusel 2.webp';
import carrusel3 from '../assets/images/Carrusel 3.webp';
import carrusel4 from '../assets/images/Carrusel 4.webp';
import carrusel5 from '../assets/images/Carrusel 5.webp';
import carrusel6 from '../assets/images/Carrusel 6.webp';
import carrusel7 from '../assets/images/Carrusel 7.webp';
import carrusel8 from '../assets/images/Carrusel 8.webp';
import carrusel9 from '../assets/images/Carrusel 9.webp';

const slides = [
  { id: 1, src: carrusel1, desktop: 'center 40%', mobile: '78% 70%' },
  { id: 2, src: carrusel2, desktop: 'center 62%', mobile: 'center 50%' },
  { id: 3, src: carrusel3, desktop: 'center 40%', mobile: '53% 40%' },
  { id: 4, src: carrusel4, desktop: 'center 38%', mobile: 'center 30%' },
  { id: 5, src: carrusel5, desktop: 'center 17%', mobile: 'center 15%' },
  { id: 6, src: carrusel6, desktop: 'center 37%', mobile: '40% 30%' },
  { id: 7, src: carrusel7, desktop: 'center 55%', mobile: 'center 45%' },
  { id: 8, src: carrusel8, desktop: 'center 35%', mobile: 'center 30%' },
  {id: 9, src: carrusel9, desktop: 'center 35%', mobile: 'center 30%'}
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Algunos de nuestros <span className="text-primary neon-text">trabajos realizados</span>
          </h2>
        </motion.div>
      </div>

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
            <img
              src={slides[current].src}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: isMobile ? slides[current].mobile : slides[current].desktop }}
            />
          </motion.div>
        </AnimatePresence>

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
