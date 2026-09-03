import { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import corporeo1 from '../assets/images/Corporeos/Corporeo 1.webp';
import corporeo2 from '../assets/images/Corporeos/Corporeo 2.webp';
import corporeo3 from '../assets/images/Corporeos/Corporeo 3.webp';
import corporeo4 from '../assets/images/Corporeos/Corporeo 4.webp';
import corporeo5 from '../assets/images/Corporeos/Corporeo 5.webp';
import corporeo6 from '../assets/images/Corporeos/Corporeo 6.webp';
import corporeo7 from '../assets/images/Corporeos/Corporeo 7.webp';
import corporeo8 from '../assets/images/Corporeos/Corporeo 8.webp';
import corporeo9 from '../assets/images/Corporeos/Corporeo 9.webp';
import corporeo10 from '../assets/images/Corporeos/Corporeo 10.webp';
import corporeo11 from '../assets/images/Corporeos/Corporeo 11.webp';
import corporeo12 from '../assets/images/Corporeos/Corporeo 12.webp';
import corporeo13 from '../assets/images/Corporeos/Corporeo 13.webp';
import corporeo14 from '../assets/images/Corporeos/Corporeo 14.webp';
import corporeo15 from '../assets/images/Corporeos/Corporeo 15.webp';
import corporeo16 from '../assets/images/Corporeos/Corporeo 16.webp';
import corporeo17 from '../assets/images/Corporeos/Corporeo 17.webp';
import corporeo18 from '../assets/images/Corporeos/Corporeo 18.webp';
import corporeo19 from '../assets/images/Corporeos/Corporeo 19.webp';
import corporeo20 from '../assets/images/Corporeos/Corporeos 20.webp';

import neon1 from '../assets/images/Neon Led/Neon Led 1.webp';
import neon2 from '../assets/images/Neon Led/Neon Led 2.webp';
import neon3 from '../assets/images/Neon Led/Neon Led 3.webp';
import neon4 from '../assets/images/Neon Led/Neon Led 4.webp';
import neon5 from '../assets/images/Neon Led/Neon Led 5.webp';
import neon6 from '../assets/images/Neon Led/Neon Led 6.webp';
import neon7 from '../assets/images/Neon Led/Neon Led 7.webp';
import neon8 from '../assets/images/Neon Led/Neon Led 8.webp';
import neon9 from '../assets/images/Neon Led/Neon Led 9.webp';
import neon10 from '../assets/images/Neon Led/Neon Led 10.webp';
import neon11 from '../assets/images/Neon Led/Neon Led 11.webp';

import pastilla1 from '../assets/images/Pastillas/Pastilla 1.webp';
import pastilla2 from '../assets/images/Pastillas/Pastilla 2.webp';
import pastilla3 from '../assets/images/Pastillas/Pastilla 3.webp';
import pastilla4 from '../assets/images/Pastillas/Pastilla 4.webp';
import pastilla5 from '../assets/images/Pastillas/Pastilla 5.webp';
import pastilla6 from '../assets/images/Pastillas/Pastilla 6.webp';
import pastilla7 from '../assets/images/Pastillas/Pastilla 7.webp';

import carteleria1 from '../assets/images/Carteleria/Carteleria 1.webp';
import carteleria2 from '../assets/images/Carteleria/Carteleria 2.webp';
import carteleria3 from '../assets/images/Carteleria/Carteleria 3.webp';
import carteleria4 from '../assets/images/Carteleria/Carteleria 4.webp';
import carteleria5 from '../assets/images/Carteleria/Carteleria 5.webp';
import carteleria6 from '../assets/images/Carteleria/Carteleria 6.webp';
import carteleria7 from '../assets/images/Carteleria/Carteleria 7.webp';
import carteleria8 from '../assets/images/Carteleria/Carteleria 8.webp';
import carteleria9 from '../assets/images/Carteleria/Carteleria 9.webp';
import carteleria10 from '../assets/images/Carteleria/Carteleria 10.webp';
import carteleria11 from '../assets/images/Carteleria/Carteleria 11.webp';
import carteleria12 from '../assets/images/Carteleria/Carteleria 12.webp';
import carteleria13 from '../assets/images/Carteleria/Carteleria 13.webp';
import carteleria14 from '../assets/images/Carteleria/Carteleria 14.webp';
import carteleria15 from '../assets/images/Carteleria/Carteleria 15.webp';

const photos = [
  { id: 1, src: corporeo1, category: 'Corpóreos' },
  { id: 2, src: corporeo2, category: 'Corpóreos' },
  { id: 3, src: corporeo3, category: 'Corpóreos' },
  { id: 4, src: corporeo4, category: 'Corpóreos' },
  { id: 5, src: corporeo5, category: 'Corpóreos' },
  { id: 6, src: corporeo6, category: 'Corpóreos' },
  { id: 7, src: corporeo7, category: 'Corpóreos' },
  { id: 8, src: corporeo8, category: 'Corpóreos' },
  { id: 9, src: corporeo9, category: 'Corpóreos' },
  { id: 10, src: corporeo10, category: 'Corpóreos' },
  { id: 11, src: corporeo11, category: 'Corpóreos' },
  { id: 12, src: corporeo12, category: 'Corpóreos' },
  { id: 13, src: corporeo13, category: 'Corpóreos' },
  { id: 14, src: corporeo14, category: 'Corpóreos' },
  { id: 15, src: corporeo15, category: 'Corpóreos' },
  { id: 16, src: corporeo16, category: 'Corpóreos' },
  { id: 17, src: corporeo17, category: 'Corpóreos' },
  { id: 18, src: corporeo18, category: 'Corpóreos' },
  { id: 19, src: corporeo19, category: 'Corpóreos' },
  { id: 20, src: corporeo20, category: 'Corpóreos' },

  { id: 21, src: neon1, category: 'Neón LED' },
  { id: 22, src: neon2, category: 'Neón LED' },
  { id: 23, src: neon3, category: 'Neón LED' },
  { id: 24, src: neon4, category: 'Neón LED' },
  { id: 25, src: neon5, category: 'Neón LED' },
  { id: 26, src: neon6, category: 'Neón LED' },
  { id: 27, src: neon7, category: 'Neón LED' },
  { id: 28, src: neon8, category: 'Neón LED' },
  { id: 29, src: neon9, category: 'Neón LED' },
  { id: 30, src: neon10, category: 'Neón LED' },
  { id: 31, src: neon11, category: 'Neón LED' },

  { id: 32, src: pastilla1, category: 'Pastillas' },
  { id: 33, src: pastilla2, category: 'Pastillas' },
  { id: 34, src: pastilla3, category: 'Pastillas' },
  { id: 35, src: pastilla4, category: 'Pastillas' },
  { id: 36, src: pastilla5, category: 'Pastillas' },
  { id: 37, src: pastilla6, category: 'Pastillas' },
  { id: 38, src: pastilla7, category: 'Pastillas' },

  { id: 39, src: carteleria1, category: 'Cartelería' },
  { id: 40, src: carteleria2, category: 'Cartelería' },
  { id: 41, src: carteleria3, category: 'Cartelería' },
  { id: 42, src: carteleria4, category: 'Cartelería' },
  { id: 43, src: carteleria5, category: 'Cartelería' },
  { id: 44, src: carteleria6, category: 'Cartelería' },
  { id: 45, src: carteleria7, category: 'Cartelería' },
  { id: 46, src: carteleria8, category: 'Cartelería' },
  { id: 47, src: carteleria9, category: 'Cartelería' },
  { id: 48, src: carteleria10, category: 'Cartelería' },
  { id: 49, src: carteleria11, category: 'Cartelería' },
  { id: 50, src: carteleria12, category: 'Cartelería' },
  { id: 51, src: carteleria13, category: 'Cartelería' },
  { id: 52, src: carteleria14, category: 'Cartelería' },
  { id: 53, src: carteleria15, category: 'Cartelería' },
];

const categories = ['Todos', 'Corpóreos', 'Neón LED', 'Pastillas', 'Cartelería'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Nuestros <span className="text-primary neon-text">Trabajos</span>
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
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  onClick={() => openLightbox(photo)}
                  className="group relative aspect-square bg-dark-card border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300"
                >
                  <img
                    src={photo.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
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
              className="flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt=""
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
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
