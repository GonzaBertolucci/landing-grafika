import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {

  const phoneNumber = "5491122389792";
  const message = "¡Hola! Vi tu pagina y me gustaría pedir más información."

  const whatsappUrl= `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/30 transition-shadow duration-300"
      style={{
        boxShadow: '0 0 10px #25D366, 0 0 20px rgba(37, 211, 102, 0.3), 0 0 40px rgba(37, 211, 102, 0.1)',
      }}
    >
      <FaWhatsapp className="text-white text-2xl md:text-3xl" />

      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
