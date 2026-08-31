import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import heroBg from '../assets/images/HeroImage.webp';

export default function Hero() {
  const numeroWhatsApp = "5491122389792";
  const mensajePredeterminado = "¡Hola Buhografika! Me gustaría pedir un presupuesto.";

  return (
    <section id="nosotros" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            BUHO
            <span className="block text-primary neon-text">GRAFIKA</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            En BuhoGrafika nos dedicamos a dar vida a tus ideas con
            creatividad, calidad y compromiso.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Ofrecemos cartelería comercial, impresiones, renovación de lonas,
            cuadros de neón, instalación, diseño gráfico, estampado de
            remeras y mucho más.
            <br />
            Convertimos tus proyectos en piezas visuales que destacan y
            comunican.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.a
              href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePredeterminado)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold px-8 py-3 rounded-lg shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.7)] transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              ¡Contactanos!
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-red-600 bg-transparent hover:bg-red-600/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Nuestros Servicios
              <BsChevronDoubleDown size={18} />
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
