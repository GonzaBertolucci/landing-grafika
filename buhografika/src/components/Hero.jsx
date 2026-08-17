import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function Hero() {
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

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 neon-glow-subtle"
            >
              Nuestros Servicios
              <BsChevronDoubleDown size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 neon-glow-subtle">
              <div className="aspect-[4/3] bg-dark-card flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-dark-lighter flex items-center justify-center">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Imagen del local</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
