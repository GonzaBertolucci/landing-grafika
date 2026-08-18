import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const photos = [
  { id: 1, title: 'Cartelería Comercial', category: 'Cartelería', description: 'Señalética para local comercial' },
  { id: 2, title: 'Cuadro de Neón', category: 'Neón', description: 'Decoración con luces neón personalizadas' },
  { id: 3, title: 'Estampado de Remeras', category: 'Estampado', description: 'Impresión directa en prendas' },
  { id: 4, title: 'Diseño de Marca', category: 'Diseño', description: 'Identidad visual y branding' },
  { id: 5, title: 'Lona Exterior', category: 'Cartelería', description: 'Impresión en gran formato para fachada' },
  { id: 6, title: 'Neón LED', category: 'Neón', description: 'Letras en neón para evento' },
  { id: 7, title: 'Remera Personalizada', category: 'Estampado', description: 'Estampado DTG en algodón' },
  { id: 8, title: 'Flyer Publicitario', category: 'Diseño', description: 'Diseño gráfico para campaña' },
  { id: 9, title: 'Acrílico con Luz', category: 'Neón', description: 'Señalización iluminada' },
  { id: 10, title: 'Gigantografía', category: 'Cartelería', description: 'Gran formato para evento' },
  { id: 11, title: 'Packaging', category: 'Diseño', description: 'Diseño de etiquetas y envases' },
  { id: 12, title: 'Camiseta Deportiva', category: 'Estampado', description: 'Sublimación en poliéster' },
];

const categories = ['Todos', 'Neón', 'Estampado', 'Diseño', 'Cartelería'];

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-dark-lighter flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <svg className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500">{photo.category}</p>
                    </div>
                  </div>

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
              className="max-w-3xl w-full aspect-video bg-dark-card border border-white/10 rounded-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-dark-lighter flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{lightbox.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{lightbox.description}</p>
                <span className="inline-block bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">{lightbox.category}</span>
              </div>
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
