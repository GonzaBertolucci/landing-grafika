import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/images/Logo 1.png';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Trabajos', href: '/galeria' },
  { name: 'Preguntas Frecuentes', href: '#faq' },
  { name: 'Contacto', href: '/contacto' },
];

function smoothScrollTo(targetY, duration = 600) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + diff * ease);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          smoothScrollTo(y);
        }
      }, 150);
    } else {
      smoothScrollTo(0);
    }
  }, [location]);

  const handleNavClick = (href) => {
    setMobileOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          smoothScrollTo(y);
        }
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        window.history.replaceState(null, '', '/');
        smoothScrollTo(0);
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="BuhoGrafika" className="h-10 md:h-14" />
            <span className="text-lg md:text-xl font-bold text-white tracking-tight">
              BUHO<span className="text-primary">GRAFIKA</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-card border-t border-white/5"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block w-full text-left text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
