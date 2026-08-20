import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el icono de WhatsApp
import logo from '../assets/buhosinfondo.png';

export default function Hero() {
  // Reemplaza esto con tu número
  const numeroWhatsApp = "549116747401899";
  const mensajePredeterminado = "¡Hola Buhografika! Me gustaría pedir un presupuesto.";

  return (
    <section id="nosotros" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              BUHO
              <span className="block text-primary neon-text">GRAFIKA</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              En BuhoGrafika nos dedicamos a dar vida a tus ideas con
              creatividad, calidad y compromiso.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Ofrecemos cartelería comercial, impresiones, renovación de lonas,
              cuadros de neón, instalación, diseño gráfico, estampado de
              remeras y mucho más.
              <br />
              Convertimos tus proyectos en piezas visuales que destacan y
              comunican.
            </p>

            {/* CONTENEDOR DE BOTONES (Alineados uno al lado del otro) */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Botón Principal (WhatsApp) */}
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

              {/* Botón Secundario (Servicios - Estilo Fantasma) */}
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

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/20 flex items-center justify-center neon-glow-subtle">
                <div className="absolute inset-2 rounded-full border border-primary/10" />
                <img
                  src={logo}
                  alt="BuhoGrafika"
                  className="w-48 h-48 md:w-60 md:h-60 object-contain drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-primary/15 blur-xl rounded-full" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}