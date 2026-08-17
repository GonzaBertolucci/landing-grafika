import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

export default function VideoSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Instalación</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Mirá cómo instalamos nuestros carteles y trabajos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-dark-card group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300 neon-glow-subtle">
                  <FaPlay className="text-primary text-2xl ml-1" />
                </div>
                <p className="text-gray-400 text-sm">Video de instalación</p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-primary/10 blur-xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
