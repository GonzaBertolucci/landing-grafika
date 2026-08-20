import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import neon1 from '../assets/images/Neon 1.jpg';
import neon2 from '../assets/images/Neon 2.jpg';
import neon3 from '../assets/images/Neon 3.jpg';
import estampado1 from '../assets/images/Estampado 1.jpg';
import estampado2 from '../assets/images/Estampado 2.jpg';
import estampado3 from '../assets/images/Estampado 3.jpg';
import carteleria1 from '../assets/images/Carteleria 1.jpg';
import carteleria2 from '../assets/images/Carteleria 2.jpg';
import carteleria3 from '../assets/images/Carteleria 3.jpg';

const photos = [
  { id: 1, title: 'Cuadro de Neón 1', category: 'Neón', description: 'Cartel Personalizado con luces de Neón', src: neon1 },
  { id: 2, title: 'Cuadro de Neón 2', category: 'Neón', description: 'Figuras personalizadas de Neón', src: neon2 },
  { id: 3, title: 'Cuadro de Neón 3', category: 'Neón', description: 'Carteles comerciales de Neón para locales', src: neon3 },
  { id: 4, title: 'Estampado 1', category: 'Estampado', description: 'Impresión directa en prendas', src: estampado1 },
  { id: 5, title: 'Estampado 2', category: 'Estampado', description: 'Remeras premium ideales para destacar tu marca', src: estampado2 },
  { id: 6, title: 'Estampado 3', category: 'Estampado', description: 'Sublimación', src: estampado3 },
  { id: 7, title: 'Cartelería 1', category: 'Cartelería', description: 'Carteles para comercios', src: carteleria1 },
  { id: 8, title: 'Cartelería 2', category: 'Cartelería', description: 'Letras corporeas', src: carteleria2 },
  { id: 9, title: 'Cartelería 3', category: 'Cartelería', description: 'Gran formato para evento', src: carteleria3 },
];

const categories = ['Todos', 'Neón', 'Estampado', 'Cartelería'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [lightbox, setLightbox] = useState(null);

  const filtered = selectedCategory === 'Todos'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  const openLightbox = (photo) => setLightbox(photo);
  const closeLightbox = () => setLightbox(null);

  const nextPhoto = () => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    setLightbox(filtered[(idx + 1) % filtered.length]);
  };

  const prevPhoto = () => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Nuestra <span className="text-primary">Galería</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mirá algunos de los trabajos que realizamos en BuhoGrafika.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white neon-glow-subtle'
                    : 'bg-dark-card border border-white/10 text-gray-400 hover:text-white hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => openLightbox(photo)}
                  className="group relative aspect-square bg-dark-card border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-sm mb-1">{photo.title}</h3>
                    <p className="text-gray-400 text-xs">{photo.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-card border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <FaChevronLeft size={18} />
            </button>

            <motion.div
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full aspect-video bg-dark-card border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-card border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <FaChevronRight size={18} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {filtered.map((photo) => (
                <button
                  key={photo.id}
                  onClick={(e) => { e.stopPropagation(); setLightbox(photo); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    photo.id === lightbox.id ? 'bg-primary w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
