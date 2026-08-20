import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-bold text-white">
                BUHO<span className="text-primary">GRAFIKA</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              BuhoGrafika es tu gráfica de confianza, con más de 100 clientes satisfechos.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaWhatsapp className="text-[#25D366]" />
                <span>11-6740-1899</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-primary" />
                <span>buhografika@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociales</h3>
            <a
              href="https://instagram.com/buhografika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors duration-300"
            >
              <FaInstagram size={20} />
              <span>@buhografika</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} BuhoGrafika. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desarrollado por <span className="text-primary">GTB Code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
