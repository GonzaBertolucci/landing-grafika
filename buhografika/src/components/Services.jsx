import { motion } from 'framer-motion';
import { FaImage, FaCircle, FaBuilding, FaLightbulb, FaPrint } from 'react-icons/fa';

const services = [
  {
    icon: FaBuilding,
    title: 'Corpóreos',
    description: 'Letras corpóreas y señalética tridimensional para fachadas y interiores.',
    gradient: 'from-red-600/20 to-purple-600/20',
    number: '01',
  },
  {
    icon: FaLightbulb,
    title: 'Neón LED',
    description: 'Letras y diseños en neón LED personalizados para decorar cualquier espacio.',
    gradient: 'from-red-600/20 to-rose-600/20',
    number: '02',
  },
  {
    icon: FaImage,
    title: 'Carteles',
    description: 'Carteles personalizados para locales, eventos y todo tipo de espacios.',
    gradient: 'from-red-600/20 to-orange-600/20',
    number: '03',
  },
  {
    icon: FaCircle,
    title: 'Pastillas',
    description: 'Pastillas iluminadas con diseños únicos, ideales para bares y negocios.',
    gradient: 'from-red-600/20 to-pink-600/20',
    number: '04',
  },
  {
    icon: FaPrint,
    title: 'Impresiones',
    description: 'Impresiones en gran formato: lonas, vinilos, banners y más.',
    gradient: 'from-red-600/20 to-red-800/20',
    number: '05',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
            ¿Qué hacemos?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-primary neon-text">servicios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Ofrecemos una amplia gama de servicios para que tus ideas se conviertan en realidad.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-primary/40">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="absolute -top-8 -right-8 text-[100px] font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 leading-none">
                  {service.number}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500">
                    <service.icon className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
