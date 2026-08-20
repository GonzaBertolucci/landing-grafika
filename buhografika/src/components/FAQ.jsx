import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: '¿Cuánto tarda en estar listo un pedido?',
    answer: 'El tiempo de entrega depende del tipo de trabajo. Los diseños gráficos suelen estar listos en 2-3 días hábiles, mientras que la cartelería y los cuadros de neón pueden tomar entre 5-10 días hábiles.',
  },
  {
    question: '¿Puedo personalizar completamente mi pedido?',
    answer: '¡Por supuesto! Todos nuestros servicios son 100% personalizables. Trabajamos con vos para lograr exactamente lo que necesitás.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, efectivo, Mercado Pago y tarjetas de crédito/débito. Consultanos para más detalles.',
  },
  {
    question: '¿Atienden pedidos pequeños o solo grandes cantidades?',
    answer: 'Atendemos todo tipo de pedidos, desde uno solo hasta grandes volúmenes. No hay cantidad mínima.',
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden bg-dark-card">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors duration-300"
      >
        <span className="text-white font-medium text-sm md:text-base pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary flex-shrink-0"
        >
          <FaChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas <span className="text-primary neon-text">frecuentes</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Encontrá respuestas a las consultas más comunes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
