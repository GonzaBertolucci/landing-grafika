import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

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
          <div className="relative mx-auto max-w-sm aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-dark-card group">
            <video
              ref={videoRef}
              src="/videos/instalacion.mp4"
              className="w-full h-full object-cover"
              onEnded={() => setPlaying(false)}
              playsInline
            />

            {!playing && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-dark/30 transition-opacity duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center neon-glow-subtle hover:bg-primary/30 transition-colors duration-300">
                  <FaPlay className="text-primary text-2xl ml-1" />
                </div>
              </button>
            )}

            {playing && (
              <button
                onClick={togglePlay}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-dark/60 flex items-center justify-center text-white hover:bg-dark/80 transition-colors duration-300"
              >
                <FaPause size={14} />
              </button>
            )}

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-primary/10 blur-xl rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href={`https://wa.me/+541167401899?text=${encodeURIComponent('¡Hola! Vi tu pagina y me gustaría pedir más información.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            style={{
              boxShadow: '0 0 10px #25D366, 0 0 20px rgba(37, 211, 102, 0.3), 0 0 40px rgba(37, 211, 102, 0.1)',
            }}
          >
            <FaWhatsapp className="text-xl" />
            <span>Pedí tu presupuesto sin cargo</span>
            <span className="absolute inset-0 rounded-xl bg-[#25D366] animate-ping opacity-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
