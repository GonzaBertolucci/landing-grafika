import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function CtaFinal() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            ¡Hablemos!
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="text-primary neon-text">destacar</span> tu negocio?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10">
            Convertimos tus ideas en piezas visuales que impactan. Pedí tu presupuesto sin compromiso y descubrí cómo podemos ayudarte.
          </p>

          <a
            href={`https://wa.me/5491122389792?text=${encodeURIComponent('¡Hola! Vi tu pagina y me gustaría pedir más información.')}`}
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
