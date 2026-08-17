import { motion } from 'framer-motion';
import { FaLightbulb, FaTshirt, FaPaintBrush, FaStore } from 'react-icons/fa';

const services = [
  {
    icon: FaLightbulb,
    title: 'Cuadros de Neón',
    description: 'Creamos cuadros personalizados con luces neón que dan vida y color a cualquier espacio.',
  },
  {
    icon: FaTshirt,
    title: 'Estampado de Remeras',
    description: 'Impresión de alta calidad en remeras y prendas con diseños únicos y personalizados.',
  },
  {
    icon: FaPaintBrush,
    title: 'Diseño Gráfico',
    description: 'Diseños profesionales para tu marca, redes sociales, flyers y todo lo que necesites.',
  },
  {
    icon: FaStore,
    title: 'Cartelería Comercial',
    description: 'Carteles, lonas, gigantografías y todo tipo de señalética para tu negocio.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-primary">servicios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Ofrecemos una amplia gama de servicios para que tus ideas se conviertan en realidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-dark-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary text-2xl" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
