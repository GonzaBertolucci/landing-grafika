import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaWhatsapp, FaBolt, FaPaintBrush, FaClock, FaHeadset, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const benefits = [
  { icon: FaBolt, title: 'Calidad Premium', desc: 'Materiales de primera y acabados impecables.' },
  { icon: FaPaintBrush, title: 'Diseño Personalizado', desc: 'Cada proyecto es único, como tu marca.' },
  { icon: FaClock, title: 'Entrega Rápida', desc: 'Cumplimos con los tiempos acordados.' },
  { icon: FaHeadset, title: 'Atención Personalizada', desc: 'Te asesoramos en cada paso del proceso.' },
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
            
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary neon-text">Instalación</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Mirá cómo instalamos nuestros carteles y trabajos.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto" style={{ width: '360px' }}>
              <div className="bg-dark-card rounded-[2.5rem] border-4 border-gray-800 p-2 shadow-2xl">
                <div className="flex items-center justify-center py-1 mb-1">
                  <div className="w-16 h-1 bg-gray-700 rounded-full" />
                </div>

                <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-dark group">
                  <video
                    ref={videoRef}
                    src="/videos/instalacion.mp4"
                    className="w-full h-full object-cover"
                    onEnded={() => setPlaying(false)}
                    playsInline
                    muted
                  />

                  {!playing && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-dark/30 transition-opacity duration-300"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center neon-glow-subtle hover:bg-primary/30 transition-colors duration-300">
                        <FaPlay className="text-primary text-xl ml-1" />
                      </div>
                    </button>
                  )}

                  {playing && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="w-9 h-9 rounded-full bg-dark/60 flex items-center justify-center text-white hover:bg-dark/80 transition-colors duration-300"
                      >
                        {muted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
                      </button>
                      <button
                        onClick={togglePlay}
                        className="w-9 h-9 rounded-full bg-dark/60 flex items-center justify-center text-white hover:bg-dark/80 transition-colors duration-300"
                      >
                        <FaPause size={12} />
                      </button>
                    </div>
                  )}

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/50 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">BG</span>
                    </div>
                    <span className="text-white text-xs font-medium">buhografika</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <div className="space-y-8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.2)] transition-all duration-300">
                    <item.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-base uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
